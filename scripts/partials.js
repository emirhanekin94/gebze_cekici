'use strict';
/**
 * ============================================================================
 * TEK KAYNAK HTML PARTIALS (scripts/partials.js) — APPLE EDITORIAL SYSTEM v3
 * ============================================================================
 */

const { SITE_URL, BUSINESS, IMAGE_META, REVIEWS } = require('../data/business');
const { REGIONS } = require('../data/regions');
const { SERVICES } = require('../data/services');

function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const ICONS = {
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  clock: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  arrowRight: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  chevronDown: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>',
  menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="17" y2="17"/></svg>',
  truck: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  card: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
  star: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  wrench: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>',
  map: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>'
};

function waUrl(regionName) {
  const txt = `Merhaba ${BUSINESS.name}, acil çekiciye ihtiyacım var. Bulunduğum Bölge: ${regionName || 'Gebze'} (Konumumu hemen ardından paylaşıyorum.)`;
  return `https://api.whatsapp.com/send?phone=${BUSINESS.whatsappNumber}&text=${encodeURIComponent(txt)}`;
}

function pictureTag(imgBase, alt, isHero = false, className = '') {
  const meta = IMAGE_META[imgBase] || { w: 640, h: 360, portrait: false };
  const attrs = isHero
    ? 'fetchpriority="high" loading="eager" decoding="async"'
    : 'loading="lazy" decoding="async"';
  const cls = className ? ` class="${className}"` : '';
  return `<picture>
    <source media="(max-width: 768px)" srcset="/images/${imgBase}-m.webp" type="image/webp">
    <img src="/images/${imgBase}.webp" alt="${esc(alt)}" width="${meta.w}" height="${meta.h}" ${attrs}${cls}>
  </picture>`;
}

function isPortrait(imgBase) {
  return Boolean(IMAGE_META[imgBase] && IMAGE_META[imgBase].portrait);
}

// Saf, engelsiz 4:3 fotoğraf çerçevesi (altında kırık metin barı yok!)
function showcaseCard(imgBase, alt, locationLabel) {
  const portraitCls = isPortrait(imgBase) ? ' is-portrait' : '';
  const shortLoc = String(locationLabel || 'Gebze').split('(')[0].split('&')[0].trim();
  return `<div class="showcase-card${portraitCls}">
    ${pictureTag(imgBase, alt, true)}
    <span class="showcase-corner-tag"><span class="live-dot"></span> ${esc(shortLoc)} &middot; 7/24 Nöbetçi</span>
  </div>`;
}

