/**
 * ============================================================================
 * GEBZE YOL YARDIM — MAIN INTERACTION, WHATSAPP iOS-SAFE & ADS CONVERSION JS
 * Zero dependencies • Deferred • PageSpeed 100 • GA4 & Google Ads Ready
 * ============================================================================
 */
(function () {
  'use strict';

  var cfg = window.__SITE_ADS__ || {};
  var WHATSAPP_PHONE = cfg.whatsapp || '905339454514';
  var BRAND_NAME = cfg.brand || 'Gebze Çekici';
  var PAGE_REGION = cfg.regionName || 'Gebze';

  // ── 1. Deferred GA4 & Google Ads (gtag.js) Loader (Zero TBT) ───────────────
  var gtagLoaded = false;
  function loadGtagOnce() {
    if (gtagLoaded) return;
    var primaryId = cfg.ga4Id || cfg.adsId;
    if (!primaryId) return;
    gtagLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    if (cfg.ga4Id) window.gtag('config', cfg.ga4Id);
    if (cfg.adsId) window.gtag('config', cfg.adsId);

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(primaryId);
    document.head.appendChild(s);
  }

  if (cfg.ga4Id || cfg.adsId) {
    // Google Ads tıklamasıyla gelindiyse (gclid/gad_source vb.) gtag.js'yi beklemeden ANINDA yükle
    if (/[?&](gclid|wbraid|gbraid|gad_source)=/i.test(window.location.search)) {
      loadGtagOnce();
    } else {
      ['pointerdown', 'click', 'touchstart', 'scroll', 'keydown'].forEach(function (ev) {
        window.addEventListener(ev, loadGtagOnce, { once: true, passive: true });
      });
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadGtagOnce, { timeout: 4000 });
      } else {
        window.setTimeout(loadGtagOnce, 4000);
      }
    }
  }

  // ── 2. Google Ads Single-Line Conversion Helper (0ms Beacon, iOS Safari Safe) ──
  function gtag_report_conversion(sendTo, callback) {
    loadGtagOnce();
    if (sendTo && typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'conversion', {
          send_to: sendTo,
          value: 1.0,
          currency: 'TRY',
          transport_type: 'beacon'
        });
      } catch (e) {}
    }
    if (typeof callback === 'function') {
      callback();
    }
    return true;
  }
  window.gtag_report_conversion = gtag_report_conversion;

  function trackEvent(eventName, params) {
    var payload = Object.assign({
      event: eventName,
      region: PAGE_REGION,
      page_path: window.location.pathname
    }, params || {});

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    if (typeof window.gtag === 'function') {
      try {
        var gaPayload = Object.assign({ transport_type: 'beacon', region: PAGE_REGION }, params || {});
        window.gtag('event', eventName, gaPayload);
      } catch (e) {}
    }
  }

  function detectClickSource(el) {
    if (!el) return 'page';
    if (el.closest('.sticky-actions')) return 'sticky_bar';
    if (el.closest('.site-header')) return 'header';
    if (el.closest('.site-footer')) return 'footer';
    if (el.closest('.hero-section, .page-editorial-hero')) return 'hero';
    if (el.closest('.sidebar-stack')) return 'sidebar';
    if (el.closest('.faq-support-card')) return 'faq_support';
    return 'content';
  }

  // ── 3. iOS Safari Safe WhatsApp URL Builder ────────────────────────────────
  function buildWhatsAppUrl(message) {
    return 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(WHATSAPP_PHONE) + '&text=' + encodeURIComponent(message);
  }

  // ── 4. Header Scroll Shadow & Mobile Drawer ────────────────────────────────
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('is-scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  var menuBtn = document.querySelector('[data-menu-toggle]');
  var drawer = document.getElementById('mobile-drawer');
  if (menuBtn && drawer) {
    var setMenu = function (open) {
      drawer.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    menuBtn.addEventListener('click', function () {
      setMenu(!drawer.classList.contains('is-open'));
    });
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) setMenu(false);
    });
  }

  // ── 5. FAQ Accordion ───────────────────────────────────────────────────────
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      if (!item) return;
      var willOpen = !item.classList.contains('is-open');
      var list = item.parentElement;
      if (list) {
        list.querySelectorAll('.faq-item.is-open').forEach(function (other) {
          other.classList.remove('is-open');
          var otherBtn = other.querySelector('.faq-q');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });
      }
      item.classList.toggle('is-open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

  // ── 6. Home Regions "Show All / Show Less" Toggle ──────────────────────────
  var toggleRegionsBtn = document.getElementById('toggle-regions-btn');
  if (toggleRegionsBtn) {
    toggleRegionsBtn.addEventListener('click', function () {
      var extras = document.querySelectorAll('.region-card[data-extra-region="true"]');
      var isExpanded = toggleRegionsBtn.getAttribute('data-expanded') === 'true';
      extras.forEach(function (card) {
        card.classList.toggle('is-hidden', isExpanded);
      });
      var nextState = !isExpanded;
      toggleRegionsBtn.setAttribute('data-expanded', nextState ? 'true' : 'false');
      var totalCount = toggleRegionsBtn.getAttribute('data-total') || '';
      toggleRegionsBtn.textContent = nextState
        ? 'Daha Az Göster'
        : 'Tüm Bölgeleri Göster (' + totalCount + ' Bölge)';
    });
  }

  // ── 7. Gallery Lightbox ────────────────────────────────────────────────────
  var lightbox = document.getElementById('gallery-lightbox');
  var lbImg = document.getElementById('lightbox-img');
  var lbCap = document.getElementById('lightbox-cap');
  var lbClose = document.getElementById('lightbox-close');

  if (lightbox && lbImg) {
    var closeLb = function () {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    };
    document.querySelectorAll('[data-lightbox-src]').forEach(function (item) {
      item.addEventListener('click', function () {
        lbImg.src = item.getAttribute('data-lightbox-src');
        lbImg.alt = item.getAttribute('data-lightbox-cap') || 'Gebze oto çekici saha operasyonu';
        if (lbCap) lbCap.textContent = item.getAttribute('data-lightbox-cap') || '';
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });
    if (lbClose) lbClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLb();
    });
  }

  // ── 8. WhatsApp Quote Form Submission ──────────────────────────────────────
  document.querySelectorAll('form[data-quote-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var regionSel = form.querySelector('select[name="region"]');
      var vehicleSel = form.querySelector('select[name="vehicle"]');
      var selectedRegion = regionSel ? regionSel.value : PAGE_REGION;
      var selectedVehicle = vehicleSel ? vehicleSel.value : 'Binek Araç';

      var msg = 'Merhaba ' + BRAND_NAME + ', acil çekici/yol yardım teklifi almak istiyorum.\n'
        + 'Bölge: ' + selectedRegion + '\n'
        + 'Araç Tipi: ' + selectedVehicle + '\n'
        + 'Konumumu hemen ardından paylaşıyorum.';

      var targetUrl = buildWhatsAppUrl(msg);
      trackEvent('whatsapp_click', {
        conversion_priority: 'secondary',
        click_source: 'quote_form',
        lead_region: selectedRegion,
        vehicle_type: selectedVehicle
      });

      gtag_report_conversion(cfg.adsWhatsappConversion, function () {
        window.location.href = targetUrl;
      });
    });
  });

  // ── 9. Direct Call (telefon_click) & WhatsApp (whatsapp_click) Tracking ────
  document.addEventListener('click', function (e) {
    var wpBtn = e.target.closest('.btn-send-location');
    if (wpBtn) {
      e.preventDefault();
      var regionLabel = wpBtn.getAttribute('data-region') || PAGE_REGION;
      var msg = 'Merhaba ' + BRAND_NAME + ', acil çekiciye ihtiyacım var. Bulunduğum Bölge: '
        + regionLabel + ' (Konumumu hemen ardından paylaşıyorum.)';
      var url = buildWhatsAppUrl(msg);

      trackEvent('whatsapp_click', {
        conversion_priority: 'secondary',
        click_source: detectClickSource(wpBtn),
        location_region: regionLabel
      });

      gtag_report_conversion(cfg.adsWhatsappConversion, function () {
        window.location.href = url;
      });
      return;
    }

    var telLink = e.target.closest('a[href^="tel:"]');
    if (telLink) {
      var href = telLink.getAttribute('href');
      trackEvent('telefon_click', {
        conversion_priority: 'primary',
        click_source: detectClickSource(telLink),
        phone: href
      });
      if (cfg.adsCallConversion) {
        // e.preventDefault() olmadan 0ms anında arama açılır, dönüşüm beacon ile arka planda gider
        gtag_report_conversion(cfg.adsCallConversion);
      }
    }

    var secTel = e.target.closest('[data-secondary-tel]');
    if (secTel) {
      var num = secTel.getAttribute('data-secondary-tel');
      if (num) {
        trackEvent('telefon_click', {
          conversion_priority: 'primary',
          click_source: 'footer_secondary',
          phone_number: num
        });
        window.location.href = 'tel:' + num;
      }
    }
  });

  // ── 10. Click-to-Load Google Maps Facade (Zero Initial Load Cost) ──────────
  document.querySelectorAll('[data-map-load]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wrap = btn.closest('[data-map-facade]');
      if (!wrap) return;
      var embedUrl = wrap.getAttribute('data-map-src');
      if (!embedUrl) return;
      var iframe = document.createElement('iframe');
      iframe.src = embedUrl;
      iframe.title = 'Gebze Yol Yardım Nöbetçi Çekici Konumu';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.allowFullscreen = true;
      wrap.innerHTML = '';
      wrap.appendChild(iframe);
    });
  });

  // ── 11. Lightweight Native Scroll Reveal (Below-the-Fold Only, Zero TBT) ──
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
