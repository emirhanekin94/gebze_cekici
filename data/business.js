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
  name: 'Gebze Çekici',
  shortName: 'Gebze Çekici',
  legalName: 'Gebze Çekici & 7/24 Yol Yardım Hizmetleri',
  navSub: '7/24 Gebze Nöbetçi Çekici Filosu',
  slogan: 'Gebze, OSB, TEM ve D-100 Hattında 7/24 Oto Çekici, Yol Yardım ve Yük Taşımacılığı',
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
    gtmId: 'GTM-5MQQRFLD',        // Google Tag Manager (Analitik)
    adsGtmId: 'GTM-54S5TZ7J',     // Google Tag Manager (Google Ads Etiketi)
    ga4Id: '',                    // GA4 GTM-5MQQRFLD üzerinden yüklü
    adsId: 'AW-18592243052',      // Google Ads Hesabı (875-467-1480)
    adsCallConversion: 'AW-18592243052/LRa6CMPV7L4dEOy6vKFF',     // 1. Birincil Dönüşüm (Telefon)
    adsWhatsappConversion: 'AW-18592243052/L4gWCMbV7L4dEOy6vKFF', // 2. İkincil Dönüşüm (WhatsApp)
    searchConsoleVerification: 'pj4qXgccgb0ZBIcvvpBPZeyYaJmFYoDzKXZrjQBVsUE' // Google Search Console doğrulama kodu
  },

  heroImage: {
    base: 'client-pickup-osb',
    w: 800,
    h: 600,
    alt: 'Gebze Çekici TEM ve D-100 otoyol hattında hidrolik kayar kasa ile 4x4 araç taşıma operasyonu'
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
  'gebze-e5-yardim':         { w: 800, h: 1067, portrait: true },
  'svc-kayar-kasa':          { w: 800, h: 600, portrait: false },
  'svc-oto-kurtarma':        { w: 800, h: 600, portrait: false },
  'svc-aparatli-cekici':     { w: 800, h: 600, portrait: false },
  'svc-coklu-cekici':        { w: 800, h: 600, portrait: false },
  'svc-tenteli-nakliye':     { w: 800, h: 600, portrait: false },
  'svc-aku-takviye':         { w: 800, h: 600, portrait: false },
  'svc-lastik-yardim':       { w: 800, h: 600, portrait: false },
  'svc-motosiklet-cekici':   { w: 800, h: 600, portrait: false },
  'svc-ticari-cekici':       { w: 800, h: 600, portrait: false },
  'svc-sehirlerarasi':       { w: 800, h: 600, portrait: false },
  'svc-atv-karavan':         { w: 800, h: 600, portrait: false },
  'client-pickup-osb':       { w: 800, h: 600, portrait: false },
  'client-doblo-cekici':     { w: 800, h: 600, portrait: false },
  'client-kazali-mercedes':  { w: 800, h: 600, portrait: false },
  'client-panelvan-osb':     { w: 800, h: 600, portrait: false },
  'client-iveco-panelvan':   { w: 800, h: 600, portrait: false },
  'client-motosiklet':       { w: 800, h: 600, portrait: false },
  'client-traktor-ozel':     { w: 800, h: 600, portrait: false },
  'client-sedan-mahalle':    { w: 800, h: 600, portrait: false },
  'client-kamyonet':         { w: 800, h: 600, portrait: false },
  'client-traktor-2':        { w: 800, h: 600, portrait: false },
  'client-sanayi-yuk':       { w: 800, h: 600, portrait: false },
  'client-karavan-ozel':     { w: 800, h: 600, portrait: false },
  'client-bmw-cekici':       { w: 800, h: 600, portrait: false },
  'client-mikro-arac':       { w: 800, h: 600, portrait: false },
  'client-kia-mahalle':      { w: 800, h: 600, portrait: false },
  'client-gece-panelvan':    { w: 800, h: 600, portrait: false },
  'client-accent-otoyol':    { w: 800, h: 600, portrait: false },
  'client-gece-sedan':       { w: 800, h: 600, portrait: false },
  'client-audi-otoyol':      { w: 800, h: 600, portrait: false },
  'client-suv-yagmur':       { w: 800, h: 600, portrait: false },
  'client-ticari-istasyon':  { w: 800, h: 600, portrait: false },
  'client-suv-cadde':        { w: 800, h: 600, portrait: false },
  'client-atv-feribot':      { w: 800, h: 600, portrait: false },
  'client-klasik-mercedes':  { w: 800, h: 600, portrait: false },
  'client-gece-rangerover':  { w: 800, h: 600, portrait: false },
  'client-tenteli-yuk':      { w: 800, h: 600, portrait: false },
  'client-tenteli-teslimat': { w: 800, h: 600, portrait: false }
};