function head({ title, description, canonical, ogImage, heroPreload, schemas = [], regionName = 'Gebze', noindex = false }) {
  const imgBase = ogImage || BUSINESS.heroImage.base;
  const imgMeta = IMAGE_META[imgBase] || { w: 1200, h: 630 };
  const imgUrl = `${SITE_URL}/images/${imgBase}.webp`;
  const scMeta = BUSINESS.analytics.searchConsoleVerification
    ? `\n  <meta name="google-site-verification" content="${esc(BUSINESS.analytics.searchConsoleVerification)}">`
    : '\n  <!-- Google Search Console doğrulama etiketi data/business.js üzerinden tek satırda aktifleşir -->';

  const preloadLinks = heroPreload
    ? `\n  <link rel="preload" as="image" href="/images/${heroPreload}-m.webp" media="(max-width: 768px)" fetchpriority="high">\n  <link rel="preload" as="image" href="/images/${heroPreload}.webp" media="(min-width: 769px)" fetchpriority="high">`
    : '';

  const schemaBlocks = schemas
    .map(obj => `  <script type="application/ld+json">${JSON.stringify(obj)}</script>`)
    .join('\n');

  const adsConfig = JSON.stringify({
    gtmId: BUSINESS.analytics.gtmId || '',
    ga4Id: BUSINESS.analytics.ga4Id || '',
    adsId: BUSINESS.analytics.adsId || '',
    adsCallConversion: BUSINESS.analytics.adsCallConversion || '',
    adsWhatsappConversion: BUSINESS.analytics.adsWhatsappConversion || '',
    whatsapp: BUSINESS.whatsappNumber,
    brand: BUSINESS.name,
    regionName
  });

  const gtmHeadBlock = BUSINESS.analytics.gtmId
    ? `\n  <script async src="https://www.googletagmanager.com/gtm.js?id=${esc(BUSINESS.analytics.gtmId)}"></script>\n  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});</script>`
    : '';

  const gtmBodyNoscript = BUSINESS.analytics.gtmId
    ? `\n<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${esc(BUSINESS.analytics.gtmId)}" height="0" width="0" style="display:none;visibility:hidden" loading="lazy"></iframe></noscript>`
    : '';

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  ${noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">'}${scMeta}
  ${canonical ? `<link rel="canonical" href="${esc(canonical)}">\n  <link rel="alternate" hreflang="tr" href="${esc(canonical)}">` : ''}
  <meta name="geo.region" content="TR-41">
  <meta name="geo.placename" content="${esc(regionName)}, Gebze, Kocaeli">
  <meta name="geo.position" content="${BUSINESS.geo.lat};${BUSINESS.geo.lng}">
  <meta name="ICBM" content="${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}">
  <meta name="theme-color" content="#111113">
  <link rel="icon" type="image/svg+xml" href="/images/favicon.svg">
  <link rel="manifest" href="/site.webmanifest">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="tr_TR">
  <meta property="og:site_name" content="${esc(BUSINESS.name)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  ${canonical ? `<meta property="og:url" content="${esc(canonical)}">` : ''}
  <meta property="og:image" content="${esc(imgUrl)}">
  <meta property="og:image:width" content="${imgMeta.w}">
  <meta property="og:image:height" content="${imgMeta.h}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${esc(imgUrl)}">${preloadLinks}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=Manrope:wght@700;800&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=Manrope:wght@700;800&display=swap"></noscript>
  <link rel="stylesheet" href="/css/style.css?v=11">${gtmHeadBlock}
  <script>window.__SITE_ADS__=${adsConfig};</script>
${schemaBlocks}
</head>
<body data-theme="${BUSINESS.themeId}">${gtmBodyNoscript}
<a class="skip-link" href="#main-content">Ana içeriğe geç</a>`;
}

function headerNav(activeKey, regionCtx = null) {
  const navTitle = regionCtx ? regionCtx.navbarTitle : 'GEBZE ÇEKİCİ';
  const navSub = regionCtx ? regionCtx.navbarSub : BUSINESS.navSub;

  const links = [
    { key: 'home', href: '/', label: 'Ana Sayfa' },
    { key: 'services', href: '/hizmetler/', label: 'Hizmetler' },
    { key: 'regions', href: '/bolgeler/', label: 'Bölgeler' },
    { key: 'gallery', href: '/galeri.html', label: 'Galeri' },
    { key: 'blog', href: '/blog/', label: 'Rehber' },
    { key: 'about', href: '/hakkimizda.html', label: 'Hakkımızda' },
    { key: 'contact', href: '/iletisim.html', label: 'İletişim' }
  ];

  const desktopLinksHtml = links
    .map(l => `<a href="${l.href}"${activeKey === l.key ? ' class="is-active" aria-current="page"' : ''}>${l.label}</a>`)
    .join('\n        ');

  const mobileLinksHtml = links
    .map(l => `<a href="${l.href}"${activeKey === l.key ? ' class="is-active"' : ''}><span>${l.label}</span>${ICONS.arrowRight}</a>`)
    .join('\n      ');

  return `<header class="site-header">
  <div class="header-inner">
    <a href="/" class="brand-link" aria-label="${esc(navTitle)} — Ana Sayfa">
      <img src="/images/logo.svg" alt="${esc(BUSINESS.name)} Amblem" width="38" height="38" class="brand-mark">
      <div class="logo-text">
        <span class="logo-title">${esc(navTitle)}</span>
        <span class="logo-sub">${esc(navSub)}</span>
      </div>
    </a>
    <nav class="desktop-nav" aria-label="Ana Menü">
        ${desktopLinksHtml}
    </nav>
    <div class="header-cta">
      <a href="tel:${BUSINESS.phoneTel}" class="btn-header-call" aria-label="Hemen Ara ${BUSINESS.phoneDisplay}">
        ${ICONS.phone} <span>${BUSINESS.phoneDisplay}</span>
      </a>
    </div>
    <button type="button" class="menu-toggle" data-menu-toggle aria-label="Menüyü Aç / Kapat" aria-expanded="false" aria-controls="mobile-drawer">
      ${ICONS.menu}
    </button>
  </div>
</header>
<nav id="mobile-drawer" class="mobile-drawer" aria-label="Mobil Menü">
  <div class="mobile-drawer-list">
      ${mobileLinksHtml}
  </div>
</nav>`;
}

function breadcrumbs(items) {
  const html = items
    .map((it, idx) => {
      const isLast = idx === items.length - 1;
      if (isLast) return `<span class="bc-current" aria-current="page">${esc(it.label)}</span>`;
      return `<a href="${it.href}">${esc(it.label)}</a><span class="bc-sep" aria-hidden="true">/</span>`;
    })
    .join('');
  return `<nav class="breadcrumb" aria-label="Sayfa Konumu">${html}</nav>`;
}

function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.label,
      item: it.href ? `${SITE_URL}${it.href}` : undefined
    }))
  };
}

function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };
}

function localBusinessSchema({ canonical, areaServed = 'Gebze, Kocaeli', locality = 'Gebze', lat = BUSINESS.geo.lat, lng = BUSINESS.geo.lng, includeCatalog = false }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['AutoRepair', 'EmergencyService', 'TowingService'],
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.name,
    url: canonical || `${SITE_URL}/`,
    logo: `${SITE_URL}/images/logo.svg`,
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    image: `${SITE_URL}/images/${BUSINESS.heroImage.base}.webp`,
    hasMap: BUSINESS.maps.shareUrl,
    priceRange: '₺₺',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Nakit, Kredi Kartı, Mobil POS, Havale',
    areaServed,
    knowsAbout: [
      'Oto Çekici',
      'Oto Kurtarma',
      'Kayar Kasa Çekici',
      'Kapalı Otopark Çekici',
      'Ahtapot Vinçli Kurtarıcı',
      'Elektrikli Araç Taşıma',
      'Yerinde Akü Takviye',
      'Mobil Lastik Yol Yardım',
      'OSB Ticari Araç Çekici',
      'Şehirlerarası Araç Taşıma'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: lat,
      longitude: lng
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating.value,
      reviewCount: '420'
    }
  };

  if (includeCatalog) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Gebze Oto Çekici ve Yol Yardım Hizmetleri',
      itemListElement: SERVICES.map(s => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `Gebze ${s.name}`,
          url: `${SITE_URL}/hizmetler/${s.slug}.html`,
          description: s.cardDesc
        }
      }))
    };
    schema.review = REVIEWS.map(rev => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: rev.name },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: rev.text
    }));
  }

  return schema;
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: `${SITE_URL}/`,
    inLanguage: 'tr-TR',
    publisher: { '@id': `${SITE_URL}/#organization` }
  };
}

