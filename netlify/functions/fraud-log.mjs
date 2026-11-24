import { getStore } from '@netlify/blobs';

const ADMIN_TOKEN = process.env.FRAUD_LOG_TOKEN || 'gck_9f8e7d6c5b4a3210_gebze2026';
const STORE_NAME = 'ads-fraud-guard';
const BLOB_KEY = 'ip-records-v1';
const RETENTION_MS = 30 * 24 * 60 * 60 * 1000;

function getClientIp(req) {
  const nfIp = req.headers.get('x-nf-client-connection-ip');
  if (nfIp) return nfIp.trim();
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return 'unknown';
}

function isValidPublicIp(ip) {
  if (!ip || ip === 'unknown' || ip === '127.0.0.1' || ip === '::1') return false;
  return /^[0-9a-fA-F:.]+$/.test(ip);
}

function isSuspicious(rec) {
  if (!rec) return false;
  if (rec.honeypot) return true;
  if (rec.clicks >= 2 && !rec.converted) return true;
  return false;
}

export default async (req) => {
  const store = getStore(STORE_NAME);
  const url = new URL(req.url);

  if (req.method === 'GET') {
    const token = url.searchParams.get('token') || req.headers.get('x-fraud-token');
    if (token !== ADMIN_TOKEN) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'content-type': 'application/json; charset=utf-8' }
      });
    }

    const data = (await store.get(BLOB_KEY, { type: 'json' })) || {};
    const now = Date.now();
    const flagged = [];
    const all = [];

    for (const [ip, rec] of Object.entries(data)) {
      if (!rec || now - rec.lastSeen > RETENTION_MS) continue;
      const entry = { ip, ...rec, suspicious: isSuspicious(rec) };
      all.push(entry);
      if (entry.suspicious) flagged.push(entry);
    }

    flagged.sort((a, b) => b.clicks - a.clicks || b.lastSeen - a.lastSeen);
    return new Response(JSON.stringify({
      totalTracked: all.length,
      flaggedCount: flagged.length,
      flaggedIps: flagged.map((x) => x.ip),
      flagged,
      recent: all.sort((a, b) => b.lastSeen - a.lastSeen).slice(0, 50)
    }, null, 2), {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store'
      }
    });
  }

  if (req.method === 'POST') {
    const ip = getClientIp(req);
    if (!isValidPublicIp(ip)) {
      return new Response(JSON.stringify({ ok: true, skipped: true }), {
        status: 200,
        headers: { 'content-type': 'application/json' }
      });
    }

    let body = {};
    try {
      const text = await req.text();
      if (text) body = JSON.parse(text);
    } catch {
      body = {};
    }

    const eventType = String(body.type || 'visit');
    const now = Date.now();
    const data = (await store.get(BLOB_KEY, { type: 'json' })) || {};

    // Prune entries older than 30 days to keep blob compact
    for (const key of Object.keys(data)) {
      if (!data[key] || now - data[key].lastSeen > RETENTION_MS) {
        delete data[key];
      }
    }

    const rec = data[ip] || {
      clicks: 0,
      converted: false,
      honeypot: false,
      firstSeen: now,
      lastSeen: now,
      paths: []
    };

    rec.lastSeen = now;
    if (eventType === 'visit') {
      // Count new paid visit if > 10s since last visit beacon from same IP
      if (rec.clicks === 0 || now - (rec.lastVisitAt || 0) > 10000) {
        rec.clicks += 1;
        rec.lastVisitAt = now;
      }
    } else if (eventType === 'convert') {
      rec.converted = true;
    } else if (eventType === 'honeypot') {
      rec.honeypot = true;
    }

    const p = String(body.path || '/').slice(0, 80);
    if (p && !rec.paths.includes(p)) {
      rec.paths = rec.paths.slice(-4).concat(p);
    }

    data[ip] = rec;
    await store.setJSON(BLOB_KEY, data);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    });
  }

  return new Response('Method Not Allowed', { status: 405 });
};
