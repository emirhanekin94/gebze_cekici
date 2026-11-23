'use strict';
/**
 * ============================================================================
 * GEBZE YOL YARDIM — BÖLGELER PART 1 (1–13: MERKEZ & ANA MAHALLELER + GOSB)
 * Her bölge %100 özgün yerel SEO metni, gerçek cadde/kavşak, saha kaydı ve 5 SSS
 * ============================================================================
 */

const REGIONS_PART_1 = [
  {
    slug: 'gebze-merkez',
    name: 'Gebze',
    navbarTitle: 'GEBZE ÇEKİCİ',
    navbarSub: '7/24 Gebze Nöbetçi Çekici Filosu',
    featured: true,
    eta: '10 Dk',
    heroImg: 'gebze-merkez-cekici',
    fieldImg: 'gebze-cadde-operasyon',
    lat: '40.8027',
    lng: '29.4307',
    cardSummary: 'Hacıhalil, Sultan Orhan, Osman Yılmaz, Yeni Bağdat Caddesi ve Eski Çarşı hattında 7/24 anında müdahale.',
    metaTitle: 'Gebze Çekici & 7/24 Oto Kurtarma | 10 Dk Hızlı İntikal',
    metaDesc: 'Gebze Merkez, Hacıhalil, Sultan Orhan ve Osman Yılmaz mahallelerinde 7/24 kaskolu kayar kasa oto çekici ve yol yardım. Hemen ara: 0533 945 45 14.',
    heroLead: 'Hacıhalil, Sultan Orhan, Osman Yılmaz ve Gebze çarşı merkezindeki yoğun caddelerde 10 dakika içinde konumunuza ulaşan nöbetçi kayar kasa ve mobil yol yardım filomuzla yanınızdayız.',
    seoTitle: 'Gebze Merkez’de Dar Caddelerden Ana Arterlere Kesintisiz Çekici Desteği',
    paragraphs: [
      'Gebze ilçe merkezinin kalbini oluşturan Hacıhalil, Sultan Orhan, Osman Yılmaz ve Güzeller yerleşim kuşağı; bankalar, kamu kurumları, Gebze Belediyesi hizmet binaları ve ticari çarşı akışıyla günün her saatinde yoğun araç sirkülasyonu barındırır. Özellikle Yeni Bağdat Caddesi, Atatürk Caddesi, Hükümet Caddesi ve İbrahim Ağa Caddesi üzerinde yaşanan ani bir motor stopu ya da debriyaj arızası saniyeler içinde uzun araç kuyruklarına neden olur.',
      'Ana intikal noktamızın tam ilçe merkezinde konumlanması sayesinde <a href="/hizmetler/oto-cekici.html">Gebze Merkez oto çekici</a> çağrılarına dış ilçelerden araç beklemeden ortalama 10 dakikada yanıt veriyoruz. Çarşı içi tek yönlü sokaklarda uzun tır tipi kurtarıcıların manevra yapamadığı noktalara kompakt dönüş yarıçapına sahip hidrolik kayar kasalarımızla girerek park halindeki diğer araçlara dokunmadan yükleme gerçekleştiriyoruz.',
      'Merkezdeki apartman altı kapalı garajlarda veya Gebze Kent Meydanı yeraltı otoparkında aküsü boşalan, marş basmayan ya da şanzımanı kilitlenen binek otomobiller için de ayrı bir ekibe ihtiyaç duymazsınız. Alçak kabinli <a href="/hizmetler/kapali-otopark-cekici.html">kapalı otopark çekicimiz</a> ve dijital akım korumalı booster takviye cihazlarımız aynı merkez vardiyasında hazır bekler.',
      'Yüklenen aracınız talebinize göre Gebze Oto Sanayi Sitesi’ndeki kendi ustanıza, D-100 üzerindeki yetkili marka servislerine veya evinizin önüne kaskolu taşıma tutanağı ile ulaştırılır. Gece geç saatlerde açık tamirci bulamadığınızda aracınızı sabah servis açılışına kadar emniyetli teslimat planıyla yönlendiriyoruz.'
    ],
    localPointsTitle: 'Gebze Merkez Nöbetçi İntikal Noktalarımız',
    localPoints: [
      'Hacıhalil Mahallesi, Atatürk Caddesi ve Gebze Kent Meydanı yeraltı otopark çıkışı',
      'Sultan Orhan Mahallesi, İlyasbey Caddesi ve eski terminal çevresi',
      'Osman Yılmaz Mahallesi, Kızılay Caddesi, Şehit Numan Dede bağlantısı ve hastane önleri',
      'Yeni Bağdat Caddesi, Gebze Kaymakamlığı ve adliye çevresi dar sokaklar'
    ],
    fieldLogTitle: 'Gebze Merkez Saha Operasyon Kaydı',
    fieldLogDesc: 'Hacıhalil Mahallesi ara sokağında marş dinamosu arızalanan sedan otomobil, trafiği kilitlemeden 11 dakika içinde hidrolik kayar kasaya alınıp Gebze Oto Sanayi’deki elektrik servisine hasarsız teslim edildi.',
    faqs: [
      { q: 'Gebze çarşı merkezinde tek yönlü dar sokağa çekici girebiliyor mu?', a: 'Evet. Merkez vardiyamızda dar manevra yarıçapına sahip kompakt kayar kasa ve ahtapot araçlarımız görev yaptığı için Hacıhalil ve Sultan Orhan’ın en dar sokaklarından dahi araç alabiliyoruz.' },
      { q: 'Gebze Kent Meydanı kapalı otoparkında aracım çalışmıyor, içeri girer misiniz?', a: 'Evet. 1.88 metre yüksekliğindeki alçak kabinli otopark kurtarıcımız veya taşınabilir booster akü cihazımızla yeraltı otopark katlarına doğrudan iniyoruz.' },
      { q: 'Osman Yılmaz’dan Gebze Oto Sanayi’ye çekici ne kadar sürer?', a: 'Bulunduğunuz noktaya ortalama 10 dakikada ulaşıp yüklemeyi 5 dakikada tamamlıyoruz; trafiğe bağlı olarak toplam 25 dakika içinde aracınız ustanızın kapısında olur.' },
      { q: 'Gebze Merkez’de yalnızca akü takviye için çağırabilir miyim?', a: 'Elbette. Çekiciye gerek kalmayan boş akü durumlarında mobil yol yardım ekibimiz ECU korumalı booster cihazıyla 15 dakika içinde aracınızı yerinde çalıştırır.' },
      { q: 'Merkezdeki özel hastanelerin acil çıkışında kalan araçlara öncelik veriyor musunuz?', a: 'Evet. Hastane acil girişleri ve ambulans güzergâhlarında arızalanan araçlara acil öncelik koduyla en yakın nöbetçi aracımızı derhal yönlendiriyoruz.' }
    ]
  },
  {
    slug: 'gosb',
    name: 'GOSB',
    navbarTitle: 'GOSB ÇEKİCİ',
    navbarSub: '7/24 Gebze Organize Sanayi Filosu',
    featured: true,
    eta: '10 Dk',
    heroImg: 'gebze-ticari-osb',
    fieldImg: 'gebze-is-makinesi',
    lat: '40.8474',
    lng: '29.4316',
    cardSummary: 'GOSB İhsan Dede Caddesi, Tembelova bağlantısı, 1000–3000. sokaklar ve fabrika sahalarına 7/24 kurumsal çekici.',
    metaTitle: 'GOSB Çekici & Gebze Organize Sanayi Oto Kurtarma | 7/24 Filo',
    metaDesc: 'Gebze Organize Sanayi Bölgesi (GOSB), İhsan Dede Caddesi ve Tembelova köprüsünde binek, ticari panelvan ve forklift çekici: 0533 945 45 14.',
    heroLead: 'Gebze Organize Sanayi Bölgesi’nin (GOSB) tüm kapıları, İhsan Dede Caddesi, Tembelova kavşağı ve fabrika içi lojistik sahalarında vardiya aksatmayan kaskolu çekici ve ticari kurtarıcı desteği.',
    seoTitle: 'GOSB Sanayi Koridorunda Personel ve Ticari Filo Odaklı Kurtarma',
    paragraphs: [
      'Gebze Organize Sanayi Bölgesi (GOSB), yüzlerce yerli ve uluslararası üretim tesisini barındıran, sabah 07.30–09.00 ve akşam 17.00–19.30 saatlerinde binlerce çalışan ve servis aracının aynı anda hareket ettiği dev bir sanayi üssüdür. İhsan Dede Caddesi boyunca veya Tembelova Köprüsü girişinde tek bir arızalı binek araç ya da servis minibüsü bile kilometrelerce vardiya trafiği oluşturabilir.',
      'GOSB güvenlik giriş prosedürlerine, ana bulvarlara ve 1000’li–3000’li sanayi sokaklarına hâkim nöbetçi sürücülerimiz çağrınızın ardından ortalama 10–12 dakika içinde fabrika kapınıza veya yol kenarına ulaşır. Personel otomobilleri için düşük eğimli kayar kasa araçlarımız, şirketlerin uzun şasi panelvan ve 16+1 servis minibüsleri içinse yüksek tonajlı <a href="/hizmetler/ticari-arac-cekici.html">ticari araç çekicilerimiz</a> devreye girer.',
      'Üretim tesislerinin yalnızca binek araçlarında değil, depo içi lojistik süreçlerinde de yanındayız. Arızalanan dizel veya akülü forkliftler, kiralık makaslı platformlar ve ağır sanayi ekipmanları alçak açılı çelik rampalı <a href="/hizmetler/is-makinesi-tasima.html">iş makinesi taşıma</a> araçlarımızla GOSB’tan bakım servislerine aynı gün güvenle taşınır.',
      'GOSB bünyesindeki kurumsal firmalar için iş güvenliği ekipmanlarına tam uyumlu çalışma, yükleme öncesi emtia sigortası teyidi, mobil POS ödeme ve vergi numaranıza kesilen resmi KDV’li e-fatura standart hizmetimizin parçasıdır.'
    ],
    localPointsTitle: 'GOSB İçinde Hızlı Müdahale Verdiğimiz Noktalar',
    localPoints: [
      'GOSB İhsan Dede Caddesi, Meydan AVM, banka şubeleri ve Teknopark çevresi',
      'Tembelova Köprüsü, GOSB Ana Giriş Kapısı ve TEM bağlantı yolu',
      'GOSB 1000., 2000. ve 3000. sokaklar ile lojistik tır parkı çevresi',
      'GOSB – TOSB ve GOSB – Güzeller OSB ara geçiş güzergâhları'
    ],
    fieldLogTitle: 'GOSB Saha Operasyon Kaydı',
    fieldLogDesc: 'GOSB İhsan Dede Caddesi üzerinde vardiya çıkışında şanzıman arızası veren uzun şasi şirket panelvanı, 12 dakikada ulaşan ağır platformla yüklenip Kartal yetkili ticari servisine faturalı teslim edildi.',
    faqs: [
      { q: 'GOSB güvenlik kapılarından çekiciniz nasıl giriş yapıyor?', a: 'Kurumsal ruhsatlı araçlarımızla nizamiye güvenliğine tesis adını ve yönlendiren personel bilgisini ileterek hızlıca fabrika sahasına kadar girebiliyoruz.' },
      { q: 'Fabrika otoparkında aküsü biten personel aracı için geliyor musunuz?', a: 'Evet. Vardiya bitiminde çalışmayan binek araçlar için çekici çağırmadan yerinde 12V korumalı akü takviye ekibimizi doğrudan fabrika otoparkına gönderiyoruz.' },
      { q: 'GOSB’taki şirketimize düzenli filo çekici ve e-fatura hizmeti sunuyor musunuz?', a: 'Evet. Kurumsal şirket araçları, personel servisleri ve ticari kamyonetler için KDV’li e-fatura ve öncelikli sevk desteği veriyoruz.' },
      { q: 'GOSB içindeki tesisimizden forklift veya manlift taşıyor musunuz?', a: 'Evet. 3.5 tona kadar akülü/dizel forklift ve makaslı personel yükselticileri düşük açılı rampalı araçlarımızla güvenle naklediyoruz.' },
      { q: 'Tembelova Köprüsü trafiğinde çekici kaç dakikada ulaşır?', a: 'GOSB üst giriş ve Mutlukent hattında nöbetçi araçlarımız bulunduğu için Tembelova yoğunluğuna takılmadan alternatif OSB bağlantılarından 10–15 dakikada yanınızda oluyoruz.' }
    ]
  },
  {
    slug: 'mutlukent',
    name: 'Mutlukent',
    navbarTitle: 'MUTLUKENT ÇEKİCİ',
    navbarSub: '7/24 Mutlukent & Yenikent Filosu',
    featured: false,
    eta: '10 Dk',
    heroImg: 'gebze-suv-kurtarma',
    fieldImg: 'gebze-kapali-otopark',
    lat: '40.8228',
    lng: '29.4192',
    cardSummary: 'Mutlukent Bulvarı, Yenikent, site kapalı otoparkları ve TEM bağlantı kavşağında 7/24 sessiz ve hasarsız çekici.',
    metaTitle: 'Mutlukent Çekici | Site Garaj & 7/24 Oto Kurtarma',
    metaDesc: 'Gebze Mutlukent ve Yenikent mahallelerinde site kapalı otopark çekici, akü takviye ve SUV/binek kayar kasa kurtarıcı: 0533 945 45 14.',
    heroLead: 'Mutlukent Bulvarı, Yenikent sitesi, kapalı rezidans otoparkları ve GOSB–TEM bağlantı akslarında modern binek, SUV ve elektrikli araçlar için 7/24 hassas çekici desteği.',
    seoTitle: 'Mutlukent ve Yenikent Sitelerinde Kapalı Garaj ve VIP Araç Kurtarma',
    paragraphs: [
      'Gebze’nin en düzenli ve modern konut bölgesi olan Mutlukent ile bitişiğindeki Yenikent Mahallesi; geniş bulvarları, çok katlı güvenlikli siteleri, yeni nesil SUV ve elektrikli otomobil yoğunluğuyla öne çıkar. Bölgedeki arızaların önemli bir bölümü sabah işe gidiş saatlerinde yeraltı site otoparklarında yaşanan akü boşalmaları, elektronik el freni kilitlenmeleri ve soğuk hava kaynaklı marş sorunlarıdır.',
      'Standart yüksek çekicilerin giremediği Mutlukent site garajları için filomuzdaki 1.88 metre yüksekliğindeki özel <a href="/hizmetler/kapali-otopark-cekici.html">kapalı otopark kurtarıcısı</a> her saat göreve hazırdır. Araçların tavan sprinkler borularına ya da garaj rampasına sürtme riski olmadan, arka tekerlek altına rulmanlı doli arabası takılarak site dışına pürüzsüz çıkış sağlanır.',
      'Mutlukent Bulvarı üzerinden GOSB’a, Çayırova’ya veya TEM otoyoluna inen eğimli bağlantı yollarında yaşanan mekanik arızalarda ise düşük eğimli hidrolik kayar kasamız ortalama 10 dakika içinde konumunuza yetişir. Premium sedanlar, hibrit ve elektrikli modeller için <a href="/hizmetler/kazali-luks-arac-tasima.html">ek uzun kompozit rampalı</a> sıfır temas prosedürü uygulanır.',
      'Gece geç saatlerde site içi gürültü oluşturmadan, çevre sakinlerini rahatsız etmeyen sessiz operasyon disipliniyle aracınızı alıp sabah yetkili servisine ya da Gebze Sanayi’deki ustanıza sigortalı olarak teslim ediyoruz.'
    ],
    localPointsTitle: 'Mutlukent & Yenikent Hızlı Ulaşım Noktaları',
    localPoints: [
      'Mutlukent Bulvarı, Issıkgöl Caddesi kesişimi ve Yenikent Merkez Çarşı',
      'Mutlukent güvenlikli site kapalı otoparkları ve Doğa Konakları çevresi',
      'Mutlukent – GOSB bağlantı yolu ve TEM otoyol üst geçidi',
      'Gebze Teknik Üniversitesi yakın bağlantı ve Çayırova geçiş güzergâhı'
    ],
    fieldLogTitle: 'Mutlukent Saha Operasyon Kaydı',
    fieldLogDesc: 'Mutlukent’teki bir sitenin -2. kapalı garajında elektronik vites kilidi devreye giren otomatik SUV araç, alçak kabinli kurtarıcı ve tekerlek dolileriyle rampaya temas etmeden çıkarılıp yetkili servise nakledildi.',
    faqs: [
      { q: 'Mutlukent’teki sitemizin kapalı otopark yüksekliği 2.05 metre, çekiciniz inebilir mi?', a: 'Evet. Alçak tavanlı otopark çekicimizin toplam yüksekliği 1.88 metredir; Mutlukent ve Yenikent’teki tüm güvenlikli site garajlarına sorunsuz iner.' },
      { q: 'Sabah 07.30’da aracım çalışmıyor, işe geç kalmadan akü takviye gelir mi?', a: 'Mutlukent’e 10 dakika mesafedeki nöbetçi mobil yol yardım ekibimiz akım korumalı booster cihazıyla hızla gelip aracınızı yerinde çalıştırır.' },
      { q: 'Elektrikli aracımı Mutlukent’ten Kartal veya Ataşehir yetkili servisine taşıyabilir misiniz?', a: 'Evet. Elektrikli araçlara özel düşük açılı rampa ve tekerlek üstü bağlama kemerleriyle Gebze’den İstanbul’daki tüm marka yetkili servislerine kaskolu taşıma yapıyoruz.' },
      { q: 'Site güvenliği çekici girişi için ne ister?', a: 'Sakin olarak güvenlik kulübesine araç plakamızı ve daire bilginizi iletmeniz yeterlidir; yola çıktığımızda araç bilgilerimizi size WhatsApp’tan gönderiyoruz.' },
      { q: 'Yenikent Bulvarı üzerinde lastiğim yarıldı, stepnem yok; ne yapmalıyım?', a: 'Jant üzerinde yürüyerek lastiği ve jantı bozmayın; kayar kasa aracımızla 10–12 dakikada gelip aracınızı en yakın 7/24 açık lastikçiye ulaştırıyoruz.' }
    ]
  },
  {
    slug: 'beylikbagi',
    name: 'Beylikbağı',
    navbarTitle: 'BEYLİKBAĞI ÇEKİCİ',
    navbarSub: '7/24 Beylikbağı & Ulus Nöbetçi Ekibi',
    featured: true,
    eta: '10 Dk',
    heroImg: 'gebze-cadde-operasyon',
    fieldImg: 'gebze-gunbatimi',
    lat: '40.8065',
    lng: '29.3948',
    cardSummary: 'Beylikbağı, Ulus, Hürriyet, Yavuz Selim, Ankara Caddesi ve D-100 kuzey bağlantısında 7/24 ekonomik ve hızlı çekici.',
    metaTitle: 'Beylikbağı Çekici & Oto Kurtarma | Ulus, Yavuz Selim 7/24 Ekip',
    metaDesc: 'Gebze Beylikbağı, Ulus, Hürriyet, Yavuz Selim ve Ankara Caddesi’nde 7/24 uygun fiyatlı kaskolu oto çekici ve yol yardım: 0533 945 45 14.',
    heroLead: 'Beylikbağı, Ulus, Yavuz Selim ve Hürriyet mahallelerinin tamamında, Ankara Caddesi ve D-100 kuzey yan yollarında 10 dakikada yanınıza ulaşan 7/24 nöbetçi çekici.',
    seoTitle: 'Beylikbağı, Ulus ve Yavuz Selim Sokaklarında Hızlı Mahalle Kurtarıcısı',
    paragraphs: [
      'Gebze’nin en yüksek nüfus yoğunluğuna sahip yaşam merkezlerinden biri olan Beylikbağı bölgesi; Ulus, Yavuz Selim, Hürriyet ve Köşklü Çeşme mahalleleriyle birlikte hem konut hem de esnaf trafiğinin sabah erken saatlerden gece yarısına kadar sürdüğü canlı bir dokuya sahiptir. Ankara Caddesi, Yeni Bağdat Caddesi uzantısı ve Yaşar Doğu Caddesi gibi ana akslarda araç arızası yaşandığında hızlı müdahale trafiğin kilitlenmesini önler.',
      'Beylikbağı’nın eğimli sokak yapısını, pazar kurulan günleri ve Çayırova–Darıca ara kestirmelerini çok iyi bilen sürücülerimiz, navigasyonun soktuğu kapalı sokaklara takılmadan en açık rotadan 10 dakika içinde yanınıza ulaşır. Yokuşta debriyaj balatası yanan, fren hidroliği boşalan veya trigeri kopan araçlar geriye kaçma tehlikesi olmadan çift takoz ve kontrollü hidrolik vinçle platforma alınır.',
      'Bölgedeki ticari dağıtım araçları, esnaf kamyonetleri ve aile otomobilleri için tek bir numarayla hem <a href="/hizmetler/oto-cekici.html">kayar kasa oto çekici</a> hem <a href="/hizmetler/aku-takviye.html">yerinde akü takviye</a> hem de <a href="/hizmetler/lastik-yol-yardim.html">mobil lastik yol yardım</a> desteği sunuyoruz.',
      'Beylikbağı’ndan Gebze Oto Sanayi Sitesi’ne, Çayırova servislerine veya D-100 hattındaki yetkili merkezlere yapılacak taşımalarda telefonda netleştirilen ekonomik sabit fiyat garantisiyle çalışıyor, yükleme sonrası ek masraf çıkarmıyoruz.'
    ],
    localPointsTitle: 'Beylikbağı Çevresi Aktif Hizmet Alanlarımız',
    localPoints: [
      'Beylikbağı Merkez, Ankara Caddesi, Sarı Cami ve Yaşar Doğu Caddesi',
      'Ulus Mahallesi, Namık Kemal Caddesi ve Şehit Mevlüt Duru bağlantısı',
      'Yavuz Selim ve Hürriyet mahalleleri ile D-100 kuzey yan yol girişi',
      'Beylikbağı – Çayırova köprüsü ve Gebze Sanayi geçiş güzergâhı'
    ],
    fieldLogTitle: 'Beylikbağı Saha Operasyon Kaydı',
    fieldLogDesc: 'Ulus Mahallesi’ndeki dik yokuşta debriyaj merkezi arızalanan aile otomobili, tekerlek takozları ve hidrolik vinç emniyetiyle kayar kasaya yüklenerek Gebze Oto Sanayi’ye 20 dakikada ulaştırıldı.',
    faqs: [
      { q: 'Beylikbağı’nın dik ara sokaklarında freni tutmayan aracı güvenle alabilir misiniz?', a: 'Evet. Tekerlek takozları ve yüksek çekme kapasiteli hidrolik tambur vincimizle aracı kontrolsüz kaymaya izin vermeden milimetrik biçimde platforma yüklüyoruz.' },
      { q: 'Pazar günleri veya gece yarısı Beylikbağı’nda çekici ne kadar sürede gelir?', a: '7/24 nöbetçi araçlarımız Beylikbağı–D-100 hattına çok yakın konuşlu olduğu için hafta sonu ve gece saatlerinde de ortalama 10–15 dakikada ulaşıyoruz.' },
      { q: 'Beylikbağı’ndan Darıca veya Tuzla’daki ustama çekim yapıyor musunuz?', a: 'Evet. Yalnızca Gebze içi değil, Darıca, Çayırova, Tuzla, Pendik ve Kartal sanayi sitelerine de uygun sabit ücretle taşıma yapıyoruz.' },
      { q: 'Yavuz Selim Mahallesi’nde önü ve arkası park halindeki araçlarla kapalı otomobilimi çıkarabilir misiniz?', a: 'Evet. Önü ve arkası kapalı araçlarda ahtapot vinçli çekicimizle yan şeritten dikey kaldırma yaparak diğer araçlara dokunmadan tahliye sağlıyoruz.' },
      { q: 'Mobil POS cihazınız var mı, kartla ödeme yapabilir miyim?', a: 'Evet. Tüm nöbetçi çekicilerimizde mobil POS bulunur; nakit, kredi kartı veya IBAN üzerinden kolayca ödeme yapıp faturanızı alabilirsiniz.' }
    ]
  },
  {
    slug: 'tatlikuyu',
    name: 'Tatlıkuyu',
    navbarTitle: 'TATLIKUYU ÇEKİCİ',
    navbarSub: '7/24 Tatlıkuyu & Gebze Center Filosu',
    featured: false,
    eta: '8–12 Dk',
    heroImg: 'gebze-gunbatimi',
    fieldImg: 'gebze-merkez-cekici',
    lat: '40.7931',
    lng: '29.4368',
    cardSummary: 'Tatlıkuyu Vadisi, Gebze Center AVM, Ahmet Penbegüllü Bulvarı ve D-100 güney bağlantısında 8–12 dk varış.',
    metaTitle: 'Tatlıkuyu Çekici & Gebze Center AVM Oto Kurtarma | 7/24 Hızlı Ekip',
    metaDesc: 'Gebze Tatlıkuyu, Gebze Center AVM otoparkı, Ahmet Penbegüllü Bulvarı ve Tatlıkuyu Köprüsü’nde 7/24 kaskolu oto çekici: 0533 945 45 14.',
    heroLead: 'Tatlıkuyu Mahallesi, Gebze Center AVM otoparkları, Ahmet Penbegüllü Bulvarı ve Tatlıkuyu Vadisi çevresinde 8–12 dakikada ulaşan nöbetçi çekici ve garaj kurtarıcısı.',
    seoTitle: 'Tatlıkuyu ve Gebze Center Çevresinde Anında Çekici & Otopark Desteği',
    paragraphs: [
      'D-100 Karayolu’nun hemen güneyinde yer alan Tatlıkuyu Mahallesi; Gebze Center AVM, oteller, modern konut siteleri, Tatlıkuyu Vadisi rekreasyon alanı ve Eskihisar–Darıca bağlantı yollarının kesişiminde yer alır. Özellikle hafta sonları Gebze Center AVM açık ve kapalı otoparkları ile Ahmet Penbegüllü Bulvarı üzerinde yoğun ziyaretçi trafiği oluşur.',
      'Alışveriş dönüşü aracınızın kapalı otoparkta marş almaması, farların açık unutulmasıyla akünün boşalması veya otopark bariyeri önünde şanzımanın kilitlenmesi Tatlıkuyu bölgesinde en sık karşılaştığımız senaryolardır. Merkez noktamıza yalnızca birkaç dakika uzaklıkta olan Tatlıkuyu’ya ortalama 8–12 dakika içinde ulaşarak mağduriyetinizi hızla gideriyoruz.',
      'AVM ve rezidans garajlarının alçak tavan sınırına tam uyumlu <a href="/hizmetler/kapali-otopark-cekici.html">kapalı otopark çekicimiz</a>, yerinde çalışan <a href="/hizmetler/aku-takviye.html">akım korumalı akü booster</a> ekibimiz ve D-100 yan yollarında görev yapan kayar kasa araçlarımız Tatlıkuyu genelinde entegre çalışır.',
      'Tatlıkuyu Köprüsü üzerinden Eskihisar feribotuna ya da İzmit istikametine giderken yaşanan hararet, kayış kopması ve lastik yarılmalarında trafiği riske atmadan aracınızı yükleyip tercih ettiğiniz yetkili servise sigortalı olarak ulaştırıyoruz.'
    ],
    localPointsTitle: 'Tatlıkuyu Bölgesinde Öncelikli Noktalarımız',
    localPoints: [
      'Gebze Center AVM kapalı ve açık otopark katları ile otel girişleri',
      'Ahmet Penbegüllü Bulvarı, Körfez Caddesi ve Tatlıkuyu Vadisi çevresi',
      'Tatlıkuyu Köprüsü, D-100 güney yan yol ve Eskihisar bağlantı çıkışı',
      'Tatlıkuyu yeni nesil site garajları ve Barış Mahallesi sınır hattı'
    ],
    fieldLogTitle: 'Tatlıkuyu Saha Operasyon Kaydı',
    fieldLogDesc: 'Gebze Center AVM kapalı otoparkında aküsü tamamen boşalan hibrit otomobil, mobil ekibimizin dijital pik korumalı booster cihazıyla 10 dakikada zarar görmeden çalıştırılıp alternatör testi yapıldı.',
    faqs: [
      { q: 'Gebze Center AVM kapalı otoparkına çekiciniz girebiliyor mu?', a: 'Evet. Alçak tavanlı özel otopark kurtarıcımız AVM garaj yüksekliğine tam uyumludur; akü kaynaklıysa mobil booster ile çekime gerek kalmadan da çözüm üretiyoruz.' },
      { q: 'Tatlıkuyu’da aracım yolda kaldı, kaç dakikada yanımda olursunuz?', a: 'Tatlıkuyu ana nöbetçi noktamıza komşu olduğundan normal trafikte 8–12 dakika içinde konumunuza ulaşıyoruz.' },
      { q: 'Gebze Center önündeki D-100 yan yolda lastiğim patladı, stepne değişimi yapıyor musunuz?', a: 'Evet. Hidrolik kriko ve akülü tork anahtarıyla stepne değişimi yapıyor, stepneniz yoksa aracı en yakın açık lastikçiye kayar kasayla bırakıyoruz.' },
      { q: 'Gece AVM kapanış saatinde otoparkta mahsur kaldım, hızlı gelir misiniz?', a: 'Evet. Gece 22.00 sonrası AVM ve çevre site çağrılarına acil nöbetçi ekibimiz 7/24 hızla yanıt verir.' },
      { q: 'Tatlıkuyu’dan Gebze Oto Sanayi’ye çekici fiyatı neye göre belirlenir?', a: 'Kısa mesafe şehir içi sabit tarifemiz geçerlidir; araç tipinizi ve kapalı garaj olup olmadığını söylediğinizde telefonda kesin rakamı paylaşıyoruz.' }
    ]
  },
  {
    slug: 'istasyon',
    name: 'İstasyon Mahallesi',
    navbarTitle: 'İSTASYON MAHALLESİ ÇEKİCİ',
    navbarSub: '7/24 Marmaray & YHT Garı Çevresi',
    featured: false,
    eta: '10–15 Dk',
    heroImg: 'gebze-istasyon',
    fieldImg: 'gebze-sedan-otoyol',
    lat: '40.7858',
    lng: '29.4087',
    cardSummary: 'Gebze Marmaray & YHT Garı, İstasyon Caddesi, İbrahimağa ve Eskihisar geçiş hattında 7/24 hızlı oto kurtarma.',
    metaTitle: 'İstasyon Mahallesi Çekici | Gebze Marmaray & YHT Garı Oto Kurtarma',
    metaDesc: 'Gebze İstasyon Mahallesi, Marmaray ve Yüksek Hızlı Tren Garı çevresi, İstasyon Caddesi’nde 7/24 kaskolu oto çekici ve akü takviye: 0533 945 45 14.',
    heroLead: 'Gebze Marmaray ve Yüksek Hızlı Tren (YHT) Garı otoparkları, İstasyon Caddesi ve Darıca–Eskihisar bağlantı aksında 7/24 hızlı, kaskolu çekici ve yol yardım.',
    seoTitle: 'Gebze İstasyon Mahallesi ve Tren Garı Çevresinde Kesintisiz Yol Yardım',
    paragraphs: [
      'Gebze İstasyon Mahallesi, İstanbul–Ankara Yüksek Hızlı Tren (YHT) ve Marmaray son durağına ev sahipliği yapması nedeniyle her gün binlerce yolcunun aracını park ettiği ya da yolcu bırakıp aldığı kritik bir ulaşım merkezidir. İstasyon Caddesi, Şehit Abdullah Horoz Caddesi ve güneydeki Eskihisar–Darıca bağlantısı özellikle tren geliş-gidiş saatlerinde yoğunlaşır.',
      'Yolculuktan dönen sürücülerin gar otoparkında günlerce beklemiş araçlarında karşılaştığı akü bitmesi, lastik inmesi veya elektronik immobilizer kilitlenmeleri bölgedeki en yaygın çağrı sebepleridir. İstasyon Mahallesi’ne 10–15 dakikada ulaşan mobil ekiplerimiz, akü sorunlarını yerinde çözerken mekanik arızalarda <a href="/hizmetler/oto-cekici.html">kayar kasa oto çekici</a> ile aracınızı güvenle servise taşır.',
      'İstasyon Caddesi boyunca yoğun kaldırım kenarı parklanmaları nedeniyle sıkışık durumda kalan otomobillerde tampon veya kapı sürtme riskini sıfırlayan hassas yükleme ekipmanlarımız ve gerekirse <a href="/hizmetler/ahtapot-cekici.html">ahtapot vinçli çekicimiz</a> devreye girer.',
      'Ayrıca mahallenin hemen yakınındaki Gebze Teknik Üniversitesi ve Darıca sahil bağlantı yollarında motosiklet arızaları için ön teker kıskaçlı <a href="/hizmetler/motosiklet-cekici.html">motosiklet çekici</a> desteğimiz de 7/24 aktiftir.'
    ],
    localPointsTitle: 'İstasyon Mahallesi Hızlı Müdahale Noktaları',
    localPoints: [
      'Gebze Marmaray İstasyonu ve Yüksek Hızlı Tren (YHT) Garı otopark alanları',
      'İstasyon Caddesi, 1400’lü sokaklar ve pazar yeri çevresi',
      'İstasyon – Darıca İstasyon Caddesi geçişi ve sahil bağlantı kavşağı',
      'Eskihisar yolu alt geçit bağlantısı ve D-100 kuzey çıkış rampası'
    ],
    fieldLogTitle: 'İstasyon Mahallesi Saha Operasyon Kaydı',
    fieldLogDesc: 'Gebze YHT Garı açık otoparkında 4 günlük seyahat sonrası aküsü tamamen boşalan otomatik sedan otomobil, 12 dakikada ulaşan mobil booster ekibimizle tek marşta güvenle çalıştırıldı.',
    faqs: [
      { q: 'Gebze YHT veya Marmaray otoparkında aracım çalışmıyor, ne kadar sürede gelirsiniz?', a: 'İstasyon Mahallesi ve tren garı otoparkına ortalama 10–15 dakika içinde ulaşarak yerinde akü takviye veya çekici desteği veriyoruz.' },
      { q: 'İstasyon Caddesi’nde trafiği tıkamadan aracı hızlıca yükleyebilir misiniz?', a: 'Evet. Reflektör güvenlik şeridiyle arkadan gelen trafiği uyararak 5–7 dakika içinde aracınızı kayar kasaya alıp caddeyi rahatlatıyoruz.' },
      { q: 'Gece son Marmaray seferinden indiğimde aracım arızalanırsa açık mısınız?', a: 'Evet. 7/24 kesintisiz nöbetçi sistemimizle gece 01.00 veya 04.00 fark etmeksizin anında hizmet veriyoruz.' },
      { q: 'Motosikletim İstasyon Mahallesi’nde zincir kopardı, taşıyabilir misiniz?', a: 'Evet. Ön tekerlek sabitleme kıskacı ve kaymaz motor rampası taşıyan ekibimiz motosikletinizi dik ve çiziksiz biçimde servisinize ulaştırır.' },
      { q: 'İstasyon’dan İstanbul Pendik veya Maltepe yetkili servisine araç çekiyor musunuz?', a: 'Evet. Gebze içi servislerin yanında İstanbul Anadolu Yakası ve Kocaeli İzmit’teki tüm yetkili servislere sabit fiyatla kaskolu nakil yapıyoruz.' }
    ]
  },
  {
    slug: 'arapcesme',
    name: 'Arapçeşme',
    navbarTitle: 'ARAPÇEŞME ÇEKİCİ',
    navbarSub: '7/24 Arapçeşme & Kavaklı Filosu',
    featured: false,
    eta: '10–12 Dk',
    heroImg: 'gebze-kamyonet-tasima',
    fieldImg: 'gebze-merkez-cekici',
    lat: '40.8112',
    lng: '29.4384',
    cardSummary: 'Arapçeşme, Kavaklı Caddesi, Şehit Oktay Kaya Caddesi ve Gaziler bağlantısında 7/24 hızlı oto kurtarma.',
    metaTitle: 'Arapçeşme Çekici & Oto Kurtarma | Gebze Kavaklı 7/24 Yol Yardım',
    metaDesc: 'Gebze Arapçeşme, Kavaklı Caddesi ve Gaziler Mahallesi çevresinde 7/24 kayar kasa oto çekici, akü takviye ve lastik yol yardım: 0533 945 45 14.',
    heroLead: 'Arapçeşme Mahallesi, Kavaklı Caddesi, Şehit Oktay Kaya Caddesi ve Gaziler–Kirazpınar geçiş yollarında 10–12 dakikada ulaşan güvenilir 7/24 oto çekici.',
    seoTitle: 'Arapçeşme ve Kavaklı Hattında Hızlı Yerel Oto Kurtarma',
    paragraphs: [
      'Gebze’nin kuzey merkez yerleşim dokusunun en hareketli mahallelerinden Arapçeşme; Kavaklı Caddesi, Şehit Oktay Kaya Caddesi, Zafer Caddesi ve Gaziler Dağı bağlantılarıyla hem yoğun konut trafiğini hem de GOSB ve Kirazpınar yönüne giden transit akışı taşır. Bölgedeki bazı cadde ve sokakların dik eğimli olması özellikle kış yağışlarında ve baskı-balata yıpranmalarında yolda kalma vakalarını artırır.',
      'Arapçeşme’nin tüm ara sokaklarına hâkim yerel operatörlerimiz, aracınızın yokuşta geriye kayma riskini ortadan kaldıran hidrolik vinç ve çift takoz emniyetiyle ortalama 10–12 dakikada müdahale eder. Binek otomobillerden pikap ve esnaf kamyonetlerine kadar her sınıf aracı <a href="/hizmetler/oto-cekici.html">kayar kasa platform</a> üzerinde 4 tekerlekten bağlayarak güvenle taşırız.',
      'Sabah çocukları okula ya da işe bırakırken apartman önünde çalışmayan araçlar için vakit kaybettirmeyen <a href="/hizmetler/aku-takviye.html">yerinde akü takviye</a> servisimiz ve kaldırıma sürtüp yarılan lastikler için <a href="/hizmetler/lastik-yol-yardim.html">mobil lastik desteğimiz</a> aynı vardiya içinde aktiftir.',
      'Arapçeşme’den Gebze Oto Sanayi’ye çok kısa ulaşım mesafesi sayesinde ekonomik sabit fiyat avantajı sunuyor, aracınızı ustanızın kapısına kaskolu ve faturalı teslim ediyoruz.'
    ],
    localPointsTitle: 'Arapçeşme Bölgesinde Hizmet Verdiğimiz Ana Noktalar',
    localPoints: [
      'Kavaklı Caddesi, Şehit Oktay Kaya Caddesi ve Arapçeşme Meydanı',
      'Gaziler Mahallesi sınırı, Gaziler Dağı Tabiat Parkı yolu ve üst bağlantılar',
      'Zafer Caddesi, okul çevreleri ve semt pazarı bağlantı sokakları',
      'Arapçeşme – Sultan Orhan – Gebze Oto Sanayi hızlı geçiş hattı'
    ],
    fieldLogTitle: 'Arapçeşme Saha Operasyon Kaydı',
    fieldLogDesc: 'Kavaklı Caddesi üzerindeki eğimde hararet yapıp conta riski oluşturan hatchback otomobil, motoru zorlanmadan 10 dakikada kayar kasaya alınıp Gebze Sanayi’deki motor ustasına bırakıldı.',
    faqs: [
      { q: 'Arapçeşme’nin dar ve yokuşlu sokaklarına çekici girebiliyor mu?', a: 'Evet. Kısa şasili manevra kabiliyeti yüksek kayar kasa aracımızla Arapçeşme’nin eğimli ve dar sokaklarından hasarsız araç alımı yapıyoruz.' },
      { q: 'Arapçeşme’den Gebze Oto Sanayi’ye çekici kaç dakikada teslim eder?', a: 'Konuma 10–12 dakikada ulaşıp yüklemeyi tamamladıktan sonra sanayiye ortalama 10–15 dakikalık sürüşle teslimat yapıyoruz.' },
      { q: 'Gaziler Dağı yolunda gece saatlerinde yolda kaldım, geliyor musunuz?', a: 'Evet. Gaziler Dağı çevresi ve tüm kuzey bağlantı yollarında 7/24 ışıklı kurtarıcı ekibimizle hizmet veriyoruz.' },
      { q: 'Binek aracımın yanında ticari kamyonetimi de çekebilir misiniz?', a: 'Evet. Uzun şasili ve yüksek tonajlı ticari çekici aracımızla panelvan ve kamyonet taşımacılığı da yapıyoruz.' },
      { q: 'Telefonda aldığım fiyata gece veya yokuş ek ücreti biner mi?', a: 'Hayır. Aracın durumu ve teslimat adresine göre telefonda onayladığınız sabit fiyat dışında hiçbir sürpriz ek ücret çıkmaz.' }
    ]
  },
  {
    slug: 'kirazpinar',
    name: 'Kirazpınar',
    navbarTitle: 'KİRAZPINAR ÇEKİCİ',
    navbarSub: '7/24 Kirazpınar & Emlak Konut Filosu',
    featured: false,
    eta: '12–15 Dk',
    heroImg: 'gebze-suv-kurtarma',
    fieldImg: 'gebze-istasyon',
    lat: '40.8249',
    lng: '29.4547',
    cardSummary: 'Kirazpınar, Emlak Konutları, TOKİ siteleri, TEM kuzey bağlantısı ve Sultan Orhan sanayi aksında 7/24 çekici.',
    metaTitle: 'Kirazpınar Çekici & Oto Kurtarma | Emlak Konutları 7/24 Yol Yardım',
    metaDesc: 'Gebze Kirazpınar, Emlak Konutları, TOKİ blokları ve TEM Kirazpınar bağlantısında 7/24 oto çekici, kapalı garaj kurtarıcı ve akü takviye: 0533 945 45 14.',
    heroLead: 'Kirazpınar Mahallesi, Emlak Konutları etapları, TOKİ konutları ve TEM otoyolu kuzey bağlantılarında 12–15 dakikada yanınızda olan kaskolu 7/24 oto çekici.',
    seoTitle: 'Kirazpınar Emlak Konutları ve Kuzey Gebze Hattında Kesintisiz Destek',
    paragraphs: [
      'Gebze’nin kuzeydoğu gelişim aksında yer alan Kirazpınar Mahallesi; Emlak Konutları etapları, TOKİ konut projeleri, yeni açılan geniş bulvarları ve TEM Otoyolu’nun kuzeyindeki stratejik konumuyla hızla büyüyen bir yerleşim merkezidir. İlçe merkezinden ve sanayi sitelerinden nispeten yüksek rakımda bulunan Kirazpınar’da, özellikle kış aylarında yaşanan don ve soğuk hava akü performansını ciddi biçimde düşürür.',
      'Sabah işe yetişmeye çalışırken site açık veya kapalı otoparkında marş almayan araçlar için dışarıdan saatlerce çekici beklemenize gerek yoktur. Kirazpınar bağlantı aksına 12–15 dakika mesafedeki ekiplerimiz; hem <a href="/hizmetler/aku-takviye.html">yerinde 12V/24V korumalı akü takviye</a> hem de site kapalı garajlarına rahatça inen <a href="/hizmetler/kapali-otopark-cekici.html">alçak kabinli otopark çekicisi</a> ile doğrudan blok önüne ulaşır.',
      'Kirazpınar’ı TEM gişelerine, Arapçeşme’ye ve Güzeller OSB’ye bağlayan bulvarlarda meydana gelen mekanik arızalar, yakıt sistemi sorunları veya trafik kazalarında ise hidrolik kayar kasa ve <a href="/hizmetler/oto-kurtarma.html">vinçli oto kurtarma</a> araçlarımız derhal sevk edilir.',
      'Taşıma süresince aracınız tam kapsamlı emtia sigortası güvencesindedir; dilerseniz aracınızı Gebze Oto Sanayi’ye, dilerseniz İzmit veya İstanbul’daki marka yetkili servisine sabit fiyatla ulaştırıyoruz.'
    ],
    localPointsTitle: 'Kirazpınar Bölgesinde Hızlı Ulaşım Alanlarımız',
    localPoints: [
      'Kirazpınar Emlak Konutları 1., 2. ve 3. etap site girişleri ile kapalı otoparklar',
      'Kirazpınar TOKİ konutları, Yeni Bağdat üst bağlantısı ve Şehit Ali Gaffar Okkan çevresi',
      'Kirazpınar – TEM Otoyolu kuzey yan yol ve Güzeller OSB geçiş aksı',
      'Kirazpınar – Pelitli ve Gebze Yeni Sanayi bağlantı güzergâhları'
    ],
    fieldLogTitle: 'Kirazpınar Saha Operasyon Kaydı',
    fieldLogDesc: 'Kirazpınar Emlak Konutları otoparkında soğuk sabah marş basmayan Start-Stop donanımlı SUV araç, ECU korumalı dijital booster ile 14 dakikada yerinde çalıştırılıp alternatör ölçümü yapıldı.',
    faqs: [
      { q: 'Kirazpınar Emlak Konutları kapalı otoparkına çekiciniz girebilir mi?', a: 'Evet. 1.88 metre yüksekliğe sahip alçak kabinli otopark çekicimizle Emlak Konutları ve TOKİ site garajlarına tavan sürtme riski olmadan giriyoruz.' },
      { q: 'Kirazpınar biraz yüksekte kalıyor, karlı veya buzlu havalarda da geliyor musunuz?', a: 'Evet. Kış lastikli ve ağır hizmet ekipmanlı nöbetçi kurtarıcılarımız karlı ve buzlu havalarda da Kirazpınar’a 7/24 güvenli ulaşım sağlar.' },
      { q: 'Kirazpınar’dan Gebze Oto Sanayi’ye araç çekimi ne kadar tutar?', a: 'Gebze içi sabit mesafe tarifemiz uygulanır; telefonla aradığınızda araç tipinize göre kesin fiyatı yükleme öncesi bildiriyoruz.' },
      { q: 'Aracımın iki lastiği birden kaldırıma çarpıp yarıldı, kurtarabilir misiniz?', a: 'Evet. Jantlara zarar vermeden düşük eğimli kayar kasaya yükleyip Kirazpınar’a en yakın açık lastikçiye veya servisinize teslim ediyoruz.' },
      { q: 'Gece 03.00’te Kirazpınar’da nöbetçi çekici bulunuyor mu?', a: 'Evet. 7 gün 24 saat kesintisiz vardiya sistemimizle gece saatlerinde de 15 dakika ortalamasıyla yanınızdayız.' }
    ]
  },
  {
    slug: 'baris-mahallesi',
    name: 'Barış Mahallesi',
    navbarTitle: 'BARIŞ MAHALLESİ ÇEKİCİ',
    navbarSub: '7/24 Barış & TÜBİTAK Hattı Filosu',
    featured: false,
    eta: '10 Dk',
    heroImg: 'gebze-sedan-otoyol',
    fieldImg: 'gebze-hero-otoyol',
    lat: '40.7897',
    lng: '29.4508',
    cardSummary: 'Barış Mahallesi, TÜBİTAK MAM yolu, Dr. Zeki Acar Caddesi ve D-100 güney hattında 7/24 hızlı oto çekici.',
    metaTitle: 'Barış Mahallesi Çekici & Oto Kurtarma | TÜBİTAK Yolu 7/24 Ekip',
    metaDesc: 'Gebze Barış Mahallesi, TÜBİTAK MAM yolu, Dr. Zeki Acar Caddesi ve Gebze Sanayi çevresinde 7/24 kaskolu oto çekici: 0533 945 45 14.',
    heroLead: 'Barış Mahallesi, Dr. Zeki Acar Caddesi, TÜBİTAK Marmara Araştırma Merkezi bağlantı yolu ve D-100 güney kuşağında 10 dakikada müdahale eden kaskolu çekici.',
    seoTitle: 'Barış Mahallesi ve TÜBİTAK Yolu Koridorunda Hızlı Çekici Çözümleri',
    paragraphs: [
      'Gebze’nin güneydoğu ekseninde, Tatlıkuyu ile Eskihisar–TÜBİTAK hattı arasında konumlanan Barış Mahallesi; Dr. Zeki Acar Caddesi, Koşuyolu Caddesi, modern konut blokları ve önemli iş merkezleriyle gün boyu aktif bir ulaşım bölgesidir. Özellikle TÜBİTAK Marmara Araştırma Merkezi (MAM) kampüsüne ve Bilişim Vadisi sahil aksına giden araştırmacı, mühendis ve şirket araçları bu güzergâhı yoğun biçimde kullanır.',
      'Barış Mahallesi’nin D-100 Karayolu’na doğrudan çıkışı ve Gebze Oto Sanayi’ye olan yakınlığı sayesinde arızalanan araçların servise nakli son derece hızlı gerçekleştirilir. 10 dakika içinde adresinize ulaşan <a href="/hizmetler/oto-cekici.html">kayar kasa oto çekici</a> araçlarımız, sıfır eğimli hidrolik platformla binek, elektrikli ve sportif otomobilleri alt takıma dokunmadan yükler.',
      'Dr. Zeki Acar Caddesi ve 1800’lü sokaklardaki yoğun park düzeninde tekerleği kilitlenen veya şanzıman arızası veren araçlar için <a href="/hizmetler/ahtapot-cekici.html">ahtapot vinçli çekici</a> ve tekerlek patenleri hazır bulundurulur. TÜBİTAK yolu üzerindeki ani lastik patlamaları ya da akü boşalmalarında ise mobil yol yardım ekibimiz hızla yerinde çözüm sunar.',
      'Bölgedeki kurumsal tesislerin araç filoları ve bireysel sürücüler için yükleme öncesi net fiyat teyidi, taşıma kaskosu ve mobil POS ile KDV’li e-fatura kolaylığı sağlıyoruz.'
    ],
    localPointsTitle: 'Barış Mahallesi Öncelikli İntikal Noktaları',
    localPoints: [
      'Dr. Zeki Acar Caddesi, Barış Caddesi ve 1800’lü yerleşim sokakları',
      'TÜBİTAK Marmara Araştırma Merkezi (MAM) giriş yolu ve bağlantı kavşağı',
      'Barış Mahallesi – Tatlıkuyu ve D-100 güney yan yol geçişi',
      'Eskihisar – Muallimköy sahil bağlantısı ve çevre site otoparkları'
    ],
    fieldLogTitle: 'Barış Mahallesi Saha Operasyon Kaydı',
    fieldLogDesc: 'Dr. Zeki Acar Caddesi üzerinde soğutma hortumu patlayan otomatik sedan araç, 9 dakikada ulaşan hidrolik kayar kasayla yüklenip Gebze yetkili servisine hasarsız ulaştırıldı.',
    faqs: [
      { q: 'TÜBİTAK MAM kampüsü girişinde kalan aracı almaya geliyor musunuz?', a: 'Evet. TÜBİTAK yolu ve kampüs giriş kapısına 10–12 dakikada ulaşıp güvenlik bilgisi dahilinde aracınızı güvenle teslim alıyoruz.' },
      { q: 'Barış Mahallesi’nde elektrikli otomobilim uyarı verip durdu, çekebilir misiniz?', a: 'Evet. Elektrikli araçların batarya tabanını koruyan düşük açılı uzatma rampalarımız ve tekerlek üstü bağlama kemerlerimizle sıfır hasarlı nakil yapıyoruz.' },
      { q: 'Barış Mahallesi’nden Gebze Oto Sanayi’ye çekim kaç dakika sürer?', a: 'Barış Mahallesi sanayi bölgesine çok yakın olduğundan 10 dakikada yanınıza gelip toplam 20–25 dakika içinde aracınızı ustanıza bırakıyoruz.' },
      { q: 'Site otoparkında stepne değiştiremiyorum, bijon sıkışmış; yardımcı olur musunuz?', a: 'Evet. Akülü tork anahtarı ve hidrolik kriko taşıyan mobil lastik ekibimiz sıkışmış bijonları janta zarar vermeden söküp stepnenizi takar.' },
      { q: 'Hafta sonu ve resmi tatillerde Barış Mahallesi’nde hizmetiniz açık mı?', a: 'Evet. Yılın 365 günü 7/24 nöbetçi ekiplerimizle kesintisiz hizmet sunuyoruz.' }
    ]
  },
  {
    slug: 'mevlana-mahallesi',
    name: 'Mevlana Mahallesi',
    navbarTitle: 'MEVLANA MAHALLESİ ÇEKİCİ',
    navbarSub: '7/24 Mevlana & Issıkgöl Filosu',
    featured: false,
    eta: '10–14 Dk',
    heroImg: 'gebze-merkez-cekici',
    fieldImg: 'gebze-cadde-operasyon',
    lat: '40.8165',
    lng: '29.4038',
    cardSummary: 'Mevlana Mahallesi, Issıkgöl Caddesi, Somuncu Baba çevresi ve Çayırova sınır hattında 7/24 hızlı çekici.',
    metaTitle: 'Mevlana Mahallesi Çekici & Oto Kurtarma | Issıkgöl Cd. 7/24 Ekip',
    metaDesc: 'Gebze Mevlana Mahallesi, Issıkgöl Caddesi ve Mutlukent–Çayırova bağlantı hattında 7/24 kaskolu oto çekici ve yerinde akü takviye: 0533 945 45 14.',
    heroLead: 'Mevlana Mahallesi, Issıkgöl Caddesi, Şehitler Caddesi ve Mutlukent–Çayırova geçiş aksında 10–14 dakikada ulaşan 7/24 nöbetçi kayar kasa ve yol yardım ekibi.',
    seoTitle: 'Mevlana Mahallesi ve Issıkgöl Caddesi’nde Güvenilir 7/24 Çekici',
    paragraphs: [
      'Gebze ile Çayırova arasındaki stratejik geçiş kuşağında bulunan Mevlana Mahallesi; Issıkgöl Caddesi, Erenler Caddesi, geniş konut alanları, ticari esnaf noktaları ve sanayiye giden personel servislerinin aktif güzergâhlarıyla öne çıkar. Özellikle Issıkgöl Caddesi üzerinde sabah ve akşam iş çıkış saatlerinde yoğun trafik oluşur; bu aksta arızalanan bir aracın hızla kaldırılması büyük önem taşır.',
      'Mevlana Mahallesi’ndeki çağrılara hem Beylikbağı hem de Mutlukent yönündeki nöbetçi araçlarımızdan hangisi o an en yakınsa doğrudan sevk çıkarılır. Bu çift yönlü kapsama sayesinde ortalama 10–14 dakika içinde yanınıza ulaşarak uzun bekleyişleri ortadan kaldırıyoruz.',
      'Mahalle içi otoparklarda ve cadde kenarlarında karşılaşılan marş basmama, akü zayıflaması, alternatör arızası, direksiyon pompası veya şanzıman sorunlarında tek telefonla doğru ekipman gelir. Küçük arızalarda <a href="/hizmetler/aku-takviye.html">yerinde akü takviye</a> veya <a href="/hizmetler/lastik-yol-yardim.html">mobil lastik değişimi</a> yapılırken, servise gitmesi gereken araçlar <a href="/hizmetler/oto-cekici.html">hidrolik kayar kasa</a> ile kaskolu taşınır.',
      'Mevlana Mahallesi’nden Gebze Oto Sanayi, Çayırova servisleri veya Tuzla sanayi bölgesine sabit ve şeffaf ücretlerle taşıma gerçekleştiriyor, mobil POS ve fatura kolaylığı sunuyoruz.'
    ],
    localPointsTitle: 'Mevlana Mahallesi Hızlı Müdahale Noktalarımız',
    localPoints: [
      'Issıkgöl Caddesi, Erenler Caddesi ve Mevlana Kapalı Pazar alanı çevresi',
      'Mevlana Mahallesi 800’lü sokaklar ve çevre site girişleri',
      'Mevlana – Beylikbağı ve Mevlana – Mutlukent bağlantı kavşakları',
      'Çayırova Akse ve Yenimahalle sınır geçiş noktaları'
    ],
    fieldLogTitle: 'Mevlana Mahallesi Saha Operasyon Kaydı',
    fieldLogDesc: 'Issıkgöl Caddesi üzerinde triger kayışı kopan ticari hafif araç, 11 dakikada gelen kayar kasa kurtarıcımızla trafiği aksatmadan yüklenip Gebze Sanayi’ye güvenle teslim edildi.',
    faqs: [
      { q: 'Issıkgöl Caddesi’nde yoğun trafikte çekiciniz kaç dakikada gelebilir?', a: 'Beylikbağı ve Mutlukent bağlantısındaki nöbetçi araçlarımız sayesinde alternatif yan yollardan 10–14 dakika içinde yanınıza ulaşıyoruz.' },
      { q: 'Mevlana Mahallesi’nden Çayırova’daki kendi tamircime çekim yapıyor musunuz?', a: 'Evet. Mevlana Mahallesi Çayırova sınırında olduğu için hem Gebze hem Çayırova sanayi ve özel servislerine ekonomik mesafe tarifesiyle taşıma yapıyoruz.' },
      { q: 'Aracımın direksiyonu kilitlendi ve tekerlekler sağa dönük kaldı, yüklenebilir mi?', a: 'Evet. Tekerlek altı kaydırma kızakları veya ahtapot vinç donanımımızla direksiyonu kilitli araçları rot kollarına yük bindirmeden platforma alıyoruz.' },
      { q: 'Gece nöbetçi eczane veya hastane dönüşü yolda kalırsam hizmet var mı?', a: 'Evet. 7 gün 24 saat kesintisiz nöbetçi ekibimiz gece saatlerinde de telefonun ucundadır.' },
      { q: 'Fiyatı araç gelmeden net öğrenebilir miyim?', a: 'Elbette. 0533 945 45 14 numarasından aradığınızda bulunduğunuz caddeyi ve teslim adresini söylediğiniz an net sabit rakamı paylaşıyoruz.' }
    ]
  },
  {
    slug: 'adem-yavuz',
    name: 'Adem Yavuz',
    navbarTitle: 'ADEM YAVUZ ÇEKİCİ',
    navbarSub: '7/24 Adem Yavuz & Cumhuriyet Filosu',
    featured: false,
    eta: '12–15 Dk',
    heroImg: 'gebze-istasyon',
    fieldImg: 'gebze-ticari-osb',
    lat: '40.8181',
    lng: '29.3832',
    cardSummary: 'Adem Yavuz, Cumhuriyet Mahallesi, Yeni Bağdat üst aksı ve Şekerpınar bağlantı yolunda 7/24 hızlı oto çekici.',
    metaTitle: 'Adem Yavuz & Cumhuriyet Mahallesi Çekici | 7/24 Gebze Kurtarıcı',
    metaDesc: 'Gebze Adem Yavuz ve Cumhuriyet mahallelerinde, Şekerpınar ve Çayırova bağlantı yollarında 7/24 kaskolu kayar kasa oto çekici: 0533 945 45 14.',
    heroLead: 'Adem Yavuz ve Cumhuriyet mahalleleri, Yeni Bağdat Caddesi batı aksı, okul ve site çevreleri ile Şekerpınar–Çayırova bağlantı koridorunda 7/24 kaskolu çekici.',
    seoTitle: 'Adem Yavuz ve Cumhuriyet Mahallelerinde Kesintisiz Yol Yardım',
    paragraphs: [
      'Gebze’nin batı sınırında Çayırova ve Şekerpınar lojistik havzasıyla iç içe yer alan Adem Yavuz ve Cumhuriyet mahalleleri; hem yoğun aile yerleşimleri hem de OSB çalışanlarının her gün kullandığı servis ve bağlantı yollarıyla stratejik bir konumdadır. Yeni Bağdat Caddesi’nin batı devamı, 2300’lü sokaklar ve Çayırova geçiş arterleri günün büyük bölümünde hareketlidir.',
      'Bölgede yaşanan en yaygın yol yardım çağrıları; vardiya saatlerinde yaşanan yakıt/enjektör arızaları, park halindeki araçlarda akü boşalması, dar sokaklarda lastik kesilmesi ve ticari dağıtım araçlarının şanzıman arızalarıdır. Adem Yavuz ve Cumhuriyet mahallelerine ortalama 12–15 dakika içinde ulaşan filomuz, her araç tipine uygun platform donanımıyla gelir.',
      'Binek otomobiller ve SUV araçlar için sıfır eğimli <a href="/hizmetler/oto-cekici.html">kayar kasa oto çekici</a>, mahalledeki esnaf ve lojistik dağıtım filoları için uzun şasi <a href="/hizmetler/ticari-arac-cekici.html">ticari araç çekici</a>, acil motosiklet arızaları içinse ön teker kıskaçlı <a href="/hizmetler/motosiklet-cekici.html">motosiklet taşıma</a> hizmetimiz 7/24 devrededir.',
      'İster Gebze Oto Sanayi’ye, ister Tuzla–İçmeler sanayi sitelerine, ister yetkili servise nakil talep edin; yükleme öncesi şeffaf sabit fiyat, kaskolu taşıma tutanağı ve mobil POS rahatlığıyla hizmet veriyoruz.'
    ],
    localPointsTitle: 'Adem Yavuz & Cumhuriyet Bölgesi Kapsama Alanları',
    localPoints: [
      'Adem Yavuz Mahallesi, Yeni Bağdat Caddesi batı aksı ve 2300’lü sokaklar',
      'Cumhuriyet Mahallesi, 2200’lü sokaklar ve Çayırova geçiş bağlantıları',
      'Şekerpınar – Adem Yavuz sanayi ve lojistik bağlantı güzergâhı',
      'Hürriyet ve Ulus Mahallesi sınır kavşakları'
    ],
    fieldLogTitle: 'Adem Yavuz Saha Operasyon Kaydı',
    fieldLogDesc: 'Cumhuriyet Mahallesi çıkışında yakıt pompası arızalanan aile sedanı, 13 dakikada ulaşan hidrolik kayar kasayla yüklenerek Tuzla yetkili servisine sigortalı teslim edildi.',
    faqs: [
      { q: 'Adem Yavuz ve Cumhuriyet Mahallesi’ne çekici kaç dakikada gelir?', a: 'Beylikbağı ve Çayırova sınırındaki nöbetçi ekiplerimiz sayesinde ortalama 12–15 dakika içinde konumunuzda oluyoruz.' },
      { q: 'Cumhuriyet Mahallesi’nden Tuzla veya Pendik sanayiye araç çektirebilir miyim?', a: 'Evet. Bölge İstanbul sınırına çok yakın olduğu için Tuzla, İçmeler, Pendik ve Gebze Sanayi’nin tamamına uygun fiyatla nakil sağlıyoruz.' },
      { q: 'Apartman önünde sabah çalışmayan aracım için akü takviye gönderir misiniz?', a: 'Evet. Çekici masrafına girmeden beyin korumalı 12V booster cihazlı mobil ekibimizi gönderip aracınızı yerinde çalıştırıyoruz.' },
      { q: 'Hafif ticari aracım (Doblo, Transit, Ducato) arızalandı, çekebilir misiniz?', a: 'Evet. Hem hafif ticari hem de uzun şasili panelvan ve minibüsler için güçlendirilmiş platformlarımız 7/24 hazırdır.' },
      { q: 'Ödeme seçenekleriniz nelerdir, fatura alabilir miyim?', a: 'Araç içi mobil POS ile kredi/banka kartı, nakit veya havale seçenekleri mevcuttur; talep ettiğinizde KDV’li e-fatura kesilir.' }
    ]
  },
  {
    slug: 'mustafapasa',
    name: 'Mustafapaşa',
    navbarTitle: 'MUSTAFAPAŞA ÇEKİCİ',
    navbarSub: '7/24 Mustafapaşa & İnönü Filosu',
    featured: false,
    eta: '10 Dk',
    heroImg: 'gebze-cadde-operasyon',
    fieldImg: 'gebze-aku-takviye',
    lat: '40.8058',
    lng: '29.4239',
    cardSummary: 'Mustafapaşa, İnönü Mahallesi, Bağdat Caddesi, Şehit Yılmaz Argon Caddesi ve Eski Çarşı kuzeyinde 7/24 çekici.',
    metaTitle: 'Mustafapaşa & İnönü Mahallesi Çekici | Gebze 7/24 Oto Kurtarma',
    metaDesc: 'Gebze Mustafapaşa ve İnönü mahallelerinde, Bağdat Caddesi ve Şehit Yılmaz Argon Caddesi’nde 7/24 hızlı oto çekici ve akü takviye: 0533 945 45 14.',
    heroLead: 'Mustafapaşa ve İnönü mahalleleri, Bağdat Caddesi, Şehit Yılmaz Argon Caddesi ve merkez ara sokaklarında 10 dakikada müdahale eden nöbetçi çekici ekibi.',
    seoTitle: 'Mustafapaşa ve İnönü Mahallelerinde Dar Sokaklara Uygun Çekici',
    paragraphs: [
      'Gebze’nin en köklü ve merkezi yerleşim bölgeleri olan Mustafapaşa ve İnönü mahalleleri; Bağdat Caddesi, Şehit Yılmaz Argon Caddesi, okul çevreleri ve yoğun mahalle ticaretinin birleştiği noktalardır. Yerleşim yapısının sık olması nedeniyle cadde kenarları günün her saati park halindeki araçlarla doludur ve arızalanan bir aracı manevra darlığı yüzünden çıkarmak tecrübe gerektirir.',
      'Merkez intikal noktamıza komşu olan Mustafapaşa ve İnönü mahallelerine ortalama 10 dakika içinde ulaşıyoruz. Park yoğunluğunun yüksek olduğu sokaklarda aracınızın önü veya arkası kapalı olsa dahi <a href="/hizmetler/ahtapot-cekici.html">ahtapot vinçli çekici</a> ya da hidrolik tekerlek kaydırma aparatlarıyla çevre araçlara temas etmeden güvenli tahliye sağlıyoruz.',
      'Cadde üzerindeki normal arızalarda (şarj dinamosu, hararet, debriyaj, yakıt sistemi) düşük eğimli <a href="/hizmetler/oto-cekici.html">kayar kasa oto çekicimiz</a> aracınızı jant koruyucu 4 nokta tekerlek kemerleriyle sabitleyerek Gebze Sanayi’deki ustanıza ulaştırır. Boşalan akü ve patlak lastik vakalarında ise çekiciye gerek bırakmayan mobil yol yardım ekibimiz dakikalar içinde çözüm üretir.',
      'Mustafapaşa ve İnönü sakinlerine 7 gün 24 saat, gece farkı veya sürpriz masraf olmadan sabit fiyatlı ve kaskolu hizmet garantisi sunuyoruz.'
    ],
    localPointsTitle: 'Mustafapaşa & İnönü Hızlı Ulaşım Noktaları',
    localPoints: [
      'Bağdat Caddesi, Şehit Yılmaz Argon Caddesi ve Mustafapaşa Camii çevresi',
      'İnönü Mahallesi 1900’lü sokaklar ve pazar alanı çevresi',
      'Mustafapaşa – Köşklü Çeşme ve Güzeller bağlantı yolları',
      'Gebze merkez devlet ve özel sağlık kurumları çevresi'
    ],
    fieldLogTitle: 'Mustafapaşa Saha Operasyon Kaydı',
    fieldLogDesc: 'Bağdat Caddesi paralelindeki dar sokakta önü ve arkası kapalı kalan otomatik şanzıman arızalı araç, ahtapot aparatlı kurtarıcımızla yan şeritten temassız kaldırılarak yetkili servise taşındı.',
    faqs: [
      { q: 'Mustafapaşa’daki dar sokakta önüm ve arkam tamamen dolu, aracımı alabilir misiniz?', a: 'Evet. Tekerlek askılı ahtapot çekicimiz veya hidrolik tekerlek dolilerimizle çevredeki park halindeki araçlara dokunmadan aracınızı çıkarabiliyoruz.' },
      { q: 'İnönü Mahallesi’ne çekici kaç dakikada ulaşır?', a: 'İlçe merkezine bitişik olduğu için ortalama 10 dakika içinde konumunuza ulaşıyoruz.' },
      { q: 'Aracımın aküsü bitti, çekici yerine yerinde takviye gelir mi?', a: 'Evet. Beyin korumalı 12V booster cihazlı mobil ekibimiz 10–15 dakikada kapınıza gelip aracınızı yerinde çalıştırır.' },
      { q: 'Spor paketli alçak aracım Mustafapaşa’daki kasisli sokaktan hasarsız yüklenir mi?', a: 'Evet. Düşük eğimli hidrolik kayar kasa ve ek kompozit uzatma rampalarıyla tampon altını kesinlikle sürtmeden yükleme yapıyoruz.' },
      { q: 'Gece 01.00’de Mustafapaşa’dan çekici çağırabilir miyim?', a: 'Evet. 7/24 aktif nöbetçi vardiyamızla gece ve hafta sonu kesintisiz hizmet veriyoruz.' }
    ]
  },
  {
    slug: 'mimarsinan',
    name: 'Mimar Sinan',
    navbarTitle: 'MİMAR SİNAN ÇEKİCİ',
    navbarSub: '7/24 Mimar Sinan & Köşklü Çeşme',
    featured: false,
    eta: '10 Dk',
    heroImg: 'gebze-e5-yardim',
    fieldImg: 'gebze-gunbatimi',
    lat: '40.8019',
    lng: '29.4126',
    cardSummary: 'Mimar Sinan, Köşklü Çeşme, İstanbul Caddesi ve D-100 kuzey yan yol bağlantısında 7/24 hızlı oto çekici.',
    metaTitle: 'Mimar Sinan & Köşklü Çeşme Çekici | 7/24 Gebze Oto Kurtarma',
    metaDesc: 'Gebze Mimar Sinan ve Köşklü Çeşme mahallelerinde, İstanbul Caddesi ve D-100 yan yolda 7/24 kaskolu kayar kasa oto çekici: 0533 945 45 14.',
    heroLead: 'Mimar Sinan ve Köşklü Çeşme mahalleleri, İstanbul Caddesi, Yeni Bağdat bağlantısı ve D-100 kuzey yan yolunda 10 dakikada yanınızda olan 7/24 nöbetçi çekici.',
    seoTitle: 'Mimar Sinan ve Köşklü Çeşme’de D-100 Bağlantılı Hızlı Kurtarma',
    paragraphs: [
      'Gebze Merkez ile Beylikbağı arasında kilit bir köprü görevi gören Mimar Sinan ve Köşklü Çeşme mahalleleri; İstanbul Caddesi, Yeni Bağdat Caddesi ve doğrudan D-100 Karayolu kuzey yan yoluna açılan bağlantılarıyla sürekli canlı bir trafik hacmine sahiptir. Bölgedeki ticari işletmeler, oto galeriler ve servis noktaları sebebiyle hem bireysel hem ticari araç hareketliliği gün boyu yüksektir.',
      'D-100 yan yolda veya İstanbul Caddesi trafiğinde aniden stop eden, soğutma suyu eksilten veya debriyajı boşalan araçlar trafik güvenliği açısından vakit kaybetmeden kaldırılmalıdır. Ana intikal noktamızın tam hizasında yer alan Mimar Sinan ve Köşklü Çeşme’ye ortalama 10 dakika içinde ulaşarak reflektör korumalı hızlı yükleme gerçekleştiriyoruz.',
      'Bölgedeki oto galeriler için noter satışı sonrası kilometre yapmadan şehir içi veya <a href="/hizmetler/sehirlerarasi-arac-tasima.html">şehirlerarası araç taşıma</a>, arızalı binek otomobiller için <a href="/hizmetler/oto-cekici.html">kayar kasa oto çekici</a> ve hafif ticari araçlar için uzun şasili platform hizmetimiz aynı yüksek standartta yürütülür.',
      'Her operasyonda 4 noktadan lastik üstü sabitleme, yükleme öncesi sabit fiyat teyidi ve taşıma emtia sigortasıyla aracınızı güvenle teslim ediyoruz.'
    ],
    localPointsTitle: 'Mimar Sinan & Köşklü Çeşme Başlıca Müdahale Alanları',
    localPoints: [
      'İstanbul Caddesi, Köşklü Çeşme Meydanı ve 500’lü yerleşim sokakları',
      'Mimar Sinan Mahallesi, Mimar Sinan Caddesi ve D-100 kuzey yan yol girişi',
      'Yeni Bağdat Caddesi geçiş noktası ve galeri-işletme çevreleri',
      'Köşklü Çeşme – Beylikbağı ve İstasyon alt geçit bağlantı yolları'
    ],
    fieldLogTitle: 'Mimar Sinan Saha Operasyon Kaydı',
    fieldLogDesc: 'İstanbul Caddesi üzerinde şarj dinamosu kayışı kopan binek otomobil, 9 dakikada ulaşan kayar kasa ekibimiz tarafından trafiği durdurmadan yüklenip Gebze Sanayi’ye teslim edildi.',
    faqs: [
      { q: 'Köşklü Çeşme D-100 yan yolda kaldım, trafik çok yoğun; hızlı gelir misiniz?', a: 'Evet. D-100 Gebze aksında sürekli devriye ve nöbetçi konumda olan araçlarımız 10 dakika içinde yanınıza gelip güvenli yükleme yapar.' },
      { q: 'Mimar Sinan’daki galerimizden başka şehre araç göndermek istiyoruz, taşıyor musunuz?', a: 'Evet. Gebze çıkışlı 81 ile tekli özel kayar kasa ile sigortalı ve tutanaklı şehirlerarası araç nakliyesi gerçekleştiriyoruz.' },
      { q: 'Aracımın lastiği İstanbul Caddesi’nde yarıldı, yerinde değişim yapar mısınız?', a: 'Evet. Stepneniz varsa güvenli biçimde yerinde değiştiriyoruz; yedek lastiğiniz yoksa en yakın 7/24 açık lastikçiye aracınızı taşıyoruz.' },
      { q: 'Otomatik vitesli aracım Köşklü Çeşme’de P konumunda kaldı, sürüklemeden alır mısınız?', a: 'Kesinlikle. Tekerlek patenleri veya ahtapot aparatıyla dört tekerleği sürtmeden kayar kasaya yükleyerek şanzımanınızı koruyoruz.' },
      { q: 'Kurumsal fatura ve kredi kartı ödemesi geçerli mi?', a: 'Evet. Mobil POS üzerinden kartla ödeme yapabilir ve aynı gün KDV’li e-faturanızı alabilirsiniz.' }
    ]
  },
  {
    slug: 'tosb',
    name: 'TOSB',
    navbarTitle: 'TOSB ÇEKİCİ',
    navbarSub: '7/24 TOSB Otomotiv OSB Filosu',
    featured: false,
    eta: '12–15 Dk',
    heroImg: 'gebze-kamyonet-tasima',
    fieldImg: 'gebze-ticari-osb',
    lat: '40.8588',
    lng: '29.3924',
    cardSummary: 'TOSB Otomotiv Yan Sanayi İhtisas OSB, 1. Cadde, Şekerpınar–TOSB bağlantı yolu ve fabrika sahalarında 7/24 çekici.',
    metaTitle: 'TOSB Çekici & Oto Kurtarma | TAYSAD Otomotiv OSB 7/24 Filo',
    metaDesc: 'TOSB (TAYSAD Otomotiv Yan Sanayi İhtisas OSB) tüm cadde ve fabrika girişlerinde binek, ticari panelvan ve forklift çekici: 0533 945 45 14.',
    heroLead: 'TOSB Otomotiv Yan Sanayi İhtisas OSB ana bulvarları, fabrika otoparkları ve Şekerpınar–TEM bağlantı yollarında 7/24 kaskolu binek, ticari ve forklift çekici.',
    seoTitle: 'TOSB Otomotiv Yan Sanayi Bölgesinde 7/24 Kurumsal & Bireysel Çekici',
    paragraphs: [
      'Türkiye otomotiv yan sanayisinin kalbi olan TOSB (TAYSAD Organize Sanayi Bölgesi), Şekerpınar ile GOSB arasındaki geniş üretim platosunda yüzlerce yüksek teknolojili fabrikayı ve Ar-Ge merkezini barındırır. Üç vardiya sisteminin kesintisiz işlediği TOSB’ta gece 00.00 ve sabah 07.00 vardiya değişimlerinde binlerce binek araç, personel servisi ve lojistik kamyonet aynı anda yola çıkar.',
      'Gece vardiyası çıkışında fabrika otoparkında aküsü biten mühendis ya da teknisyen araçları, TOSB 1. Cadde boyunca arızalanan ticari panelvanlar ve Şekerpınar bağlantı kavşağında hararet yapan otomobiller için 12–15 dakika içinde olay yerine ulaşıyoruz. Binek araçlarda düşük eğimli <a href="/hizmetler/oto-cekici.html">kayar kasa oto çekici</a>, şirket servisleri ve dağıtım kamyonetlerinde ise uzun şasi <a href="/hizmetler/ticari-arac-cekici.html">ticari araç çekici</a> devreye girer.',
      'TOSB fabrikalarının depo ve üretim hatlarında kullanılan akülü/dizel forkliftler ve makaslı personel yükselticilerin bakım atölyesine naklinde de <a href="/hizmetler/is-makinesi-tasima.html">iş makinesi taşıma</a> filomuz İSG kurallarına tam uyumlu hizmet verir.',
      'Kurumsal firmalara yönelik hızlı faturalandırma, mobil POS ve emtia sigortalı taşıma güvencesiyle TOSB’un her caddesinde kesintisiz çözüm ortağınız olarak görev yapıyoruz.'
    ],
    localPointsTitle: 'TOSB İçinde Aktif Müdahale Noktalarımız',
    localPoints: [
      'TOSB 1. Cadde, 2. Cadde, Yönetim Binası ve ana giriş nizamiyesi',
      'TOSB – Şekerpınar ve TEM gişeleri bağlantı bulvarı',
      'TOSB – GOSB iç geçiş yolu ve lojistik tır rampaları çevresi',
      'Fabrika içi personel otoparkları ve Ar-Ge tesis sahaları'
    ],
    fieldLogTitle: 'TOSB Saha Operasyon Kaydı',
    fieldLogDesc: 'TOSB 1. Cadde’de gece 00.15 vardiya çıkışında kayış koparan personel binek aracı, 13 dakikada gelen nöbetçi kayar kasa ekibimizle alınıp Çayırova yetkili servisine güvenli teslim edildi.',
    faqs: [
      { q: 'TOSB içindeki fabrikamızın otoparkına gece vardiyasında akü takviye gelir mi?', a: 'Evet. 7/24 vardiya düzenimizle gece 00.00 veya 04.00 saatlerinde dahi TOSB fabrika otoparklarına ECU korumalı akü takviye ekibimizi gönderiyoruz.' },
      { q: 'TOSB’taki şirket servis minibüsü arızalandı, uzun şasi çekiciniz var mı?', a: 'Evet. 16+1 servis minibüsleri ve L4 uzun şasi panelvanlar için güçlendirilmiş uzun platformlu ticari çekicilerimiz mevcuttur.' },
      { q: 'Fabrikadan bakım servisine forklift göndermek istiyoruz, taşıyor musunuz?', a: 'Evet. Düşük eğimli ağır çelik rampalı taşıyıcımızla 3.5 tona kadar forklift ve makaslı platformları sigortalı naklediyoruz.' },
      { q: 'TOSB’tan İstanbul Tuzla veya Pendik yetkili servislerine nakil yapıyor musunuz?', a: 'Evet. TOSB Şekerpınar hattı İstanbul’a doğrudan bağlı olduğu için Tuzla, Pendik, Kartal ve İzmit yetkili servislerine çok hızlı teslimat sağlıyoruz.' },
      { q: 'Kurumsal şirketimiz adına KDV’li e-fatura kesiyor musunuz?', a: 'Evet. Tüm ticari ve kurumsal çağrılarınızda aynı gün resmi KDV’li e-fatura düzenleyip muhasebenize iletiyoruz.' }
    ]
  },
  {
    slug: 'guzeller-osb',
    name: 'Güzeller OSB',
    navbarTitle: 'GÜZELLER OSB ÇEKİCİ',
    navbarSub: '7/24 Güzeller & Plastikçiler OSB',
    featured: false,
    eta: '10–14 Dk',
    heroImg: 'gebze-is-makinesi',
    fieldImg: 'gebze-ticari-osb',
    lat: '40.8295',
    lng: '29.4496',
    cardSummary: 'Güzeller OSB, Gebze Plastikçiler OSB (GEPOSB), İnönü–Güzeller geçişi ve TEM bağlantısında 7/24 oto ve ticari çekici.',
    metaTitle: 'Güzeller OSB & GEPOSB Çekici | 7/24 Plastikçiler OSB Oto Kurtarma',
    metaDesc: 'Güzeller OSB ve Gebze Plastikçiler OSB (GEPOSB) içinde binek, panelvan, kamyonet ve forklift çekici. 10–14 dk hızlı intikal: 0533 945 45 14.',
    heroLead: 'Güzeller Organize Sanayi Bölgesi (GGOSB) ve Gebze Plastikçiler OSB (GEPOSB) tesis sahaları, ana caddeleri ve TEM bağlantılarında 7/24 kaskolu kurtarıcı desteği.',
    seoTitle: 'Güzeller OSB ve GEPOSB Tesislerinde Hızlı Filo & Binek Kurtarma',
    paragraphs: [
      'Gebze’nin kuzey sanayi koridorunda yan yana konumlanan Güzeller OSB ve Gebze Plastikçiler OSB (GEPOSB); ambalaj, plastik, otomotiv ve makine sektörlerinin dev fabrikalarına ev sahipliği yapar. Ağır tonajlı hammadde kamyonları, şirket araçları ve vardiya servislerinin günün 24 saati hareket halinde olduğu bu iki sanayi bölgesinde yolda kalmak zaman kaybına tahammülü olmayan bir durumdur.',
      'TEM Otoyolu Gebze gişelerine ve Kirazpınar aksına doğrudan bağlantılı olan Güzeller OSB ile GEPOSB’ta nöbetçi ekiplerimiz ortalama 10–14 dakika içinde fabrika girişine veya arıza noktasına ulaşır. Çalışanların özel otomobillerinde düşük eğimli <a href="/hizmetler/oto-cekici.html">kayar kasa oto çekici</a>, malzeme sevkiyatı yapan panelvan ve kamyonetlerde ise uzun şasili <a href="/hizmetler/ticari-arac-cekici.html">ticari araç çekici</a> kullanılır.',
      'Fabrikaların forklift, transpalet ve makaslı platform transferleri için de düşük açılı çelik rampa donanımlı <a href="/hizmetler/is-makinesi-tasima.html">iş makinesi taşıma</a> aracımız aynı gün randevulu ya da acil sefer yapar. Ayrıca üretim sahasında lastiği patlayan veya aküsü zayıflayan şirket araçlarına çekime gerek kalmadan yerinde mobil destek verilir.',
      'Her operasyonda İSG standartlarına tam uyum, kaskolu taşıma tutanağı, telefonda onaylanan net fiyat ve resmi e-fatura güvencesiyle çalışıyoruz.'
    ],
    localPointsTitle: 'Güzeller OSB & GEPOSB Müdahale Noktalarımız',
    localPoints: [
      'Güzeller OSB Fatih Sultan Mehmet Bulvarı, Alp Arslan Caddesi ve ana nizamiye',
      'Gebze Plastikçiler OSB (GEPOSB) İnönü Caddesi, Cumhuriyet Caddesi ve tesis girişleri',
      'Güzeller OSB – GOSB ara bağlantı yolu ve TEM otoyolu geçiş kavşağı',
      'Güzeller Mahallesi, Gebze Yeni Sanayi ve Kirazpınar bağlantı hattı'
    ],
    fieldLogTitle: 'Güzeller OSB Saha Operasyon Kaydı',
    fieldLogDesc: 'GEPOSB içinde akülü forklifti arızalanan bir ambalaj tesisinin ekipmanı, alçak açılı çelik rampalı kurtarıcımızla zincirli sabitlenip aynı gün Gebze bakım servisine teslim edildi.',
    faqs: [
      { q: 'Güzeller OSB ve GEPOSB içinde ticari kamyonet ve panelvan çekiyor musunuz?', a: 'Evet. Sprinter, Crafter, Ducato, Transit ve kapalı kasa kamyonetlere uygun güçlendirilmiş uzun şasi platformlarımız 7/24 hazırdır.' },
      { q: 'Fabrika nizamiyesinden içeri girip yükleme alanından araç alabilir misiniz?', a: 'Evet. Güvenlik kaydımızı yaptırıp İSG kurallarına uygun olarak doğrudan tesis içi park alanından veya yükleme rampasından aracınızı alıyoruz.' },
      { q: 'Güzeller OSB’de gece mesaisinde aküm bitti, ne kadar sürede gelirsiniz?', a: 'Güzeller OSB ve GEPOSB’a 10–14 dakika içinde ulaşıp ECU korumalı booster cihazımızla aracınızı yerinde çalıştırıyoruz.' },
      { q: 'OSB içinden forklift veya makaslı platform taşıma hizmetiniz var mı?', a: 'Evet. 3.5 tona kadar forklift, manlift ve mini iş makinelerini kaskolu olarak başka OSB’lere veya bakım servislerine naklediyoruz.' },
      { q: 'Kurumsal şirket ödemesi için havale ve e-fatura imkânı sunuyor musunuz?', a: 'Evet. Kurumsal havale/EFT, araç içi mobil POS ve aynı gün resmi KDV’li e-fatura düzenleme hizmetimiz mevcuttur.' }
    ]
  }
];

module.exports = { REGIONS_PART_1 };