function serviceSchema(s, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Gebze ${s.name}`,
    serviceType: s.name,
    description: s.metaDesc,
    url: canonical,
    image: `${SITE_URL}/images/${s.img}.webp`,
    areaServed: ['Gebze', 'GOSB', 'TOSB', 'Çayırova', 'Darıca', 'Dilovası', 'Kocaeli'],
    provider: {
      '@type': 'TowingService',
      '@id': `${SITE_URL}/#organization`,
      name: BUSINESS.legalName,
      telephone: BUSINESS.phoneTel
    }
  };
}

function dispatchPanel(selectedRegionName = 'Gebze', formId = 'dispatch-home', etaLabel = BUSINESS.etaMinutes) {
  const optionsHtml = REGIONS.map(r => {
    const isSel = r.name === selectedRegionName ? ' selected' : '';
    return `<option value="${esc(r.name)}"${isSel}>${esc(r.name)}</option>`;
  }).join('\n          ');

  return `<div class="dispatch-panel">
  <div class="dispatch-top">
    <div>
      <span class="dispatch-eyebrow"><span class="live-dot"></span> 26 Bölgede Aktif Nöbetçi</span>
      <div class="dispatch-title">Hızlı Çekici &amp; Fiyat Talebi</div>
    </div>
    <div class="dispatch-eta-box">
      <strong>${esc(etaLabel)}</strong>
      <span>Ort. İntikal</span>
    </div>
  </div>
  <form class="quote-form" data-quote-form id="${formId}">
    <div class="form-field">
      <label for="${formId}-region">Bulunduğunuz Bölge</label>
      <select class="form-control" id="${formId}-region" name="region">
          ${optionsHtml}
      </select>
    </div>
    <div class="form-field">
      <label for="${formId}-vehicle">Araç Tipi</label>
      <select class="form-control" id="${formId}-vehicle" name="vehicle">
        <option value="Binek Otomobil">Binek Otomobil</option>
        <option value="SUV / 4x4 Araç">SUV / 4x4 Araç</option>
        <option value="Elektrikli / Hibrit Araç">Elektrikli / Hibrit Araç</option>
        <option value="Ticari Panelvan / Minibüs">Ticari Panelvan / Minibüs</option>
        <option value="Motosiklet / ATV">Motosiklet / ATV</option>
        <option value="Forklift / İş Makinesi">Forklift / İş Makinesi</option>
      </select>
    </div>
    <button type="submit" class="btn btn-whatsapp quote-submit-btn">
      ${ICONS.whatsapp} <span>WhatsApp’tan Sabit Fiyat Al</span>
    </button>
  </form>
  <div class="dispatch-specs">
    <div class="dispatch-spec-item"><strong>%100</strong><span>Taşıma Kaskosu</span></div>
    <div class="dispatch-spec-item"><strong>Sabit</strong><span>Net Fiyat Onayı</span></div>
    <div class="dispatch-spec-item"><strong>${BUSINESS.rating.value} ★</strong><span>${BUSINESS.rating.count} Yorum</span></div>
  </div>
</div>`;
}

