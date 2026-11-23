'use strict';
/**
 * ============================================================================
 * TEK MERKEZ (SINGLE SOURCE OF TRUTH) — GEBZE YOL YARDIM & OTO ÇEKİCİ
 * ----------------------------------------------------------------------------
 * Google Analytics (GA4), Google Ads, Dönüşüm Etiketleri veya Search Console
 * doğrulama kodunu eklemek için YALNIZCA aşağıdaki `analytics` bloğunu doldurup
 * şu komutu çalıştırmanız yeterlidir:
 *   node scripts/generate_all.js && node scripts/generate_sitemap.js
 * ============================================================================
 */

const SITE_URL = 'https://gebzecekici.tr';

const BUSINESS = {
  name: 'Gebze Yol Yardım',
  shortName: 'Gebze Yol Yardım',
  legalName: 'Gebze Yol Yardım & Oto Çekici Hizmetleri',
  navSub: '7/24 Gebze Nöbetçi Çekici Filosu',
  slogan: 'Gebze, OSB, TEM ve D-100 Hattında 7/24 Kaskolu Oto Çekici ve Acil Yol Yardım',
  themeId: 'swiss-editorial',

  phoneDisplay: '0533 945 45 14',
  phoneTel: '+905339454514',
  whatsappNumber: '905339454514',
  email: 'iletisim@gebzecekici.tr',

  hours: '7 Gün 24 Saat Kesintisiz',
  etaMinutes: '10–15 Dk',
  foundedYears: '14+',
  rating: {
    value: '5.0',
    count: '420+'
  },

  address: {
    street: 'Gebze Merkez Nöbetçi İntikal Noktası (D-100 & TEM Bağlantısı)',
    locality: 'Gebze',
    region: 'Kocaeli',
    postalCode: '41400',
    country: 'TR'
  },

  geo: {
    lat: '40.7998251',
    lng: '29.4414017'
  },

  maps: {
    shareUrl: 'https://maps.app.goo.gl/EsGS9t7TZx7Uz9NW6',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.280700910522!2d29.44140171252268!3d40.79982507126032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb20f2619022f9%3A0x7561c278bce6b585!2sOLGUN%20OTOMOT%C4%B0V%207%2F24%20YOL%20YARDIM%20H%C4%B0ZMETLER%C4%B0!5e0!3m2!1str!2str!4v1795450508580!5m2!1str!2str'
  },

  /**
   * GOOGLE ANALYTICS, GOOGLE ADS DÖNÜŞÜM & SEARCH CONSOLE HAZIR ALTYAPI
   * Hesapları açtığınızda aşağıdaki alanları doldurup generator'ı çalıştırmanız
   * tüm 45+ sayfada anında aktifleşmesi için yeterlidir.
   */
  analytics: {
    gtmId: 'GTM-5MQQRFLD',        // Google Tag Manager (Ana Etiket Yöneticisi)
    ga4Id: '',                    // Örn: 'G-XXXXXXXXXX' (GTM üzerinden veya doğrudan)
    adsId: '',                    // Örn: 'AW-XXXXXXXXXX'
    adsCallConversion: '',        // 1. Birincil Dönüşüm (Telefon): 'AW-XXXXXXXXXX/...'
    adsWhatsappConversion: '',    // 2. İkincil Dönüşüm (WhatsApp): 'AW-XXXXXXXXXX/...'
    searchConsoleVerification: '' // Örn: 'google-site-verification-token'
  },

  heroImage: {
    base: 'gebze-hero-otoyol',
    w: 640,
    h: 360,
    alt: 'Gebze TEM ve D-100 otoyol hattında hidrolik kayar kasa ile hasarsız araç yükleme operasyonu'
  }
};

/**
 * Diskteki tüm optimize WebP görsellerinin kesin doğal boyut haritası (CLS = 0.00)
 */
