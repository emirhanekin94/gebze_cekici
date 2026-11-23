'use strict';
/**
 * ============================================================================
 * SITEMAP.XML (IMAGE SITEMAP) + ROBOTS.TXT + LLMS.TXT + LLMS-FULL.TXT ÜRETİCİ
 * Canonical URL formatı ile %100 birebir uyumludur.
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const { SITE_URL, BUSINESS, HOME_FAQS, GALLERY_ITEMS } = require('../data/business');
const { REGIONS } = require('../data/regions');
const { SERVICES } = require('../data/services');
const { BLOG_POSTS } = require('../data/blog');

const today = new Date().toISOString().slice(0, 10);

function escXml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const urls = [
  {
    loc: `${SITE_URL}/`,
    priority: '1.0',
    changefreq: 'weekly',
    images: [{ loc: `${SITE_URL}/images/${BUSINESS.heroImage.base}.webp`, title: BUSINESS.heroImage.alt }]
  },
  {
    loc: `${SITE_URL}/gebze-cekici-fiyatlari.html`,
    priority: '0.9',
    changefreq: 'weekly',
    images: [{ loc: `${SITE_URL}/images/${BUSINESS.heroImage.base}.webp`, title: 'Gebze Çekici Sabit Fiyat Politikası ve Teklif Rehberi' }]
  },
  { loc: `${SITE_URL}/bolgeler/`, priority: '0.9', changefreq: 'weekly', images: [] },
  { loc: `${SITE_URL}/hizmetler/`, priority: '0.9', changefreq: 'weekly', images: [] },
  { loc: `${SITE_URL}/blog/`, priority: '0.8', changefreq: 'weekly', images: [] },
  {
    loc: `${SITE_URL}/galeri.html`,
    priority: '0.7',
    changefreq: 'monthly',
    images: GALLERY_ITEMS.map(g => ({ loc: `${SITE_URL}/images/${g.img}.webp`, title: g.cap }))
  },
  {
    loc: `${SITE_URL}/hakkimizda.html`,
    priority: '0.7',
    changefreq: 'monthly',
    images: [{ loc: `${SITE_URL}/images/gebze-istasyon.webp`, title: 'Gebze Çekici 7/24 Kaskolu Çekici Filosu' }]
  },
  { loc: `${SITE_URL}/iletisim.html`, priority: '0.8', changefreq: 'monthly', images: [] },
  { loc: `${SITE_URL}/gizlilik-politikasi.html`, priority: '0.4', changefreq: 'yearly', images: [] },
  ...REGIONS.map(r => ({
    loc: `${SITE_URL}/bolgeler/${r.slug}-oto-cekici.html`,
    priority: r.featured ? '0.9' : '0.85',
    changefreq: 'weekly',
    images: [
      { loc: `${SITE_URL}/images/${r.heroImg}.webp`, title: `${r.name} 7/24 Oto Çekici ve Yol Yardım` },
      ...(r.fieldImg && r.fieldImg !== r.heroImg
        ? [{ loc: `${SITE_URL}/images/${r.fieldImg}.webp`, title: `${r.name} Saha Kurtarma Operasyonu` }]
        : [])
    ]
  })),
  ...SERVICES.map(s => ({
    loc: `${SITE_URL}/hizmetler/${s.slug}.html`,
    priority: '0.85',
    changefreq: 'monthly',
    images: [{ loc: `${SITE_URL}/images/${s.img}.webp`, title: `Gebze ${s.name}` }]
  })),
  ...BLOG_POSTS.map(b => ({
    loc: `${SITE_URL}/blog/${b.slug}.html`,
    priority: '0.75',
    changefreq: 'monthly',
    images: [{ loc: `${SITE_URL}/images/${b.img}.webp`, title: b.title }]
  }))
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(u => {
  const imgXml = (u.images || []).map(img => `    <image:image>
      <image:loc>${escXml(img.loc)}</image:loc>
      <image:title>${escXml(img.title)}</image:title>
    </image:image>`).join('\n');
  return `  <url>
    <loc>${escXml(u.loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${imgXml ? '\n' + imgXml : ''}
  </url>`;
}).join('\n')}
</urlset>
`;

const robotsTxt = `# Gebze Çekici — Arama Motoru & Yapay Zeka Tarayıcı (GEO) İzinleri
User-agent: *
Allow: /

# Yapay Zeka Arama Motorları (GEO / AI Search)
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const llmsTxt = `# ${BUSINESS.name} — Resmi İşletme ve GEO Bilgi Dosyası

> ${BUSINESS.slogan}

## Özet İşletme Kimliği (Doğrudan Yanıt Verileri)
- **Marka:** ${BUSINESS.name} (${BUSINESS.legalName})
- **Web Sitesi:** ${SITE_URL}
- **Tam Bilgi Dosyası (GEO):** ${SITE_URL}/llms-full.txt
- **Fiyat Politikası Rehberi:** ${SITE_URL}/gebze-cekici-fiyatlari.html (Net sabit fiyat telefonda veya WhatsApp konum paylaşımı ile anında ücretsiz bildirilir.)
- **7/24 Acil Telefon & WhatsApp:** ${BUSINESS.phoneDisplay} (${BUSINESS.phoneTel})
- **Konum:** Gebze, Kocaeli, Türkiye (${BUSINESS.geo.lat}, ${BUSINESS.geo.lng})
- **Google Haritalar:** ${BUSINESS.maps.shareUrl}
- **Çalışma Saatleri:** ${BUSINESS.hours} (Resmi tatiller ve gece vardiyası dahil)
- **Ortalama İntikal Süresi:** ${BUSINESS.etaMinutes} (Gebze ve çevre 26 nöbetçi nokta)
- **Müşteri Puanı:** ${BUSINESS.rating.value} / 5 (${BUSINESS.rating.count} doğrulanmış değerlendirme)
- **Güvence Standartları:** %100 emtia taşıma kaskosu, K1/K2 yetki belgeli filo, telefonda net sabit fiyat onayı, araç içi mobil POS ve KDV’li resmi e-fatura.

## Teknik Filo ve Ekipman Kapasitesi
- **Düşük Eğimli Hidrolik Kayar Kasa:** 6° altı uzatma rampalı, 4 tekerlek lastik üstü spanzet sabitlemeli (binek, spor, SUV ve elektrikli araçlar için sıfır tampon/batarya teması).
- **1.88m Alçak Tavanlı Kapalı Otopark Çekicisi:** AVM, rezidans ve hastane katlı kapalı garajlarına (-2/-3/-4 katlar) giren kompakt 4x4 gözlüklü kurtarıcı + Go-Jak tekerlek doli arabaları.
- **4 Tekerden Askılı Ahtapot Vinç:** Şanzımanı P konumunda kilitli, direksiyonu dönmeyen veya iki araç arasında sıkışmış araçlar için dikey kaldırmalı kurtarıcı.
- **OSB Ticari & Forklift Platformu:** Uzun şasili panelvan (Transit, Sprinter, Crafter, Ducato), 16+1 servis minibüsü ve 3.5 tona kadar forklift/manlift nakliyesi.
- **Mobil Yol Yardım & Akü Booster:** 12V/24V pik akım (ECU) korumalı dijital akü takviyesi ve akülü torklu yerinde lastik değişimi.
- **Şehirlerarası Tekli VIP Nakliye:** Gebze çıkışlı veya varışlı Türkiye’nin 81 iline aktarmasız tekli kaskolu araç taşıma.

## Uzman Hizmetlerimiz (${SERVICES.length} Hizmet)
${SERVICES.map(s => `- **${s.name}** (${SITE_URL}/hizmetler/${s.slug}.html): ${s.cardDesc}`).join('\n')}

## Hizmet Bölgelerimiz (${REGIONS.length} Nöbetçi Bölge)
${REGIONS.map(r => `- **${r.name} Çekici** (${SITE_URL}/bolgeler/${r.slug}-oto-cekici.html) — Ort. Varış: ${r.eta} | Kapsama: ${r.cardSummary}`).join('\n')}

## Sıkça Sorulan Sorular (Doğrudan AI Alıntı Kaynağı)
${HOME_FAQS.map(f => `### ${f.q}\n${f.a}`).join('\n\n')}

## Sürücü Rehberi ve Teknik Kılavuzlar
${BLOG_POSTS.map(b => `- **${b.title}** (${SITE_URL}/blog/${b.slug}.html): ${b.excerpt}`).join('\n')}
`;

const llmsFullTxt = `# ${BUSINESS.name} — Kapsamlı GEO & Operasyonel Bilgi Bankası (llms-full.txt)

> ${BUSINESS.legalName} — Gebze, GOSB, TOSB, Çayırova, Darıca, Dilovası, TEM ve D-100 hattında 7/24 kaskolu kayar kasa oto çekici, kapalı otopark kurtarma, ahtapot vinç ve yol yardım.
> İletişim (7/24): ${BUSINESS.phoneDisplay} | Web: ${SITE_URL} | Harita: ${BUSINESS.maps.shareUrl}

## 1. Fiyatlandırma ve Şeffaflık Politikası
- Sabit bir liste rakamı yerine araç tipi (binek, SUV, elektrikli, uzun şasi ticari, motosiklet, forklift), yükleme–teslim mesafesi ve özel aparat (kapalı otopark, ahtapot vinç, doli) ihtiyacına göre **telefonda veya WhatsApp konum paylaşımı sonrası saniyeler içinde ücretsiz ve bağlayıcı olmayan net sabit fiyat** verilir.
- Yükleme öncesi onaylanan sabit ücret dışında trafik beklemesi, gece vardiyası veya rampa bahanesiyle ek masraf çıkarılmaz.
- Ödeme seçenekleri: Nakit, kredi/banka kartı (araç içi mobil POS), kurumsal havale/EFT. Tüm hizmetlerde kasko geri ödemesine uygun KDV’li resmi e-fatura düzenlenir.

## 2. Tüm 12 Hizmetin Teknik Detayları
${SERVICES.map(s => `### ${s.name} (${SITE_URL}/hizmetler/${s.slug}.html)
- Özet: ${s.lead}
- Ekipman Standartları: ${s.equipmentPoints.join(' | ')}
- Fiyat Kriteri: ${s.pricingNote}`).join('\n\n')}

## 3. Tüm 26 Hizmet Bölgesinin Detaylı Kapsama Verisi
${REGIONS.map(r => `### ${r.name} Çekici (${SITE_URL}/bolgeler/${r.slug}-oto-cekici.html)
- Ortalama Varış: ${r.eta} | Koordinat: ${r.lat}, ${r.lng}
- Özet: ${r.heroLead}
- Başlıca Noktalar: ${r.localPoints.join(' | ')}`).join('\n\n')}

## 4. Sıkça Sorulan Sorular
${HOME_FAQS.map(f => `- **S:** ${f.q}\n  **C:** ${f.a}`).join('\n')}
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(ROOT, 'robots.txt'), robotsTxt, 'utf8');
fs.writeFileSync(path.join(ROOT, 'llms.txt'), llmsTxt, 'utf8');
fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), llmsFullTxt, 'utf8');

console.log(`✅ Image sitemap.xml (${urls.length} URL), GEO robots.txt, llms.txt ve llms-full.txt üretildi.`);