function quoteForm(selectedRegionName = 'Gebze', formId = 'quote-main') {
  const optionsHtml = REGIONS.map(r => {
    const isSel = r.name === selectedRegionName ? ' selected' : '';
    return `<option value="${esc(r.name)}"${isSel}>${esc(r.name)}</option>`;
  }).join('\n          ');

  return `<div class="region-quote-box">
  <div class="quote-box-head">
    <div class="quote-box-title">${ICONS.whatsapp} Hızlı WhatsApp Fiyat Teklifi</div>
    <span class="quote-box-note">Sabit Fiyat &middot; 30 Sn Yanıt</span>
  </div>
  <form class="quote-form" data-quote-form id="${formId}">
    <div class="form-field">
      <label for="${formId}-region">Bulunduğunuz Bölge</label>
      <select class="form-control" id="${formId}-region" name="region">
          ${optionsHtml}
      </select>
    </div>
    <div class="form-field">
      <label for="${formId}-vehicle">Araç Tipi</label>
      <select class="form-control" id="${formId}-vehicle" name="vehicle">
        <option value="Binek Otomobil">Binek Otomobil</option>
        <option value="SUV / 4x4 Araç">SUV / 4x4 Araç</option>
        <option value="Elektrikli / Hibrit Araç">Elektrikli / Hibrit Araç</option>
        <option value="Ticari Panelvan / Minibüs">Ticari Panelvan / Minibüs</option>
        <option value="Motosiklet / ATV">Motosiklet / ATV</option>
        <option value="Forklift / İş Makinesi">Forklift / İş Makinesi</option>
      </select>
    </div>
    <button type="submit" class="btn btn-whatsapp quote-submit-btn">
      ${ICONS.whatsapp} <span>WhatsApp’tan Fiyat Al</span>
    </button>
  </form>
</div>`;
}

function faqHtml(faqs) {
  return `<div class="faq-list">
  ${faqs.map((f, idx) => `<div class="faq-item${idx === 0 ? ' is-open' : ''}">
    <button type="button" class="faq-q" aria-expanded="${idx === 0 ? 'true' : 'false'}">
      <span>${esc(f.q)}</span>
      <span class="faq-toggle-icon" aria-hidden="true">${ICONS.chevronDown}</span>
    </button>
    <div class="faq-a">${esc(f.a)}</div>
  </div>`).join('\n  ')}
</div>`;
}

