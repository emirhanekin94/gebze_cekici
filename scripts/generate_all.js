'use strict';
/**
 * ============================================================================
 * GEBZE YOL YARDIM — TÜM SİTEYİ ÜRETEN MERKEZİ GENERATOR (scripts/generate_all.js)
 * Çalıştırma: node scripts/generate_all.js && node scripts/generate_sitemap.js
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const { SITE_URL, BUSINESS, GALLERY_ITEMS, REVIEWS, HOME_FAQS } = require('../data/business');
const { REGIONS } = require('../data/regions');
const { SERVICES } = require('../data/services');
const { BLOG_POSTS } = require('../data/blog');
const P = require('./partials');

function writeHtml(relPath, html) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html, 'utf8');
}

function faqSplitSection(eyebrow, title, desc, faqs, isWhite = false) {
  const bgCls = isWhite ? ' section-white' : '';
  return `<section class="section${bgCls} cv-auto" style="border-top:1px solid var(--line);">
  <div class="container">
    <div class="faq-split">
      <div class="faq-aside">
        <div class="section-head" style="margin-bottom:0;">
          <span class="section-eyebrow">${P.esc(eyebrow)}</span>
          <h2 class="section-title">${P.esc(title)}</h2>
          ${desc ? `<p class="section-desc">${P.esc(desc)}</p>` : ''}
        </div>
        <div class="faq-support-card">
          <strong>Farklı bir sorunuz mu var?</strong>
          <p>Çağrı merkezi beklemeden doğrudan Gebze saha operatörümüzle görüşüp anında bilgi ve sabit fiyat alabilirsiniz.</p>
          <a href="tel:${BUSINESS.phoneTel}" class="btn btn-call" style="width:100%;">${P.ICONS.phone} <span>${BUSINESS.phoneDisplay}</span></a>
        </div>
      </div>
      ${P.faqHtml(faqs)}
    </div>
  </div>
</section>`;
}

// ── Ortak Zengin Blok Yardımcıları ───────────────────────────────────────────
function stepsSection(eyebrow, title, desc, customSteps = null) {
  const steps = customSteps || [
    { num: '01', icon: P.ICONS.phone, title: 'İhbar & Konum Paylaşımı', desc: '0533 945 45 14 numaramızdan arayın veya WhatsApp üzerinden tek dokunuşla konumunuzu iletin; net sabit fiyatı anında onaylayın.' },
    { num: '02', icon: P.ICONS.clock, title: '10–15 Dk Hızlı İntikal', desc: 'Gebze Merkez, GOSB, TEM, D-100, Çayırova ve Darıca’daki nöbetçi ekibimiz ışıklı emniyetle konumunuza ulaşır.' },
    { num: '03', icon: P.ICONS.truck, title: 'Hasarsız & Özenli Yükleme', desc: 'Düşük eğimli hidrolik kayar kasa veya aparatlı kurtarıcımızla aracınız 4 tekerlekten jant koruyucu kemerlerle sabitlenir.' },
    { num: '04', icon: P.ICONS.shield, title: 'Servise Güvenli Teslim', desc: 'Gebze Sanayi, yetkili servis veya belirttiğiniz adrese hasarsız indirme, fotoğraflı teslim tutanağı ile süreç tamamlanır.' }
  ];

  return `<section class="section cv-auto">
  <div class="container">
    <div class="section-head">
      <span class="section-eyebrow">${P.esc(eyebrow)}</span>
      <h2 class="section-title">${P.esc(title)}</h2>
      <p class="section-desc">${P.esc(desc)}</p>
    </div>
    <div class="steps-grid">
      ${steps.map((s, idx) => `<div class="step-card">
        <div class="step-top">
          <span class="step-num-pill">0${idx + 1}</span>
          <span class="step-icon">${s.icon || P.ICONS.check}</span>
        </div>
        <h3>${P.esc(s.title)}</h3>
        <p>${P.esc(s.desc)}</p>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

function whyUsBentoSection(eyebrow = 'Neden Biz?', title = 'Sadece çekici değil, sıfır hasar mühendisliği.', desc = 'Şeffaf sabit fiyat, fotoğraflı teslim tutanağı ve Gebze arterlerine hâkim nöbetçi filo disiplini.') {
  return `<section class="section cv-auto">
  <div class="container">
    <div class="why-editorial-grid">
      <div class="why-sticky-col reveal">
        <div class="section-head" style="margin-bottom:0;">
          <span class="section-eyebrow">${P.esc(eyebrow)}</span>
          <h2 class="section-title">${P.esc(title)}</h2>
          <p class="section-desc">${P.esc(desc)}</p>
        </div>
        <div class="why-media-card">
          ${P.pictureTag('client-kamyonet', 'Gebze Çekici modern kayar kasa çekici filosu', false)}
          <div class="why-media-stats">
            <div class="why-media-stat"><strong>10–15 Dk</strong><span>Ort. Varış</span></div>
            <div class="why-media-stat"><strong>7/24</strong><span>Sabit Fiyat</span></div>
            <div class="why-media-stat"><strong>14+ Yıl</strong><span>Saha Deneyimi</span></div>
          </div>
        </div>
      </div>

      <div class="why-deck">
        <div class="why-deck-item reveal">
          <div class="why-deck-head">
            <span class="why-deck-code">01 / Hızlı İntikal</span>
            <span class="why-icon-wrap">${P.ICONS.clock}</span>
          </div>
          <h3>26 Noktada Nöbetçi Konuşlanma</h3>
          <p>Gebze Merkez, GOSB, TOSB, Çayırova, Darıca, Dilovası, TEM ve D-100 bağlantı noktalarında bekleyen kendi araçlarımızla dış ilçeden saatlerce çekici beklemenize son veriyoruz.</p>
        </div>
        <div class="why-deck-item reveal">
          <div class="why-deck-head">
            <span class="why-deck-code">02 / Sıfır Hasar Protokolü</span>
            <span class="why-icon-wrap">${P.ICONS.shield}</span>
          </div>
          <h3>6° Altı Kayar Kasa &amp; Fotoğraflı Tutanak</h3>
          <p>Düşük eğimli hidrolik platformlar ve 4 noktadan lastik üstü tekstil spanzet sabitlemesiyle binek, alçak spor, SUV ve elektrikli araçları tampona temas etmeden taşıyoruz.</p>
        </div>
        <div class="why-deck-item reveal">
          <div class="why-deck-head">
            <span class="why-deck-code">03 / Şeffaf Fiyatlandırma</span>
            <span class="why-icon-wrap">${P.ICONS.check}</span>
          </div>
          <h3>Telefonda Net Sabit Fiyat &amp; nakit ve havale</h3>
          <p>Yükleme öncesinde net rakam onaylanır; trafik, gece vardiyası veya aparat bahanesiyle ek masraf çıkarılmaz. Araç içi kasko uyumlu fotoğraflı teslim tutanağı standarttır.</p>
        </div>
        <div class="why-deck-item reveal">
          <div class="why-deck-head">
            <span class="why-deck-code">04 / Özel Donanım</span>
            <span class="why-icon-wrap">${P.ICONS.wrench}</span>
          </div>
          <h3>Her Senaryoya Özel Kurtarıcı Filosu</h3>
          <p>Hidrolik kayar kasa, tekerlek aparatlı çekici, çoklu çekici, 3.5 ton tenteli nakliye ve uzun şasi OSB ticari platformu ve 12V/24V profesyonel 12V/24V dijital akü booster tek çatı altında 7/24 hazır bekler.</p>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function galleryPreviewSection(limit = 6, title = 'Gerçek Saha Operasyonlarımız') {
  const items = GALLERY_ITEMS.slice(0, limit);
  return `<section class="section section-white cv-auto">
  <div class="container">
    <div class="section-head-row">
      <div class="section-head" style="margin-bottom:0;">
        <span class="section-eyebrow">Canlı Saha Arşivi</span>
        <h2 class="section-title">${P.esc(title)}</h2>
        <p class="section-desc">Stok fotoğraf değil; Gebze, TEM, D-100 ve OSB hatlarındaki gerçek kurtarma ve taşıma operasyonlarımızdan kareler.</p>
      </div>
      <a href="/galeri.html" class="btn btn-outline">Tüm Galeriye Git ${P.ICONS.arrowRight}</a>
    </div>
    <div class="gallery-grid">
      ${items.map(g => `<button type="button" class="gallery-item" data-lightbox-src="/images/${g.img}.webp" data-lightbox-cap="${P.esc(g.cap)}" aria-label="${P.esc(g.cap)}">
        ${P.pictureTag(g.img, g.cap, false)}
        <span class="gallery-caption">${P.esc(g.cap)}</span>
      </button>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

function regionCardHtml(r, isExtraHidden = false) {
  const hiddenCls = isExtraHidden ? ' is-hidden' : '';
  const extraAttr = isExtraHidden ? ' data-extra-region="true"' : '';
  return `<a href="/bolgeler/${r.slug}-cekici.html" class="region-card${hiddenCls}"${extraAttr}>
  <div class="region-card-top">
    <h3>${P.esc(r.name)} Çekici</h3>
    <span class="region-status-pill"><span class="status-dot"></span> 7/24</span>
  </div>
  <p>${P.esc(r.cardSummary)}</p>
  <div class="region-card-foot">
    <span>Bölgeyi İncele</span>
    ${P.ICONS.arrowRight}
  </div>
</a>`;
}

function serviceCardHtml(s, idx = 0) {
  const coverImg = s.cardImg || s.img;
  const pCls = P.isPortrait(coverImg) ? ' is-portrait' : '';
  const numStr = String(idx + 1).padStart(2, '0');
  return `<a href="/hizmetler/${s.slug}.html" class="service-card reveal${pCls}">
  <div class="service-media">
    ${P.pictureTag(coverImg, `Gebze ${s.name}`, false)}
  </div>
  <div class="service-scrim" aria-hidden="true"></div>
  <div class="service-top-bar">
    <span class="service-kicker">[${numStr}] &middot; ${P.esc(s.tag)}</span>
    <span class="service-arrow-btn" aria-hidden="true">${P.ICONS.arrowRight}</span>
  </div>
  <div class="service-body">
    <h3>${P.esc(s.name)}</h3>
    <p>${P.esc(s.cardDesc)}</p>
  </div>
</a>`;
}

// ============================================================================
// 1. ANA SAYFA (index.html)
// ============================================================================
function buildHomePage() {
  const canonical = `${SITE_URL}/`;
  const schemas = [
    P.localBusinessSchema({ canonical, includeCatalog: true }),
    P.websiteSchema(),
    P.breadcrumbSchema([{ label: 'Ana Sayfa', href: '/' }]),
    P.faqSchema(HOME_FAQS)
  ];

  const html = `${P.head({
    title: 'Gebze Oto Çekici & 7/24 Acil Yol Yardım | Gebze Çekici',
    description: 'Gebze, GOSB, Çayırova, Darıca, Dilovası, TEM ve D-100 hattında 10–15 dk varışlı kayar kasa oto çekici, aparatlı çekici, çoklu çekici ve 3.5 ton tenteli nakliye: 0533 945 45 14.',
    canonical,
    heroPreload: BUSINESS.heroImage.base,
    schemas,
    regionName: 'Gebze'
  })}
${P.headerNav('home')}
<main id="main-content">
  <section class="hero-section is-cover-hero">
    <div class="cover-hero-bg" aria-hidden="true">
      ${P.pictureTag(BUSINESS.heroImage.base, BUSINESS.heroImage.alt, true)}
    </div>
    <div class="cover-hero-scrim" aria-hidden="true"></div>
    <div class="container">
      <div class="cover-hero-inner">
        <div class="cover-hero-copy">
          <div class="hero-status-pill">
            <span class="live-dot"></span>
            <span>7/24 Gebze Nöbetçi Çekici &middot; Ortalama ${BUSINESS.etaMinutes} Varış</span>
          </div>
          <h1>Gebze 7/24 Oto Çekici <span>&amp; Acil Yol Yardım</span></h1>
          <p class="hero-lead">Gebze Merkez, GOSB, TOSB, Çayırova, Darıca, Dilovası, TEM ve D-100 koridorlarında düşük eğimli kayar kasa, aparatlı çekici, çoklu çekici ve 3.5 ton tenteli nakliye filomuzla dakikalar içinde yanınızdayız.</p>
          <div class="cover-hero-trust">
            <span class="cover-trust-chip">${P.ICONS.clock} 10–15 Dk Hızlı İntikal</span>
            <span class="cover-trust-chip">${P.ICONS.check} Telefonda Net Sabit Fiyat</span>
            <span class="cover-trust-chip">${P.ICONS.truck} 7/24 Kayar Kasa &amp; Aparatlı Filo</span>
          </div>
          <div class="hero-desktop-actions cta-row">
            <a href="tel:${BUSINESS.phoneTel}" class="btn btn-call">${P.ICONS.phone} <span>Hemen Ara: ${BUSINESS.phoneDisplay}</span></a>
            <a href="${P.waUrl('Gebze')}" class="btn btn-whatsapp btn-send-location" data-region="Gebze" target="_blank" rel="noopener noreferrer">${P.ICONS.whatsapp} <span>WhatsApp Konum Gönder</span></a>
          </div>
        </div>
        <div>
          ${P.dispatchPanel('Gebze', 'home-quote', BUSINESS.etaMinutes)}
        </div>
      </div>
    </div>
  </section>

  <!-- Akıcı Bölge Koridor Şeridi (Saf CSS, 0 KB JS) -->
  <div class="corridor-marquee" aria-label="Hizmet Koridorlarımız">
    <div class="marquee-track">
      ${['Gebze', 'GOSB', 'TEM Gebze', 'D-100 Gebze', 'TOSB', 'Çayırova', 'Darıca', 'Dilovası', 'Osmangazi Köprüsü', 'Eskihisar', 'Bilişim Vadisi', 'Şekerpınar', 'Gebze', 'GOSB', 'TEM Gebze', 'D-100 Gebze', 'TOSB', 'Çayırova', 'Darıca', 'Dilovası', 'Osmangazi Köprüsü', 'Eskihisar', 'Bilişim Vadisi', 'Şekerpınar']
        .map(loc => `<span class="marquee-item">${loc} <span class="marquee-dot" aria-hidden="true"></span></span>`)
        .join('')}
    </div>
  </div>

  <!-- Hizmetlerimiz (Asimetrik 2 Büyük + 4 Kart Editoryal Vitrin) -->
  <section class="section cv-auto">
    <div class="container">
      <div class="section-head-row reveal">
        <div class="section-head" style="margin-bottom:0;">
          <span class="section-eyebrow">01 / Uzman Ekipman &amp; Filo</span>
          <h2 class="section-title">Gebze Oto Çekici &amp; Yol Yardım Hizmetlerimiz</h2>
          <p class="section-desc">Binek otomobilden kazalı kurtarmaya, aparatlı ve çoklu çekiciden 3.5 ton tenteli nakliyeye kadar her ihtiyaca doğru ekipmanı yönlendiriyoruz.</p>
        </div>
        <a href="/hizmetler/" class="btn btn-outline">Tüm ${SERVICES.length} Hizmet ${P.ICONS.arrowRight}</a>
      </div>
      <div class="services-grid is-editorial">
        ${SERVICES.slice(0, 6).map((s, idx) => serviceCardHtml(s, idx)).join('\n        ')}
      </div>
    </div>
  </section>

  <!-- Nasıl Çalışıyoruz -->
  ${stepsSection('4 Adımlı Süreç', 'Arıza Anından Servise Nasıl Çalışıyoruz?', 'Stresli anınızda karmaşık prosedür yok; tek aramayla şeffaf ve güvenli kurtarma akışı.')}

  <!-- Hizmet Bölgelerimiz (6 Kart Varsayılan + 29 Bölge Toggle) -->
  <section class="section section-white cv-auto">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">Yerel Nöbetçi Kapsama</span>
        <h2 class="section-title">Gebze ve Çevresi 30 Hizmet Bölgemiz</h2>
        <p class="section-desc">Tüm Gebze mahalleleri, organize sanayi bölgeleri, TEM, D-100, Eskihisar, Osmangazi Köprüsü, Çayırova, Darıca ve Dilovası’nda yerel nöbetçi çekici noktalarımız.</p>
      </div>
      <div class="regions-grid">
        ${REGIONS.map((r, idx) => regionCardHtml(r, idx >= 6)).join('\n        ')}
      </div>
      <div class="regions-toggle-bar">
          <button type="button" id="toggle-regions-btn" class="btn btn-primary" data-expanded="false" data-total="${REGIONS.length}">
          Tüm Bölgeleri Göster (${REGIONS.length} Bölge)
        </button>
        <a href="/bolgeler/" class="btn btn-outline">Tüm Bölgeler Sayfası ${P.ICONS.arrowRight}</a>
      </div>
    </div>
  </section>

  <!-- Neden Biz (Asymmetric Bento Grid) -->
  ${whyUsBentoSection()}

  <!-- Gerçek Saha Operasyonları -->
  ${galleryPreviewSection(6, 'Gebze Gerçek Saha Operasyonlarımız')}

  <!-- Müşteri Yorumları -->
  <section class="section cv-auto">
    <div class="container">
      <div class="section-head-row">
        <div class="section-head" style="margin-bottom:0;">
          <span class="section-eyebrow">Müşteri Memnuniyeti</span>
          <h2 class="section-title">Gebze Sürücülerinin Gerçek Deneyimleri</h2>
          <p class="section-desc">GOSB’tan TEM gişelerine, Bayramoğlu’ndan Eskihisar rampasına kadar yolda kaldığında bizi tercih eden sürücülerin yorumları.</p>
        </div>
        <div class="rating-summary-card" aria-label="5 üzerinden 5.0 ortalama müşteri puanı">
          <span class="rating-big-score">${BUSINESS.rating.value}</span>
          <div class="rating-summary-meta">
            <div class="review-stars">${P.ICONS.star}${P.ICONS.star}${P.ICONS.star}${P.ICONS.star}${P.ICONS.star}</div>
            <span>${BUSINESS.rating.count} Doğrulanmış Değerlendirme</span>
          </div>
        </div>
      </div>
      <div class="reviews-grid">
        ${REVIEWS.map(rev => {
          const initials = rev.name.split(/\s+/).map(w => w[0] || '').join('').slice(0, 2).toUpperCase();
          return `<article class="review-card">
          <div class="review-top">
            <div class="review-stars" aria-label="5 üzerinden 5 yıldız">${P.ICONS.star}${P.ICONS.star}${P.ICONS.star}${P.ICONS.star}${P.ICONS.star}</div>
            <span class="review-verified">Doğrulanmış Hizmet</span>
          </div>
          <p class="review-text">“${P.esc(rev.text)}”</p>
          <div class="review-author">
            <span class="review-avatar" aria-hidden="true">${P.esc(initials)}</span>
            <div class="review-author-info">
              <strong>${P.esc(rev.name)}</strong>
              <span>${P.esc(rev.region)}</span>
            </div>
          </div>
        </article>`;
        }).join('\n        ')}
      </div>
    </div>
  </section>

  <!-- Sürücü Rehberi / Blog Önizleme -->
  <section class="section section-white cv-auto">
    <div class="container">
      <div class="section-head-row">
        <div class="section-head" style="margin-bottom:0;">
          <span class="section-eyebrow">Sürücü Rehberi</span>
          <h2 class="section-title">Yol Yardım ve Güvenli Çekim Kılavuzları</h2>
          <p class="section-desc">Otomatik ve elektrikli araç nakli, otoyol güvenliği, şeffaf çekici fiyatlandırması ve akü koruması hakkında teknik rehberler.</p>
        </div>
        <a href="/blog/" class="btn btn-outline">Tüm Rehber Yazıları ${P.ICONS.arrowRight}</a>
      </div>
      <div class="blog-grid">
        ${BLOG_POSTS.slice(0, 3).map(post => `<article class="blog-card">
          <div class="blog-media${P.isPortrait(post.img) ? ' is-portrait' : ''}">${P.pictureTag(post.img, post.title, false)}</div>
          <div class="blog-body">
            <div class="blog-meta"><span>${P.esc(post.category)}</span> &middot; <span>${P.esc(post.readTime)}</span></div>
            <h3><a href="/blog/${post.slug}.html">${P.esc(post.title)}</a></h3>
            <p>${P.esc(post.excerpt)}</p>
            <a href="/blog/${post.slug}.html" class="service-link"><span>Rehberi Oku</span> <span class="service-arrow-btn" aria-hidden="true">${P.ICONS.arrowRight}</span></a>
          </div>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>

  <!-- SSS (2 Sütunlu Modern Apple Split Akordiyon) -->
  <section class="section cv-auto" style="border-top:1px solid var(--line);">
    <div class="container">
      <div class="faq-split">
        <div class="faq-aside">
          <div class="section-head" style="margin-bottom:0;">
            <span class="section-eyebrow">Sıkça Sorulan Sorular</span>
            <h2 class="section-title">Merak Edilenlerin Net Yanıtları</h2>
            <p class="section-desc">Varış süresi, sabit fiyat politikası, fotoğraflı teslim tutanağı ve 7/24 gece vardiyası hakkında en sık sorulan sorular.</p>
          </div>
          <div class="faq-support-card">
            <strong>Farklı bir sorunuz mu var?</strong>
            <p>Çağrı merkezi beklemeden doğrudan Gebze saha operatörümüzle görüşüp anında bilgi ve sabit fiyat alabilirsiniz.</p>
            <a href="tel:${BUSINESS.phoneTel}" class="btn btn-call" style="width:100%;">${P.ICONS.phone} <span>${BUSINESS.phoneDisplay}</span></a>
          </div>
        </div>
        ${P.faqHtml(HOME_FAQS)}
      </div>
    </div>
  </section>

  <!-- İletişim & Harita -->
  <section class="section cv-auto">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">7/24 İletişim &amp; Konum</span>
        <h2 class="section-title">Gebze Nöbetçi İntikal Merkezimiz</h2>
        <p class="section-desc">Acil durumlarda tek dokunuşla arayın ya da WhatsApp konumunuzu paylaşın; en yakın çekici aracımız hemen yola çıksın.</p>
      </div>
      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-row">
            <span class="contact-row-icon">${P.ICONS.phone}</span>
            <div>
              <strong>7/24 Acil Çekici Hattı</strong>
              <a href="tel:${BUSINESS.phoneTel}">${BUSINESS.phoneDisplay}</a>
            </div>
          </div>
          <div class="contact-row">
            <span class="contact-row-icon">${P.ICONS.whatsapp}</span>
            <div>
              <strong>WhatsApp Hızlı Konum &amp; Teklif</strong>
              <a href="${P.waUrl('Gebze')}" class="btn-send-location" data-region="Gebze" target="_blank" rel="noopener noreferrer">Konum Paylaş &amp; Fiyat Al</a>
            </div>
          </div>
          <div class="contact-row">
            <span class="contact-row-icon">${P.ICONS.pin}</span>
            <div>
              <strong>Hizmet Merkezi</strong>
              <span>${P.esc(BUSINESS.address.street)} — Gebze / Kocaeli</span>
            </div>
          </div>
          <div class="contact-row">
            <span class="contact-row-icon">${P.ICONS.clock}</span>
            <div>
              <strong>Çalışma Saatleri</strong>
              <span>${P.esc(BUSINESS.hours)} (Resmi Tatiller Dahil)</span>
            </div>
          </div>
        </div>
        ${P.mapFacadeCard()}
      </div>
    </div>
  </section>
</main>
${P.lightboxModal()}
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

  writeHtml('index.html', html);
}

// ============================================================================
// 2. BÖLGELER DİZİNİ (/bolgeler/index.html) & 26 BÖLGE DETAY SAYFASI
// ============================================================================
function buildRegionsIndex() {
  const canonical = `${SITE_URL}/bolgeler/`;
  const bc = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hizmet Bölgeleri', href: '/bolgeler/' }
  ];
  const regIndexFaqs = [
    { q: 'Gebze’nin tüm mahallelerine ve köylerine çekici gidiyor mu?', a: 'Evet. Gebze Merkez, Mutlukent, Beylikbağı, Tatlıkuyu, İstasyon, Arapçeşme, Kirazpınar, Barış, Mevlana, Adem Yavuz, Mustafapaşa, Mimar Sinan dahil tüm mahalleler ile Pelitli ve Mollafenari kırsal yollarına 7/24 hizmet veriyoruz.' },
    { q: 'OSB içindeki fabrikalara ve kapalı otoparklara çekici girebiliyor mu?', a: 'Evet. GOSB, TOSB, Güzeller OSB, GEPOSB, İMES OSB ve Balçık tesislerine kurumsal belgeli araçlarımızla giriş yapıyor; alçak tavanlı kapalı otoparklar için 1.88m özel kurtarıcı kullanıyoruz.' },
    { q: 'Çayırova, Darıca ve Dilovası’nda ekstra uzaklık ücreti alınıyor mu?', a: 'Hayır. Bu ilçeler Gebze ana faaliyet havzamızın doğrudan parçasıdır; bölgesel standart ekonomik tarife üzerinden telefonda sabit fiyat verilir.' },
    { q: 'TEM, D-100 veya Osmangazi Köprüsü çıkışında çekici ne kadar sürede gelir?', a: 'Otoyol bağlantılarına yakın konuşlu nöbetçi araçlarımız sayesinde doğru yön kavşağından giriş yaparak ortalama 10–15 dakikada yanınızda oluyoruz.' },
    { q: 'Gebze’den İstanbul veya İzmit’teki yetkili servise çekim yapıyor musunuz?', a: 'Evet. Tüm 30 bölgemizden İstanbul Anadolu/Avrupa yakasına, İzmit’e ve Türkiye’nin 81 iline özenli araç nakliyesi sağlıyoruz.' }
  ];

  const schemas = [
    P.localBusinessSchema({ canonical }),
    P.breadcrumbSchema(bc),
    P.faqSchema(regIndexFaqs)
  ];

  const html = `${P.head({
    title: 'Gebze Çekici Hizmet Bölgeleri (29 Bölge) | Mahalle, OSB & Otoyol',
    description: 'Gebze tüm mahalleleri, GOSB, TOSB, Güzeller OSB, Çayırova, Darıca, Dilovası, TEM, D-100 ve Osmangazi Köprüsü 7/24 oto çekici bölgelerimiz.',
    canonical,
    schemas,
    regionName: 'Gebze'
  })}
${P.headerNav('regions')}
<main id="main-content">
  <section class="page-editorial-hero">
    <div class="container">
      ${P.breadcrumbs(bc)}
      <div class="hero-editorial-top" style="margin-bottom:0;">
        <div>
          <div class="hero-status-pill"><span class="live-dot"></span><span>Gebze &middot; OSB &middot; Otoyol &middot; 10–15 Dk İntikal</span></div>
          <h1>Gebze ve Çevresi <span>${REGIONS.length} Hizmet Bölgemiz.</span></h1>
        </div>
        <div class="hero-top-side">
          <p class="hero-lead">Gebze’nin her mahallesinde, tüm organize sanayi bölgelerinde, TEM, D-100, Eskihisar Feribot ve komşu ilçelerde 7/24 konuşlu nöbetçi kurtarıcı noktalarımız.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Filtresiz Temiz 29 Bölge Kartı Grid'i (Kural 2.3.1) -->
  <section class="section" style="padding-top:16px;">
    <div class="container">
      <div class="regions-grid">
        ${REGIONS.map(r => regionCardHtml(r, false)).join('\n        ')}
      </div>
    </div>
  </section>

  ${stepsSection('Bölgesel İntikal', 'Konumunuza 10–15 Dakikada Nasıl Ulaşıyoruz?', 'Gebze’nin farklı arterlerinde bekleyen mobil ekiplerimiz sayesinde trafik yoğunluğuna takılmadan size en yakın araç yönlendirilir.')}
  ${whyUsBentoSection('Yerel Filo Gücü', 'Gebze Arterlerine Hâkim Nöbetçi Kurtarıcı Farkı', 'Mahalle sokaklarından OSB kapılarına, dik yokuşlardan otoyol gişelerine kadar her noktada doğru donanım.')}
  ${galleryPreviewSection(6, 'Bölgelerimizden Gerçek Saha Kareleri')}
  ${faqSplitSection('Bölge Hizmetleri SSS', 'Hizmet Bölgeleri Hakkında Sık Sorulanlar', 'Gebze mahalleleri, organize sanayi bölgeleri ve otoyol koridorlarındaki intikal süreçlerimiz.', regIndexFaqs, true)}
</main>
${P.lightboxModal()}
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

  writeHtml('bolgeler/index.html', html);
}

function buildRegionDetailPages() {
  REGIONS.forEach((r, idx) => {
    const relPath = `bolgeler/${r.slug}-cekici.html`;
    const canonical = `${SITE_URL}/${relPath}`;
    const bc = [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Hizmet Bölgeleri', href: '/bolgeler/' },
      { label: r.name, href: `/${relPath}` }
    ];

    // 8 komşu/diğer bölge iç linki
    const neighbors = [];
    for (let offset = 1; offset <= 8; offset++) {
      neighbors.push(REGIONS[(idx + offset) % REGIONS.length]);
    }

    const schemas = [
      P.localBusinessSchema({
        canonical,
        areaServed: `${r.name}, Gebze, Kocaeli`,
        locality: r.name,
        lat: r.lat,
        lng: r.lng
      }),
      P.breadcrumbSchema(bc),
      P.faqSchema(r.faqs)
    ];

    const regionTitle = r.name.length > 14
      ? `${r.name} Oto Çekici & Yol Yardım | 7/24 En Yakın Kurtarıcı`
      : `${r.name} Oto Çekici & 7/24 Yol Yardım | ${r.eta} En Yakın Kurtarıcı`;

    const html = `${P.head({
      title: regionTitle,
      description: r.metaDesc,
      canonical,
      ogImage: r.heroImg,
      heroPreload: r.heroImg,
      schemas,
      regionName: r.name
    })}
${P.headerNav('regions', { navbarTitle: r.navbarTitle, navbarSub: r.navbarSub })}
<main id="main-content">
  <!-- Awwwards Editoryal Bölge Hero + Kırpılmayan Vitrin Fotoğraf + Bölge Ön-Seçili Obsidian Panel -->
  <section class="hero-section hero-region-editorial">
    <div class="container">
      ${P.breadcrumbs(bc)}
      <div class="hero-editorial-top">
        <div>
          <div class="hero-status-pill"><span class="live-dot"></span><span>${P.esc(r.eta)} İntikal</span></div>
          <h1>${P.esc(r.name)} Oto Çekici <span>&amp; Yol Yardım.</span></h1>
        </div>
        <div class="hero-top-side">
          <p class="hero-lead">${P.esc(r.heroLead)}</p>
          <div class="hero-desktop-actions cta-row">
            <a href="tel:${BUSINESS.phoneTel}" class="btn btn-call">${P.ICONS.phone} <span>${BUSINESS.phoneDisplay}</span></a>
            <a href="${P.waUrl(r.name)}" class="btn btn-whatsapp btn-send-location" data-region="${P.esc(r.name)}" target="_blank" rel="noopener noreferrer">${P.ICONS.whatsapp} <span>Konum Gönder</span></a>
          </div>
        </div>
      </div>

      <div class="hero-stage">
        ${P.showcaseCard(r.heroImg, `${r.name} 7/24 kayar kasa oto çekici ve yol yardım operasyonu`, r.name)}
        ${P.dispatchPanel(r.name, `quote-${r.slug}`, r.eta)}
      </div>
    </div>
  </section>

  <!-- tam Özgün Yerel SEO İçeriği + Sidebar (Safari Reader/Özet tetiklememesi için semantik div) -->
  <section class="section" style="padding-top:16px;">
    <div class="container">
      <div class="prose-layout">
        <div class="article-body">
          <h2>${P.esc(r.seoTitle)}</h2>
          <p><strong>${P.esc(r.name)} oto çekici</strong>, <strong>${P.esc(r.name)} oto kurtarıcı</strong> ve 7/24 <strong>${P.esc(r.name)} yol yardım</strong> ihtiyaçlarınızda <strong>en yakın oto çekici</strong> ekibimizi ${P.esc(r.eta)} ortalama süreyle konumunuza yönlendiriyoruz. ${P.esc(r.name)} oto kurtarma ve ${P.esc(r.name)} acil çekici hattımız gece gündüz doğrudan saha şoförüne bağlanır.</p>
          ${r.paragraphs.map(p => `<p>${p}</p>`).join('\n          ')}

          <h3>${P.esc(r.localPointsTitle)}</h3>
          <ul class="prose-list">
            ${r.localPoints.map(pt => `<li>${P.ICONS.pin} <span>${P.esc(pt)}</span></li>`).join('\n            ')}
          </ul>

          <div class="field-log-card${P.isPortrait(r.fieldImg) ? ' is-portrait' : ''}">
            ${P.pictureTag(r.fieldImg, `${r.name} gerçek saha çekici operasyonu`, false)}
            <div class="field-log-cap">
              <strong>${P.esc(r.fieldLogTitle)}</strong>
              <span>${P.esc(r.fieldLogDesc)}</span>
            </div>
          </div>

          ${(r.extraSections || []).map(sec => `<div class="seo-section-block">
            <h2>${P.esc(sec.h2)}</h2>
            ${sec.paragraphs.map(p => `<p>${p}</p>`).join('\n            ')}
          </div>`).join('\n          ')}

          <h2>${P.esc(r.name)} Çekici Sıkça Sorulan Sorular</h2>
          ${P.faqHtml(r.faqs)}
        </div>

        <aside class="sidebar-stack" aria-label="Hızlı Hizmetler ve Yakın Bölgeler">
          <div class="sidebar-card is-dark">
            <h3>${P.esc(r.name)} Acil Çekici Numarası</h3>
            <p style="font-size:0.86rem;color:#CBD5E1;margin-bottom:14px;">${P.esc(r.name)} çekici numarası 7/24 aktiftir. ${P.esc(r.name)} en yakın çekici ve ${P.esc(r.name)} yol yardım ekibine tek tıkla ulaşın.</p>
            <div style="display:flex;flex-direction:column;gap:9px;">
              <a href="tel:${BUSINESS.phoneTel}" class="btn btn-call" style="width:100%;">${P.ICONS.phone} <span>${BUSINESS.phoneDisplay}</span></a>
              <a href="${P.waUrl(r.name)}" class="btn btn-whatsapp btn-send-location" data-region="${P.esc(r.name)}" target="_blank" rel="noopener noreferrer" style="width:100%;">${P.ICONS.whatsapp} <span>Konum Gönder</span></a>
            </div>
          </div>

          <div class="sidebar-card">
            <h3>${P.esc(r.name)} Hizmetlerimiz</h3>
            <div class="sidebar-links">
              ${SERVICES.slice(0, 6).map(s => `<a href="/hizmetler/${s.slug}.html"><span>${P.esc(s.shortName)}</span>${P.ICONS.arrowRight}</a>`).join('\n              ')}
            </div>
          </div>

          <div class="sidebar-card">
            <h3>Yakın Bölgeler</h3>
            <div class="sidebar-links">
              ${neighbors.slice(0, 6).map(n => `<a href="/bolgeler/${n.slug}-cekici.html"><span>${P.esc(n.name)}</span>${P.ICONS.arrowRight}</a>`).join('\n              ')}
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <!-- Bölgeye Özel 4 Adımlı Süreç -->
  ${stepsSection(`${r.name} İntikal Akışı`, `${r.name} Bölgesinde Nasıl Çalışıyoruz?`, `${r.name} çağrılarında vakit kaybetmeden doğru ekipmanla güvenli teslimat.`)}

  <!-- Taşınan Araç Tipleri & Kullanılan Donanım Tablosu -->
  <section class="section section-white cv-auto">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">Donanım Uyumu</span>
        <h2 class="section-title">${P.esc(r.name)} Taşınan Araç Tipleri &amp; Ekipmanlarımız</h2>
        <p class="section-desc">Her araç sınıfı kendi şasi yapısına ve aktarma organına uygun özel sabitleme ekipmanıyla taşınır.</p>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Araç Sınıfı</th>
              <th>Kullanılan Kurtarıcı</th>
              <th>Sabitleme &amp; Koruma Yöntemi</th>
              <th>Kasko &amp; Teslim Tutanağı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Binek &amp; Spor Otomobil</strong></td>
              <td>Düşük Eğimli Hidrolik Kayar Kasa</td>
              <td>6° altı uzatma rampası + 4 tekerlek lastik üstü spanzet</td>
              <td>Fotoğraflı teslim tutanağı</td>
            </tr>
            <tr>
              <td><strong>SUV, 4x4 &amp; Elektrikli (EV)</strong></td>
              <td>Kayar Kasa veya Aparatlı Çekici</td>
              <td>Batarya altı temassız yükleme + tekerlek doli aparatı</td>
              <td>Yüksek teminatlı VIP sigorta + teslim tutanağı</td>
            </tr>
            <tr>
              <td><strong>Motosiklet &amp; ATV</strong></td>
              <td>Özel Motor Kıskaçlı Platform</td>
              <td>Ön tekerlek kıskacı + yumuşak gidon sapanları</td>
              <td>Ön teker kıskacıyla dik ve özenli taşıma</td>
            </tr>
            <tr>
              <td><strong>Panelvan, Minibüs &amp; Ticari</strong></td>
              <td>Uzun Şasi Ağır Hizmet Platformu</td>
              <td>Yüksek tonajlı aks sabitleme + ağır sınıf kemerler</td>
              <td>OSB kurumsal fotoğraflı teslim tutanağı</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Yakın / Diğer Hizmet Bölgeleri Grid'i (8 Komşu Bölge) -->
  <section class="section cv-auto">
    <div class="container">
      <div class="section-head-row">
        <div class="section-head" style="margin-bottom:0;">
          <span class="section-eyebrow">Komşu Kapsama Alanları</span>
          <h2 class="section-title">${P.esc(r.name)} Çevresindeki Diğer Hizmet Bölgelerimiz</h2>
        </div>
        <a href="/bolgeler/" class="btn btn-outline">Tüm 30 Bölge ${P.ICONS.arrowRight}</a>
      </div>
      <div class="regions-grid">
        ${neighbors.slice(0, 6).map(n => regionCardHtml(n, false)).join('\n        ')}
      </div>
    </div>
  </section>
</main>
${P.footer()}
${P.stickyActions(r.name)}
${P.scripts()}`;

    writeHtml(relPath, html);
  });
}

// ============================================================================
// 3. HİZMETLER DİZİNİ (/hizmetler/index.html) & 10 HİZMET DETAY SAYFASI
// KURAL 2.2.4: Hizmet dizini ve detay sayfalarının üst hero alanında CTA YOK!
// ============================================================================
function buildServicesIndex() {
  const canonical = `${SITE_URL}/hizmetler/`;
  const bc = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hizmetlerimiz', href: '/hizmetler/' }
  ];
  const srvFaqs = [
    { q: 'Hangi araç tiplerine çekici ve kurtarma hizmeti veriyorsunuz?', a: 'Binek otomobiller, spor araçlar, SUV/4x4, tam elektrikli araçlar, motosiklet, ATV, uzun şasi panelvan, 16+1 servis minibüsü, kamyonet, karavan ve 3.5 tona kadar forklift/iş makinelerine özel donanımlı filomuzla hizmet veriyoruz.' },
    { q: 'Çekici çağırmak yerine sadece akü takviye veya lastik değişimi isteyebilir miyim?', a: 'Evet. Aracın servise taşınmasına gerek olmayan boş akü ve patlak lastik vakalarında mobil yol yardım aracımızla doğrudan bulunduğunuz yerde çözüm sağlıyoruz.' },
    { q: 'Kilitli şanzıman ve otomatik araçlar için özel ekipmanınız mevcut mu?', a: 'Evet. Tekerlek altı Go-Jak doli arabaları, kaydırma patenleri ve düşük eğimli hidrolik kayar kasa araçlarımız filomuzda 7/24 hazır bekler.' },
    { q: 'Hizmetlerinizde fotoğraflı teslim tutanağı standart mı?', a: 'Evet. Tüm şehir içi ve şehirlerarası çekici hizmetlerimiz fotoğraflı teslim tutanağı kapsamındadır; bireysel ve kurumsal müşterilerimize nakit veya havale/EFT ödeme kolaylığı sunulur.' },
    { q: 'Gebze dışına şehirlerarası araç taşıma yapıyor musunuz?', a: 'Evet. Gebze çıkışlı veya Gebze varışlı olarak İstanbul, Ankara, İzmir, Bursa, Antalya dahil Türkiye’nin 81 iline aktarmasız tekli özenli taşıma yapıyoruz.' }
  ];

  const schemas = [
    P.localBusinessSchema({ canonical }),
    P.breadcrumbSchema(bc),
    P.faqSchema(srvFaqs)
  ];

  const html = `${P.head({
    title: `Gebze Oto Çekici & Yol Yardım Hizmetlerimiz | ${SERVICES.length} Uzman Çözüm`,
    description: 'Gebze kayar kasa oto çekici, oto kurtarma, aparatlı çekici, çoklu çekici, 3.5 ton tenteli nakliye, akü takviye, lastik yardım, motosiklet ve şehirlerarası araç taşıma.',
    canonical,
    schemas,
    regionName: 'Gebze'
  })}
${P.headerNav('services')}
<main id="main-content">
  <!-- Kural 2.2.4: Hizmetler dizininde üst hero CTA butonları yer almaz -->
  <section class="page-editorial-hero">
    <div class="container">
      ${P.breadcrumbs(bc)}
      <div class="hero-editorial-top" style="margin-bottom:0;">
        <div>
          <div class="hero-status-pill"><span class="live-dot"></span><span>Sıfır Hasar Donanım &middot; Fotoğraflı Teslim Tutanağı</span></div>
          <h1>Gebze Oto Çekici <span>&amp; Yol Yardım Hizmetlerimiz.</span></h1>
        </div>
        <div class="hero-top-side">
          <p class="hero-lead">Her arıza ve araç sınıfı kendi teknik ekipmanını gerektirir. Hidrolik kayar kasadan tekerlek aparatlı çekiciye, çoklu çekiciden 3.5 ton tenteli nakliyeye ve 12V/24V yerinde akü takviyeye kadar ${SERVICES.length} uzman hizmetimiz.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:16px;">
    <div class="container">
      <div class="services-grid">
        ${SERVICES.map((s, idx) => serviceCardHtml(s, idx)).join('\n        ')}
      </div>
    </div>
  </section>

  ${stepsSection('Standart Operasyon', 'Tüm Hizmetlerimizde 4 Adımlı Güvenli Süreç', 'Doğru araç yönlendirmesinden sigortalı teslimata kadar şeffaf ve disiplinli saha yönetimi.')}
  ${whyUsBentoSection('Hizmet Güvencemiz', 'Neden Gebze Çekici Ekipmanları?', 'Araç şasisini, batarya altını ve kaportayı koruyan yeni nesil donanımlarla sıfır hasarlı taşımacılık.')}
  ${galleryPreviewSection(6, 'Hizmetlerimizden Gerçek Saha Kareleri')}
  ${faqSplitSection('Hizmetler SSS', 'Hizmetlerimiz Hakkında Sıkça Sorulanlar', 'Araç sınıfları, aparatlı çekici, 3.5 ton tenteli yük taşımacılığı, fotoğraflı teslim tutanağı ve şehirlerarası nakliye süreçleri.', srvFaqs, true)}
</main>
${P.lightboxModal()}
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

  writeHtml('hizmetler/index.html', html);
}

function buildServiceDetailPages() {
  SERVICES.forEach((s, idx) => {
    const relPath = `hizmetler/${s.slug}.html`;
    const canonical = `${SITE_URL}/${relPath}`;
    const bc = [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Hizmetlerimiz', href: '/hizmetler/' },
      { label: s.name, href: `/${relPath}` }
    ];

    const otherServices = SERVICES.filter(x => x.slug !== s.slug).slice(0, 6);
    const schemas = [
      P.localBusinessSchema({ canonical }),
      P.serviceSchema(s, canonical),
      P.breadcrumbSchema(bc),
      P.faqSchema(s.faqs)
    ];

    // Kural 2.2.4: Hizmet detay sayfalarında üst hero alanında Hemen Ara / WhatsApp butonları YER ALMAZ!
    const html = `${P.head({
      title: s.metaTitle,
      description: s.metaDesc,
      canonical,
      ogImage: s.img,
      heroPreload: s.img,
      schemas,
      regionName: 'Gebze'
    })}
${P.headerNav('services')}
<main id="main-content">
  <section class="page-editorial-hero">
    <div class="container">
      ${P.breadcrumbs(bc)}
      <div class="hero-editorial-top">
        <div>
          <div class="hero-status-pill"><span class="live-dot"></span><span>Gebze 7/24 Nöbetçi &middot; tam fotoğraflı teslim tutanağı</span></div>
          <h1>Gebze <span>${P.esc(s.name)}.</span></h1>
        </div>
        <div class="hero-top-side">
          <p class="hero-lead">${P.esc(s.lead)}</p>
        </div>
      </div>

      <div class="service-hero-stage">
        ${P.showcaseCard(s.img, `Gebze ${s.name} saha operasyonu`, s.shortName)}
        <div class="obsidian-spec-panel">
          <div class="spec-panel-head">
            <span class="dispatch-eyebrow"><span class="live-dot"></span> Teknik Operasyon Standardı</span>
            <div class="dispatch-title">${P.esc(s.shortName)} Donanım Özeti</div>
          </div>
          <div class="spec-panel-rows">
            <div class="spec-row"><span>Ortalama İntikal</span><strong>10–15 Dakika</strong></div>
            <div class="spec-row"><span>Taşıma Güvencesi</span><strong>Fotoğraflı Teslim Tutanağı</strong></div>
            <div class="spec-row"><span>Fiyat Politikası</span><strong>Telefonda Net Sabit Fiyat</strong></div>
            <div class="spec-row"><span>Ödeme Seçenekleri</span><strong>Nakit &amp; Havale / EFT</strong></div>
            <div class="spec-row"><span>Çalışma Düzeni</span><strong>7 Gün 24 Saat Nöbetçi</strong></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:16px;">
    <div class="container">
      <div class="prose-layout">
        <div class="article-body">
          <h2>${P.esc(s.name)} — Teknik Detaylar &amp; Kullanım Senaryoları</h2>
          ${s.scenarios.map(p => `<p>${p}</p>`).join('\n          ')}

          <h2>${P.esc(s.equipmentTitle)}</h2>
          <ul class="prose-list">
            ${s.equipmentPoints.map(pt => `<li>${P.ICONS.check} <span>${P.esc(pt)}</span></li>`).join('\n            ')}
          </ul>

          <h2>Adım Adım ${P.esc(s.shortName)} Operasyonumuz</h2>
          <div class="inline-steps-grid">
            ${s.steps.map((st, sIdx) => `<div class="inline-step-card">
              <span class="inline-step-num">0${sIdx + 1}</span>
              <h3>${P.esc(st.title)}</h3>
              <p>${P.esc(st.desc)}</p>
            </div>`).join('\n            ')}
          </div>

          ${(s.extraSections || []).map(sec => `<div class="seo-section-block">
            <h2>${P.esc(sec.h2)}</h2>
            ${sec.paragraphs.map(p => `<p>${p}</p>`).join('\n            ')}
          </div>`).join('\n          ')}

          <div class="callout-box">
            <strong>Fiyatı Etkileyen Kriterler &amp; Sabit Fiyat Güvencesi</strong>
            ${P.esc(s.pricingNote)}
          </div>

          <h2>${P.esc(s.name)} Hakkında Sıkça Sorulanlar</h2>
          ${P.faqHtml(s.faqs)}
        </div>

        <aside class="sidebar-stack">
          <div class="sidebar-card">
            <h3>Diğer Hizmetlerimiz</h3>
            <div class="sidebar-links">
              ${otherServices.map(o => `<a href="/hizmetler/${o.slug}.html"><span>${P.esc(o.shortName)}</span>${P.ICONS.arrowRight}</a>`).join('\n              ')}
            </div>
          </div>
          <div class="sidebar-card">
            <h3>Öncelikli Gebze Bölgeleri</h3>
            <div class="sidebar-links">
              ${REGIONS.slice(0, 8).map(r => `<a href="/bolgeler/${r.slug}-cekici.html"><span>${P.esc(r.name)}</span>${P.ICONS.arrowRight}</a>`).join('\n              ')}
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</main>
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

    writeHtml(relPath, html);
  });
}

// ============================================================================
// 4. BLOG DİZİNİ (/blog/index.html) & 6 REHBER YAZISI
// ============================================================================
function buildBlogPages() {
  const indexCanonical = `${SITE_URL}/blog/`;
  const indexBc = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Sürücü Rehberi', href: '/blog/' }
  ];
  const blogFaqs = [
    { q: 'Otomatik vitesli aracım arızalandığında halatla çekilebilir mi?', a: 'Hayır. Motor çalışmadığında şanzıman yağ pompası devrede olmadığı için otomatik araçların halatla çekilmesi ciddi şanzıman hasarı doğurur; mutlaka kayar kasa ile taşınmalıdır.' },
    { q: 'Otoyolda aracım durduğunda reflektörü kaç metre geriye koymalıyım?', a: 'Şehir içi yollarda en az 30–50 metre, D-100 ve TEM gibi yüksek hızlı otoyollarda ise aracın 100–150 metre gerisine reflektör konulmalı ve yolcular bariyer arkasına geçmelidir.' },
    { q: 'Yeni nesil araçta başka otomobilden kablo ile akü takviyesi güvenli mi?', a: 'Ters kutup veya voltaj sıçraması (pik akım) riski nedeniyle yeni nesil ECU’lu araçlarda profesyonel 12V/24V booster cihazı kullanılması çok daha güvenlidir.' },
    { q: 'Kasko poliçemdeki çekici hakkı için teslim tutanağınız geçerli mi?', a: 'Evet. KDV’li resmi oto kurtarma teslim tutanağımızı sigorta şirketinize ileterek poliçe limitleri dahilinde geri ödeme alabilirsiniz.' }
  ];

  const indexHtml = `${P.head({
    title: 'Gebze Sürücü Rehberi & Yol Yardım Blogu | Teknik Kılavuzlar',
    description: 'Gebze oto çekici çağırma adımları, otomatik ve elektrikli araç taşıma teknikleri, akü takviye, TEM/D-100 otoyol güvenliği ve 2026 çekici fiyat rehberleri.',
    canonical: indexCanonical,
    schemas: [P.localBusinessSchema({ canonical: indexCanonical }), P.breadcrumbSchema(indexBc), P.faqSchema(blogFaqs)],
    regionName: 'Gebze'
  })}
${P.headerNav('blog')}
<main id="main-content">
  <section class="page-editorial-hero">
    <div class="container">
      ${P.breadcrumbs(indexBc)}
      <div class="hero-editorial-top" style="margin-bottom:0;">
        <div>
          <div class="hero-status-pill"><span class="live-dot"></span><span>${BLOG_POSTS.length} Teknik Kılavuz &middot; Güvenli Çekim &amp; Emniyet</span></div>
          <h1>Gebze Sürücü Rehberi <span>&amp; Teknik Kılavuzlar.</span></h1>
        </div>
        <div class="hero-top-side">
          <p class="hero-lead">Yolda kaldığınızda doğru karar almanızı sağlayacak teknik çekim kuralları, otoyol emniyet protokolleri, akü koruma bilgileri ve şeffaf fiyat rehberleri.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:16px;">
    <div class="container">
      <div class="blog-grid">
        ${BLOG_POSTS.map(post => `<article class="blog-card">
          <div class="blog-media${P.isPortrait(post.img) ? ' is-portrait' : ''}">${P.pictureTag(post.img, post.title, false)}</div>
          <div class="blog-body">
            <div class="blog-meta"><span>${P.esc(post.category)}</span> &middot; <span>${P.esc(post.readTime)}</span></div>
            <h3><a href="/blog/${post.slug}.html">${P.esc(post.title)}</a></h3>
            <p>${P.esc(post.excerpt)}</p>
            <a href="/blog/${post.slug}.html" class="service-link"><span>Rehberi Oku</span> <span class="service-arrow-btn" aria-hidden="true">${P.ICONS.arrowRight}</span></a>
          </div>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>

  ${stepsSection('Acil Durum Kılavuzu', 'Yolda Arıza Anında İlk 5 Dakika Güvenlik Adımları', 'Kurtarıcı ekibimiz yola çıkarken can ve mal güvenliğiniz için uygulanması gereken temel refleksler.', [
    { icon: P.ICONS.shield, title: 'Emniyet Şeridi & Dörtlüler', desc: 'Aracı en sağ cebin bariyer tarafına alın, direksiyonu sağa kırın ve dörtlü flaşörleri açın.' },
    { icon: P.ICONS.clock, title: 'Bariyer Arkasına Geçiş', desc: 'Yolcuları sağ kapılardan indirip araç içi yerine mutlaka çelik bariyerin arka tarafına alın.' },
    { icon: P.ICONS.pin, title: 'Reflektör & GPS Konumu', desc: 'Otoyolda 150m geriye reflektör koyun, WhatsApp konumunuzu ve yön bilginizi ekibimize iletin.' },
    { icon: P.ICONS.truck, title: 'Doğru Ekipman Teyidi', desc: 'Otomatik şanzıman kilidi, EV modeli veya kapalı garaj bilgisini paylaşıp sabit fiyatı onaylayın.' }
  ])}
  ${whyUsBentoSection('Teknik Uzmanlık', 'Profesyonel Kurtarıcı Farkı Neden Önemlidir?', 'Yanlış ekipmanla yapılan tek bir hatalı çekim, aracınızda çekici ücretinin onlarca katı mekanik hasar bırakabilir.')}
  ${faqSplitSection('Sık Karşılaşılan Durumlar', 'Yol Yardım ve Güvenli Çekim SSS', 'Otomatik araç nakli, otoyol reflektör mesafesi, akü takviyesi ve kasko teslim tutanağısı hakkında sık sorulanlar.', blogFaqs, true)}
</main>
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

  writeHtml('blog/index.html', indexHtml);

  // Detay Blog Sayfaları
  BLOG_POSTS.forEach(post => {
    const relPath = `blog/${post.slug}.html`;
    const canonical = `${SITE_URL}/${relPath}`;
    const bc = [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Sürücü Rehberi', href: '/blog/' },
      { label: post.title, href: `/${relPath}` }
    ];

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.metaDesc,
      image: `${SITE_URL}/images/${post.img}.webp`,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@type': 'Organization', name: BUSINESS.name },
      publisher: { '@type': 'Organization', name: BUSINESS.name },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical }
    };

    const otherPosts = BLOG_POSTS.filter(p => p.slug !== post.slug);

    const html = `${P.head({
      title: post.metaTitle,
      description: post.metaDesc,
      canonical,
      ogImage: post.img,
      heroPreload: post.img,
      schemas: [articleSchema, P.breadcrumbSchema(bc), P.faqSchema(post.faqs)],
      regionName: 'Gebze'
    })}
${P.headerNav('blog')}
<main id="main-content">
  <section class="page-editorial-hero">
    <div class="container">
      ${P.breadcrumbs(bc)}
      <div class="blog-hero-grid">
        <div>
          <div class="hero-status-pill"><span class="live-dot"></span><span>${P.esc(post.dateDisplay)} &middot; ${P.esc(post.readTime)}</span></div>
          <h1 class="blog-detail-h1">${P.esc(post.title)}</h1>
          <p class="hero-lead" style="margin-top:14px;">${P.esc(post.excerpt)}</p>
        </div>
        ${P.showcaseCard(post.img, post.title, post.category)}
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:12px;">
    <div class="container">
      <div class="prose-layout">
        <article class="article-body">
          <div class="toc-box">
            <div class="toc-box-title">İçindekiler</div>
            <ul class="toc-list">
              ${post.toc.map((t, i) => `<li><a href="#${t.id}"><span>0${i + 1}.</span> ${P.esc(t.label)}</a></li>`).join('\n              ')}
            </ul>
          </div>

          ${post.sections.map(sec => `
          <h2 id="${sec.id}">${P.esc(sec.h2)}</h2>
          ${sec.paragraphs.map(p => `<p>${p}</p>`).join('\n          ')}
          ${sec.callout ? `<div class="callout-box"><strong>${P.esc(sec.callout.title)}</strong>${P.esc(sec.callout.text)}</div>` : ''}
          `).join('\n')}

          ${post.table ? `
          <h2>Hızlı Karşılaştırma ve Teknik Özet Tablosu</h2>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr>${post.table.headers.map(h => `<th>${P.esc(h)}</th>`).join('')}</tr></thead>
              <tbody>
                ${post.table.rows.map(row => `<tr>${row.map((cell, ci) => `<td>${ci === 0 ? `<strong>${P.esc(cell)}</strong>` : P.esc(cell)}</td>`).join('')}</tr>`).join('\n                ')}
              </tbody>
            </table>
          </div>` : ''}

          <h2>Konuyla İlgili Sıkça Sorulan Sorular</h2>
          ${P.faqHtml(post.faqs)}
        </article>

        <aside class="sidebar-stack">
          <div class="sidebar-card is-dark">
            <h3>Gebze 7/24 Acil Destek</h3>
            <p style="font-size:0.86rem;color:#CBD5E1;margin-bottom:14px;">Şu an yolda kaldıysanız vakit kaybetmeden doğrudan nöbetçi ekibimize ulaşın.</p>
            <div style="display:flex;flex-direction:column;gap:9px;">
              <a href="tel:${BUSINESS.phoneTel}" class="btn btn-call" style="width:100%;">${P.ICONS.phone} <span>${BUSINESS.phoneDisplay}</span></a>
              <a href="${P.waUrl('Gebze')}" class="btn btn-whatsapp btn-send-location" data-region="Gebze" target="_blank" rel="noopener noreferrer" style="width:100%;">${P.ICONS.whatsapp} <span>Konum Gönder</span></a>
            </div>
          </div>

          <div class="sidebar-card">
            <h3>Diğer Rehber Yazıları</h3>
            <div class="sidebar-links">
              ${otherPosts.map(op => `<a href="/blog/${op.slug}.html"><span>${P.esc(op.title.split('?')[0])}</span>${P.ICONS.arrowRight}</a>`).join('\n              ')}
            </div>
          </div>

          <div class="sidebar-card">
            <h3>İlgili Hizmetler</h3>
            <div class="sidebar-links">
              ${SERVICES.slice(0, 6).map(s => `<a href="/hizmetler/${s.slug}.html"><span>${P.esc(s.shortName)}</span>${P.ICONS.arrowRight}</a>`).join('\n              ')}
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</main>
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

    writeHtml(relPath, html);
  });
}

// ============================================================================
// 5. GALERİ (galeri.html) — Kural 2.7
// ============================================================================
function buildGalleryPage() {
  const canonical = `${SITE_URL}/galeri.html`;
  const bc = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Saha Galerisi', href: '/galeri.html' }
  ];
  const galFaqs = [
    { q: 'Galerideki fotoğraflar gerçekten kendi operasyonlarınıza mı ait?', a: 'Evet. Paylaştığımız görsellerin tamamı kayar kasa, aparatlı çekici, çoklu çekici, tenteli nakliye ve mobil yol yardım operasyonlarımızda sahada çekilmiş gerçek operasyon kareleridir.' },
    { q: 'Araçlar platforma nasıl bağlanıyor, jant veya tampon çizilir mi?', a: 'Metal zincir veya jant içi kanca kullanmıyoruz. Dört lastiğin tamamı kauçuk korumalı tekstil spanzetlerle tekerlek sırtından kilitlenir; tampon ve kaportaya temas sıfırdır.' },
    { q: 'Gece operasyonlarında yeterli aydınlatma ve güvenlik sağlanıyor mu?', a: 'Evet. Tüm kurtarıcılarımızda yüksek lümenli LED tepe ikaz barları, çalışma projektörleri ve 150 metrelik reflektör güvenlik konileri standarttır.' },
    { q: 'Aracımın yükleme ve indirme anı fotoğraflarını benimle paylaşıyor musunuz?', a: 'Evet. Özellikle şehirlerarası nakillerde ve sürücünün araç başında bulunamadığı teslimatlarda dört açıdan fotoğraflı tutanak WhatsApp üzerinden anlık paylaşılır.' }
  ];

  const html = `${P.head({
    title: 'Gebze Oto Çekici Saha Galerisi | Gerçek Operasyon Fotoğrafları',
    description: 'Gebze, TEM, D-100, GOSB, Darıca ve Çayırova’da gerçekleştirdiğimiz kayar kasa, aparatlı çekici, çoklu çekici, tenteli nakliye ve akü takviye operasyonlarından gerçek kareler.',
    canonical,
    schemas: [P.localBusinessSchema({ canonical }), P.breadcrumbSchema(bc), P.faqSchema(galFaqs)],
    regionName: 'Gebze'
  })}
${P.headerNav('gallery')}
<main id="main-content">
  <section class="page-editorial-hero">
    <div class="container">
      ${P.breadcrumbs(bc)}
      <div class="hero-editorial-top" style="margin-bottom:0;">
        <div>
          <div class="hero-status-pill"><span class="live-dot"></span><span>${GALLERY_ITEMS.length} Gerçek Operasyon &middot; Stok Görsel Yok</span></div>
          <h1>Gerçek Saha <span>Operasyon Galerisi.</span></h1>
        </div>
        <div class="hero-top-side">
          <p class="hero-lead">Gebze’nin otoyollarında, organize sanayi bölgelerinde ve mahalle sokaklarında hasarsız tamamladığımız kayar kasa çekici, aparatlı kurtarma, çoklu çekici ve yol yardım kareleri. Büyütmek için fotoğraflara dokunun.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:16px;">
    <div class="container">
      <div class="gallery-grid is-4col">
        ${GALLERY_ITEMS.map(g => `<button type="button" class="gallery-item" data-lightbox-src="/images/${g.img}.webp" data-lightbox-cap="${P.esc(g.cap)}" aria-label="${P.esc(g.cap)}">
          ${P.pictureTag(g.img, g.cap, false)}
          <span class="gallery-caption">${P.esc(g.cap)}</span>
        </button>`).join('\n        ')}
      </div>
    </div>
  </section>

  ${stepsSection('Hasarsız Yükleme Protokolü', '4 Noktadan Profesyonel Sabitleme Sürecimiz', 'Her aracı kendi aracımız hassasiyetiyle platforma alıyor, yol boyu sıfır hareketle teslim ediyoruz.')}

  <section class="section section-white cv-auto">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">Filo Ekipman Standartları</span>
        <h2 class="section-title">Sahada Kullandığımız Donanım Altyapısı</h2>
      </div>
      <div class="fleet-grid">
        <div class="fleet-card">
          <div class="why-deck-head">
            <span class="why-deck-code">01 / Kayar Kasa</span>
            <span class="why-icon-wrap">${P.ICONS.truck}</span>
          </div>
          <h3>Hidrolik Kayar Kasa Platformlar</h3>
          <p class="section-desc">6° altı uzatma rampalarıyla alçak şasili binek, spor ve elektrikli otomobillerde tampon ve batarya altı tam koruma.</p>
        </div>
        <div class="fleet-card">
          <div class="why-deck-head">
            <span class="why-deck-code">02 / Aparatlı &amp; Çoklu Çekici</span>
            <span class="why-icon-wrap">${P.ICONS.wrench}</span>
          </div>
          <h3>Aparatlı &amp; Çoklu Çekici Filosu</h3>
          <p class="section-desc">Kilitli şanzıman, sıkışık park ve şarampol kurtarmalarında dört lastikten dikey kaldırma ve makaralı çekiş gücü.</p>
        </div>
        <div class="fleet-card">
          <div class="why-deck-head">
            <span class="why-deck-code">03 / Kapalı Otopark</span>
            <span class="why-icon-wrap">${P.ICONS.shield}</span>
          </div>
          <h3>1.88m Kapalı Otopark &amp; Mobil Yardım</h3>
          <p class="section-desc">Kilitli araçlar için tekerlek aparatlı çekici, 3.5 ton tenteli nakliye ve 12V/24V profesyonel dijital akü takviye üniteleri.</p>
        </div>
      </div>
    </div>
  </section>

  ${faqSplitSection('Galeri & Güvenlik SSS', 'Yükleme ve Araç Güvenliği Hakkında Sorular', 'Spanset sabitleme, gece aydınlatması ve teslimat fotoğraf tutanağı hakkında merak edilenler.', galFaqs, false)}
</main>
${P.lightboxModal()}
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

  writeHtml('galeri.html', html);
}

// ============================================================================
// 6. HAKKIMIZDA (hakkimizda.html) — Kural 2.9: 8 ZORUNLU BLOK
// ============================================================================
function buildAboutPage() {
  const canonical = `${SITE_URL}/hakkimizda.html`;
  const bc = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hakkımızda', href: '/hakkimizda.html' }
  ];
  const aboutFaqs = [
    { q: 'Fotoğraflı teslim tutanağı hangi aşamadan itibaren geçerli oluyor?', a: 'Fotoğraflı teslim tutanağı ve K1/K2 belgeli güvenli nakil sürecimiz aracınızın çekici rampasına alınmaya başladığı ilk andan hedef servise indirilip teslim tutanağının imzalanmasına kadar tam kapsamlı olarak geçerlidir.' },
    { q: 'Sabit fiyat politikanız nasıl işliyor?', a: 'Aracınızın konumu, tipi ve teslim adresine göre çağrı sırasında tek bir net rakam veriyoruz. Onayladığınız bu rakam dışında gece, trafik veya yükleme aparatı bahanesiyle ek ücret talep edilmez.' },
    { q: 'OSB şirket filoları için düzenli özenli çalışma yapıyor musunuz?', a: 'Evet. GOSB, TOSB, Güzeller OSB, Dilovası ve Şekerpınar’daki kurumsal işletmelere resmi fotoğraflı teslim tutanağı ve öncelikli filo müdahale desteği sunuyoruz.' },
    { q: 'Yasal yetki belgeleriniz (K1 / K2) ve operatör sertifikalarınız tam mı?', a: 'Evet. Tüm kurtarıcı filomuz karayolu taşıma mevzuatına uygun yasal yetki belgelerine, periyodik hidrolik bakım kayıtlarına ve SRC/psikoteknik belgeli deneyimli operatörlere sahiptir.' },
    { q: 'Gece vardiyasında ve resmi tatillerde gerçekten kendi ekibiniz mi geliyor?', a: 'Evet. Çağrıları başka komisyonculara devretmeden, 7 gün 24 saat kendi nöbetçi araçlarımız ve kadrolu saha personelimizle doğrudan hizmet veriyoruz.' }
  ];

  const html = `${P.head({
    title: 'Hakkımızda & Filomuz | Gebze Çekici 7/24 Nöbetçi Çekici',
    description: '14+ yıllık Gebze saha tecrübesi, K1/K2 yetki belgeli modern kayar kasa, aparatlı çekici, çoklu çekici ve 3.5 ton tenteli nakliye filomuzla tam profesyonel oto kurtarma.',
    canonical,
    ogImage: 'client-kamyonet',
    heroPreload: 'client-kamyonet',
    schemas: [P.localBusinessSchema({ canonical }), P.breadcrumbSchema(bc), P.faqSchema(aboutFaqs)],
    regionName: 'Gebze'
  })}
${P.headerNav('about')}
<main id="main-content">
  <!-- Blok 1: Kurumsal Editoryal Hero -->
  <section class="page-editorial-hero">
    <div class="container">
      ${P.breadcrumbs(bc)}
      <div class="hero-editorial-top">
        <div>
          <div class="hero-status-pill"><span class="live-dot"></span><span>K1 &amp; K2 Yetki Belgeli &middot; 14+ Yıl Tecrübe</span></div>
          <h1>Gebze’de Şeffaf ve <span>Profesyonel Oto Kurtarma.</span></h1>
        </div>
        <div class="hero-top-side">
          <p class="hero-lead">14 yılı aşkın saha tecrübemizle Gebze’nin tüm mahallelerinde, organize sanayi bölgelerinde ve otoyol koridorlarında modern kayar kasa filomuzla sürücülerin yanındayız.</p>
        </div>
      </div>
      <div class="obsidian-stats-strip">
        <div class="obsidian-stat"><strong>10–15 Dk</strong><span>Ortalama Gebze Varışı</span></div>
        <div class="obsidian-stat"><strong>7/24</strong><span>Aktif Nöbetçi Filo</span></div>
        <div class="obsidian-stat"><strong>7/24</strong><span>Nöbetçi Çekici Filosu</span></div>
        <div class="obsidian-stat"><strong>5.0 / 5</strong><span>420+ Müşteri Puanı</span></div>
      </div>
    </div>
  </section>

  <!-- Blok 2: Kurumsal Hikaye & Biz Kimiz? (Split-Screen) -->
  <section class="section section-white">
    <div class="container">
      <div class="about-split">
        <div>
          <span class="section-eyebrow" style="margin-bottom:12px;">Biz Kimiz?</span>
          <h2 class="section-title" style="margin-bottom:16px;">Dürüst Esnaflık, Net Sabit Fiyat ve Yerel Gebze Hakimiyeti</h2>
          <p style="color:var(--ink-2);margin-bottom:14px;">Gebze Çekici, yolda kalmanın sürücü için ne kadar stresli bir an olduğunu bilerek yola çıktı. Sektördeki en büyük sorun olan geç varış, yükleme sonrası sürpriz fiyat artışı ve eski tip çekicilerle tampon-şasi hasarı yaşatma alışkanlıklarını tamamen ortadan kaldıran disiplinli bir filo sistemi kurduk.</p>
          <p style="color:var(--ink-2);margin-bottom:14px;">Gebze’nin dik mahalle sokaklarını, GOSB ve TOSB’un vardiya yoğunluğunu, TEM ve D-100’ün şerit bağlantılarını, Eskihisar rampasını ve site kapalı garajlarını avucunun içi gibi bilen yerel kadromuzla her çağrıya komisyonsuz, doğrudan kendi araçlarımızla yanıt veriyoruz.</p>
          <p style="color:var(--ink-2);">İster tek bir binek aracın akü takviyesi ister büyük bir OSB işletmesinin ticari filo nakli olsun; her operasyonda aynı şeffaflık, aynı temizlik ve aynı güvenlik protokolünü uyguluyoruz.</p>
        </div>
        <div class="about-media-wrap">
          ${P.pictureTag('client-kamyonet', 'Gebze Çekici modern çekici filosu', true)}
          <div class="why-stat">
            <strong>14+ Yıl</strong>
            <span>Kesintisiz Gebze Saha Tecrübesi</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Blok 2.5: Misyonumuz & Vizyonumuz -->
  <section class="section cv-auto" style="padding-top:10px;">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">Kurumsal İlkelerimiz</span>
        <h2 class="section-title">Misyonumuz &amp; Vizyonumuz</h2>
        <p class="section-desc">Yolda kalan her sürücüye ve acil yük sevkiyatına hızlı, şeffaf ve özenli çözüm üretmek için çalışıyoruz.</p>
      </div>
      <div class="mission-vision-grid">
        <div class="mv-card">
          <div class="why-deck-head">
            <span class="why-deck-code">01 / Misyonumuz</span>
            <span class="why-icon-wrap">${P.ICONS.shield}</span>
          </div>
          <h3>Misyonumuz</h3>
          <p>Gebze, Darıca, Çayırova, Dilovası, Bayramoğlu, Tuzla Şifa ve Hereke hattında yolda kalan sürücülere gece gündüz fark etmeksizin en kısa sürede ulaşmak; aracın ve yükün güvenliğini ön planda tutarak sürpriz masraf çıkarmayan, dürüst ve erişilebilir yol yardım ile şehir içi/şehirlerarası taşıma hizmeti sunmaktır.</p>
        </div>
        <div class="mv-card">
          <div class="why-deck-head">
            <span class="why-deck-code">02 / Vizyonumuz</span>
            <span class="why-icon-wrap">${P.ICONS.truck}</span>
          </div>
          <h3>Vizyonumuz</h3>
          <p>Modern araç filomuzu, aparatlı kurtarma donanımlarımızı, çoklu çekici ve 3.5 tona kadar tenteli özel yük taşımacılığı kapasitemizi sürekli geliştirerek Kocaeli ve İstanbul Anadolu Yakası sınır koridorunda akla ilk gelen, tavsiye edilen ve güven duyulan yol yardım markası olmaktır.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Blok 3: Modern Araç Filomuz & Donanım Altyapımız (5 Donanım Kartı) -->
  <section class="section cv-auto">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">Araç Filomuz</span>
        <h2 class="section-title">5 Özel Sınıfta Modern Kurtarma Donanımı</h2>
        <p class="section-desc">Her araç ve arıza tipine tek tip eski kamyonet değil, işin gerektirdiği özel donanımlı kurtarıcıyı yönlendiriyoruz.</p>
      </div>
      <div class="fleet-grid">
        <div class="fleet-card">
          <div class="why-deck-head">
            <span class="why-deck-code">01 / Kayar Kasa</span>
            <span class="why-icon-wrap">${P.ICONS.truck}</span>
          </div>
          <h3>Hidrolik Kayar Kasa Çekiciler</h3>
          <p class="section-desc">Binek, SUV, elektrikli ve alçak şasili spor otomobiller için 6° altı uzatma rampalı, 4 tekerlek spanzetli sıfır hasarlı taşıma.</p>
        </div>
        <div class="fleet-card">
          <div class="why-deck-head">
            <span class="why-deck-code">02 / Aparatlı &amp; Çoklu Çekici</span>
            <span class="why-icon-wrap">${P.ICONS.wrench}</span>
          </div>
          <h3>Aparatlı &amp; Çoklu Çekici Donanımı</h3>
          <p class="section-desc">Tekerleği dönmeyen ve şanzımanı P konumunda kilitli araçlar için tekerlek aparatlı kurtarıcılar ve şehirlerarası ekonomik çoklu çekici filosu.</p>
        </div>
        <div class="fleet-card">
          <div class="why-deck-head">
            <span class="why-deck-code">03 / Tenteli Yük Taşıma</span>
            <span class="why-icon-wrap">${P.ICONS.shield}</span>
          </div>
          <h3>Şehir İçi &amp; Şehirlerarası Tenteli Taşıma (3.5 Ton)</h3>
          <p class="section-desc">3.5 tona kadar özel yük, paletli sanayi malzemesi ve acil gönderileriniz için kapalı tenteli araçla şehir içi ve şehirlerarası özenli taşımacılık.</p>
        </div>
        <div class="fleet-card">
          <div class="why-deck-head">
            <span class="why-deck-code">04 / OSB Ticari</span>
            <span class="why-icon-wrap">${P.ICONS.truck}</span>
          </div>
          <h3>Ticari &amp; Ağır Hizmet Taşıyıcıları</h3>
          <p class="section-desc">OSB lojistik panelvanları, 16+1 personel minibüsleri, pikaplar ve 3.5 tona kadar forkliftler için uzun şasi güçlendirilmiş platform.</p>
        </div>
        <div class="fleet-card">
          <div class="why-deck-head">
            <span class="why-deck-code">05 / Mobil Yardım</span>
            <span class="why-icon-wrap">${P.ICONS.check}</span>
          </div>
          <h3>Mobil Yol Yardım &amp; Akü Booster Donanımı</h3>
          <p class="section-desc">12V/24V profesyonel 12V/24V dijital akü takviye istasyonları, alternatör test cihazı ve akülü torklu yerinde lastik değişim kiti.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Blok 4: 4 Aşamalı Standart Operasyon Süreci -->
  ${stepsSection('Operasyon Standardımız', 'Nasıl Çalışıyoruz? 4 Aşamalı Süreç', 'İlk telefon çağrısından özenli teslimata kadar her adım kayıtlı ve şeffaf ilerler.')}

  <!-- Blok 5: Müşteri Güvencelerimiz & Kurumsal Standartlarımız -->
  ${whyUsBentoSection('Kurumsal Güvencelerimiz', 'Temel Hizmet & Güven Standartlarımız', 'K1/K2 yetki belgeli yasal taşımacılık, tam fotoğraflı teslim tutanağı ve sürprizsiz sabit fiyat politikası.')}

  <!-- Blok 6: Gerçek Saha Operasyonları Galeri Önizlemesi -->
  ${galleryPreviewSection(6, 'Sahadan Gerçek Operasyon Kareleri')}

  <!-- Blok 7: Kurumsal SSS -->
  ${faqSplitSection('Kurumsal SSS', 'Filo, Ekipman ve Süreç Hakkında Merak Edilenler', 'Fotoğraflı teslim tutanağı, K1/K2 yetki belgeleri, OSB kurumsal anlaşmaları ve sabit fiyat politikamız.', aboutFaqs, true)}
</main>
${P.lightboxModal()}
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

  writeHtml('hakkimizda.html', html);
}

// ============================================================================
// 7. İLETİŞİM (iletisim.html)
// ============================================================================
function buildContactPage() {
  const canonical = `${SITE_URL}/iletisim.html`;
  const bc = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'İletişim', href: '/iletisim.html' }
  ];

  const html = `${P.head({
    title: 'İletişim & 7/24 Konum | Gebze Çekici — 0533 945 45 14',
    description: 'Gebze 7/24 acil oto çekici telefon numarası (0533 945 45 14), WhatsApp konum paylaşımı, nöbetçi intikal merkezi haritası ve hızlı fiyat teklif formu.',
    canonical,
    schemas: [P.localBusinessSchema({ canonical }), P.breadcrumbSchema(bc)],
    regionName: 'Gebze'
  })}
${P.headerNav('contact')}
<main id="main-content">
  <section class="page-editorial-hero">
    <div class="container">
      ${P.breadcrumbs(bc)}
      <div class="hero-editorial-top" style="margin-bottom:0;">
        <div>
          <div class="hero-status-pill"><span class="live-dot"></span><span>${BUSINESS.phoneDisplay}</span></div>
          <h1>7/24 İletişim <span>&amp; Acil Çekici Hattı.</span></h1>
        </div>
        <div class="hero-top-side">
          <p class="hero-lead">Gebze, GOSB, Çayırova, Darıca, Dilovası, TEM ve D-100 hattında arıza veya kaza anında aracısız, doğrudan nöbetçi saha operatörümüze ulaşın.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:16px;">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-row">
            <span class="contact-row-icon">${P.ICONS.phone}</span>
            <div>
              <strong>7/24 Acil Telefon Hattı</strong>
              <a href="tel:${BUSINESS.phoneTel}">${BUSINESS.phoneDisplay}</a>
            </div>
          </div>
          <div class="contact-row">
            <span class="contact-row-icon">${P.ICONS.whatsapp}</span>
            <div>
              <strong>WhatsApp Konum &amp; Anlık Fiyat</strong>
              <a href="${P.waUrl('Gebze')}" class="btn-send-location" data-region="Gebze" target="_blank" rel="noopener noreferrer">0533 945 45 14 (WhatsApp)</a>
            </div>
          </div>
          <div class="contact-row">
            <span class="contact-row-icon">${P.ICONS.pin}</span>
            <div>
              <strong>Nöbetçi Merkez Konumu</strong>
              <span>${P.esc(BUSINESS.address.street)} — Gebze / Kocaeli</span>
            </div>
          </div>
          <div class="contact-row">
            <span class="contact-row-icon">${P.ICONS.clock}</span>
            <div>
              <strong>Çalışma Düzeni</strong>
              <span>${P.esc(BUSINESS.hours)} — Bayram ve Hafta Sonu Açık</span>
            </div>
          </div>
        </div>
        ${P.dispatchPanel('Gebze', 'contact-quote', BUSINESS.etaMinutes)}
      </div>

      <div style="margin-top:24px;">
        ${P.mapFacadeCard()}
      </div>
    </div>
  </section>
</main>
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

  writeHtml('iletisim.html', html);
}

// ============================================================================
// 8. GİZLİLİK & KVKK POLİTİKASI (gizlilik-politikasi.html — Google Ads Kalkanı)
// ============================================================================
function buildPrivacyPage() {
  const canonical = `${SITE_URL}/gizlilik-politikasi.html`;
  const bc = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Gizlilik & KVKK Politikası', href: '/gizlilik-politikasi.html' }
  ];

  const html = `${P.head({
    title: 'Gizlilik, KVKK ve Çerez Politikası | Gebze Çekici',
    description: 'Gebze Çekici web sitesi (gebzecekici.tr) 6698 sayılı KVKK aydınlatma metni, gizlilik ilkeleri ve çerez kullanım politikası.',
    canonical,
    schemas: [P.breadcrumbSchema(bc)],
    regionName: 'Gebze'
  })}
${P.headerNav('')}
<main id="main-content">
  <section class="page-editorial-hero">
    <div class="container">
      ${P.breadcrumbs(bc)}
      <div class="hero-editorial-top" style="margin-bottom:0;">
        <div>
          <div class="hero-status-pill"><span class="live-dot"></span><span>Yasal Aydınlatma</span></div>
          <h1>Gizlilik, KVKK <span>&amp; Çerez Politikası.</span></h1>
        </div>
        <div class="hero-top-side">
          <p class="hero-lead">${P.esc(BUSINESS.legalName)} (gebzecekici.tr) olarak ziyaretçilerimizin ve yol yardım müşterilerimizin kişisel verilerinin korunmasına yüksek özen gösteriyoruz.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:12px;">
    <div class="container">
      <div class="article-body">
        <h2>1. Veri Sorumlusu ve Kapsam</h2>
        <p>Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca <strong>${P.esc(BUSINESS.legalName)}</strong> tarafından sunulan oto çekici, oto kurtarma ve yol yardım hizmetleri ile <strong>gebzecekici.tr</strong> web sitesi üzerinden yürütülen iletişim süreçlerinde paylaşılan kişisel verilerin işlenme esaslarını açıklar.</p>

        <h2>2. İşlenen Kişisel Veriler ve Amaçları</h2>
        <p>Acil çekici talebi oluşturduğunuzda telefon, WhatsApp veya teklif yönlendirme formu üzerinden tarafımıza ilettiğiniz telefon numarası, konum bilgisi, araç tipi ve teslimat süreci talep etmeniz halinde ad-soyad/unvan ile vergi/TC kimlik bilgileri yalnızca aşağıdaki amaçlarla işlenir:</p>
        <ul class="prose-list">
          <li>${P.ICONS.check} <span>Bulunduğunuz noktaya en yakın nöbetçi kurtarıcının yönlendirilmesi ve güvenli araç naklinin tamamlanması</span></li>
          <li>${P.ICONS.check} <span>fotoğraflı teslim tutanağı ve taşıma süreçlerinin yasal mevzuata uygun yürütülmesi</span></li>
          <li>${P.ICONS.check} <span>Resmi teslim tutanağı düzenlenmesi, ödeme kayıtlarının ve kasko geri ödeme belgelerinin hazırlanması</span></li>
          <li>${P.ICONS.check} <span>Hizmet kalitesinin ölçülmesi, sahte reklam tıklamalarının (click fraud) ve spam bot trafiğinin engellenmesi</span></li>
        </ul>

        <h2>3. Verilerin Aktarılması ve Saklama Süresi</h2>
        <p>Paylaşılan konum ve iletişim verileri hiçbir koşulda üçüncü taraf pazarlama şirketlerine satılmaz veya izinsiz paylaşılmaz. Kişisel veriler yalnızca operasyonun icrası için görevli saha personelimizle ve yasal yükümlülük gereği teslimat süreci/sigorta süreçlerinde yetkili kurumlarla sınırlı olarak paylaşılır; ilgili yasal saklama sürelerinin dolmasının ardından güvenli biçimde silinir veya anonim hale getirilir.</p>

        <h2>4. Çerezler (Cookies) ve Analitik Araçlar</h2>
        <p>Web sitemiz performans ve kullanıcı deneyimini iyileştirmek amacıyla temel teknik çerezler ile devreye alındığında Google Analytics (GA4) ve Google Ads dönüşüm ölçüm teknolojilerini kullanabilir. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman kısıtlayabilir veya silebilirsiniz.</p>

        <h2>5. KVKK Madde 11 Kapsamındaki Haklarınız</h2>
        <p>KVKK’nın 11. maddesi uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, düzeltilmesini veya silinmesini isteme haklarına sahipsiniz. Talepleriniz için <strong>${BUSINESS.phoneDisplay}</strong> hattımızdan veya <strong>${BUSINESS.email}</strong> adresimizden bizimle iletişime geçebilirsiniz.</p>
      </div>
    </div>
  </section>
</main>
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

  writeHtml('gizlilik-politikasi.html', html);
}

// ============================================================================
// 9. ÖZEL 404 SAYFASI (404.html)
// ============================================================================
function build404Page() {
  const html = `${P.head({
    title: 'Sayfa Bulunamadı (404) | Gebze Çekici',
    description: 'Aradığınız sayfa bulunamadı. Gebze, GOSB, Çayırova, Darıca ve TEM hattında 7/24 acil oto çekici ve yol yardım için hemen arayın: 0533 945 45 14.',
    noindex: true,
    regionName: 'Gebze'
  })}
${P.headerNav('')}
<main id="main-content">
  <div class="container">
    <div class="error-card">
      <div class="error-code">404</div>
      <h1 style="font-size:1.75rem;margin-bottom:10px;">Aradığınız Sayfa Bulunamadı</h1>
      <p style="color:var(--muted);margin-bottom:22px;">Sayfa taşınmış veya adres hatalı yazılmış olabilir. Acil çekiciye ihtiyacınız varsa hemen arayabilir veya ana sayfaya dönebilirsiniz.</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
        <a href="tel:${BUSINESS.phoneTel}" class="btn btn-call">${P.ICONS.phone} <span>Hemen Ara — ${BUSINESS.phoneDisplay}</span></a>
        <a href="/" class="btn btn-outline">Ana Sayfaya Dön</a>
      </div>
    </div>
  </div>
</main>
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

  writeHtml('404.html', html);
}

// ============================================================================
// 10. GEBZE ÇEKİCİ FİYATLARI & SABİT FİYAT POLİTİKASI (gebze-cekici-fiyatlari.html)
// Rakam/TL listesi yazmadan şeffaf kriterler + telefonda anında net sabit fiyat
// ============================================================================
function buildPricingPage() {
  const canonical = `${SITE_URL}/gebze-cekici-fiyatlari.html`;
  const bc = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Gebze Çekici Fiyatları', href: '/gebze-cekici-fiyatlari.html' }
  ];
  const pricingFaqs = [
    { q: 'Gebze çekici fiyatını yola çıkmadan kesin olarak öğrenebilir miyim?', a: 'Evet. 0533 945 45 14 numaramızdan aradığınızda veya WhatsApp üzerinden konumunuzu paylaştığınızda bulunduğunuz bölge, araç sınıfı ve teslimat adresine göre saniyeler içinde tamamen ücretsiz ve kesin sabit fiyat bilgisi verilir.' },
    { q: 'Neden web sitesinde sabit bir TL listesi yerine telefonda fiyat veriyorsunuz?', a: 'Her arıza senaryosu birbirinden farklıdır; şehir içi kısa mesafe, otoyol çıkışı, aparatlı çekici, çoklu çekici, 3.5 ton tenteli nakliye veya uzun şasi ticari panelvan farklı ekipman ve mesafe gerektirir. Sizi yanıltacak tahmini listeler yerine doğrudan durumunuza özel en doğru ve ekonomik net rakamı telefonda bildiriyoruz.' },
    { q: 'Gece vardiyasında, hafta sonu veya trafikte ekstra ücret çıkıyor mu?', a: 'Hayır. Yükleme öncesinde telefonda onayladığınız sabit ücret kesindir; yol trafiği, gece saati, rampa uzatma aparatı veya bekleme bahanesiyle yükleme sonrası ek ücret talep edilmez.' },
    { q: 'nakit veya havale, kasko uyumlu teslim tutanağı seçenekleriniz var mı?', a: 'Evet. Tüm kurtarıcı araçlarımızda taşınabilir nakit ve havale cihazı standarttır. Nakit, kredi/banka kartı veya havale ile ödeme yapabilir, kasko geri ödemesine ve şirket muhasebesine uygun fotoğraflı teslim tutanağı alabilirsiniz.' },
    { q: 'Sadece akü takviyesi veya lastik değişimi için çekici ücreti mi ödenir?', a: 'Hayır. Aracın servise taşınmasına gerek olmayan boş akü veya stepne değişimi vakalarında çekici yerine ekonomik mobil yol yardım tarifemiz uygulanır.' },
    { q: 'Gebze’den İstanbul, İzmit veya farklı bir şehre araç taşıma fiyatı nasıl hesaplanır?', a: 'Şehirlerarası tekli VIP araç taşımalarında toplam kilometre mesafesi, aracın ağırlık sınıfı ve teslimat iline göre özel ekonomik sabit fiyat hesaplanır; telefonda onayınızla aktarmasız nakil başlatılır.' }
  ];

  const schemas = [
    P.localBusinessSchema({ canonical }),
    P.breadcrumbSchema(bc),
    P.faqSchema(pricingFaqs)
  ];

  const html = `${P.head({
    title: 'Gebze Çekici Fiyatları 2026 | Sabit Fiyat & Şeffaf Teklif',
    description: 'Gebze oto çekici ve yol yardım fiyatlandırma kriterleri. Sürpriz ücret yok; konumunuza ve araç tipinize özel net sabit fiyatı 30 saniyede telefonda öğrenin: 0533 945 45 14.',
    canonical,
    heroPreload: BUSINESS.heroImage.base,
    schemas,
    regionName: 'Gebze'
  })}
${P.headerNav('')}
<main id="main-content">
  <section class="page-editorial-hero">
    <div class="container">
      ${P.breadcrumbs(bc)}
      <div class="hero-editorial-top">
        <div>
          <div class="hero-status-pill"><span class="live-dot"></span><span>Telefonda 30 Sn Net Teklif &middot; Sürpriz Ek Ücret Yok</span></div>
          <h1>Gebze Çekici Fiyatları <span>&amp; Şeffaf Teklif Politikası.</span></h1>
        </div>
        <div class="hero-top-side">
          <p class="hero-lead">Yanıltıcı sabit listeler yerine bulunduğunuz konuma, araç sınıfınıza ve gideceğiniz mesafeye göre en ekonomik kesin fiyatı telefonda veya WhatsApp’ta 30 saniyede ücretsiz öğrenin.</p>
          <div class="hero-desktop-actions cta-row">
            <a href="tel:${BUSINESS.phoneTel}" class="btn btn-call">${P.ICONS.phone} <span>Fiyat Al — ${BUSINESS.phoneDisplay}</span></a>
            <a href="${P.waUrl('Gebze')}" class="btn btn-whatsapp btn-send-location" data-region="Gebze" target="_blank" rel="noopener noreferrer">${P.ICONS.whatsapp} <span>WhatsApp’tan Fiyat Sor</span></a>
          </div>
        </div>
      </div>

      <div class="hero-stage">
        ${P.showcaseCard(BUSINESS.heroImage.base, 'Gebze 7/24 şeffaf sabit fiyatlı kayar kasa oto çekici hizmeti', 'Gebze')}
        ${P.dispatchPanel('Gebze', 'pricing-quote', BUSINESS.etaMinutes)}
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:16px;">
    <div class="container">
      <div class="prose-layout">
        <div class="article-body">
          <h2>Gebze Oto Çekici Ücretleri Neye Göre Belirlenir?</h2>
          <p>Gebze, GOSB, TOSB, Çayırova, Darıca, Dilovası, TEM ve D-100 hattında çekici çağırırken sürücülerin en çok dikkat etmesi gereken konu, aracın yüklenmesinden önce <strong>net ve değişmeyecek tek bir sabit fiyat</strong> konusunda anlaşmaktır. İnternette yer alan temsili rakamlar gerçek mesafe, otoyol çıkışı veya özel aparat gereksinimini yansıtmadığı için yükleme sonrasında sürpriz farklar doğurabilir.</p>
          <p>Gebze Çekici olarak yanıltıcı tarife tabloları yerine her çağrıya özel, şeffaf ve bağlayıcı olmayan ücretsiz teklif sunuyoruz. <strong>0533 945 45 14</strong> hattımızı aradığınızda veya yukarıdaki formdan konum ve araç tipinizi ilettiğinizde, 30 saniye içinde kesin tutarı öğrenir; yalnızca onay vermeniz halinde nöbetçi ekibimiz yola çıkar.</p>

          <div class="seo-section-block">
            <h2>Fiyatlandırmayı Etkileyen 4 Temel Kriter</h2>
            <div class="table-wrap" style="margin:14px 0 8px;">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Kriter</th>
                    <th>Nasıl Değerlendirilir?</th>
                    <th>Sürücüye Avantajı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Yükleme ve Teslim Mesafesi</strong></td>
                    <td>Gebze içi mahalleler, OSB’ler, çevre ilçeler veya şehirlerarası kilometre rotası</td>
                    <td>30 noktada nöbetçi araçla gereksiz geliş mesafesi ödenmez</td>
                  </tr>
                  <tr>
                    <td><strong>Araç Sınıfı ve Ağırlığı</strong></td>
                    <td>Binek otomobil, SUV/4x4, elektrikli (EV), motosiklet, uzun şasi panelvan veya forklift</td>
                    <td>Aracınıza tam uyumlu platform gönderilir, hasar riski sıfırlanır</td>
                  </tr>
                  <tr>
                    <td><strong>Gerekli Özel Donanım</strong></td>
                    <td>Kayar kasa, Go-Jak tekerlek aparatı, çoklu çekici veya 3.5 ton tenteli nakliye</td>
                    <td>Kilitli şanzıman ve garaj vakalarında tek paket net teklif</td>
                  </tr>
                  <tr>
                    <td><strong>Yerinde Çözüm Seçeneği</strong></td>
                    <td>Çekici gerektirmeyen boş akü takviyesi veya mobil stepne lastik değişimi</td>
                    <td>Servise çekmeye gerek kalmadan çok daha ekonomik çözüm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="seo-section-block">
            <h2>Sürprizsiz Sabit Fiyat, Kasko Uyumlu teslim tutanağı</h2>
            <p>Telefonda onayladığınız fiyat dışında yol trafiği beklemesi, gece vardiyası, hafta sonu veya düşük eğimli uzatma rampası gibi gerekçelerle kesinlikle ek ücret talep edilmez. Tüm şehir içi ve şehirlerarası çekimlerimiz aracınız platforma alınmaya başladığı andan teslimata kadar <strong>fotoğraflı teslim tutanağı ve K1/K2 belgeli güvenli taşıma</strong> güvencesi altındadır.</p>
            <p>Ödemenizi nakit, araç içi taşınabilir nakit ve havale cihazımızla kredi/banka kartı veya kurumsal havale şeklinde gerçekleştirebilirsiniz. Bireysel kasko poliçenizin çekici geri ödeme süreci veya OSB şirket muhasebeniz için aynı gün fotoğraflı teslim tutanağı ile teslimat yapılır.</p>
          </div>

          <div class="callout-box">
            <strong>30 Saniyede Ücretsiz Sabit Fiyat Öğrenin</strong>
            Bulunduğunuz bölgeyi, araç tipinizi ve teslim edilecek adresi telefonda (0533 945 45 14) veya WhatsApp’ta paylaşın; size özel kesin fiyatı anında öğrenin. Fiyat sormak tamamen ücretsizdir.
          </div>

          <h2>Gebze Çekici Fiyatları Hakkında Sıkça Sorulanlar</h2>
          ${P.faqHtml(pricingFaqs)}
        </div>

        <aside class="sidebar-stack">
          <div class="sidebar-card is-dark">
            <h3>Anında Net Fiyat Alın</h3>
            <p style="font-size:0.86rem;color:#CBD5E1;margin-bottom:14px;">Aracınız için kesin ve sabit çekici ücretini doğrudan Gebze saha operatörümüzden 30 saniyede öğrenin.</p>
            <div style="display:flex;flex-direction:column;gap:9px;">
              <a href="tel:${BUSINESS.phoneTel}" class="btn btn-call" style="width:100%;">${P.ICONS.phone} <span>${BUSINESS.phoneDisplay}</span></a>
              <a href="${P.waUrl('Gebze')}" class="btn btn-whatsapp btn-send-location" data-region="Gebze" target="_blank" rel="noopener noreferrer" style="width:100%;">${P.ICONS.whatsapp} <span>WhatsApp’tan Fiyat Sor</span></a>
            </div>
          </div>

          <div class="sidebar-card">
            <h3>Başlıca Hizmetlerimiz</h3>
            <div class="sidebar-links">
              ${SERVICES.slice(0, 6).map(s => `<a href="/hizmetler/${s.slug}.html"><span>${P.esc(s.shortName)}</span>${P.ICONS.arrowRight}</a>`).join('\n              ')}
            </div>
          </div>

          <div class="sidebar-card">
            <h3>Öncelikli Gebze Bölgeleri</h3>
            <div class="sidebar-links">
              ${REGIONS.slice(0, 6).map(r => `<a href="/bolgeler/${r.slug}-cekici.html"><span>${P.esc(r.name)}</span>${P.ICONS.arrowRight}</a>`).join('\n              ')}
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</main>
${P.footer()}
${P.stickyActions('Gebze')}
${P.scripts()}`;

  writeHtml('gebze-cekici-fiyatlari.html', html);
}

// ── HEPSİNİ ÇALIŞTIR ─────────────────────────────────────────────────────────
buildHomePage();
buildPricingPage();
buildRegionsIndex();
buildRegionDetailPages();
buildServicesIndex();
buildServiceDetailPages();
buildBlogPages();
buildGalleryPage();
buildAboutPage();
buildContactPage();
buildPrivacyPage();
build404Page();

console.log(`✅ Üretim tamamlandı: Ana sayfa + ${REGIONS.length} bölge + ${SERVICES.length} hizmet + ${BLOG_POSTS.length} blog + 9 dizin/statik sayfa üretildi.`);