const GALLERY_ITEMS = [
  { img: 'client-bmw-cekici',       cap: 'Gebze Merkez’de BMW sedan aracın düşük eğimli kayar kasa ile hasarsız yüklenmesi' },
  { img: 'client-gece-rangerover',  cap: '7/24 gece nöbetçi ekibimizle Range Rover SUV aracın güvenli çekici nakli' },
  { img: 'client-audi-otoyol',      cap: 'TEM ve Osmangazi Köprüsü hattında Audi sedan şehirlerarası transferi' },
  { img: 'client-tenteli-yuk',      cap: '3.5 tona kadar tenteli nakliye aracımızla OSB paletli ve kolili yük taşımacılığı' },
  { img: 'client-atv-feribot',      cap: 'Eskihisar feribot hattında ATV aracın kayar kasa platform üzerinde güvenli transferi' },
  { img: 'client-klasik-mercedes',  cap: 'Klasik koleksiyon otomobilin hassas rampa ve spanzetlerle özel nakliyesi' },
  { img: 'client-kazali-mercedes',  cap: 'Kazalı binek otomobilin 4 noktadan sabitlenerek yetkili servise nakli' },
  { img: 'client-gece-panelvan',    cap: 'GOSB ve sanayi bölgesinde gece vardiyası ticari panelvan çekici müdahalesi' },
  { img: 'client-suv-cadde',        cap: 'Darıca ve Çayırova caddelerinde SUV aracın kayar kasaya temassız yüklenmesi' },
  { img: 'client-motosiklet',       cap: 'Motosikletlerin spanzet kemerlerle dik ve çiziksiz şekilde sabitlenerek taşınması' },
  { img: 'client-pickup-osb',       cap: 'Gebze OSB hattında 4x4 pikap aracın hidrolik kayar kasa ile güvenli nakli' },
  { img: 'client-tenteli-teslimat', cap: 'Tenteli nakliye aracımızla Gebze ve İstanbul arası kapıdan kapıya yük teslimatı' }
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
    text: 'Otoparkta akü tamamen boşalmıştı ve marş basmıyordu. 15 dakika içinde gelip profesyonel booster cihazıyla aracımı hızlıca çalıştırdılar ve şarj dinamosunu ölçtüler. İşini bilen düzgün ekip.'
  },
  {
    name: 'Emre Y.',
    region: 'Eskihisar Feribot Yolu',
    text: 'Feribot sırasına girmeden önce debriyaj teli koptu. Trafiği aksatmadan 15 dakikada ulaştılar. Aracımı 4 noktadan tekerlek kayışıyla sabitleyip Gebze Sanayi’ye bıraktılar, çok memnun kaldım.'
  },
  {
    name: 'Ayşe B.',
    region: 'Çayırova / Şekerpınar',
    text: 'Gece 02.30’da iki lastiğim birden kaldırıma sürtüp yarıldı. Hem telefonda sakinleştirdiler hem de telefonda konuşulan sabit ücret dışında tek kuruş eklemeden aracımı servise ulaştırdılar.'
  },
  {
    name: 'Kadir S.',
    region: 'Muallimköy / Bilişim Vadisi',
    text: 'Otomatik aracımın şanzımanı P konumunda kilitlenmişti. Tekerlek altı aparatlı ekip aracı hiç sürüklemeden platforma aldı, servisin kapısına kadar hasarsız teslim ettiler.'
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
    q: 'Otomatik vitesli veya şanzımanı kilitli araçlar hasarsız çekiliyor mu?',
    a: 'Evet. Otomatik vitesli araçlarda tekerleklerin çekilerek sürüklenmesi aktarma organlarına zarar verir. Filomuzdaki düşük eğimli hidrolik kayar kasa platformlar ve tekerlek altı paten/doli aparatlarıyla aracı sürüklemeden, şasi ve tampona temas ettirmeden taşıyoruz.'
  },
  {
    q: 'Kurumsal teslim tutanağı kesiyor musunuz ve nakit veya havaleyla ödeme yapılabilir mi?',
    a: 'Evet. Tüm şehir içi, şehirlerarası çekici ve 3.5 tona kadar tenteli nakliye hizmetlerimizde bireysel ve OSB kurumsal filo müşterilerimiz için fotoğraflı teslim tutanağı ve nakit veya havale/EFT ile pratik ödeme imkânı sunuyoruz.'
  },
  {
    q: 'Gece yarısı veya resmi tatillerde Gebze’de nöbetçi çekici bulabilir miyim?',
    a: 'Evet. Haftanın 7 günü 24 saat, bayram ve resmi tatiller dahil kesintisiz nöbetçi vardiya sistemiyle çalışıyoruz. Gece 03.00’te dahi 0533 945 45 14 numaramızdan doğrudan saha operatörümüze ulaşabilirsiniz.'
  },
  {
    q: 'Sadece çekici mi var yoksa yerinde akü takviye ve lastik desteği de veriyor musunuz?',
    a: 'Aracın servise çekilmesine gerek kalmayan akü bitmesi, stepne değişimi veya lastik patlaması durumlarında mobil yol yardım ekibimiz 12V/24V profesyonel booster cihazları ve hidrolik kriko ekipmanlarıyla doğrudan bulunduğunuz noktada müdahale eder.'
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