function lightboxModal() {
  return `<div id="gallery-lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Saha Fotoğrafı Önizleme">
  <button type="button" id="lightbox-close" class="lightbox-close" aria-label="Kapat">${ICONS.close}</button>
  <div class="lightbox-inner">
    <img id="lightbox-img" class="lightbox-img" src="/images/gebze-hero-otoyol.webp" alt="Gebze Çekici Saha Operasyonu" width="640" height="360">
    <p id="lightbox-cap" class="lightbox-cap"></p>
  </div>
</div>`;
}

// Sıfırdan Mimari Mat Karbon Footer (Porsche / Studio Çizgisi — Sıfır Neon, Sıfır Hap!)
function footer() {
  return `<div class="footer-outer">
<footer class="site-footer">
  <div class="container">
    <div class="footer-top-band">
      <div class="footer-top-left">
        <a href="/" class="f-brand-link" aria-label="${esc(BUSINESS.name)} — Ana Sayfa">
          <img src="/images/logo.svg" alt="${esc(BUSINESS.name)} Amblem" width="32" height="32" class="f-brand-mark">
          <span>${esc(BUSINESS.name)}</span>
        </a>
        <p class="footer-headline">Gebze’de yolda kaldığınız her an, <span>tek telefonla yanınızdayız.</span></p>
      </div>
      <div class="footer-top-right">
        <span class="footer-hotline-label"><span class="live-dot"></span> 7/24 Gebze Nöbetçi Hat</span>
        <a href="tel:${BUSINESS.phoneTel}" class="footer-hotline-num" aria-label="Hemen Ara ${BUSINESS.phoneDisplay}">${BUSINESS.phoneDisplay}</a>
        <a href="${waUrl('Gebze')}" class="footer-wa-link btn-send-location" data-region="Gebze" target="_blank" rel="noopener noreferrer">WhatsApp’tan Konum Gönder ${ICONS.arrowRight}</a>
      </div>
    </div>

    <div class="footer-main">
      <div class="footer-grid">
        <div>
          <div class="f-col-title">Hizmetlerimiz</div>
          <ul class="f-links">
            <li><a href="/hizmetler/oto-cekici.html">Kayar Kasa Oto Çekici</a></li>
            <li><a href="/hizmetler/oto-kurtarma.html">Kazalı &amp; Şarampol Kurtarma</a></li>
            <li><a href="/hizmetler/kapali-otopark-cekici.html">Kapalı Otopark Çekici</a></li>
            <li><a href="/hizmetler/ahtapot-cekici.html">Ahtapot Vinçli Çekici</a></li>
            <li><a href="/hizmetler/aku-takviye.html">Yerinde Akü Takviye</a></li>
            <li><a href="/hizmetler/ticari-arac-cekici.html">Ticari &amp; OSB Filo Çekici</a></li>
            <li><a href="/hizmetler/">Tüm Hizmetlerimiz</a></li>
          </ul>
        </div>

        <div>
          <div class="f-col-title">Popüler Bölgeler</div>
          <ul class="f-links">
            <li><a href="/bolgeler/gebze-merkez-oto-cekici.html">Gebze Çekici</a></li>
            <li><a href="/bolgeler/gosb-oto-cekici.html">GOSB Çekici</a></li>
            <li><a href="/bolgeler/tem-gebze-oto-cekici.html">TEM Gebze Çekici</a></li>
            <li><a href="/bolgeler/d100-gebze-oto-cekici.html">D-100 Gebze Çekici</a></li>
            <li><a href="/bolgeler/cayirova-oto-cekici.html">Çayırova Çekici</a></li>
            <li><a href="/bolgeler/darica-oto-cekici.html">Darıca Çekici</a></li>
            <li><a href="/bolgeler/">Tüm 26 Hizmet Bölgesi</a></li>
          </ul>
        </div>

        <div>
          <div class="f-col-title">Kurumsal</div>
          <ul class="f-links">
            <li><a href="/hakkimizda.html">Hakkımızda &amp; Filomuz</a></li>
            <li><a href="/gebze-cekici-fiyatlari.html">Çekici Fiyat Politikası</a></li>
            <li><a href="/bolgeler/">Hizmet Bölgelerimiz</a></li>
            <li><a href="/galeri.html">Saha Operasyon Galerisi</a></li>
            <li><a href="/blog/">Sürücü Rehberi</a></li>
            <li><a href="/iletisim.html">İletişim &amp; Konum</a></li>
            <li><a href="/gizlilik-politikasi.html">Gizlilik &amp; KVKK Politikası</a></li>
          </ul>
        </div>

        <div>
          <div class="f-col-title">İntikal Merkezi</div>
          <ul class="f-links">
            <li class="f-meta-item">Gebze Merkez, Kocaeli<br>D-100 &amp; TEM Bağlantısı, 41400</li>
            <li class="f-meta-item">7 Gün 24 Saat Kesintisiz<br>Resmi Tatiller Dahil</li>
            <li><a href="${esc(BUSINESS.maps.shareUrl)}" target="_blank" rel="noopener noreferrer" class="f-map-link">Google Haritalarda Aç ${ICONS.arrowRight}</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-legal">
        <span>&copy; 2026 ${esc(BUSINESS.name)}. Tüm hakları saklıdır.</span>
        <span aria-hidden="true">&middot;</span>
        <a href="/gizlilik-politikasi.html">Gizlilik &amp; KVKK Politikası</a>
      </div>
      <a href="https://getpin.co" target="_blank" rel="noopener noreferrer" class="getpin-badge">
        Crafted with precision by <strong>getpin</strong>
      </a>
    </div>
  </div>
</footer>
</div>`;
}

