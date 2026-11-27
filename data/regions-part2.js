'use strict';
/**
 * ============================================================================
 * GEBZE YOL YARDIM — BÖLGELER PART 2 (16–26: OTOYOLLAR, SANAYİ & İLÇE HATTI)
 * Her bölge tam özgün yerel SEO metni, gerçek cadde/kavşak, saha kaydı ve 5 SSS
 * ============================================================================
 */

const REGIONS_PART_2 = [
  {
    slug: 'bilisim-vadisi',
    name: 'Bilişim Vadisi',
    navbarTitle: 'BİLİŞİM VADİSİ ÇEKİCİ',
    navbarSub: '7/24 Muallimköy & EV Kurtarma Filosu',
    featured: false,
    eta: '12–15 Dk',
    heroImg: 'client-mikro-arac',
    fieldImg: 'client-suv-cadde',
    lat: '40.7851',
    lng: '29.5067',
    cardSummary: 'Bilişim Vadisi, Muallimköy, Togg Teknoloji Kampüsü, Osmangazi bağlantı kavşağı ve sahil aksında 7/24 EV & VIP çekici.',
    metaTitle: 'Bilişim Vadisi Çekici | Elektrikli Araç & VIP Kurtarma',
    metaDesc: 'Gebze Muallimköy ve Bilişim Vadisi’nde elektrikli (EV), hibrit ve binek araçlar için düşük eğimli sıfır hasarlı 7/24 çekici: 0533 945 45 14.',
    heroLead: 'Muallimköy, Bilişim Vadisi kampüsü, teknoloji geliştirme merkezi otoparkları ve Kuzey Marmara–Osmangazi bağlantı kavşağında elektrikli ve binek araçlara özel 7/24 çekici.',
    seoTitle: 'Bilişim Vadisi ve Muallimköy’de Elektrikli & Yeni Nesil Araç Kurtarma',
    paragraphs: [
      'Türkiye’nin teknoloji ve mobilite üssü Bilişim Vadisi ile onu çevreleyen Muallimköy; yüzlerce yazılım firması, Ar-Ge laboratuvarı, elektrikli araç test sahaları ve Osmangazi Köprüsü kuzey yaklaşım kavşağıyla benzersiz bir araç profiline sahiptir. Bu bölgede yolda kalan araçların önemli bir kısmı tam elektrikli (EV), plug-in hibrit ve yerden alçak sportif sedan modellerden oluşur.',
      'Yüksek voltajlı batarya paketinin aracın tüm alt şasisi boyunca uzandığı elektrikli otomobillerde standart dik rampalı çekici kullanımı ciddi batarya muhafaza riski doğurur. Bilişim Vadisi ve Muallimköy çağrılarında devreye aldığımız <a href="/hizmetler/oto-kurtarma.html">VIP düşük açılı kayar kasa</a> araçlarımız, ek uzun kompozit rampalarla yükleme eğimini 6 derecenin altına indirir ve yalnızca dört lastik üstünden yumuşak tekstil spanzetle sabitleme yapar.',
      'Muallimköy sahil yolu, köy içi eğimli sokaklar ve Kuzey Marmara Otoyolu bağlantı gişelerinde yaşanan şarj bitmesi, 12V destek aküsü çökmesi veya lastik yarılmalarında 12–15 dakikada yanınızdayız. Şarjı tükenen elektrikli araçları en yakın yüksek hızlı DC şarj istasyonuna, mekanik veya yazılım kilitli araçları ise İstanbul veya İzmit’teki yetkili marka servisine hasarsız ulaştırıyoruz.',
      'Bilişim Vadisi bünyesindeki teknoloji şirketleri için kurumsal teslim tutanağı, yüksek limitli fotoğraflı teslim tutanağı ve nakit ve havale kolaylığıyla 7/24 profesyonel destek sağlıyoruz.'
    ],
    localPointsTitle: 'Muallimköy & Bilişim Vadisi Hızlı İntikal Noktaları',
    localPoints: [
      'Bilişim Vadisi Ana Giriş Nizamiyesi, Ar-Ge blok otoparkları ve DC şarj alanları',
      'Muallimköy Merkez, Deniz Caddesi ve Muallimköy sahil bağlantı yolu',
      'Osmangazi Köprüsü Muallimköy Kavşağı ve Kuzey Marmara bağlantı rampası',
      'Muallimköy – TÜBİTAK – Barış Mahallesi sahil geçiş güzergâhı'
    ],
    fieldLogTitle: 'Bilişim Vadisi Saha Operasyon Kaydı',
    fieldLogDesc: 'Bilişim Vadisi kampüs otoparkında 12V destek aküsü boşalıp park kilidinde kalan elektrikli SUV, tekerlek doli aparatları ve ek uzun rampayla batarya altına temas etmeden yüklenip yetkili servise teslim edildi.',
    faqs: [
      { q: 'Elektrikli aracımın şarjı Muallimköy civarında bitti, şarj istasyonuna çekiyor musunuz?', a: 'Evet. Aracınızı sürüklemeden kayar kasaya yükleyip Bilişim Vadisi, Gebze Center veya TEM üzerindeki en yakın hızlı DC şarj istasyonuna ulaştırıyoruz.' },
      { q: 'Bilişim Vadisi kampüs içine güvenlikten geçip çekici girebiliyor mu?', a: 'Evet. Kampüs çalışanının güvenliğe bilgi vermesiyle kurumsal belgeli aracımızla doğrudan bloğunuzun otoparkına kadar geliyoruz.' },
      { q: 'Elektrikli aracın çekme modu (Tow Mode) açılmıyor, nasıl taşıyorsunuz?', a: 'Tekerlekler serbest kalmıyorsa dört lastik altına sürtünmesiz Go-Jak doli arabası veya ahtapot vinç kullanarak rejeneratif motora zarar vermeden taşıma yapıyoruz.' },
      { q: 'Muallimköy’den İstanbul Kartal veya Ataşehir yetkili servisine ne kadar sürede ulaşırsınız?', a: 'Muallimköy’e 12–15 dakikada gelip yüklemeyi tamamladıktan sonra trafiğe bağlı olarak 35–45 dakikada İstanbul Anadolu Yakası yetkili servislerine teslimat yapıyoruz.' },
      { q: 'Teknoloji firmamızın filo araçları için teslim tutanağı kesiyor musunuz?', a: 'Evet. Şirket vergi bilgilerinizle aynı gün resmi fotoğraflı teslim tutanağı düzenliyor ve nakit / havale ödeme seçeneği sunuyoruz.' }
    ]
  },
  {
    slug: 'pelitli',
    name: 'Pelitli',
    navbarTitle: 'PELİTLİ ÇEKİCİ',
    navbarSub: '7/24 Pelitli & Kuzey Marmara Hattı',
    featured: false,
    eta: '15–18 Dk',
    heroImg: 'client-pickup-osb',
    fieldImg: 'client-kamyonet',
    lat: '40.8692',
    lng: '29.4614',
    cardSummary: 'Pelitli, Pelitli Sanayi, Kuzey Marmara Pelitli Gişeleri, Mollafenari, Cumaköy ve Ballıkayalar yolunda 7/24 kurtarıcı.',
    metaTitle: 'Pelitli & Mollafenari Çekici | Kuzey Marmara Gişeleri Oto Kurtarma',
    metaDesc: 'Gebze Pelitli, Pelitli Sanayi, Kuzey Marmara Pelitli Gişeleri ve Mollafenari yolunda 7/24 oto çekici, şarampol kurtarma ve ticari nakil: 0533 945 45 14.',
    heroLead: 'Pelitli Sanayi bölgesi, Kuzey Marmara Otoyolu Pelitli Gişeleri, Mollafenari, Ovacık ve Ballıkayalar güzergâhında 7/24 vinçli kurtarma ve ağır hizmet oto çekici.',
    seoTitle: 'Pelitli Sanayi ve Kuzey Gebze Kırsal Yollarında Güçlü Kurtarma Filosu',
    paragraphs: [
      'Gebze’nin kuzeyinde geniş lojistik depoları, kereste ve metal sanayi tesislerini barındıran Pelitli ile doğa ve köy yollarının uzandığı Mollafenari, Cumaköy, Ovacık ve Ballıkayalar aksı çok farklı yol koşulları sunar. Kuzey Marmara Otoyolu (O-7) Pelitli Gişeleri’nin açılmasıyla bölgedeki yüksek hızlı transit araç ve ağır vasıta geçişi katlanarak artmıştır.',
      'Kırsal bağlantı yollarında karanlık ve virajlı eğimlerde yaşanan yoldan çıkma, çamurlu bankete saplanma veya tekerlek-aks hasarı vakalarında sıradan şehir çekicileri yetersiz kalır. Pelitli ve Mollafenari hattına yönlendirdiğimiz uzun tamburlu vinçli <a href="/hizmetler/oto-kurtarma.html">oto kurtarma</a> araçlarımız, şarampolden ve stabilize yollardan araçları kaportaya ek hasar vermeden çıkarır.',
      'Pelitli Sanayi ve depo sitelerinde faaliyet gösteren şirketlerin panelvan, çift kabin 4x4 pikap ve kamyonetleri için güçlendirilmiş uzun şasili <a href="/hizmetler/ticari-arac-cekici.html">ticari araç çekici</a> ile depo içi <a href="/hizmetler/tenteli-arac-nakliye.html">forklift nakliye</a> desteğimiz gün boyu aktiftir. Ballıkayalar çevresinde hafta sonu arızalanan ATV/UTV ve arazi araçları için de özel rampa donanımımız hazırdır.',
      'Şehir merkezine uzak gibi görünen Pelitli ve Mollafenari köylerinde dahi yüksek veya fahiş ücret uygulanmaz; mesafeye göre şeffaf sabit fiyat telefonda netleştirilip 15–18 dakikada yola çıkılır.'
    ],
    localPointsTitle: 'Pelitli & Mollafenari Bölgesindeki Kapsama Alanlarımız',
    localPoints: [
      'Pelitli Köyü Merkez, Pelitli Sanayi Bölgesi ve lojistik depo kampüsleri',
      'Kuzey Marmara Otoyolu (O-7) Pelitli Gişeleri ve bağlantı kavşağı',
      'Mollafenari, Cumaköy, Kadıllı, Ovacık ve Denizli Köyü bağlantı yolları',
      'Ballıkayalar Tabiat Parkı girişi ve Pelitli – GOSB üst bağlantı yolu'
    ],
    fieldLogTitle: 'Pelitli Saha Operasyon Kaydı',
    fieldLogDesc: 'Mollafenari yolunda yağmur sonrası kaygan virajda bankete inen 4x4 SUV araç, makaralı sentetik vinç sistemiyle şasiye zarar vermeden asfalta alınıp Gebze yetkili servisine taşındı.',
    faqs: [
      { q: 'Kuzey Marmara Otoyolu Pelitli Gişeleri çıkışında kaldım, hızlı gelir misiniz?', a: 'Evet. GOSB ve Pelitli bağlantısından 15 dakika içinde gişe çıkışına veya otoyol emniyet cebine ulaşıp güvenli yükleme yapıyoruz.' },
      { q: 'Mollafenari veya Cumaköy’de stabilize yolda çamura saplanan aracı çıkarabilir misiniz?', a: 'Evet. Uzun metrajlı sentetik halatlı ve yönlendirmeli makaralı vinç kurtarıcımızla çamur ve şarampolden hasarsız kurtarma yapıyoruz.' },
      { q: 'Pelitli’deki lojistik depomuzdan forklift veya panelvan çekimi yapıyor musunuz?', a: 'Evet. Uzun şasili ticari platformumuz ve düşük açılı çelik rampamızla hem ticari araç hem de 3.5 tona kadar forklift taşıyoruz.' },
      { q: 'Ballıkayalar çevresinde hafta sonu motosikletim veya ATV’m arızalandı, alır mısınız?', a: 'Evet. Özel motor kıskacı ve geniş platform ekipmanlarıyla motosiklet ve ATV taşımacılığında hafta sonu da 7/24 görevdeyiz.' },
      { q: 'Gece karanlığında Pelitli–Mollafenari yolunda hizmet veriyor musunuz?', a: 'Evet. 360 derece LED projektörlü kurtarma araçlarımızla gece saatlerinde de tam emniyetle müdahale ediyoruz.' }
    ]
  },
  {
    slug: 'balcik',
    name: 'Balçık',
    navbarTitle: 'BALÇIK ÇEKİCİ',
    navbarSub: '7/24 Balçık Sanayi & Lojistik Filosu',
    featured: false,
    eta: '12–15 Dk',
    heroImg: 'client-tenteli-yuk',
    fieldImg: 'client-iveco-panelvan',
    lat: '40.8614',
    lng: '29.4235',
    cardSummary: 'Balçık Mahallesi, Balçık Sanayi, Tembelova, Şekerpınar–Pelitli lojistik hattı ve depo sahalarında 7/24 çekici.',
    metaTitle: 'Balçık & Tembelova Çekici | Gebze Sanayi & Lojistik Oto Kurtarma',
    metaDesc: 'Gebze Balçık, Balçık Sanayi Sitesi, Tembelova ve lojistik depo hattında 7/24 binek, panelvan, kamyonet ve forklift çekici: 0533 945 45 14.',
    heroLead: 'Balçık Mahallesi, Balçık sanayi ve antrepo tesisleri, Tembelova aksı ile GOSB–Pelitli lojistik koridorunda 12–15 dakikada yanınızda olan 7/24 kurtarıcı.',
    seoTitle: 'Balçık Sanayi ve Lojistik Koridorunda Kesintisiz Çekici Hizmeti',
    paragraphs: [
      'GOSB’un hemen kuzeyinde konumlanan Balçık Mahallesi ve Tembelova geçiş hattı; devasa e-ticaret dağıtım depoları, gümrüklü antrepolar, üretim tesisleri ve ağır lojistik aktarma merkezlerinin yoğunlaştığı bölgedir. 3200’lü sanayi sokakları ve Organize Caddesi boyunca günün 24 saati kesintisiz dağıtım araçları, personel minibüsleri ve şirket otomobilleri seyreder.',
      'Ağır kamyon trafiğinin asfaltı yıprattığı ve yer yer çukur ya da mıcır oluşabilen Balçık yan yollarında lastik yarılması, jant kırılması, rot-salıncak hasarı ve ticari araç debriyaj arızaları sıklıkla yaşanır. GOSB hattına bitişik konuşlanan ekiplerimiz Balçık çağrılarına ortalama 12–15 dakika içinde ulaşarak sevkiyat zincirinizin aksamasını önler.',
      'Binek otomobillerde <a href="/hizmetler/oto-kurtarma.html">kayar kasa oto çekici</a>, kargo ve lojistik dağıtım araçlarında uzun şasili <a href="/hizmetler/ticari-arac-cekici.html">ticari araç çekici</a>, depo içi arızalanan elektrikli veya dizel ekipmanlarda ise <a href="/hizmetler/tenteli-arac-nakliye.html">forklift taşıma</a> araçlarımız devreye alınır. Ayrıca gece depo otoparklarında biten aküler için 12V/24V profesyonel booster desteği sunuyoruz.',
      'Balçık’taki tüm kurumsal firmalar için fotoğraflı teslim tutanağı, taşıma fotoğraflı teslim tutanağı ve yükleme öncesi sabit ücret teyidiyle şeffaf çalışıyoruz.'
    ],
    localPointsTitle: 'Balçık & Tembelova Başlıca Müdahale Alanları',
    localPoints: [
      'Balçık Mahallesi Merkez, Organize Caddesi ve 3200’lü sanayi sokakları',
      'E-ticaret dağıtım depoları, lojistik antrepo girişleri ve tır parkı çevresi',
      'Balçık – GOSB kuzey kapısı ve Tembelova bağlantı hattı',
      'Balçık – Şekerpınar ve Pelitli ara geçiş güzergâhı'
    ],
    fieldLogTitle: 'Balçık Saha Operasyon Kaydı',
    fieldLogDesc: 'Balçık antrepo çıkışında iki sağ lastiği birden yarılan lojistik dağıtım panelvanı, 14 dakikada ulaşan uzun şasili platforma alınıp Gebze nöbetçi ticari lastik servisine bırakıldı.',
    faqs: [
      { q: 'Balçık’taki e-ticaret deposu otoparkına çekici veya akü takviye geliyor mu?', a: 'Evet. Hem depo çalışanlarının binek araçlarına hem de 24V ticari dağıtım araçlarına tesis otoparkı içinde 7/24 müdahale ediyoruz.' },
      { q: 'Yüklü kargo panelvanı Balçık’ta arızalandı, çekebilir misiniz?', a: 'Yük tonajı yasal platform kapasitemiz dahilindeyse doğrudan çekiyoruz; yüksek tonajlı paletlerde yük aktarımının hemen ardından servise nakil sağlıyoruz.' },
      { q: 'Balçık’tan Tuzla Orhanlı veya Şekerpınar’a araç çekimi yapıyor musunuz?', a: 'Evet. Balçık–Şekerpınar–Orhanlı hattı sürekli çalıştığımız koridordur; uygun sabit mesafe tarifesiyle hızlı nakil yapıyoruz.' },
      { q: 'Depomuzdaki makaslı platformu (manlift) başka bir tesise taşıtabilir miyiz?', a: 'Evet. Alçak açılı ağır çelik rampalı aracımızla makaslı platform ve forkliftleri sigortalı olarak dilediğiniz adrese taşıyoruz.' },
      { q: 'Balçık’ta gece 04.00’te nöbetçi lastikçi açık değilse ne yapıyorsunuz?', a: 'Stepneniz varsa yerinde takıyoruz; stepneniz yoksa Gebze’deki 7/24 açık nöbetçi lastik servisine aracınızı hasarsız indiriyoruz.' }
    ]
  },
  {
    slug: 'eskihisar',
    name: 'Eskihisar',
    navbarTitle: 'ESKİHİSAR ÇEKİCİ',
    navbarSub: '7/24 Feribot İskelesi & Sahil Filosu',
    featured: false,
    eta: '10–14 Dk',
    heroImg: 'client-atv-feribot',
    fieldImg: 'client-klasik-mercedes',
    lat: '40.7712',
    lng: '29.4278',
    cardSummary: 'Eskihisar–Topçular Feribot İskelesi, Eskihisar Kalesi, sahil rampası ve Feribot Yolu Caddesi’nde 7/24 acil çekici.',
    metaTitle: 'Eskihisar Çekici & Oto Kurtarma | Feribot İskelesi 7/24 Yol Yardım',
    metaDesc: 'Eskihisar–Topçular Feribot İskelesi, Feribot Yolu rampası ve Eskihisar sahilde 7/24 hızlı oto çekici, akü takviye ve lastik yardım: 0533 945 45 14.',
    heroLead: 'Eskihisar–Topçular Feribot İskelesi gişeleri, dik Eskihisar rampası, kale çevresi ve sahil restoran hattında 10–14 dakikada müdahale eden 7/24 oto çekici.',
    seoTitle: 'Eskihisar Feribot Yolu ve Sahil Hattında Trafik Açıcı Acil Çekici',
    paragraphs: [
      'İstanbul ile Yalova, Bursa ve Ege Bölgesi arasındaki en yoğun deniz geçiş kapısı olan Eskihisar–Topçular Feribot İskelesi, özellikle hafta sonları, bayram dönüşleri ve yaz aylarında binlerce aracın art arda sıralandığı kritik bir darboğazdır. İskeleden yukarı doğru tırmanan dik Eskihisar Feribot Yolu rampası; yüklü araçlarda baskı-balata yanması, hararet yükselmesi ve turbo hortumu patlaması gibi arızaların en sık yaşandığı noktadır.',
      'Feribot gişeleri önünde, gemi çıkış rampasında ya da tek şeritli sahil yolunda kalan bir araç saniyeler içinde feribot kuyruğunu kilitler. Tatlıkuyu ve Barış Mahallesi üzerinden Eskihisar’a dakikalar içinde inebilen nöbetçi <a href="/hizmetler/oto-kurtarma.html">kayar kasa oto çekici</a> ekiplerimiz ortalama 10–14 dakikada yanınıza yetişir ve aracınızı yokuş emniyet takozlarıyla güvenle platforma alır.',
      'Feribottan indikten sonra uzun yola devam edemeyen şehir dışından gelmiş misafir sürücüler için yalnızca Gebze Sanayi’ye çekimle sınırlı kalmıyoruz; talebinize göre aracınızı İstanbul’daki veya Bursa/İzmir’deki kendi yetkili servisinize <a href="/hizmetler/sehirlerarasi-arac-tasima.html">özenli şehirlerarası araç taşıma</a> hizmetimizle aynı gün ulaştırıyoruz.',
      'Eskihisar sahil otoparklarında unutulan farlar yüzünden boşalan akülerde yerinde booster takviyesi ve sahil yolunda motosiklet arızalarında kıskaçlı <a href="/hizmetler/motosiklet-cekici.html">motosiklet çekici</a> desteğimiz de 7/24 aktiftir.'
    ],
    localPointsTitle: 'Eskihisar Bölgesinde Öncelikli Müdahale Noktalarımız',
    localPoints: [
      'Eskihisar–Topçular Feribot İskelesi gişe girişleri ve gemi çıkış alanı',
      'Eskihisar Feribot Yolu dik tırmanış rampası ve D-100 üst bağlantısı',
      'Eskihisar Kalesi çevresi, Osman Hamdi Bey Müzesi yolu ve sahil otoparkları',
      'Eskihisar – Darıca Bayramoğlu ve Eskihisar – TÜBİTAK sahil geçişleri'
    ],
    fieldLogTitle: 'Eskihisar Saha Operasyon Kaydı',
    fieldLogDesc: 'Feribottan indikten hemen sonra Eskihisar rampasında debriyaj balatası sıyıran tatil dönüşü aile aracı, 11 dakikada kayar kasaya yüklenip yolcularıyla birlikte güvenle İstanbul Maltepe’deki servisine bırakıldı.',
    faqs: [
      { q: 'Feribot sırası içindeyken veya gişelerin hemen önünde aracım kaldı, gelebilir misiniz?', a: 'Evet. Feribot yolu girişine ve gişe çevresine 10–14 dakikada ulaşıp iskele görevlileriyle koordineli biçimde aracınızı hızla platforma alıyoruz.' },
      { q: 'Eskihisar rampası çok dik, freni zayıflayan aracımı güvenle yükleyebilir misiniz?', a: 'Evet. Ağır tekerlek takozları ve yüksek torklu hidrolik vinçle dik rampa eğiminde dahi kayma riski olmadan kontrollü yükleme yapıyoruz.' },
      { q: 'Feribottan indim, İstanbul’a dönüyorum; aracımı doğrudan İstanbul’daki ustama çeker misiniz?', a: 'Evet. Gebze’de kalmak zorunda değilsiniz; Eskihisar’dan İstanbul’un tüm Anadolu ve Avrupa yakası ilçelerine sabit fiyatla doğrudan teslimat yapıyoruz.' },
      { q: 'Eskihisar sahilde motosikletimin lastiği patladı, taşıma yapıyor musunuz?', a: 'Evet. Ön tekerlek sabitleme kıskacı ve kaymaz motor rampası bulunan aracımızla motosikletinizi çiziksiz taşıyoruz.' },
      { q: 'Pazar akşamı feribot dönüş yoğunluğunda da çekici hizmetiniz aktif mi?', a: 'Evet. Özellikle hafta sonu ve tatil dönüş saatlerinde Eskihisar–Tatlıkuyu aksında ekstra nöbetçi araç bulunduruyoruz.' }
    ]
  },
  {
    slug: 'tem-gebze',
    name: 'TEM Gebze',
    navbarTitle: 'TEM GEBZE ÇEKİCİ',
    navbarSub: '7/24 O-4 Anadolu Otoyolu Acil Filo',
    featured: true,
    eta: '10–15 Dk',
    heroImg: 'client-audi-otoyol',
    fieldImg: 'client-gece-rangerover',
    lat: '40.8282',
    lng: '29.4291',
    cardSummary: 'O-4 TEM Anadolu Otoyolu Gebze Gişeleri, Şekerpınar Gişeleri, Muallimköy ve Dilovası yönünde 7/24 acil otoyol çekici.',
    metaTitle: 'TEM Gebze Çekici & Otoyol Kurtarma | Gişeler 7/24 Acil Yol Yardım',
    metaDesc: 'TEM Otoyolu (O-4) Gebze Gişeleri, Şekerpınar Gişeleri, Muallimköy kavşağı ve Ankara–İstanbul yönünde 7/24 özenli otoyol çekici: 0533 945 45 14.',
    heroLead: 'O-4 TEM Anadolu Otoyolu Gebze Gişeleri, Şekerpınar çıkışları, Muallimköy bağlantısı ve Ankara–İstanbul her iki istikamette 10–15 dakikada ışıklı emniyetle müdahale.',
    seoTitle: 'TEM Otoyolu Gebze Geçişinde Yüksek Emniyetli Acil Otoyol Kurtarma',
    paragraphs: [
      'İstanbul ile Anadolu’yu birbirine bağlayan O-4 TEM Anadolu Otoyolu’nun Gebze geçişi, Türkiye’nin en yüksek araç hacmine sahip otoyol kesitlerinden biridir. Şekerpınar Gişeleri, Gebze Gişeleri, GOSB–Kirazpınar geçişi ve Muallimköy Kavşağı boyunca saatte 120 km hızla akan trafikte emniyet şeridinde kalmak sürücü ve yolcular için ciddi bir güvenlik stresidir.',
      'TEM otoyolunda arıza veya kaza anında dakika sayarken yanlış istikametten giren bir çekici 25 dakika kaybedebilir. Hem İstanbul yönüne hem Ankara–İzmit yönüne en hızlı kavşak girişlerini bilen nöbetçi ekibimiz, WhatsApp konumunuzu aldığında doğru yön bağlantısından otoyola katılıp ortalama 10–15 dakika içinde yanınıza ulaşır.',
      'Olay yerine vardığımızda ilk olarak yüksek parlaklıklı LED tepe ikaz barlarımızı ve ışıklı yol konilerimizi açarak aracınızın arkasında koruyucu bir güvenlik koridoru kurarız. Motor arızası, hararet veya şanzıman kilitlenmesinde düşük eğimli <a href="/hizmetler/oto-kurtarma.html">kayar kasa oto çekicimizle</a> 5 dakika içinde yüklemeyi bitirip sizi ve ailenizi tehlikeli emniyet şeridinden uzaklaştırırız.',
      'TEM otoyolunda bariyere temas eden veya şarampole inen araçlarda <a href="/hizmetler/oto-kurtarma.html">vinçli oto kurtarma</a>, yarılan lastiklerde <a href="/hizmetler/lastik-yol-yardim.html">mobil lastik desteği</a> ve uzun yolculuğu yarıda kalanlar için <a href="/hizmetler/sehirlerarasi-arac-tasima.html">şehirlerarası özenli nakil</a> çözümlerimiz tek hatta hazırdır.'
    ],
    localPointsTitle: 'TEM Gebze Hattında Hızlı İntikal Noktalarımız',
    localPoints: [
      'TEM Otoyolu Gebze Gişeleri giriş-çıkışları ve bağlantı viyadükleri',
      'Şekerpınar Gişeleri, TOSB–Çayırova otoyol geçişi ve İstanbul yönü',
      'Muallimköy Kavşağı, Osmangazi Köprüsü ayrımı ve Dilovası tırmanışı',
      'TEM Otoyolu dinlenme tesisleri, akaryakıt istasyonları ve hızlı şarj noktaları'
    ],
    fieldLogTitle: 'TEM Gebze Saha Operasyon Kaydı',
    fieldLogDesc: 'TEM Gebze Gişeleri Ankara istikametinde turbo arızasıyla emniyet şeridine çekilen aile SUV aracı, 11 dakikada ışıklı koruma altında kayar kasaya yüklenip Gebze yetkili servisine teslim edildi.',
    faqs: [
      { q: 'TEM Otoyolu’nda emniyet şeridindeyim, çekici gelene kadar ne yapmalıyım?', a: 'Dörtlülerinizi yakın, sağ kapılardan inip mutlaka çelik bariyerin arka tarafına geçin ve 150 metre geriye reflektör koyun. Konumunuzu WhatsApp’tan ilettiğiniz an en yakın otoyol ekibimiz yola çıkar.' },
      { q: 'TEM’de İstanbul yönünde mi Ankara yönünde mi olduğumu nasıl doğru iletebilirim?', a: 'WhatsApp canlı konum veya mevcut konum paylaşmanız yeterlidir; haritada bulunduğunuz şeridi net görüp doğru kavşaktan giriş yapıyoruz.' },
      { q: 'Otoyol gişe geçiş ücretleri çekici fiyatının üstüne ekstra eklenir mi?', a: 'Hayır. Telefonda size ilettiğimiz sabit fiyata otoyol geçişleri ve sigortalı taşıma dahildir; teslimatta ek geçiş bedeli istemiyoruz.' },
      { q: 'TEM’de gece yarısı ailemle yolda kaldım, çekici kabinine yolcu alabiliyor musunuz?', a: 'Evet. Bakımlı ve konforlu çekici kabinimizde sürücü ve yolcuları emniyetli biçimde teslimat noktasına kadar ulaştırıyoruz.' },
      { q: 'TEM dinlenme tesisinde aküm bitti veya lastiğim indi, geliyor musunuz?', a: 'Evet. Otoyol üzerindeki dinlenme ve akaryakıt tesislerine mobil akü takviye ve lastik yol yardım ekibimiz 7/24 hızlı ulaşım sağlar.' }
    ]
  },
  {
    slug: 'd100-gebze',
    name: 'D-100 Gebze',
    navbarTitle: 'D-100 GEBZE ÇEKİCİ',
    navbarSub: '7/24 D-100 Karayolu Acil Müdahale',
    featured: false,
    eta: '8–12 Dk',
    heroImg: 'client-accent-otoyol',
    fieldImg: 'client-kazali-mercedes',
    lat: '40.7998',
    lng: '29.4355',
    cardSummary: 'D-100 Gebze geçişi, Anibal Kavşağı, Gebze Center önü, Tatlıkuyu ve Çayırova–Dilovası karayolu hattında 8–12 dk varış.',
    metaTitle: 'D-100 Gebze Çekici & E-5 Oto Kurtarma | Anibal Kavşağı 7/24',
    metaDesc: 'D-100 Gebze Karayolu, Anibal Kavşağı, Gebze Center önü ve yan yollarda 8–12 dakikada hidrolik kayar kasa oto çekici: 0533 945 45 14.',
    heroLead: 'D-100 Gebze geçişinin tamamında, Anibal Kavşağı, Gebze Center önü, köprü altları ve her iki yan yolda 8–12 dakikada ulaşan 7/24 acil oto çekici.',
    seoTitle: 'D-100 Gebze Karayolunda Dakikalar İçinde Güvenli Araç Tahliyesi',
    paragraphs: [
      'Gebze’yi boydan boya kesen D-100 (halk arasındaki adıyla E-5) Karayolu; İstanbul Tuzla sınırından başlayarak Çayırova, Beylikbağı, Anibal Kavşağı, Gebze Center önü, Tatlıkuyu ve Dilovası girişine kadar günün hiçbir saatinde durmayan bir ana arterdir. Özellikle Anibal Kavşağı tünel geçişinde veya dar yan yollarda stop eden bir araç, birkaç dakika içinde kilometrelerce trafik sıkışıklığına sebep olur.',
      'Merkez intikal noktamız D-100 Karayolu’na doğrudan bağlı olduğu için <a href="/hizmetler/oto-kurtarma.html">D-100 Gebze oto çekici</a> çağrılarına ortalama 8–12 dakika gibi son derece kısa bir sürede ulaşıyoruz. Yan yol ve ana yol ayrımını, U dönüş köprülerini ve kestirme paralel bağlantıları bilen operatörlerimiz trafiğe takılmadan aracınızın hemen arkasına yanaşır.',
      'D-100 üzerindeki zincirleme hasarlı kazalarda aksı kırık araçlar için tekerlek kızaklı <a href="/hizmetler/oto-kurtarma.html">oto kurtarma</a>, ani lastik patlamalarında <a href="/hizmetler/lastik-yol-yardim.html">mobil lastik desteği</a> ve ticari dağıtım kamyonetlerinde <a href="/hizmetler/ticari-arac-cekici.html">uzun şasi ticari çekici</a> araçlarımız aynı anda sahadadır.',
      'Aracınızı tehlikeli karayolu akışından saniyeler içinde alıp D-100 üzerindeki marka yetkili servislerine, Gebze Oto Sanayi’ye veya İstanbul/İzmit yönündeki dilediğiniz adrese özenle ulaştırıyoruz.'
    ],
    localPointsTitle: 'D-100 (E-5) Gebze Üzerindeki Kritik Noktalarımız',
    localPoints: [
      'Anibal Kavşağı tünel içi, üst geçiş ve Gebze Merkez çıkış kolları',
      'Gebze Center AVM önü, Tatlıkuyu Köprüsü ve Eskihisar ayrımı',
      'Beylikbağı, Köşklü Çeşme ve Mimar Sinan D-100 kuzey/güney yan yolları',
      'Çayırova McDonald’s / Tuzla sınırı ile Barış – Dilovası karayolu girişi'
    ],
    fieldLogTitle: 'D-100 Gebze Saha Operasyon Kaydı',
    fieldLogDesc: 'Anibal Kavşağı İzmit yönü çıkışında kayış koparıp şarj kesen binek otomobil, 8 dakikada olay yerine ulaşan kayar kasa ile trafiği aksatmadan alınıp Gebze Oto Sanayi’ye bırakıldı.',
    faqs: [
      { q: 'Anibal Kavşağı alt geçidinde aracım stop etti, ne kadar sürede gelebilirsiniz?', a: 'Merkez ekibimiz Anibal Kavşağı’na birkaç dakika mesafededir; normal akışta 8–12 dakika içinde ışıklı ikazla arkanızda olup aracınızı hızla güvenli alana alıyoruz.' },
      { q: 'D-100 yan yolda kaldım, ana yoldan gelen çekici geçip gitmesin diye ne yapmalıyım?', a: 'Ararken "D-100 kuzey yan yol" veya "Gebze Center önü güney yan yol" şeklinde belirtip WhatsApp konum attığınızda doğrudan doğru şeritten yanaşıyoruz.' },
      { q: 'D-100 üzerinde kaza yaptım, ön tekerim yamuldu; çekiciniz yükleyebilir mi?', a: 'Evet. Tekerlek altı ağır yük kızaklarımızla dönmeyen veya aksı kırık tekerlekleri sürüklemeden platforma alabiliyoruz.' },
      { q: 'D-100 üzerindeki yetkili servislere (Hyundai, Ford, Renault, VW vb.) teslimat yapıyor musunuz?', a: 'Evet. Gebze ve Çayırova D-100 hattı üzerindeki tüm yetkili ve özel servislerin kabul kapısına hasarsız indirme yapıyoruz.' },
      { q: 'D-100 Gebze çekici fiyatında trafik yoğunluğu bekleme ücreti yansır mı?', a: 'Hayır. Telefonda onayladığınız sabit mesafe ücreti geçerlidir; trafik sıkışıklığı nedeniyle ekstra bekleme bedeli alınmaz.' }
    ]
  },
  {
    slug: 'osmangazi-koprusu',
    name: 'Osmangazi Köprüsü',
    navbarTitle: 'OSMANGAZİ KÖPRÜSÜ ÇEKİCİ',
    navbarSub: '7/24 O-5 & O-7 Otoyol Kurtarma',
    featured: false,
    eta: '12–18 Dk',
    heroImg: 'client-audi-otoyol',
    fieldImg: 'client-bmw-cekici',
    lat: '40.7689',
    lng: '29.5138',
    cardSummary: 'Osmangazi Köprüsü kuzey yaklaşımı, Muallimköy Gişeleri, O-5 İzmir Otoyolu çıkışı ve O-7 Kuzey Marmara hattında 7/24 çekici.',
    metaTitle: 'Osmangazi Köprüsü & Kuzey Marmara Çekici | 7/24 Otoyol Kurtarma',
    metaDesc: 'Osmangazi Köprüsü kuzey çıkışı, Muallimköy Gişeleri, O-5 İzmir Otoyolu ve O-7 Kuzey Marmara Otoyolu’nda 7/24 nöbetçi çekici: 0533 945 45 14.',
    heroLead: 'Osmangazi Köprüsü yaklaşım viyadükleri, Muallimköy gişe çıkışları, O-5 Gebze–Orhangazi–İzmir ve O-7 Kuzey Marmara Otoyolu’nda 7/24 uzun yol ve acil kurtarma filosu.',
    seoTitle: 'Osmangazi Köprüsü ve Kuzey Marmara Otoyolunda Profesyonel Kurtarma',
    paragraphs: [
      'Gebze–Dilovası üzerinden İzmit Körfezi’ni aşan Osmangazi Köprüsü (O-5) ile İstanbul’un kuzeyini Anadolu’ya bağlayan Kuzey Marmara Otoyolu (O-7), yüksek süratli şehirlerarası yolculukların ana omurgasıdır. Uzun yol sürüşlerinde yaşanan ani hararet, enjektör kesilmesi, yüksek hızda lastik yarılması, elektrikli araç menzil tükenmesi veya yakıt sistemi arızaları sürücüleri gişeler ve viyadük yaklaşımlarında zor durumda bırakır.',
      'Köprü üzerindeki zorunlu işletme müdahalesiyle kuzey çıkış (Muallimköy/Dilovası) veya güney çıkış (Hersek) güvenli alanlarına alınan ya da O-5 / O-7 bağlantı kollarında arızalanan araçları 12–18 dakikada teslim alıyoruz. Şehir dışına giderken ya da Bursa–İzmir yönünden İstanbul’a dönerken yolda kalan aileler için en büyük konfor, aracın tek seferde hedef şehre ya da Gebze’deki yetkili servise ulaştırılmasıdır.',
      'Hidrolik <a href="/hizmetler/oto-kurtarma.html">kayar kasa oto çekicilerimiz</a> düşük şasili uzun yol sedanları, geniş aile SUV’ları, elektrikli araçlar ve <a href="/hizmetler/atv-karavan-ozel-tasima.html">karavan/motosikletler</a> için tam donanımlıdır. Arızanız Gebze’de onarılabilecekse en yakın yetkili servise, tatil veya ev yolunuza devam etmek istiyorsanız <a href="/hizmetler/sehirlerarasi-arac-tasima.html">81 ile özenli tekli taşıma</a> hizmetimizle doğrudan adresinize nakil sağlıyoruz.',
      'Köprü ve otoyol geçiş ücretlerinin şeffafça dahil edildiği sabit teklifimizle, uzun yol aksiliğini güvenli ve sakin bir teslimat sürecine çeviriyoruz.'
    ],
    localPointsTitle: 'Osmangazi & Kuzey Marmara Başlıca Müdahale Alanları',
    localPoints: [
      'Osmangazi Köprüsü Muallimköy – Dilovası kuzey gişeleri ve dinlenme alanı',
      'Kuzey Marmara Otoyolu (O-7) Gebze, Sevindikli, Pelitli ve Kurnaköy bağlantıları',
      'O-5 Otoyolu Hersek – Altınova yönü transfer ve acil karşılama noktası',
      'TEM – Kuzey Marmara – Osmangazi üçlü kavşak bağlantı kolları'
    ],
    fieldLogTitle: 'Osmangazi Köprüsü Saha Operasyon Kaydı',
    fieldLogDesc: 'İzmir’den İstanbul’a dönerken Osmangazi Köprüsü kuzey çıkışında şanzıman arızası veren tavan portbagajlı aile sedanı, 15 dakikada kayar kasaya yüklenip yolcularıyla birlikte İstanbul Kadıköy servisine teslim edildi.',
    faqs: [
      { q: 'Osmangazi Köprüsü üzerinde aracım bozulursa doğrudan köprüye girebiliyor musunuz?', a: 'Köprü tabliyesi üzerinde yasal güvenlik gereği önce otoyol işletmesi aracınızı en yakın güvenli gişe/çıkış cebine çeker; ekibimiz o anda gişe çıkışında sizi bekleyip bekleme yapmadan teslim alır ve dilediğiniz ile/servise taşır.' },
      { q: 'Kuzey Marmara Otoyolu Kurnaköy veya Pelitli arasında kaldım, geliyor musunuz?', a: 'Evet. Kuzey Marmara Otoyolu’nun Gebze, Pelitli, Balçık ve Kurnaköy kesimlerinin tamamında 7/24 hızlı otoyol çekici hizmeti veriyoruz.' },
      { q: 'Osmangazi çıkışı sonrası aracımı Bursa veya Yalova yönüne de taşıyor musunuz?', a: 'Evet. İster İstanbul ve Gebze yönüne, ister Yalova, Bursa, Balıkesir ve İzmir yönüne özenli şehirlerarası tekli araç taşıma yapıyoruz.' },
      { q: 'Uzun yol aracımın üstünde portbagaj veya bisiklet taşıyıcı var, sorun olur mu?', a: 'Hayır. Açık platform hidrolik kayar kasalarımızda yükseklik kısıtı olmadığı için tavan portbagajlı ve bisiklet taşıyıcılı araçlar rahatça taşınır.' },
      { q: 'Otoyolda köprü geçişi ve taşıma ücreti nakit veya havaleyla ödenebilir mi?', a: 'Evet. Tüm otoyol araçlarımızda nakit ve havale mevcuttur; teslim tutanağınız KDV’li olarak düzenlenir.' }
    ]
  },
  {
    slug: 'cayirova',
    name: 'Çayırova',
    navbarTitle: 'ÇAYIROVA ÇEKİCİ',
    navbarSub: '7/24 Çayırova Nöbetçi Çekici Filosu',
    featured: true,
    eta: '10–15 Dk',
    heroImg: 'client-suv-cadde',
    fieldImg: 'client-mikro-arac',
    lat: '40.8245',
    lng: '29.3736',
    cardSummary: 'Çayırova Özgürlük, Yenimahalle, Akse, Atatürk, İnönü, Emek mahalleleri ve Fatih Caddesi’nde 7/24 hızlı çekici.',
    metaTitle: 'Çayırova Çekici & Oto Kurtarma | 7/24 Tüm Mahalleler Hızlı Ekip',
    metaDesc: 'Çayırova Özgürlük, Yenimahalle, Akse, Atatürk, Emek ve Fatih Caddesi’nde 7/24 hidrolik kayar kasa oto çekici ve akü takviye: 0533 945 45 14.',
    heroLead: 'Çayırova’nın tüm mahalleleri — Özgürlük, Yenimahalle, Akse, Atatürk, Emek, İnönü ve Cumhuriyet — ile Fatih Caddesi ve Tuzla geçişinde 10–15 dakikada yanınızda olan 7/24 çekici.',
    seoTitle: 'Çayırova Tüm Mahallelerinde 7/24 Nöbetçi Çekici ve Yol Yardım',
    paragraphs: [
      'Gebze ile İstanbul Tuzla arasında yoğun konut projeleri, teknoloji kampüsleri ve ticari caddeleriyle hızla büyüyen Çayırova; Özgürlük, Yenimahalle, Akse, Atatürk, Emek ve İnönü mahalleleriyle günün her saatinde yüksek araç yoğunluğuna sahiptir. Fatih Caddesi, Adnan Kahveci Caddesi, Rahmi Dibek Caddesi ve Tuzla bağlantı köprülerinde arıza yaşandığında yerel ve hızlı bir ekip hayati önem taşır.',
      'Gebze–Çayırova hattındaki aktif nöbetçi araçlarımız sayesinde Çayırova’nın en uç mahallelerine dahi ortalama 10–15 dakika içinde ulaşıyoruz. Akse ve Yenimahalle’deki yeni nesil çok katlı site otoparklarında yaşanan çalışmama sorunlarında 1.88m yüksekliğindeki <a href="/hizmetler/aparatli-cekici.html">kapalı otopark çekicimiz</a> ve <a href="/hizmetler/aku-takviye.html">yerinde 12V booster akü takviye</a> ekibimiz doğrudan site katına iner.',
      'Çayırova Belediyesi çevresi, Çayırova Marmaray Durağı ve D-100 bağlantı kollarında yaşanan şanzıman, hararet, debriyaj veya kaza durumlarında sıfır eğimli <a href="/hizmetler/oto-kurtarma.html">kayar kasa oto çekici</a> ile aracınızı dört lastiğinden jant koruyucu spanzetlerle sabitleyerek güvenle taşıyoruz.',
      'Çayırova’dan hem Gebze Oto Sanayi ve yetkili servislere hem de komşu Tuzla, İçmeler, Pendik ve Kartal servislerine sabit, şeffaf ve özenli nakil sunuyoruz.'
    ],
    localPointsTitle: 'Çayırova Hizmet Verdiğimiz Ana Mahalle & Caddeler',
    localPoints: [
      'Özgürlük Mahallesi, Yenimahalle, Fatih Caddesi ve Adnan Kahveci Caddesi',
      'Akse Mahallesi site yerleşimleri, Rahmi Dibek Caddesi ve Mutlukent geçişi',
      'Atatürk, Emek ve İnönü mahalleleri ile Çayırova Marmaray istasyonu çevresi',
      'Çayırova – Şekerpınar bağlantı bulvarı ve Tuzla D-100 geçiş köprüsü'
    ],
    fieldLogTitle: 'Çayırova Saha Operasyon Kaydı',
    fieldLogDesc: 'Çayırova Özgürlük Mahallesi Fatih Caddesi’nde akslı yürüyemez hale gelen binek otomobil, 12 dakikada gelen kayar kasayla yüklenip Tuzla’daki yetkili servise hasarsız teslim edildi.',
    faqs: [
      { q: 'Çayırova Özgürlük veya Akse Mahallesi’ne çekici kaç dakikada gelir?', a: 'Gebze–Çayırova sınırındaki nöbetçi ekiplerimiz sayesinde normal trafikte 10–15 dakika içinde konumunuza ulaşıyoruz.' },
      { q: 'Çayırova’daki sitemizin yeraltı otoparkından araç çıkarabiliyor musunuz?', a: 'Evet. Alçak tavanlı özel otopark kurtarıcımız ve Go-Jak tekerlek dolilerimizle Çayırova’daki tüm rezidans ve site kapalı garajlarından hasarsız araç çıkarıyoruz.' },
      { q: 'Çayırova’dan İstanbul Pendik veya Kartal sanayiye araç çekiyor musunuz?', a: 'Evet. Çayırova İstanbul sınırında yer aldığı için Tuzla, Pendik, Kartal ve Gebze Oto Sanayi’nin tamamına ekonomik sabit fiyatla çekim yapıyoruz.' },
      { q: 'Çayırova’da gece saatlerinde akü takviye veya lastik değişimi yapıyor musunuz?', a: 'Evet. 7/24 mobil yol yardım ekibimiz gece yarısı dahi akü takviye ve stepne değişimi için kapınıza gelir.' },
      { q: 'Kasko poliçem için teslim tutanağı ve taşıma tutanağı veriyor musunuz?', a: 'Evet. fotoğraflı teslim tutanağı ve fotoğraflı taşıma tutanağı her işlemde standart olarak sağlanır.' }
    ]
  },
  {
    slug: 'sekerpinar',
    name: 'Şekerpınar',
    navbarTitle: 'ŞEKERPINAR ÇEKİCİ',
    navbarSub: '7/24 Şekerpınar & Lojistik Filosu',
    featured: false,
    eta: '10–15 Dk',
    heroImg: 'client-ticari-istasyon',
    fieldImg: 'client-gece-panelvan',
    lat: '40.8548',
    lng: '29.3765',
    cardSummary: 'Şekerpınar, banka operasyon merkezleri, lojistik depolar, TEM Şekerpınar Gişeleri ve TOSB geçişinde 7/24 kurumsal çekici.',
    metaTitle: 'Şekerpınar Çekici | Bankacılık Üssü & 7/24 Oto Kurtarma',
    metaDesc: 'Çayırova Şekerpınar, banka operasyon merkezleri, lojistik depolar, Muhsin Yazıcıoğlu Caddesi ve TEM Şekerpınar Gişeleri’nde 7/24 çekici: 0533 945 45 14.',
    heroLead: 'Çayırova Şekerpınar Mahallesi, bankacılık ve teknoloji operasyon merkezleri, lojistik antrepolar, Muhsin Yazıcıoğlu Caddesi ve TEM Şekerpınar Gişeleri’nde 7/24 kurumsal araç çekici.',
    seoTitle: 'Çayırova Şekerpınar Çekici & Bankacılık Üssü Hızlı Kurtarma',
    paragraphs: [
      'Kocaeli’nin İstanbul’a açılan en dinamik kurumsal merkezlerinden Şekerpınar; Türkiye’nin en büyük bankalarının operasyon kampüslerine (Akbank, Garanti BBVA, İş Bankası, Yapı Kredi, Kuveyt Türk), uluslararası lojistik firmalarının dev depolarına ve TEM Şekerpınar Gişeleri’ne ev sahipliği yapar. Muhsin Yazıcıoğlu Caddesi, Fevzi Çakmak Caddesi ve Anadolu Caddesi boyunca sabah-akşam yoğun kurumsal binek ve ticari araç akışı görülür.',
      'Kampüs otoparklarında mesai bitiminde çalışmayan kurumsal kiralık araçlar, soğuk havalarda akü sorunu yaşayan binek otomobiller ve lojistik depolar arasında seyreden panelvanlar için <strong>Şekerpınar nöbetçi çekici</strong> ve <strong>Şekerpınar araç çekici</strong> ekiplerimiz ortalama 10–15 dakikada ulaşır. Binek araçlarda düşük eğimli <a href="/hizmetler/oto-kurtarma.html">kayar kasa oto çekici</a>, şirket kapalı otoparklarında ise alçak kabinli <a href="/hizmetler/aparatli-cekici.html">otopark kurtarıcısı</a> görev yapar.',
      'Şekerpınar’daki filo, TAYSAD ve TOSB çekici ihtiyaçları için uzun şasili <a href="/hizmetler/ticari-arac-cekici.html">ticari araç çekici</a>, depo içi <a href="/hizmetler/tenteli-arac-nakliye.html">forklift nakli</a> ve 12V/24V korumalı <a href="/hizmetler/aku-takviye.html">yerinde akü takviye</a> hizmetleri tek bir 7/24 <strong>Şekerpınar çekici numarası</strong> üzerinden yönetilir.',
      'Şeffaf <strong>Şekerpınar çekici fiyatları</strong>, yükleme öncesi sabit fiyat onayı ve fotoğraflı teslim tutanağı ile iş gününüzün bölünmesini engelliyoruz.'
    ],
    localPointsTitle: 'Şekerpınar Hızlı İntikal Noktalarımız',
    localPoints: [
      'Banka operasyon merkezleri kampüs girişleri ve açık/kapalı personel otoparkları',
      'Muhsin Yazıcıoğlu Caddesi, Fevzi Çakmak Caddesi ve Şekerpınar Meydanı',
      'TEM Otoyolu Şekerpınar Gişeleri ve Tuzla Orhanlı bağlantı yolu',
      'Şekerpınar lojistik depoları, TAYSAD / TOSB girişi ve Akpınar sanayi çevresi'
    ],
    fieldLogTitle: 'Şekerpınar Saha Operasyon Kaydı',
    fieldLogDesc: 'Şekerpınar Muhsin Yazıcıoğlu Caddesi’ndeki banka kampüsü otoparkında aküsü biten otomatik filo aracı, 11 dakikada gelen mobil ekibimizin korumalı booster cihazıyla çalıştırılıp alternatör ölçümüyle teslim edildi.',
    faqs: [
      { q: 'Şekerpınar’daki banka operasyon merkezi otoparkına çekici veya akü takviye gelebiliyor mu?', a: 'Evet. Güvenlik kaydımızı vererek kampüs açık veya kapalı otoparklarına girip yerinde akü takviye ya da çekici yüklemesi yapıyoruz.' },
      { q: 'Şirket kiralık aracım Şekerpınar’da arızalandı, kurumsal süreç nasıl işliyor?', a: 'Filo kiralama şirketlerine ve kurumsal muhasebeye ibraz edebileceğiniz resmi fotoğraflı teslim tutanağı düzenliyoruz.' },
      { q: 'TEM Şekerpınar Gişeleri önünde aracım hararet yaptı, kaç dakikada ulaşırsınız?', a: 'Şekerpınar Gişeleri’ne 10–15 dakika içinde ulaşarak ışıklı ikaz altında aracınızı hızla güvenli platforma alıyoruz.' },
      { q: 'Şekerpınar’dan Sabiha Gökçen Havalimanı çevresi veya Tuzla servisine çekiyor musunuz?', a: 'Evet. Şekerpınar Sabiha Gökçen ve Tuzla’ya komşu olduğundan çok hızlı ve ekonomik nakil sağlıyoruz.' },
      { q: 'Lojistik depomuzdaki ticari panelvan ve kamyonetler için 7/24 desteğiniz var mı?', a: 'Evet. Gece sevkiyatlarında dahi uzun şasili ticari çekicimiz ve 24V takviye ekibimiz kesintisiz aktiftir.' }
    ]
  },
  {
    slug: 'darica',
    name: 'Darıca',
    navbarTitle: 'DARICA ÇEKİCİ',
    navbarSub: '7/24 Darıca & Bayramoğlu Filosu',
    featured: true,
    eta: '10–15 Dk',
    heroImg: 'client-bmw-cekici',
    fieldImg: 'client-suv-yagmur',
    lat: '40.7739',
    lng: '29.3708',
    cardSummary: 'Darıca Merkez, Bayramoğlu Yarımadası, Fevzi Çakmak, Kazım Karabekir, Osmangazi, Nenehatun ve sahil yolunda 7/24 çekici.',
    metaTitle: 'Darıca Çekici & Bayramoğlu Oto Kurtarma | 7/24 Hızlı Yol Yardım',
    metaDesc: 'Darıca Merkez, Bayramoğlu, Fevzi Çakmak, Kazım Karabekir, Osmangazi, Nenehatun ve Darıca sahil yolunda 7/24 kayar kasa oto çekici: 0533 945 45 14.',
    heroLead: 'Darıca’nın tüm mahalleleri — Bayramoğlu, Fevzi Çakmak, Kazım Karabekir, Osmangazi, Nenehatun, Bağlarbaşı, Piri Reis ve Sırasöğütler — ile Darıca sahil hattında 10–15 dakikada 7/24 çekici.',
    seoTitle: 'Darıca ve Bayramoğlu Yarımadasında 7/24 Profesyonel Oto Kurtarma',
    paragraphs: [
      'Kocaeli’nin deniz kıyısındaki en kalabalık yaşam merkezlerinden Darıca; Bayramoğlu Yarımadası, Fevzi Çakmak, Kazım Karabekir, Osmangazi, Nenehatun, Abdi İpekçi ve Sırasöğütler mahalleleriyle hem yoğun şehir içi trafiğine hem de yaz-kış sahil ziyaretçi akışına sahiptir. İstasyon Caddesi, Aşıroğlu Caddesi, Dr. Zeki Acar bağlantısı ve Bayramoğlu Fatih Sultan Mehmet Caddesi üzerindeki dar kesitlerde araç arızalandığında hızlı müdahale büyük rahatlık sağlar.',
      'Gebze–Darıca aksında sürekli aktif bulunan nöbetçi araçlarımızla Darıca’nın tüm mahallelerine ve Bayramoğlu sahil ucuna ortalama 10–15 dakika içinde ulaşıyoruz. Darıca Eğitim ve Araştırma Hastanesi çevresi, Marmaray Osmangazi ve Darıca istasyon otoparkları ile villa/site garajlarında yaşanan arızalarda hem <a href="/hizmetler/oto-kurtarma.html">hidrolik kayar kasa</a> hem de <a href="/hizmetler/aparatli-cekici.html">alçak kabinli kapalı garaj çekicisi</a> anında sevk edilir.',
      'Bayramoğlu Yarımadası’nda lüks binek otomobiller ve elektrikli araçlar için düşük eğimli <a href="/hizmetler/oto-kurtarma.html">VIP taşıma rampası</a>, sahil yolunda patlayan lastikler için <a href="/hizmetler/lastik-yol-yardim.html">mobil lastik yol yardım</a> ve Darıca içi motosiklet sürücüleri için ön teker kıskaçlı <a href="/hizmetler/motosiklet-cekici.html">motosiklet çekici</a> hizmetlerimiz aynı profesyonel standarttadır.',
      'Darıca’dan Gebze Oto Sanayi Sitesi’ne, Tuzla servislerine veya İstanbul/İzmit yetkili merkezlerine telefonda netleşen sabit fiyat ve fotoğraflı teslim tutanağı güvencesiyle aracınızı ulaştırıyoruz.'
    ],
    localPointsTitle: 'Darıca & Bayramoğlu Başlıca Müdahale Alanları',
    localPoints: [
      'Bayramoğlu Yarımadası, Fatih Sultan Mehmet Caddesi, marina ve sahil siteleri',
      'Darıca Merkez, Fevzi Çakmak, Bağlarbaşı, Piri Reis ve Sırasöğütler mahalleleri',
      'Kazım Karabekir, Osmangazi, Nenehatun ve Abdi İpekçi mahalleleri',
      'Darıca Farabi Eğitim ve Araştırma Hastanesi, Marmaray durakları ve sahil parkı'
    ],
    fieldLogTitle: 'Darıca Saha Operasyon Kaydı',
    fieldLogDesc: 'Bayramoğlu sahil yolunda sağ ön lastiği jantla birlikte hasar alan SUV araç, 13 dakikada ulaşan düşük eğimli kayar kasaya yüklenip Darıca’daki lastik ve jant onarım servisine hasarsız teslim edildi.',
    faqs: [
      { q: 'Bayramoğlu Yarımadası’nın en ucundaki site otoparkına çekici kaç dakikada gelir?', a: 'Darıca–Bayramoğlu hattındaki nöbetçi aracımız normal akışta 12–15 dakika içinde Bayramoğlu’ndaki sitenize veya sahil noktasına ulaşır.' },
      { q: 'Darıca Farabi Hastanesi acil girişi veya otoparkında aracım çalışmıyor, gelir misiniz?', a: 'Evet. Hastane otoparklarında yaşanan akü bitmesi için yerinde korumalı takviye, mekanik arızalar içinse hızlı kayar kasa çekici gönderiyoruz.' },
      { q: 'Darıca’nın dar ara sokaklarında (Kazım Karabekir, Nenehatun vb.) çekici manevra yapabilir mi?', a: 'Evet. Kısa dönüş yarıçaplı kompakt kayar kasalarımız ve gerekirse ahtapot vinçli aracımızla en dar mahalle sokaklarından hasarsız alım yapıyoruz.' },
      { q: 'Darıca’dan Gebze Oto Sanayi’ye çekici fiyatı sabit mi?', a: 'Evet. Konumunuzu ve araç sınıfınızı paylaştığınızda telefonda tek ve net sabit fiyat verilir; sonradan ekstra ücret çıkarılmaz.' },
      { q: 'Bayramoğlu’nda çekme karavan veya motosiklet taşıma hizmetiniz var mı?', a: 'Evet. Özel motor sabitleme kıskacı ve karavan taşıma donanımımızla Darıca ve Bayramoğlu’nda 7/24 hizmet sunuyoruz.' }
    ]
  },
  {
    slug: 'dilovasi',
    name: 'Dilovası',
    navbarTitle: 'DİLOVASI ÇEKİCİ',
    navbarSub: '7/24 Dilovası & OSB Kurtarma Filosu',
    featured: false,
    eta: '12–18 Dk',
    heroImg: 'client-kazali-mercedes',
    fieldImg: 'client-accent-otoyol',
    lat: '40.7878',
    lng: '29.5389',
    cardSummary: 'Dilovası Merkez, Diliskelesi, İMES OSB, Makine İhtisas OSB, Tavşancıl ve D-100 Dilovası Rampası’nda 7/24 ağır & binek çekici.',
    metaTitle: 'Dilovası Çekici | İMES OSB, Rampa & Otoyol Kurtarma',
    metaDesc: 'Dilovası, Diliskelesi, İMES OSB, Makine İhtisas OSB, Tavşancıl ve D-100 Dilovası rampasında 7/24 özenli binek, ticari ve vinçli oto kurtarma: 0533 945 45 14.',
    heroLead: 'Dilovası Merkez, Diliskelesi, İMES OSB, Makine İhtisas OSB, Kömürcüler, Tavşancıl ve zorlu D-100 Dilovası Rampası’nda 7/24 yüksek kapasiteli oto çekici ve vinçli kurtarma.',
    seoTitle: 'Dilovası Rampası, İMES OSB ve Liman Hattında Güçlü Kurtarma Desteği',
    paragraphs: [
      'Gebze’nin hemen doğusunda yer alan Dilovası; İMES OSB, Makine İhtisas OSB, Dilovası OSB, Diliskelesi liman sahaları ve Marmara’nın en dik otoyol kesitlerinden biri olan D-100 / TEM Dilovası Rampası’yla yüksek zorluk dereceli bir kurtarma bölgesidir. Özellikle ağır yaz sıcağında Dilovası Rampası’nı tırmanan binek ve ticari araçlarda hararet, turbo arızası ve debriyaj yanması sık yaşanırken; yağışlı kış gecelerinde dik inişte kayma ve bariyer teması vakaları görülür.',
      'Dilovası’nın dik topoğrafyasına ve yoğun ağır vasıta trafiğine tam donanımlı çıkan ekiplerimiz; hem <a href="/hizmetler/oto-kurtarma.html">hidrolik kayar kasa oto çekici</a> hem de kaza ve bariyer teması durumlarında makaralı <a href="/hizmetler/oto-kurtarma.html">vinçli oto kurtarma</a> araçlarıyla 12–18 dakikada olay yerine ulaşır. Rampa üzerinde araç yüklenirken 150 metrelik yüksek görünürlüklü ışıklı koni hattı kurulup tam şerit emniyeti sağlanır.',
      'İMES OSB, Makine İhtisas OSB, Mermerciler ve Diliskelesi liman bölgesindeki şirketler için uzun şasili <a href="/hizmetler/ticari-arac-cekici.html">panelvan/kamyonet çekici</a>, <a href="/hizmetler/tenteli-arac-nakliye.html">forklift ve makaslı platform taşıma</a> ve 24V korumalı akü takviye hizmetlerimiz 7/24 aktiftir.',
      'Dilovası ve Tavşancıl’dan Gebze Oto Sanayi’ye, İzmit yetkili servislerine veya İstanbul’a özenli, özenli ve sabit fiyatlı nakil güvencesi sunuyoruz.'
    ],
    localPointsTitle: 'Dilovası & OSB Hattında Müdahale Verdiğimiz Noktalar',
    localPoints: [
      'D-100 ve TEM Otoyolu Dilovası Rampası (iniş ve tırmanış şeritleri)',
      'İMES OSB, Makine İhtisas OSB, Dilovası OSB ve Mermerciler Sanayi',
      'Diliskelesi Mahallesi, liman giriş yolları ve Osmangazi Köprüsü çıkışı',
      'Tavşancıl, Mimar Sinan, Orhangazi ve Kayapınar mahalleleri'
    ],
    fieldLogTitle: 'Dilovası Saha Operasyon Kaydı',
    fieldLogDesc: 'D-100 Dilovası Rampası tırmanışında hararet yapıp emniyet şeridine çekilen hafif ticari pikap, 14 dakikada ulaşan ışıklı kurtarıcımızla güvenle yüklenip Gebze Sanayi’ye teslim edildi.',
    faqs: [
      { q: 'D-100 veya TEM Dilovası Rampası’nda hararet yaptım, hızlı gelir misiniz?', a: 'Evet. Dilovası rampası sürekli müdahale verdiğimiz ana hattımızdır; 12–18 dakika içinde ışıklı güvenlik donanımımızla yanınıza ulaşıp aracınızı güvenli platforma alıyoruz.' },
      { q: 'İMES OSB veya Makine İhtisas OSB’den şirket aracı taşıyor musunuz?', a: 'Evet. Her iki OSB’ye de düzenli binek, ticari panelvan ve 3.5 tona kadar tenteli yük taşıma hizmeti veriyoruz.' },
      { q: 'Diliskelesi veya Tavşancıl’dan İzmit’teki yetkili servise çekim yapıyor musunuz?', a: 'Evet. Dilovası’ndan hem Gebze hem İzmit/Körfez hem de İstanbul’daki tüm yetkili ve özel servislere sabit fiyatla nakil sağlıyoruz.' },
      { q: 'Yağmurda Dilovası inişinde kaza yaptım, ön tekerim dönmüyor; alabilir misiniz?', a: 'Evet. Tekerlek altı ağır yük kızakları ve aparatlı kurtarma ekipmanımızla yürür aksamı hasarlı araçları şasiye ek zarar vermeden platforma alıyoruz.' },
      { q: 'Gece vardiyasında Dilovası OSB’lerde akü takviye veya lastik yardım var mı?', a: 'Evet. 12V binek ve 24V ticari sistemlere uyumlu akü booster ve mobil lastik ekiplerimiz gece de 7/24 görev başındadır.' }
    ]
  },
  {
    slug: 'hereke',
    name: 'Hereke',
    navbarTitle: 'HEREKE ÇEKİCİ',
    navbarSub: '7/24 Hereke, D-100 & TEM Çekici Hattı',
    featured: true,
    eta: '15–20 Dk',
    heroImg: 'client-audi-otoyol',
    fieldImg: 'client-accent-otoyol',
    lat: '40.7852',
    lng: '29.6184',
    cardSummary: 'Yukarı Hereke, Aşağı Hereke, D-100 Hereke geçişi, TEM Hereke gişeleri ve Hereke Sahil hattında 7/24 acil oto çekici ve yol yardım.',
    metaTitle: 'Hereke Çekici | 7/24 Yukarı Hereke, D-100 & TEM Yol Yardım',
    metaDesc: 'Hereke, Yukarı Hereke, Aşağı Hereke, TEM Hereke gişeleri ve D-100 Körfez hattında 7/24 hızlı oto çekici, oto kurtarma, akü takviye ve lastik yol yardım: 0533 945 45 14.',
    heroLead: 'Yukarı Hereke, Aşağı Hereke, Agah Ateş, Cumhuriyet, TEM Hereke gişeleri ve D-100 sahil geçişinde 7/24 nöbetçi çekici ve acil yol yardım ekibimizle yanınızdayız.',
    seoTitle: 'Hereke, TEM Gişeleri ve D-100 Körfez Hattında 7/24 Nöbetçi Çekici',
    paragraphs: [
      'Dilovası ile Körfez ilçesi arasında stratejik bir geçiş noktası olan Hereke; D-100 Karayolu sahil güzergâhı, TEM Otoyolu Hereke gişeleri, Yukarı Hereke dik bağlantı yolları ve çimento/liman tesislerinin ağır trafik yoğunluğu nedeniyle sürücülerin günün her saatinde güvenilir yol yardıma ihtiyaç duyduğu önemli bir bölgedir.',
      'Hereke çekici ekibimiz D-100 ve TEM bağlantısından hızlıca intikal ederek ortalama 15–20 dakika içinde konumunuza ulaşır. Otoyol emniyet şeridinde hararet, baskı balata, triger veya şanzıman arızası yaşayan binek ve SUV araçları ışıklı güvenlik önlemleri eşliğinde platforma alıp Gebze Sanayi, İzmit veya İstanbul yetkili servislerine özenle naklediyoruz.',
      'Yukarı Hereke’nin eğimli sokaklarında marş basmayan araçlar için <a href="/hizmetler/aku-takviye.html">yerinde 12V/24V akü takviye</a>, D-100 sahil yolunda lastiği yarılan araçlar için <a href="/hizmetler/lastik-yol-yardim.html">mobil lastik yol yardım</a>, kilitli şanzımanlı otomobiller için ise <a href="/hizmetler/aparatli-cekici.html">aparatlı çekici</a> desteği sunuyoruz.',
      'Ayrıca Hereke ve Körfez sanayi sahalarından acil gönderilmesi gereken malzemeler için 3.5 tona kadar <a href="/hizmetler/tenteli-arac-nakliye.html">şehir içi ve şehirlerarası tenteli yük taşımacılığı</a> hizmetimiz de 7/24 aktiftir.'
    ],
    localPointsTitle: 'Hereke Çevresinde Müdahale Verdiğimiz Noktalar',
    localPoints: [
      'TEM Otoyolu Hereke Gişeleri ve Körfez–Dilovası otoyol geçişi',
      'D-100 Karayolu Aşağı Hereke sahil yolu ve demiryolu alt geçitleri',
      'Yukarı Hereke, Cumhuriyet, 17 Ağustos, Agah Ateş ve Hacı Akif mahalleleri',
      'Hereke Marina, liman girişleri ve İzmit–Gebze arası tüm bağlantı kolları'
    ],
    fieldLogTitle: 'Hereke Saha Operasyon Kaydı',
    fieldLogDesc: 'TEM Hereke gişeleri çıkışında şanzıman arızası veren sedan araç, 16 dakikada ulaşan nöbetçi ekibimiz tarafından tekerlek sabitlemeli platforma alınıp İzmit yetkili servisine özenle teslim edildi.',
    faqs: [
      { q: 'TEM Hereke gişelerinde veya D-100 Hereke geçişinde kaç dakikada gelirsiniz?', a: 'Dilovası–Gebze hattındaki nöbetçi aracımız D-100 ve TEM bağlantısından ortalama 15–20 dakika içinde Hereke’deki konumunuza ulaşır.' },
      { q: 'Yukarı Hereke’nin dik yokuşlu sokaklarına çekiciniz girebiliyor mu?', a: 'Evet. Kısa dingil mesafeli ve güçlü çekişli kurtarıcılarımızla Yukarı Hereke’nin eğimli sokaklarında güvenli yükleme yapıyoruz.' },
      { q: 'Hereke’den hem Gebze Sanayi’ye hem İzmit servislerine araç çekiyor musunuz?', a: 'Evet. Sürücünün tercihine göre Gebze, Körfez, İzmit veya İstanbul’daki dilediğiniz özel ya da yetkili servise doğrudan teslimat yapıyoruz.' },
      { q: 'Hereke’de gece yarısı akü takviye veya lastik değişimi yapıyor musunuz?', a: 'Evet. Gece vardiyamız 7/24 aktiftir; akü takviye ve stepne değişimi için doğrudan konumunuza geliyoruz.' },
      { q: 'Hereke çekici fiyatı ne zaman belli olur?', a: 'Aracınızın bulunduğu nokta ve gideceği servis bilgisine göre yola çıkmadan önce telefonda net fiyat bildirilir.' }
    ]
  },
  {
    slug: 'tuzla-sifa',
    name: 'Tuzla Şifa Mahallesi',
    navbarTitle: 'TUZLA ŞİFA ÇEKİCİ',
    navbarSub: '7/24 Şifa Mahallesi & E-5 Çekici Hattı',
    featured: true,
    eta: '10–15 Dk',
    heroImg: 'client-suv-cadde',
    fieldImg: 'client-kia-mahalle',
    lat: '40.8224',
    lng: '29.3612',
    cardSummary: 'Tuzla Şifa Mahallesi, İnönü Caddesi, Mimarsinan sınırı, E-5 / D-100 bağlantısı ve Şifa Park çevresinde 7/24 hızlı oto çekici ve yol yardım.',
    metaTitle: 'Tuzla Şifa Mahallesi Çekici | 7/24 Acil Oto Çekici & Yol Yardım',
    metaDesc: 'Tuzla Şifa Mahallesi, İnönü Caddesi, Şifa E-5 bağlantısı, Çayırova sınırı ve Mimarsinan hattında 10–15 dk varışlı 7/24 oto çekici ve yol yardım: 0533 945 45 14.',
    heroLead: 'Tuzla Şifa Mahallesi, İnönü Caddesi, Şifa E-5 / D-100 bağlantısı, Çayırova–Şifa sınır hattı ve sanayi çevre yollarında ortalama 10–15 dakikada yanınızdayız.',
    seoTitle: 'Tuzla Şifa Mahallesi ve E-5 Bağlantısında Hızlı Nöbetçi Çekici',
    paragraphs: [
      'İstanbul Tuzla ile Kocaeli Çayırova–Gebze sınırının tam kesişiminde yer alan Tuzla Şifa Mahallesi; yoğun yerleşim dokusu, İnönü Caddesi ticaret aksı, E-5 (D-100) yan yolları ve çevre sanayi tesislerine giden servis trafiğiyle gün boyu hareketli bir bölgedir. İstanbul merkezden gelecek çekicileri uzun süre beklemek yerine hemen sınır komşusu olan nöbetçi ekibimiz Şifa Mahallesi’ne ortalama 10–15 dakikada ulaşır.',
      'Şifa Mahallesi sokaklarında marş basmayan binek araçlar, İnönü Caddesi üzerinde hararet veya debriyaj arızası veren otomobiller ve E-5 bağlantısında lastiği yarılan sürücüler için 7/24 kesintisiz müdahale sağlıyoruz. Yürümeyen veya kaza geçirmiş araçlarda <a href="/hizmetler/oto-kurtarma.html">oto kurtarma</a> ve kilitli şanzımanlarda <a href="/hizmetler/aparatli-cekici.html">aparatlı çekici</a> ekiplerimiz devreye alınır.',
      'Araç çekimine gerek kalmayan durumlarda <a href="/hizmetler/aku-takviye.html">yerinde 12V/24V akü takviye</a> ve <a href="/hizmetler/lastik-yol-yardim.html">mobil lastik yol yardım</a> desteğiyle kısa sürede yolunuza devam etmenizi sağlıyoruz. Ayrıca Şifa Mahallesi esnafı ve ticari işletmeleri için <a href="/hizmetler/ticari-arac-cekici.html">panelvan çekici</a> ve 3.5 tona kadar <a href="/hizmetler/tenteli-arac-nakliye.html">şehir içi/şehirlerarası özel yük taşımacılığı</a> sunuyoruz.',
      'Tuzla Şifa Mahallesi’nden ister Tuzla İçmeler/Aydınlı sanayisine, ister Pendik–Kartal yetkili servislerine, ister Gebze Oto Sanayi’ye özenli ve net fiyatlı araç nakli gerçekleştiriyoruz.'
    ],
    localPointsTitle: 'Tuzla Şifa Mahallesi’nde Müdahale Verdiğimiz Noktalar',
    localPoints: [
      'Şifa Mahallesi İnönü Caddesi, Hürriyet Caddesi ve tüm mahalle sokakları',
      'Şifa E-5 (D-100) yan yolları, köprü bağlantıları ve Çayırova sınır geçişi',
      'Mimarsinan Mahallesi, Şifa Park AVM çevresi ve TEM bağlantı kolları',
      'Tuzla–Çayırova hattındaki ticari iş yerleri, depolar ve site otoparkları'
    ],
    fieldLogTitle: 'Tuzla Şifa Mahallesi Saha Operasyon Kaydı',
    fieldLogDesc: 'Şifa Mahallesi İnönü Caddesi üzerinde vites geçişi kilitlenen otomatik SUV araç, 12 dakikada ulaşan aparatlı ekibimizle güvenle yüklenerek Tuzla yetkili servisine teslim edildi.',
    faqs: [
      { q: 'Tuzla Şifa Mahallesi’ne çekici ne kadar sürede gelir?', a: 'Gebze–Çayırova sınırındaki nöbetçi aracımız Tuzla Şifa Mahallesi’nin tüm sokaklarına ve E-5 bağlantısına ortalama 10–15 dakikada ulaşır.' },
      { q: 'Şifa Mahallesi’nden Pendik, Kartal veya Tuzla Sanayi’ye çekim yapıyor musunuz?', a: 'Evet. Tuzla Sanayi, İçmeler, Pendik, Kartal, Maltepe ve Gebze Oto Sanayi dahil tüm servis noktalarına doğrudan nakil sağlıyoruz.' },
      { q: 'Otomatik aracım Şifa Mahallesi’nde P konumunda kilitlendi, çekebilir misiniz?', a: 'Evet. Tekerlek altı aparatlı çekici donanımımızla aracınızı sürüklemeden platforma alıp servise ulaştırıyoruz.' },
      { q: 'Tuzla Şifa’da sadece akü takviye veya stepne değişimi için geliyor musunuz?', a: 'Evet. Aracın çekilmesine gerek yoksa yerinde 12V/24V akü takviye veya stepne değişimiyle sorununuzu hızla çözüyoruz.' },
      { q: 'Gece saatlerinde Şifa Mahallesi’nde hizmet veriyor musunuz?', a: 'Evet. Haftanın 7 günü 24 saat kesintisiz nöbetçi çekici ve yol yardım hizmetimiz aktiftir.' }
    ]
  },
  {
    slug: 'bayramoglu',
    name: 'Bayramoğlu',
    navbarTitle: 'BAYRAMOĞLU ÇEKİCİ',
    navbarSub: '7/24 Bayramoğlu Adası & Sahil Çekici Hattı',
    featured: true,
    eta: '10–15 Dk',
    heroImg: 'client-gece-rangerover',
    fieldImg: 'client-suv-yagmur',
    lat: '40.7815',
    lng: '29.3492',
    cardSummary: 'Bayramoğlu Adası, Fatih Sultan Mehmet Caddesi, Balyanoz Koyu, Sahil Yolu, site ve villa bölgelerinde 7/24 özenli oto çekici ve yol yardım.',
    metaTitle: 'Bayramoğlu Çekici | 7/24 Bayramoğlu Adası & Sahil Oto Çekici',
    metaDesc: 'Darıca Bayramoğlu, Bayramoğlu Adası, Fatih Sultan Mehmet Caddesi, Balyanoz Koyu ve sahil yolunda 10–15 dk varışlı 7/24 oto çekici ve yol yardım: 0533 945 45 14.',
    heroLead: 'Bayramoğlu Adası, Fatih Sultan Mehmet Caddesi, Balyanoz Koyu, sahil siteleri ve Darıca–Tuzla bağlantısında ortalama 10–15 dakikada özenli oto çekici ve yol yardım.',
    seoTitle: 'Bayramoğlu Adası, Sahil Yolu ve Site Bölgelerinde 7/24 Oto Çekici',
    paragraphs: [
      'Darıca’nın en nezih sahil ve konut bölgesi olan Bayramoğlu; Bayramoğlu Adası, Fatih Sultan Mehmet Caddesi, Balyanoz Koyu çevresi, müstakil villalar, güvenlikli tatil siteleri ve Tuzla sınırına uzanan sahil yollarıyla özel dikkat gerektiren bir ulaşım bölgesidir. Yaz aylarında sahil trafiğinin yoğunlaştığı, kış aylarında ise uzun süre park halinde kalan araçlarda akü ve mekanik sorunların arttığı Bayramoğlu’nda 7/24 nöbetçi ekibimizle hizmet veriyoruz.',
      'Bayramoğlu’ndaki dar site girişlerinde, sahil otoparklarında veya Fatih Sultan Mehmet Caddesi üzerinde arızalanan binek, SUV ve otomatik araçlar için düşük eğimli platformlarımız ve <a href="/hizmetler/aparatli-cekici.html">aparatlı çekici</a> ekipmanlarımızla tampon ve jantlara özen göstererek yükleme yapıyoruz.',
      'Yazlık veya site önünde uzun süre çalışmayan araçlarda <a href="/hizmetler/aku-takviye.html">yerinde 12V akü takviye</a>, sahil yolunda patlayan lastiklerde <a href="/hizmetler/lastik-yol-yardim.html">mobil lastik yol yardım</a>, sahil motosiklet sürücüleri için ise ön teker kıskaçlı <a href="/hizmetler/motosiklet-cekici.html">motosiklet çekici</a> ekiplerimiz ortalama 10–15 dakikada yanınızda olur.',
      'Bayramoğlu’ndan Gebze Oto Sanayi’ye, Darıca servislerine, İstanbul Anadolu Yakası (Tuzla, Pendik, Kartal, Ataşehir) yetkili servislerine veya <a href="/hizmetler/sehirlerarasi-arac-tasima.html">81 ile şehirlerarası araç taşıma</a> rotalarına özenli teslimat yapıyoruz.'
    ],
    localPointsTitle: 'Bayramoğlu’nda Müdahale Verdiğimiz Noktalar',
    localPoints: [
      'Bayramoğlu Adası, Balyanoz Koyu ve sahil şeridi site girişleri',
      'Fatih Sultan Mehmet Caddesi, Yıldırım Beyazıt Caddesi ve bağlantı yolları',
      'Bayramoğlu–Tuzla Mercan sınırı ve Darıca sahil geçiş aksı',
      'Bölgedeki otel, plaj, marina ve güvenlikli villa sitelerinin otoparkları'
    ],
    fieldLogTitle: 'Bayramoğlu Saha Operasyon Kaydı',
    fieldLogDesc: 'Bayramoğlu Adası sahil sitesi önünde gece saatlerinde elektronik arıza veren SUV araç, 13 dakikada ulaşan nöbetçi ekibimizle özenle yüklenip İstanbul Anadolu Yakası yetkili servisine ulaştırıldı.',
    faqs: [
      { q: 'Bayramoğlu Adası içine ve site girişlerine çekici ne kadar sürede gelir?', a: 'Darıca–Gebze hattındaki nöbetçi ekibimiz Bayramoğlu Adası, sahil yolu ve tüm site girişlerine ortalama 10–15 dakikada ulaşır.' },
      { q: 'Bayramoğlu’ndan İstanbul Anadolu Yakası yetkili servislerine araç taşıyor musunuz?', a: 'Evet. Tuzla, Pendik, Kartal, Maltepe, Ataşehir ve Ümraniye’deki tüm yetkili marka servislerine doğrudan teslimat yapıyoruz.' },
      { q: 'Site önünde uzun süre yatan aracımın aküsü bitti, yerinde takviye yapar mısınız?', a: 'Evet. Çekiciye gerek kalmadan profesyonel 12V booster cihazımızla site önünde hızlıca akü takviyesi yapıp şarj dinamosunu ölçüyoruz.' },
      { q: 'Bayramoğlu sahilinde motosikletim arızalandı, motosiklet çekiciniz var mı?', a: 'Evet. Ön tekerlek kıskaçlı ve yumuşak kayışlı motosiklet çekici donanımımızla motorunuzu dik ve çiziksiz taşıyoruz.' },
      { q: 'Bayramoğlu’nda hafta sonu ve gece saatlerinde fiyat farkı oluyor mu?', a: 'Aracınızın konumu ve gideceği mesafeye göre telefonda net sabit fiyat verilir; sonradan sürpriz ek ücret çıkarılmaz.' }
    ]
  },
  {
    slug: 'kuzey-marmara',
    name: 'Kuzey Marmara',
    navbarTitle: 'KUZEY MARMARA ÇEKİCİ',
    navbarSub: '7/24 Kuzey Marmara Otoyolu Çekici Hattı',
    featured: true,
    eta: '15–20 Dk',
    heroImg: 'client-audi-otoyol',
    fieldImg: 'client-gece-rangerover',
    lat: '40.8645',
    lng: '29.4618',
    cardSummary: 'Kuzey Marmara Otoyolu (O-7) Gebze, Sevindikli, Liman, Kurnaköy, Mecidiye, Dilovası ve Pelitli bağlantılarında 7/24 acil otoyol oto çekici.',
    metaTitle: 'Kuzey Marmara Çekici | 7/24 Kuzey Marmara Otoyolu Oto Kurtarma',
    metaDesc: 'Kuzey Marmara Otoyolu (O-7) Gebze, Pelitli, Dilovası, Sevindikli, Kurnaköy ve Osmangazi bağlantı gişelerinde 7/24 acil oto çekici ve yol yardım: 0533 945 45 14.',
    heroLead: 'Kuzey Marmara Otoyolu (O-7) Gebze, Pelitli, Dilovası, Sevindikli, Kurnaköy ve bağlantı gişelerinde 7/24 yüksek güvenlikli otoyol çekici ve yol yardım ekibimizle yanınızdayız.',
    seoTitle: 'Kuzey Marmara Otoyolu (O-7) Gebze–Kocaeli Hattında 7/24 Acil Çekici',
    paragraphs: [
      'İstanbul ile Kocaeli ve Sakarya’yı birbirine bağlayan Kuzey Marmara Otoyolu (O-7); yüksek seyir hızları, geniş şerit yapısı, tüneller ve uzun viyadükleriyle arıza anında profesyonel otoyol müdahalesi gerektiren stratejik bir güzergâhtır. Gebze, Pelitli, Balçık, Dilovası, Sevindikli ve Kurnaköy gişelerine yakın konuşlu nöbetçi ekiplerimiz Kuzey Marmara Otoyolu çağrılarına hızla çıkış yapar.',
      'Otoyol üzerinde yaşanan hararet, lastik parçalanması, yakıt bitmesi, şanzıman arızası veya maddi hasarlı kaza durumlarında olay yerine ulaştığımızda ilk olarak yüksek görünürlüklü LED tepe ikazlarımızı ve ışıklı yol konilerimizi açarak aracınızın arkasında güvenli bir çalışma koridoru oluşturuyoruz. Ardından <a href="/hizmetler/oto-kurtarma.html">oto kurtarma</a> veya kilitli şanzımanlarda <a href="/hizmetler/aparatli-cekici.html">aparatlı çekici</a> donanımımızla aracınızı hızla platforma alıyoruz.',
      'Stepne değişimi gereken otoyol lastik patlamalarında <a href="/hizmetler/lastik-yol-yardim.html">mobil lastik yol yardım</a>, dinlenme tesislerinde marş basmayan araçlarda <a href="/hizmetler/aku-takviye.html">yerinde 12V/24V akü takviye</a>, ticari dağıtım araçlarında ise uzun şasili <a href="/hizmetler/ticari-arac-cekici.html">ticari araç çekici</a> desteği sunuyoruz.',
      'Kuzey Marmara Otoyolu’ndan alınan aracınızı tercihinize göre Gebze Oto Sanayi’ye, İstanbul Anadolu Yakası (Kurtköy, Pendik, Tuzla, Kartal) yetkili servislerine, İzmit’e veya <a href="/hizmetler/sehirlerarasi-arac-tasima.html">81 ile şehirlerarası araç taşıma</a> hizmetimizle doğrudan hedef şehrinize ulaştırıyoruz.'
    ],
    localPointsTitle: 'Kuzey Marmara Otoyolu’nda Müdahale Verdiğimiz Noktalar',
    localPoints: [
      'Kuzey Marmara Otoyolu (O-7) Gebze, Pelitli ve Dilovası bağlantı gişeleri',
      'Kurnaköy, Mecidiye, Tepeören ve İstanbul Sabiha Gökçen bağlantı aksı',
      'Sevindikli, İzmit Batı ve Osmangazi Köprüsü kuzey otoyol bağlantıları',
      'Otoyol dinlenme tesisleri, acil durma cepleri ve tünel çıkışları'
    ],
    fieldLogTitle: 'Kuzey Marmara Otoyolu Saha Operasyon Kaydı',
    fieldLogDesc: 'Kuzey Marmara Otoyolu Pelitli–Kurnaköy arasında gece saatlerinde turbo hortumu patlayıp emniyet cebine çekilen SUV araç, 17 dakikada ulaşan ışıklı ekibimizle güvenle yüklenip İstanbul Anadolu Yakası yetkili servisine teslim edildi.',
    faqs: [
      { q: 'Kuzey Marmara Otoyolu’nda (O-7) arızalandım, kaç dakikada ulaşabilirsiniz?', a: 'Pelitli, Balçık, Dilovası ve Gebze çıkışlarına yakın nöbetçi ekiplerimiz otoyol üzerindeki konumunuza ortalama 15–20 dakika içinde ulaşır.' },
      { q: 'Otoyol tünelleri veya viyadük yakınında kaldım, çekici girebiliyor mu?', a: 'Evet. Dörtlü flaşörlerinizi yakıp bariyer arkasına geçtikten sonra WhatsApp konumunuzu paylaşmanız yeterlidir; ışıklı ikaz donanımlı ekibimiz doğrudan yanınıza yanaşır.' },
      { q: 'Kuzey Marmara’dan hem İstanbul Kurtköy/Pendik hem Gebze/İzmit servislerine çekiyor musunuz?', a: 'Evet. Hangi yöne gitmek isterseniz isteyin İstanbul Anadolu/Avrupa Yakası, Gebze Sanayi, İzmit veya şehirlerarası tüm illere doğrudan nakil yapıyoruz.' },
      { q: 'Kuzey Marmara Otoyolu’nda gece saatlerinde lastik değişimi yapıyor musunuz?', a: 'Evet. Emniyet şeridinde reflektörlü güvenlik koridoru açarak stepne değişimi yapıyor; stepneniz yoksa aracınızı en yakın 7/24 açık lastikçiye taşıyoruz.' },
      { q: 'Otoyol geçiş ve çekici fiyatı nasıl belirlenir?', a: 'Bulunduğunuz gişe/kilometre noktası ve aracın teslim edileceği adres bilgisine göre yola çıkmadan önce telefonda net sabit fiyat bildirilir.' }
    ]
  }
];

module.exports = { REGIONS_PART_2 };
