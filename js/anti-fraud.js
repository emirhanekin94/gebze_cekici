/**
 * ============================================================================
 * GOOGLE ADS CLICK FRAUD & BOT KORUMA KALKANI (js/anti-fraud.js)
 * Tüm sayfalarda defer ile yüklüdür.
 * 1) gclid / wbraid / gbraid / gad_source / utm_medium=cpc mükerrer tıklama takibi
 * 2) Netlify Function (fraud-log) ile ücretsiz otomatik IP tespit kaydı
 * 3) Görünmez Honeypot bot tuzağı
 * 4) tel: ve WhatsApp butonlarında 800ms altı flood/spam tıklama debounce koruması
 * ============================================================================
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'gyy_ad_clicks_v1';
  var PAID_SESSION_KEY = 'gyy_paid_session_v1';
  var WINDOW_MS = 2 * 60 * 60 * 1000; // 2 saat
  var DEBOUNCE_MS = 800;
  var LOG_ENDPOINT = '/.netlify/functions/fraud-log';

  function fireFraudEvent(name, details) {
    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', name, Object.assign({ transport_type: 'beacon' }, details || {}));
      } catch (e) {}
    }
  }

  function sendFraudBeacon(type) {
    try {
      var payload = JSON.stringify({
        type: type,
        path: window.location.pathname
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(LOG_ENDPOINT, new Blob([payload], { type: 'application/json' }));
      } else {
        fetch(LOG_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true
        }).catch(function () {});
      }
    } catch (e) {}
  }

  // 1. Reklam Tıklama Parametresi & Mükerrer Giriş Tespiti
  var isPaidClick = false;
  try {
    var params = new URLSearchParams(window.location.search);
    isPaidClick =
      params.has('gclid') ||
      params.has('wbraid') ||
      params.has('gbraid') ||
      params.has('gad_source') ||
      (params.get('utm_medium') || '').toLowerCase() === 'cpc';

    if (isPaidClick) {
      sessionStorage.setItem(PAID_SESSION_KEY, '1');
      sendFraudBeacon('visit');

      var now = Date.now();
      var raw = localStorage.getItem(STORAGE_KEY);
      var stamps = raw ? JSON.parse(raw) : [];
      stamps = stamps.filter(function (t) { return now - t < WINDOW_MS; });
      stamps.push(now);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stamps));

      if (stamps.length > 2) {
        fireFraudEvent('suspected_click_fraud', {
          click_count_2h: stamps.length,
          landing_path: window.location.pathname
        });
      }
    }
  } catch (e) {}

  // 2. Görünmez Honeypot Bot Tuzağı
  try {
    var trap = document.createElement('a');
    trap.href = '#dispatch-verify-bot';
    trap.setAttribute('aria-hidden', 'true');
    trap.setAttribute('tabindex', '-1');
    trap.rel = 'nofollow';
    trap.textContent = 'verify';
    trap.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:auto;';
    trap.addEventListener('click', function (ev) {
      ev.preventDefault();
      sendFraudBeacon('honeypot');
      fireFraudEvent('bot_trap_triggered', { path: window.location.pathname });
    });
    if (document.body) document.body.appendChild(trap);
  } catch (e) {}

  // 3. tel: ve WhatsApp Butonları 800ms Flood/Spam Debounce + Gerçek Müşteri İşaretleme
  var lastActionAt = 0;
  document.addEventListener('click', function (ev) {
    var target = ev.target.closest('a[href^="tel:"], .btn-send-location, a[href*="whatsapp.com"], form[data-quote-form] button[type="submit"]');
    if (!target) return;
    var now = Date.now();
    if (now - lastActionAt < DEBOUNCE_MS) {
      ev.preventDefault();
      ev.stopImmediatePropagation();
      return;
    }
    lastActionAt = now;

    try {
      if (isPaidClick || sessionStorage.getItem(PAID_SESSION_KEY) === '1') {
        sendFraudBeacon('convert');
      }
    } catch (e) {}
  }, true);
})();