function stickyActions(regionName = 'Gebze') {
  return `<div class="sticky-actions mobile-sticky-dock floating-actions" role="region" aria-label="7/24 Acil İletişim Butonları">
  <a href="tel:${BUSINESS.phoneTel}" class="sticky-btn sticky-btn-call" aria-label="Hemen Ara ${BUSINESS.phoneDisplay}">
    ${ICONS.phone} <span>HEMEN ARA</span>
  </a>
  <a href="${waUrl(regionName)}" class="sticky-btn sticky-btn-wp btn-send-location" data-region="${esc(regionName)}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Konum Gönder">
    ${ICONS.whatsapp} <span>KONUM AT</span>
  </a>
</div>`;
}

function scripts() {
  return `<script src="/js/main.js?v=3" defer></script>
<script src="/js/anti-fraud.js" defer></script>
</body>
</html>`;
}

function mapFacadeCard() {
  return `<div class="map-frame-card">
  <div class="map-facade" data-map-facade data-map-src="${esc(BUSINESS.maps.embedUrl)}">
    <div class="why-icon-wrap">${ICONS.map}</div>
    <h3>Gebze Merkez Nöbetçi Çekici Konumu</h3>
    <p class="section-desc" style="max-width:38ch;">D-100 &amp; TEM Gebze bağlantı noktasından tüm 26 bölgeye ortalama 10–15 dakikada intikal.</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
      <button type="button" class="btn btn-primary" data-map-load>${ICONS.map} <span>Canlı Haritayı Yükle</span></button>
      <a href="${esc(BUSINESS.maps.shareUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">${ICONS.pin} <span>Google Haritalarda Aç</span></a>
    </div>
  </div>
  <div class="map-facade-bar">
    <span><strong>Koordinat:</strong> ${BUSINESS.geo.lat}, ${BUSINESS.geo.lng} (Gebze / Kocaeli)</span>
    <a href="${esc(BUSINESS.maps.shareUrl)}" target="_blank" rel="noopener noreferrer" style="color:var(--ink);font-weight:700;">Yol Tarifi Al &rarr;</a>
  </div>
</div>`;
}

module.exports = {
  esc,
  ICONS,
  waUrl,
  pictureTag,
  isPortrait,
  showcaseCard,
  head,
  headerNav,
  breadcrumbs,
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  websiteSchema,
  serviceSchema,
  dispatchPanel,
  quoteForm,
  faqHtml,
  lightboxModal,
  footer,
  stickyActions,
  scripts,
  mapFacadeCard
};