const IMAGE_META = {
  'gebze-hero-otoyol':       { w: 640, h: 360, portrait: false },
  'gebze-gunbatimi':         { w: 640, h: 360, portrait: false },
  'gebze-istasyon':          { w: 640, h: 360, portrait: false },
  'gebze-sedan-otoyol':      { w: 640, h: 360, portrait: false },
  'gebze-cadde-operasyon':   { w: 640, h: 360, portrait: false },
  'gebze-merkez-cekici':     { w: 640, h: 360, portrait: false },
  'gebze-suv-kurtarma':      { w: 640, h: 360, portrait: false },
  'gebze-gece-nobetci':      { w: 640, h: 853, portrait: true  },
  'gebze-kamyonet-tasima':   { w: 800, h: 600, portrait: false },
  'gebze-ticari-osb':        { w: 800, h: 600, portrait: false },
  'gebze-ahtapot-vinc':      { w: 640, h: 480, portrait: false },
  'gebze-ahtapot-kurtarici': { w: 640, h: 853, portrait: true  },
  'gebze-aku-takviye':       { w: 800, h: 741, portrait: false },
  'gebze-lastik-yardim':     { w: 640, h: 480, portrait: false },
  'gebze-kapali-otopark':    { w: 800, h: 1067, portrait: true },
  'gebze-kazali-kurtarma':   { w: 800, h: 1067, portrait: true },
  'gebze-motosiklet-cekici': { w: 800, h: 1067, portrait: true },
  'gebze-sehirlerarasi':     { w: 800, h: 1067, portrait: true },
  'gebze-is-makinesi':       { w: 640, h: 480, portrait: false },
  'gebze-atv-ozel':          { w: 800, h: 600, portrait: false },
  'gebze-luks-arac':         { w: 800, h: 1067, portrait: true },
  'gebze-e5-yardim':         { w: 800, h: 1067, portrait: true }
};

const GALLERY_ITEMS = [
  { img: 'gebze-hero-otoyol',       cap: 'TEM Gebze geçişinde hidrolik kayar kasa ile binek araç nakli' },
  { img: 'gebze-gunbatimi',         cap: 'D-100 Gebze hattında gün batımı acil yol yardım ve platform yükleme' },
  { img: 'gebze-istasyon',          cap: 'Şekerpınar bağlantı istasyonunda arızalı araç hızlı çekici intikali' },
  { img: 'gebze-ticari-osb',        cap: 'GOSB sanayi bölgesinde ticari panelvan aracın uzun şasi ile nakli' },
  { img: 'gebze-ahtapot-vinc',      cap: 'Kuzey Marmara bağlantı yolunda vinç destekli şarampol kurtarma' },
  { img: 'gebze-sedan-otoyol',      cap: 'Osmangazi Köprüsü yaklaşımında sedan araç güvenli otoyol tahliyesi' },
  { img: 'gebze-suv-kurtarma',      cap: 'Mutlukent caddesinde SUV aracın 4 tekerlekten spanzetli yüklenmesi' },
  { img: 'gebze-kamyonet-tasima',   cap: 'Dilovası ve TOSB hattında 4x4 pikap ağır hizmet platform taşıması' },
  { img: 'gebze-aku-takviye',       cap: 'Gebze Merkez otoparkında 12V akım korumalı booster akü takviye' },
  { img: 'gebze-lastik-yardim',     cap: 'Darıca sahil yolunda yarılan lastik için yerinde mobil lastik desteği' },
  { img: 'gebze-is-makinesi',       cap: 'Güzeller OSB tesis sahasında iş makinesi ve ekipman nakliyesi' },
  { img: 'gebze-cadde-operasyon',   cap: 'Beylikbağı ve Tatlıkuyu ara sokaklarında dar alan çekici müdahalesi' }
];

const REVIEWS = [
  {
    name: 'Mert K.',
    region: 'GOSB / İhsan Dede Cd.',
    text: 'Vardiya çıkışında şanzıman arızası verdi, aracım vitese geçmedi. Aradıktan 12 dakika sonra kayar kasa geldi. Telefonda söylenen sabit ücret dışında tek kuruş eklenmeden yetkili servise teslim edildi.'
  },
  {
    name: 'Selin T.',
    region: 'TEM Gebze Gişeleri',
    text: 'Akşam yağmurunda İstanbul istikametinde hararet yükseldi. WhatsApp üzerinden konum attım, ekip reflektör güvenliğini alıp aracımı tek çizik olmadan Mutlukent’teki ustama ulaştırdı.'
  },
  {
    name: 'Hakan D.',
    region: 'Darıca / Bayramoğlu',
    text: 'Site kapalı otoparkında akü tamamen boşalmıştı ve direksiyon kilitliydi. Alçak tavanlı araçla inip akım korumalı cihazla aracın beynine zarar vermeden çalıştırdılar. İşini bilen düzgün ekip.'
  },
  {
    name: 'Emre Y.',
    region: 'Eskihisar Feribot Yolu',
    text: 'Feribot sırasına girmeden önce debriyaj teli koptu. Trafiği aksatmadan 15 dakikada ulaştılar. Aracımı 4 noktadan tekerlek kayışıyla sabitleyip Gebze Sanayi’ye bıraktılar, çok memnun kaldım.'
  },
  {
    name: 'Ayşe B.',
    region: 'Çayırova / Şekerpınar',
    text: 'Gece 02.30’da iki lastiğim birden kaldırıma sürtüp yarıldı. Hem telefonda sakinleştirdiler hem de mobil POS ile kredi kartı ödemesi ve fatura kolaylığı sağladılar.'
  },
  {
    name: 'Kadir S.',
    region: 'Muallimköy / Bilişim Vadisi',
    text: 'Elektrikli aracımın yüksek voltaj uyarısı sonrası çekilmesi gerekti. Ahtapot aparatlı ekip aracı sürüklemeden platforma aldı, taşıma sigortası poliçesini yükleme öncesi paylaştılar.'
  }
];

const HOME_FAQS = [
  {
    q: 'Gebze içinde çekici kaç dakikada konumuma ulaşır?',
    a: 'Gebze Merkez, GOSB, Tatlıkuyu, Beylikbağı, Mutlukent, Çayırova, Darıca ve TEM/D-100 bağlantı noktalarında konuşlu nöbetçi araçlarımız sayesinde ortalama 10–15 dakika içinde yanınıza ulaşıyoruz. Yoğun saatlerde dahi en yakın mobil ekibimiz canlı konumunuza yönlendirilir.'
  },
  {
    q: 'Çekici fiyatları nasıl belirlenir, araç yüklendikten sonra ek ücret çıkar mı?',
    a: 'Ücretlendirme aracınızın bulunduğu nokta, gideceği mesafe, araç tipi (binek, SUV, ticari) ve kilitli şanzıman/kapalı otopark gibi özel ekipman ihtiyacına göre telefonda netleştirilir. Onayladığınız sabit fiyat dışında gece farkı veya sürpriz ek masraf talep edilmez.'
  },
  {
    q: 'Otomatik vitesli, elektrikli veya şanzımanı kilitli araçlar hasarsız çekiliyor mu?',
    a: 'Evet. Otomatik, hibrit ve elektrikli araçlarda tekerleklerin çekilerek sürüklenmesi aktarma organlarına zarar verir. Filomuzdaki düşük eğimli hidrolik kayar kasa platformlar ve tekerlek altı paten/ahtapot aparatlarıyla aracı 4 tekerleği havada, şasi ve tampona temas ettirmeden taşıyoruz.'
  },
  {
    q: 'Taşıma sırasında aracım sigortalı mı? Kurumsal fatura kesiyor musunuz?',
    a: 'Tüm şehir içi ve şehirlerarası nakillerimiz yükleme anından servis teslimatına kadar taşıma emtia sigortası kapsamındadır. Bireysel ve OSB kurumsal filo müşterilerimiz için KDV’li e-fatura ve araç içi mobil POS ile kredi kartı ödeme imkânı sunuyoruz.'
  },
  {
    q: 'Gece yarısı veya resmi tatillerde Gebze’de nöbetçi çekici bulabilir miyim?',
    a: 'Evet. Haftanın 7 günü 24 saat, bayram ve resmi tatiller dahil kesintisiz nöbetçi vardiya sistemiyle çalışıyoruz. Gece 03.00’te dahi 0533 945 45 14 numaramızdan doğrudan saha operatörümüze ulaşabilirsiniz.'
  },
  {
    q: 'Sadece çekici mi var yoksa yerinde akü takviye ve lastik desteği de veriyor musunuz?',
    a: 'Aracın servise çekilmesine gerek kalmayan akü bitmesi, stepne değişimi veya lastik patlaması durumlarında mobil yol yardım ekibimiz 12V/24V akım korumalı booster cihazları ve hidrolik kriko ekipmanlarıyla doğrudan bulunduğunuz noktada müdahale eder.'
  }
];

module.exports = {
  SITE_URL,
  BUSINESS,
  IMAGE_META,
  GALLERY_ITEMS,
  REVIEWS,
  HOME_FAQS
};
