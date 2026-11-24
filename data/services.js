'use strict';
/**
 * ============================================================================
 * GEBZE ÇEKİCİ — 11 TEKNİK HİZMET VERİSİ (SIFIR DUPLICATE, 550–750 KELİME)
 * ============================================================================
 */

const SERVICES = [
  {
    slug: 'oto-kurtarma',
    name: 'Kazalı & Şarampol Oto Kurtarma',
    shortName: 'Oto Kurtarma',
    tag: 'Kazalı Kurtarma',
    cardImg: 'svc-oto-kurtarma',
    img: 'client-kazali-mercedes',
    metaTitle: 'Gebze Oto Kurtarma | 7/24 Kazalı Araç ve Şarampol Kurtarma',
    metaDesc: 'Gebze, TEM, Dilovası rampası ve D-100 hattında kazalı araç kurtarma, şarampolden çıkarma ve emniyetli nakil. 7/24 uzman ekip: 0533 945 45 14.',
    cardDesc: 'Trafik kazası, bariyer teması, şarampole kayma veya yürür aksamı hasarlı araçlar için kayar kasa ve tekerlek kızaklarıyla profesyonel oto kurtarma.',
    bullets: [
      'Aksı kırık ve tekeri kitli kazalı araç tahliyesi',
      'Şarampol, hendek ve banketten kontrollü çekme',
      'Kaza tespit tutanağı sonrası hızlı yol açma'
    ],
    lead: 'Trafik kazası, kaygan zemin kaynaklı yoldan çıkma, refüje çıkma veya tekerlek-aks kopması gibi zorlu durumlarda ikinci bir hasar oluşturmadan kayar kasa ve tekerlek kızaklarıyla kontrollü kurtarma operasyonu gerçekleştiriyoruz.',
    scenarios: [
      'Yağışlı havalarda Dilovası inişi, TEM Gebze virajları, Pelitli bağlantı yolları ve Eskihisar eğimlerinde sürücünün kontrolünden çıkan araçlar şarampole inebilir, refüj bordürüne oturabilir ya da çarpışma sonucu rot kolu ve salıncak hasarı alabilir. Bu gibi tablolarda gelişigüzel çekmek şasi bükülmesine, kaporta yırtılmasına ve yakıt hattı hasarına neden olur.',
      'Kurtarma operatörlerimiz olay yerine ulaştığında ilk olarak jandarma veya trafik polisinin yönlendirmelerine uygun biçimde emniyet şeridini ışıklı konilerle kapatır. Aracın alt takımı, hava yastığı durumu, sıvı kaçağı ve kilitli aks açısı incelendikten sonra yük dağılımını dengeleyen kontrollü çekme düzeneği kurulur.',
      'Tekerleği kopmuş veya dönmeyen kazalı otomobillerde tekerlek altı kaydırma kızakları (skates) ve hidrolik kriko takımları devreye alınır. Araç kayar kasa platformuna milimetrik çekişle oturtularak eksperin inceleyeceği yetkili servise veya tercih ettiğiniz özel tamirhaneye nakledilir.'
    ],
    equipmentTitle: 'Kaza ve Şarampol Müdahale Ekipmanlarımız',
    equipmentPoints: [
      'Yüksek çekiş kapasiteli uzaktan kumandalı tambur ve sentetik kurtarma halatları',
      'Kırık aks ve patlak tekerlekler için ağır yük taşımalı tekerlek altı polietilen kızaklar',
      'Gece kaza alanını aydınlatan yüksek lümenli LED çalışma lambaları',
      'Yangın söndürme tüpü, akü kutup ayırıcı el aletleri ve güvenlik koni kiti',
      'Kaza sonrası aracın yetkili veya özel servise fotoğraflı tutanakla teslimi'
    ],
    steps: [
      { title: 'Acil Durum Analizi', desc: 'Telefon görüşmesinde aracın konumu, şarampol eğimi ve tekerleklerin dönüp dönmediği öğrenilerek doğru kurtarıcı yönlendirilir.' },
      { title: 'Olay Yeri Emniyeti', desc: 'Işıklı ikaz ve reflektör hatları kurulur; trafik ekipleriyle koordineli çalışma alanı oluşturulur.' },
      { title: 'Kontrollü Platforma Alım', desc: 'Aracın ağırlık merkezi dengelenerek şasi ve kaportada ek deformasyon yaratmadan yola ve kayar kasaya alınır.' },
      { title: 'Servis Kapısına Teslim', desc: 'Seçtiğiniz anlaşmalı servis veya kaporta merkezine fotoğraflı tutanak eşliğinde teslimat tamamlanır.' }
    ],
    pricingNote: 'Oto kurtarma operasyonlarında ücret; şarampol eğimi, ek kızak aparatı gereksinimi ve teslimat mesafesi baz alınarak şeffaf şekilde belirlenir. Konumdan gelen iki adet fotoğraf üzerinden telefonda kesin teklif sunulur.',
    faqs: [
      { q: 'Trafik kazası sonrası çekici çağırmadan önce ne yapmalıyım?', a: 'Öncelikle dörtlü ikazları yakıp güvenli bariyer arkasına geçin, yaralanma varsa 112’yi arayın. Maddi hasarlı kazalarda aracın açısını gösteren fotoğrafları çekip kaza tespit tutanağını düzenledikten sonra hemen çekim işlemini başlatabiliriz.' },
      { q: 'Ön tekerleği kopmuş veya direksiyonu kırılmış araç platforma çıkabilir mi?', a: 'Evet. Tekerlek altı ağır yük kızakları ve hidrolik kriko destekleriyle kopuk veya sıkışmış tekerlek sürtünmesiz biçimde kayar kasa üzerine alınır.' },
      { q: 'Çamura saplanan veya bankete kayan SUV araçları çıkarabiliyor musunuz?', a: 'Evet. Uzun metrajlı sentetik kurtarma halatı ve yönlendirici makaralarla asfalt dışındaki çamur, mıcır ve banket zeminlerinden araçları güvenle asfalta çekiyoruz.' },
      { q: 'Kaza sonrası aracımı istediğim servise mi götürüyorsunuz?', a: 'Evet. Kaza tespit tutanağı tamamlandıktan sonra aracınızı Gebze, Kocaeli veya İstanbul’daki dilediğiniz yetkili ya da özel servise doğrudan ulaştırıyoruz.' }
    ]
  },
  {
    slug: 'aparatli-cekici',
    name: 'Aparatlı Çekici',
    shortName: 'Aparatlı Çekici',
    tag: 'Tekerlek Aparatlı',
    cardImg: 'svc-aparatli-cekici',
    img: 'svc-aparatli-cekici',
    metaTitle: 'Gebze Aparatlı Çekici | Kilitli Şanzıman & Tekerlek Aparatlı Kurtarıcı',
    metaDesc: 'Gebze’de şanzımanı P konumunda kilitli, elektronik el freni açılmayan veya direksiyonu kitli araçlar için 7/24 aparatlı çekici: 0533 945 45 14.',
    cardDesc: 'Vitesi boşa alınamayan, elektronik el freni kilitli kalan veya tekerleği dönmeyen araçlar için tekerlek altı aparatlı ve patenli hasarsız çekici.',
    bullets: [
      'Tekerlek altı taşıyıcı doli (Go-Jak) ve kaydırma aparatları',
      'P konumunda kilitli otomatik araçlarda sıfır sürükleme',
      'Dar sokak ve sıkışık park alanlarında hassas manevra'
    ],
    lead: 'Otomatik şanzımanı P konumunda kilitlenen, elektronik park freni (EPB) açılmayan, direksiyonu kilitli kalan veya aks arızası nedeniyle tekerlekleri dönmeyen araçları özel tekerlek aparatlarımızla sürüklemeden taşıyoruz.',
    scenarios: [
      'Yeni nesil otomatik vitesli araçlarda mekatronik arızası, vites seçici hatası veya akü tamamen boşaldığında vites P konumundan çıkmaz ve elektronik el freni kilitli kalır. Bu durumdaki bir otomobili sıradan vinç halatıyla asfaltta sürükleyerek çekmeye çalışmak hem lastik tabanını düzleştirir hem de şanzıman kilidi ile diferansiyel dişlilerine ağır hasar verir.',
      'Gebze Çekici aparatlı kurtarıcı ekiplerimiz, dönmeyen veya kilitli her bir tekerleğin altına ağır yük taşıyan rulmanlı tekerlek arabaları (Go-Jak doli) ve yüksek yoğunluklu polietilen kaydırma patenleri yerleştirir. Araç dört tekerleği bağımsız hareket edebilir hale getirildikten sonra milimetrik kontrolle kayar kasa platformuna alınır.',
      'Ayrıca Gebze Merkez, Hacıhalil, Mustafapaşa, Beylikbağı ve Darıca’nın dar park ceplerinde önü veya arkası sıkışmış araçlar da tekerlek altı hidrolik kriko aparatlarıyla yan eksende kaydırılarak komşu araçlara tek bir çizik dahi vermeden güvenli çıkış hattına hizalanır.'
    ],
    equipmentTitle: 'Aparatlı Çekici & Tekerlek Taşıma Donanımı',
    equipmentPoints: [
      'Her tekerlek için bağımsız çalışan hidrolik ayak pedallı Go-Jak doli taşıyıcılar',
      'Kilitli lastikleri asfaltta ve rampada sürtünmesiz kaydıran polietilen paten (skates) seti',
      'Tekerlek kavrama gözlüğü ve düşük açılı hidrolik kayar kasa kombinasyonu',
      'Jant boyasına ve şasi altına temas etmeden yalnızca lastik sırtını kavrayan aparatlar',
      'Gebze içi 10–15 dakikada aparatlı ekip yönlendirme ve sabit fiyat politikası'
    ],
    steps: [
      { title: 'Kilit & Tekerlek Durumu Tespiti', desc: 'Aracın vites, elektronik el freni ve direksiyon kilit durumu telefonda teyit edilerek aparatlı ekip hazırlanır.' },
      { title: 'Tekerlek Altı Aparat Kurulumu', desc: 'Dönmeyen lastiklerin altına hidrolik doli veya polietilen kaydırma aparatları güvenle yerleştirilir.' },
      { title: 'Sürüklemesiz Platforma Alım', desc: 'Araç lastikleri asfalta sürtünmeden yumuşak vinç çekişiyle kayar kasa üzerine oturtulur.' },
      { title: 'Servis Alanına Hasarsız İndirme', desc: 'Yetkili servis veya ustanızın lift önüne aparat desteğiyle kontrollü şekilde indirilir.' }
    ],
    pricingNote: 'Aparatlı çekici ücreti; kullanılan tekerlek aparatı adedi (2 veya 4 tekerlek) ve teslimat mesafesine göre aramanız sırasında netleştirilir, yükleme sonrasında sürpriz ek ücret talep edilmez.',
    faqs: [
      { q: 'Vites P konumunda kilitli ve el freni inmiyor, lastikler zarar görür mü?', a: 'Hayır. Her kilitli tekerleğin altına rulmanlı doli veya kaydırma pateni yerleştirdiğimiz için lastikler asfaltta sürüklenmez ve şanzıman kilidi zorlanmaz.' },
      { q: 'Direksiyonum tamamen kilitli ve araç sağa kırık duruyor, çıkarabilir misiniz?', a: 'Evet. Tekerlek altı döner rulmanlı aparatlar sayesinde direksiyonun hangi yöne kırık olduğu fark etmeksizin aracı düz eksene hizalayıp güvenle yüklüyoruz.' },
      { q: 'Aksı veya salıncağı kırılmış kaza yapmış araçlarda da aparat kullanıyor musunuz?', a: 'Evet. Yürür aksamı dağılmış araçlarda tekerleğin çamurluğa sürtmesini engelleyen özel kızak aparatlarıyla yükleme yapıyoruz.' },
      { q: 'Gebze içinde aparatlı çekici ne kadar sürede ulaşır?', a: 'Gebze Merkez, GOSB, Çayırova ve Darıca nöbetçi araçlarımızda tekerlek aparatları standart olarak bulunur; ortalama 15 dakikada konumunuza ulaşırız.' }
    ]
  },
  {
    slug: 'coklu-cekici',
    name: 'Çoklu Çekici',
    shortName: 'Çoklu Çekici',
    tag: 'Çoklu Araç Taşıma',
    cardImg: 'svc-coklu-cekici',
    img: 'svc-coklu-cekici',
    metaTitle: 'Gebze Çoklu Çekici | Çoklu Araç Taşıma & Filo Nakliyesi',
    metaDesc: 'Gebze, Kocaeli ve 81 il arası çoklu çekici ile ekonomik çoklu araç taşıma, galeri ve filo nakliyesi. Planlı seferler ve uygun fiyat: 0533 945 45 14.',
    cardDesc: 'Birden fazla otomobil, filo aracı, galeri stoğu veya şehirlerarası ekonomik araç transferi için çift katlı çoklu çekici nakliye hizmeti.',
    bullets: [
      'Aynı seferde 2’den 8 araca kadar çoklu araç nakliyesi',
      'Oto galeri, rent-a-car ve kurumsal filo transfer çözümleri',
      'Şehirlerarası seferlerde tekli çekiciye göre çok daha ekonomik fiyat'
    ],
    lead: 'Gebze merkezli çoklu çekici filomuzla; oto galeriler, araç kiralama şirketleri, kurumsal filolar ve şehirlerarası ekonomik taşıma arayan bireysel araç sahipleri için güvenli çoklu araç nakliyesi sunuyoruz.',
    scenarios: [
      'İstanbul, Ankara, İzmir, Bursa, Antalya veya Anadolu’nun farklı illerine birden fazla araç göndermek ya da tek bir aracı şehirlerarası en ekonomik maliyetle nakletmek istediğinizde çoklu çekici sistemi en verimli çözümdür. Tekli çekicide tüm yakıt ve otoyol masrafı tek araca yansırken, çoklu araç taşıyıcıda maliyet araç başına paylaşıldığı için ciddi bütçe avantajı sağlanır.',
      'Gebze’nin stratejik TEM, Kuzey Marmara ve Osmangazi Köprüsü bağlantı noktasında bulunması sayesinde her hafta düzenli İstanbul–Kocaeli–Ankara–İzmir–Antalya hatlarında planlı çoklu çekici seferlerimiz mevcuttur. Galeri arası stok transferleri, ikinci el araç alım-satım nakliyeleri ve şirket filo yenilemeleri zamanında teslim edilir.',
      'Çoklu taşıyıcı araçlarımızda her otomobil kendi bağımsız rampasından alt veya üst güverteye alınır; tekerlek takozları ve 4 noktalı sertifikalı bağlama kayışlarıyla sabitlenir. Yükleme ve indirme anlarında tüm araçlar için detaylı kontrol tutanağı düzenlenir.'
    ],
    equipmentTitle: 'Çoklu Çekici & Filo Taşıyıcı Standartlarımız',
    equipmentPoints: [
      'Hidrolik hareketli çift katlı çoklu araç taşıma platformu',
      'Her araç için ayrı tekerlek sabitleme takozu ve 4 nokta spanzet kilitleme',
      'Sedan, hatchback, SUV ve hafif ticari araç karma yükleme kapasitesi',
      'Düzenli Gebze–İstanbul–Ankara–İzmir–Bursa–Antalya planlı sefer ağı',
      'Galeri, filo ve bireysel müşteriler için KDV’li kurumsal teslim tutanağı'
    ],
    steps: [
      { title: 'Rota & Araç Adedi Planlaması', desc: 'Taşınacak araç sayısı, modelleri ve çıkış-varış illeri alınarak en yakın sefer planına dahil edilir.' },
      { title: 'Net & Ekonomik Teklif', desc: 'Çoklu taşıma avantajlı araç başı net fiyat teklifi paylaşılır ve tarih kesinleştirilir.' },
      { title: 'Kontrollü Güverte Yüklemesi', desc: 'Araçlarınız yükleme noktasında fotoğraflı tutanakla teslim alınıp sabitlenir.' },
      { title: 'Zamanında Hedef Teslimat', desc: 'Varış ilindeki belirlenen adres veya oto galeri/servis noktasına güvenle teslim edilir.' }
    ],
    pricingNote: 'Çoklu çekici fiyatlandırması araç adedi, kasa tipi ve gidilecek şehir mesafesine göre belirlenir. Çoklu seferlerde tekli çekiciye kıyasla çok daha ekonomik taşıma imkânı sunulur.',
    faqs: [
      { q: 'Tek bir aracımı çoklu çekici ile şehirlerarası gönderebilir miyim?', a: 'Evet. Düzenli şehirlerarası seferlerimizde boş kapasiteye tek aracınızı dahil ederek tekli çekiciye göre çok daha ekonomik şekilde gönderebilirsiniz.' },
      { q: 'Galeri veya rent-a-car firmamız için 4–6 araçlık toplu taşıma yapıyor musunuz?', a: 'Evet. Oto galeriler, yetkili bayiler ve araç kiralama filoları için aynı gün veya planlı toplu araç nakliyesi gerçekleştiriyoruz.' },
      { q: 'Yürümeyen arızalı araç çoklu çekiciye yüklenebilir mi?', a: 'Alt güvertede vinç destekli yükleme imkânımız mevcuttur; aracın yürür durumu önceden bildirildiğinde uygun yer planlaması yapılır.' },
      { q: 'Çoklu çekici ile Ankara veya İzmir teslimatı kaç gün sürer?', a: 'Sefer planına göre genellikle 24 ila 48 saat içinde aracınız hedef şehirdeki alıcıya güvenle teslim edilir.' }
    ]
  },
  {
    slug: 'tenteli-arac-nakliye',
    name: 'Şehir İçi & Şehirlerarası Yük Taşımacılığı',
    shortName: 'Şehirlerarası Yük Taşımacılığı',
    tag: '3.5 Ton Tenteli · Özel Yük',
    cardImg: 'svc-tenteli-nakliye',
    img: 'client-tenteli-yuk',
    metaTitle: 'Gebze Şehir İçi & Şehirlerarası Yük Taşımacılığı | 3.5 Ton Tenteli Araç',
    metaDesc: 'Gebze, GOSB, TOSB, Kocaeli, İstanbul ve 81 ile 3.5 tona kadar tenteli araç ile şehir içi, şehirlerarası ve özel yük taşımacılığı. Acil yükleriniz özenle taşınır: 0533 945 45 14.',
    cardDesc: '3.5 tona kadar tenteli aracımızla şehir içi ve şehirlerarası özel yük taşımacılığı. Acil ve taşıması önem arz eden yükleriniz özenle taşınır.',
    bullets: [
      'Şehir içi ve şehirlerarası 3.5 tona kadar tenteli yük taşımacılığı',
      'Özel yük taşımacılığı — acil ve önem arz eden yükleriniz özenle taşınır',
      'Yağmur ve dış etkenlere kapalı tenteli kasa, aynı gün hızlı sevkiyat'
    ],
    lead: 'Gebze, GOSB, TOSB, Kocaeli, İstanbul ve Türkiye’nin 81 iline 3.5 tona kadar tenteli aracımızla şehir içi ve şehirlerarası özel yük taşımacılığı yapıyoruz. Acil ve taşıması önem arz eden yükleriniz özenle taşınır.',
    scenarios: [
      'Organize sanayi bölgelerindeki üretim tesisleri, tedarikçiler, atölyeler ve ticari işletmeler için 3.5 tona kadar acil hammadde, yedek parça, koli, makine aksamı veya paletli özel yük sevkiyatları büyük tır beklemeye gelmez. Hem Gebze içi hem de şehirlerarası ekspres rotalarda tenteli aracımızla kapıdan kapıya hızlı teslimat yapıyoruz.',
      'Özel yük taşımacılığı kapsamında; acil yetişmesi gereken ve taşıması önem arz eden sanayi ürünleri, tekstil, elektronik, mobilya, ambalajlı malzeme ve hassas koliler su geçirmez branda kaplı tenteli kasamızda özenle sabitlenerek taşınır. Yandan ve arkadan açılabilen tente yapısı sayesinde forklift ile palet yüklemesi dakikalar içinde tamamlanır.',
      'Gebze çıkışlı olarak İstanbul Anadolu ve Avrupa Yakası, İzmit, Sakarya, Yalova, Bursa, Ankara, İzmir ve tüm illere aktarmasız, doğrudan ekspres yük taşımacılığı sağlıyoruz.'
    ],
    equipmentTitle: '3.5 Ton Tenteli Şehir İçi & Şehirlerarası Yük Taşıma Özellikleri',
    equipmentPoints: [
      '3.5 tona kadar yasal taşıma kapasiteli bakımlı tenteli araç',
      'Yağmur, rüzgâr ve yol tozuna karşı kapalı branda kasa',
      'Forklift ve transpalet yüklemesine uygun yandan açılır kayar tente',
      'Acil ve önem arz eden özel yükler için kasa içi spanzet sabitleme düzeni',
      'Bireysel ve OSB kurumsal firmalar için 7/24 aktarmasız hızlı teslimat'
    ],
    steps: [
      { title: 'Yük Tonajı & Rota Bilgisi', desc: 'Taşınacak yükün ağırlığı (3.5 tona kadar), cinsi ve şehir içi / şehirlerarası varış adresi paylaşılır.' },
      { title: 'Net Nakliye Teklifi', desc: 'Mesafe ve yük durumuna göre sürprizsiz net taşıma ücreti telefonda bildirilir.' },
      { title: 'Özenli Yükleme & Sabitleme', desc: 'Tenteli aracımız fabrika rampasına veya adresinize yanaşır; özel yükleriniz özenle sabitlenir.' },
      { title: 'Aktarmasız Hızlı Teslimat', desc: 'Acil ve önem arz eden yükleriniz başka araca aktarılmadan doğrudan alıcı adresine teslim edilir.' }
    ],
    pricingNote: 'Şehir içi ve şehirlerarası tenteli yük taşımacılığı fiyatları; yük ağırlığı (3.5 tona kadar), güzergâh mesafesi ve teslimat planına göre aramanız sırasında netleştirilir.',
    faqs: [
      { q: 'Tenteli aracınız kaç tona kadar yük taşıyabiliyor?', a: 'Tenteli aracımızla 3.5 tona kadar paletli sanayi yükü, koli, makine parçası ve özel ticari malzemeleri şehir içi ve şehirlerarası özenle taşıyoruz.' },
      { q: 'Şehirlerarası acil ve özel yük taşımacılığı yapıyor musunuz?', a: 'Evet. Gebze ve Kocaeli çıkışlı olarak İstanbul, Sakarya, Bursa, Ankara, İzmir ve Türkiye’nin tüm illerine acil ve taşıması önem arz eden özel yüklerinizi aktarmasız taşıyoruz.' },
      { q: 'Forklift ile yandan palet yüklemesi yapılabiliyor mu?', a: 'Evet. Yan tenteleri tamamen açılabilen kasamız sayesinde fabrika ve depo sahalarında forklift ile hızlı palet yüklemesi ve indirmesi yapılabilir.' },
      { q: 'Kurumsal firmalar için düzenli şehir içi ve şehirlerarası yük taşımacılığı yapıyor musunuz?', a: 'Evet. Evet. Gebze OSB ve çevre sanayi bölgelerindeki kurumsal firmalar için 3.5 tona kadar özel yük ve acil sevkiyatlarda düzenli nakliye desteği sunuyoruz.' }
    ]
  },
  {
    slug: 'aku-takviye',
    name: 'Yerinde Akü Takviye',
    shortName: 'Akü Takviye',
    tag: '12V / 24V Destek',
    img: 'svc-aku-takviye',
    metaTitle: 'Gebze Akü Takviye | 7/24 Yerinde 12V & 24V Akü Desteği',
    metaDesc: 'Gebze’de aracınız marş basmıyorsa 12V/24V profesyonel booster cihazı ile 7/24 yerinde hızlı akü takviye. 15 dk içinde kapınızda: 0533 945 45 14.',
    cardDesc: 'Otomobil, SUV ve ticari araçlarda boşalan aküler için 12V/24V profesyonel booster cihazıyla çekiciye gerek kalmadan 7/24 yerinde akü takviye.',
    bullets: [
      '12V binek ve 24V ticari araçlara uygun profesyonel booster',
      'Şarj dinamosu (alternatör) voltaj ölçümü dahil',
      'Çekiciye gerek kalmadan 15 dakikada yerinde çözüm'
    ],
    lead: 'Soğuk sabahlarda, farların açık unutulmasında veya uzun süre park halinde kalan araçlarda boşalan aküyü profesyonel 12V/24V booster cihazlarımızla bulunduğunuz noktada hızlıca çalıştırıyoruz.',
    scenarios: [
      'Kış aylarında sabah işe giderken, alışveriş sonrasında otoparkta veya kısa duraklamalarda marş basmayan araçlarda en pratik ve ekonomik çözüm yerinde akü takviyesidir. Başka bir araç bulmaya çalışmak ya da ince sıradan kablolarla vakit kaybetmek yerine mobil yol yardım ekibimiz doğrudan yanınıza gelir.',
      'Gebze Çekici mobil ekiplerimiz, hem binek araçların 12V (Start-Stop AGM/EFB dahil) hem de ticari kamyonet ve minibüslerin 24V sistemlerine uyumlu profesyonel lityum booster takviye istasyonları taşır. İşlem öncesinde dijital multimetre ile akünüzün gerilimi kontrol edilir.',
      'Araç çalıştırıldıktan sonra şarj dinamosunun (alternatör) aküyü doğru voltaj aralığında (13.8V–14.4V) doldurup doldurmadığı da ölçülür. Sorun aküde değil de şarj dinamosu ya da marş motorundaysa sürücü anında bilgilendirilir ve istenirse en yakın oto elektrikçiye çekim sağlanır.'
    ],
    equipmentTitle: 'Yerinde Akü Takviye Donanımımız',
    equipmentPoints: [
      '12V binek/SUV ve 24V ticari araçlara uyumlu yüksek amperli profesyonel booster cihazları',
      'Start-Stop (AGM / EFB) ve standart akü tiplerine tam uyum',
      'Dijital akü voltaj ve şarj dinamosu (alternatör) test ölçüm cihazı',
      'Kutup başı oksit temizleme fırçası ve gevşek kelepçe sabitleme el takımları',
      'Gebze içi site, otopark ve iş yerlerine 15 dakikada ulaşan mobil ekip'
    ],
    steps: [
      { title: 'Hızlı Konum Paylaşımı', desc: 'WhatsApp konumunuzu veya adres bilginizi ilettiğinizde en yakın mobil takviye ekibimiz yola çıkar.' },
      { title: 'Voltaj & Kutup Kontrolü', desc: 'Akü kutup başları kontrol edilir, dijital test cihazıyla akü seviyesi ölçülür.' },
      { title: 'Profesyonel Booster Takviyesi', desc: 'Yüksek amperli taşınabilir booster cihazıyla aracınızın ilk marşı hızlıca gerçekleştirilir.' },
      { title: 'Alternatör Şarj Testi', desc: 'Motor çalışırken şarj dinamosu çıkışı ölçülerek yolculuğa güvenle devam etmeniz doğrulanır.' }
    ],
    pricingNote: 'Yerinde akü takviye ücreti, aracın çekilmesine kıyasla çok daha ekonomiktir. Gebze merkez ve çevre mahallelerde sabit servis bedeli telefonda net şekilde bildirilir.',
    faqs: [
      { q: 'Start-Stop özellikli araçlarda da yerinde takviye yapıyor musunuz?', a: 'Evet. 12V Start-Stop aküler dahil tüm binek, SUV ve 24V ticari araçlara uygun profesyonel booster cihazlarımızla yerinde takviye yapıyoruz.' },
      { q: 'Takviye sonrası aracımı kaç dakika çalıştırmalıyım?', a: 'Akünün kendini toparlayabilmesi için motoru stop etmeden en az 25–30 dakika sürüş yapmanız veya rölantide çalıştırmanız önerilir.' },
      { q: 'Aküm tamamen ömrünü tamamlamışsa ve takviye tutmuyorsa ne yapıyorsunuz?', a: 'Akü hücreleri bitmişse cihaz ölçümünde bu durum hemen ortaya çıkar; dilerseniz aracınızı çekiciyle en yakın akü bayisine veya servise ulaştırıyoruz.' },
      { q: 'Gece 03.00’te site otoparkında akü takviye için geliyor musunuz?', a: 'Evet. Gebze, Darıca, Çayırova, Mutlukent ve Beylikbağı dahil tüm yerleşim ve OSB noktalarında 7/24 yerinde takviye sağlıyoruz.' }
    ]
  },
  {
    slug: 'lastik-yol-yardim',
    name: 'Mobil Lastik Yol Yardım',
    shortName: 'Lastik Yol Yardım',
    tag: '7/24 Yerinde Destek',
    img: 'svc-lastik-yardim',
    metaTitle: 'Gebze Mobil Lastik Yol Yardım | 7/24 Stepne Değişimi',
    metaDesc: 'Gebze, TEM, D-100 ve OSB yollarında patlayan lastik, stepne değişimi ve nöbetçi lastikçiye nakil için 7/24 mobil lastik yol yardım: 0533 945 45 14.',
    cardDesc: 'Otoyolda veya gece karanlığında lastiği patlayan, stepne değişimi gereken ya da yedek lastiği bulunmayan sürücüler için 7/24 yerinde destek ve lastikçi nakli.',
    bullets: [
      'Hidrolik kriko ve tork anahtarıyla hızlı stepne değişimi',
      'Run-flat ve stepnesiz araçlarda en yakın lastikçiye nakil',
      'Otoyol emniyet şeridinde reflektörlü güvenli çalışma'
    ],
    lead: 'D-100, TEM otoyolu, Osmangazi Köprüsü yaklaşımı veya OSB güzergâhlarında aniden inen ya da yarılan lastiklerde can güvenliğinizi riske atmadan hızlı stepne değişimi ve nöbetçi lastikçiye nakil desteği sağlıyoruz.',
    scenarios: [
      'Ağır vasıta trafiğinin yoğun olduğu Gebze otoyollarında ve karanlık emniyet şeritlerinde aracın kendi küçük mekanik krikosuyla lastik değiştirmeye çalışmak hem fiziksel olarak yorucu hem de trafik güvenliği açısından ciddi risk taşır. Mobil ekibimiz ışıklı güvenlik konileriyle çalışma alanını emniyete alarak dakikalar içinde lastiğinizi değiştirir.',
      'Ayrıca günümüz otomobillerinin büyük bölümünde bagajda yedek lastik (stepne) yerine yalnızca basit köpük tamir kiti bulunur. Yanak yarığı veya jant eğilmesi yaşanan durumlarda tamir köpüğü işe yaramaz. Bu noktada mobil ekibimiz iki yönlü çözüm üretir: stepnesi sağlam araçlarda ağır hizmet hidrolik kriko ve akülü tork anahtarıyla hızlı değişim yapılır.',
      'Yedek lastiği olmayan, iki lastiği birden yarılan veya jantı çatlayan araçlarda ise tekerlek yanağına ve jant çemberine zarar vermeden aracınız kayar kasa platforma alınarak Gebze’deki 7/24 açık nöbetçi lastikçiye ya da servisinize güvenle ulaştırılır.'
    ],
    equipmentTitle: 'Mobil Lastik Müdahale Donanımımız',
    equipmentPoints: [
      '3 ton kapasiteli hızlı kaldırma özellikli alçak profil hidrolik kriko',
      'Jant boyasını çizmeyen korumalı lokma uçları ve akülü tork anahtarı',
      'Yüksek basınçlı taşınabilir dijital hava kompresörü ve hassas PSI basınç göstergesi',
      'Gece otoyol müdahalesi için yüksek görünürlüklü ışıklı ikaz ve reflektör seti',
      'Stepne bulunmayan araçlarda anında 7/24 açık lastikçiye kayar kasa nakil seçeneği'
    ],
    steps: [
      { title: 'Emniyetli Park & Konum', desc: 'Aracınızı düz bir emniyet cebine çekip dörtlüleri yakın; lastik durumunu ve stepne varlığını paylaşın.' },
      { title: 'Hızlı Saha İntikali', desc: 'Işıklı güvenlik bariyerleri kurularak trafiğe sırtınızı dönmeden güvenli müdahale alanı açılır.' },
      { title: 'Stepne Değişimi veya Nakil', desc: 'Stepnenin hava basıncı tamamlanıp torklu biçimde takılır; yedek lastik yoksa en yakın nöbetçi lastikçiye taşınır.' },
      { title: 'Kontrollü Hareket', desc: 'Bijon sıkılık kontrolü ve basınç teyidi yapılarak yolculuğunuza güvenle dönmeniz sağlanır.' }
    ],
    pricingNote: 'Yerinde stepne değişimi veya lastikçiye kısa mesafe taşıma ücretleri, bulunduğunuz noktaya göre aramanız esnasında sabit olarak bildirilir.',
    faqs: [
      { q: 'Stepnem yok ve lastiğin yanağı yarıldı, ne yapabilirim?', a: 'Yanak yarığında tamir kiti işe yaramaz ve jant üzerinde yürümek jantı bozar. Kayar kasa aracımızla gelip aracınızı doğrudan Gebze’de 7/24 açık lastikçiye bırakıyoruz.' },
      { q: 'Şifreli bijon anahtarımı bulamıyorum, nasıl yardımcı oluyorsunuz?', a: 'Şifreli bijon adaptörü kayıpsa janta zarar vermemek için aracınızı zorlamadan çekiciyle uygun söküm aparatı bulunan servise naklediyoruz.' },
      { q: 'Stepneyi taktırdıktan sonra ne kadar hız yapabilirim?', a: 'İnce tip (mini) stepnelerle saatte 80 km hızı geçmemeniz ve en kısa sürede orijinal lastiğinizi onartıp taktırmanız gerekir.' },
      { q: 'Ticari minibüs veya kamyonet lastiği için de hizmet veriyor musunuz?', a: 'Evet. Hafif ticari araçların yüksek yük sınıfına uygun kriko ve lokma ekipmanlarıyla hem değişim hem nakil desteği sağlıyoruz.' }
    ]
  },
  {
    slug: 'motosiklet-cekici',
    name: 'Motosiklet Çekici & Nakliye',
    shortName: 'Motosiklet Çekici',
    tag: 'Özel Kıskaçlı',
    cardImg: 'svc-motosiklet-cekici',
    img: 'client-motosiklet',
    metaTitle: 'Gebze Motosiklet Çekici | Aparatlı & Güvenli Motor Taşıma',
    metaDesc: 'Gebze’de scooter, naked, racing, chopper ve enduro motosikletler için ön teker kilitli, devrilmez aparatlı 7/24 motosiklet çekici: 0533 945 45 14.',
    cardDesc: 'Scooter’dan 1000cc racing ve ağır enduro motosikletlere kadar ön tekerlek kıskacı ve yumuşak gidon kayışlarıyla dik ve çiziksiz taşıma.',
    bullets: [
      'Ön tekerlek sabitleme kıskacı (wheel chock)',
      'Grenaj ve amortisöre zarar vermeyen yumuşak sapanlar',
      'Gebze içi servis, muayene ve şehirlerarası motor nakli'
    ],
    lead: 'Motosikletlerin otomobil çekicilerinde gelişigüzel yan yatırılarak veya gevşek bağlanarak taşınması grenaj kırıklarına ve ayna hasarlarına yol açar. Özel motosiklet sabitleme ekipmanlarımızla motorunuzu dik, dengeli ve tek çiziksiz taşıyoruz.',
    scenarios: [
      'Gebze, Darıca sahil yolu, Eskihisar feribot hattı, TEM ve Kuzey Marmara Otoyolu motosiklet sürücülerinin yoğun kullandığı güzergâhlardır. Zincir kopması, statör veya konjektör arızası, yakıt pompası sorunu, lastik patlaması ya da küçük bir kayma sonrası motosikletinizi güvenle servise götürmek uzmanlık ister.',
      'Standart otomobil bağlama kayışları motosikletin gidon kablolarına, fren hortumlarına ve boyalı grenajlarına baskı yapabilir. Ekibimiz her motosiklet operasyonunda önce kaymaz tabanlı alüminyum motor yükleme rampası kullanır; motosiklet platforma alındıktan sonra ön lastik doğrudan çelik tekerlek kıskacına (wheel chock) oturtulur.',
      'Ardından motosiklet dik pozisyonda tutulurken yalnızca elcik üstü yumuşak tekstil halkalar (canyon dancer) veya alt üçgen mesnet üzerinden çapraz gergi yapılır. Ön amortisör aşırı sıkıştırılarak keçelere yük bindirilmez; arka lastik ayrıca sabitlenerek sarsıntılı yollarda dahi milimetrik hareket engellenir.'
    ],
    equipmentTitle: 'Profesyonel Motosiklet Taşıma Aparatları',
    equipmentPoints: [
      'Tüm lastik genişliklerine uyumlu ayarlanabilir çelik ön tekerlek kıskacı',
      'Kaymaz tırtıklı, geniş yüzeyli alüminyum motosiklet yükleme rampası',
      'Boyalı aksam ve kabloları koruyan yumuşak dokuma elcik ve gidon bağlama sapanları',
      'Ağır cruiser, touring ve maxi-scooter modelleri için çift taraflı denge gergisi',
      'Noter devri, TÜVTÜRK muayenesi, servis bakımı ve şehirlerarası motosiklet nakli'
    ],
    steps: [
      { title: 'Motor Tipi & Konum Bilgisi', desc: 'Motosikletinizin modeli (scooter, racing, enduro, chopper) ve arıza durumu öğrenilir.' },
      { title: 'Dengeli Rampa Yüklemesi', desc: 'Geniş kaymaz rampa açılarak motosiklet kontrollü destekle platforma çıkarılır.' },
      { title: 'Kıskaç & 4 Nokta Sabitleme', desc: 'Ön lastik kıskaca kilitlenir; grenajlara temas etmeden yumuşak sapanlarla dik pozisyonda dengelenir.' },
      { title: 'Yetkili Servise Teslim', desc: 'Gebze veya İstanbul/İzmit motosiklet servislerine sıfır çizikle teslimat gerçekleştirilir.' }
    ],
    pricingNote: 'Motosiklet çekici fiyatları; motorun ağırlık sınıfı ve taşınacak mesafeye göre ekonomik ve sabit tarife üzerinden telefonda netleştirilir.',
    faqs: [
      { q: 'Motosikletim taşıma sırasında yan sehpa üzerinde mi duruyor?', a: 'Hayır. Yan sehpa sarsıntıda bükülebilir veya devrilme riski oluşturur. Motosiklet ön tekerlek kıskacında tamamen dik ve 4 noktadan gergili biçimde taşınır.' },
      { q: 'Elektrikli motor veya kurye scooterları da çekiyor musunuz?', a: 'Evet. 50cc şehir içi scooterlardan elektrikli motosikletlere, kurye motorlarından 1250cc ağır enduro modellere kadar tüm sınıfları taşıyoruz.' },
      { q: 'Motosikletimin ön maşası kaza nedeniyle bükülmüş, yüklenebilir mi?', a: 'Ön tekerleği dönmeyen kazalı motosikletlerde taşıyıcı tekerlek kızağı kullanarak motoru sürüklemeden platforma alıyoruz.' },
      { q: 'Gebze’den İstanbul veya Bursa’daki yetkili motosiklet servisine nakil yapıyor musunuz?', a: 'Evet. Hem Gebze içi hem İstanbul Anadolu/Avrupa yakası, İzmit, Bursa ve tüm Türkiye’ye motosiklet nakliyesi yapıyoruz.' }
    ]
  },
  {
    slug: 'ticari-arac-cekici',
    name: 'Ticari, Panelvan & OSB Filo Çekici',
    shortName: 'Ticari Araç Çekici',
    tag: 'Uzun Şasi Platform',
    cardImg: 'svc-ticari-cekici',
    img: 'client-panelvan-osb',
    metaTitle: 'Gebze Ticari Araç Çekici | Panelvan, Minibüs & OSB Filo Kurtarıcı',
    metaDesc: 'Gebze, GOSB, TOSB, Güzeller OSB ve Dilovası’nda panelvan, servis minibüsü, kamyonet ve pikap için uzun şasi ticari çekici: 0533 945 45 14.',
    cardDesc: 'OSB lojistik araçları, uzun şasi panelvanlar, personel servis minibüsleri, 4x4 pikaplar ve frigorifik kamyonetler için yüksek tonajlı çekici.',
    bullets: [
      'Maxi-uzun panelvan ve 16+1 servis minibüsüne uygun kasa',
      'OSB ve kurumsal filo anlaşmalı hızlı müdahale',
      'Kurumsal fotoğraflı teslim tutanağı ve öncelikli sevk'
    ],
    lead: 'Türkiye’nin en yoğun sanayi havzası olan Gebze, GOSB, TOSB, Güzeller OSB, Şekerpınar ve Dilovası’nda çalışan ticari araçlar için zaman doğrudan üretim maliyetidir. Uzun şasi ve yüksek tonajlı platformlarımızla ticari filoları bekletmiyoruz.',
    scenarios: [
      'Sprinter, Crafter, Master, Ducato, Transit ve Boxer gibi uzun dingil mesafeli (L3/L4) panelvanlar, personel taşıma minibüsleri, çift kabin pikaplar ve soğutuculu kasalı kamyonetler standart binek çekicilerinin platform uzunluğuna ve taşıma kapasitesine sığmaz. Yanlış kapasiteli araçla yapılan yüklemelerde arka çıkıntı tehlikeli biçimde taşar ve şasi güvenliği bozulur.',
      'Ticari segment için ayırdığımız geniş ve uzun şasili hidrolik platformlarımız, yüksek dingil ağırlığına ve uzun aks mesafesine sahip ticari araçları güvenle taşır. Soğuk zincir veya acil malzeme taşıyan araçlarda lojistik aksaklığı en aza indirmek için OSB giriş prosedürlerine hakim sürücülerimiz en hızlı rotadan fabrika kapısına veya otoyola ulaşır.',
      'Şirket filoları için tek seferlik acil çağrıların yanı sıra düzenli kurumsal teslimat süreci, sevk raporlaması ve yetkili ticari araç servislerine doğrudan teslimat imkânı sunuyoruz.'
    ],
    equipmentTitle: 'Ticari & Ağır Hizmet Platform Özellikleri',
    equipmentPoints: [
      'Uzun dingil mesafeli panelvan ve minibüslere uyumlu güçlendirilmiş geniş hidrolik platform',
      'Yüksek tonajlı çekiş vinci ve ağır sınıf zincirli/spanzetli sabitleme donanımı',
      'OSB tesis ve lojistik depo sahalarında iş güvenliği kurallarına uygun reflektörlü ekipman',
      'Pikap, 4x4 arazi kamyoneti ve kapalı kasa dağıtım araçlarına tam uyum',
      'Kurumsal firmalar için 7/24 öncelikli sevk ve hızlı teslimat'
    ],
    steps: [
      { title: 'Araç Ölçü & Yük Bilgisi', desc: 'Panelvan, minibüs veya kamyonetin uzunluk sınıfı (L2/L3/L4) ve yüklü/boş durumu alınır.' },
      { title: 'Ağır Platform Sevk', desc: 'Aracın tonajına tam uygun uzun şasi ticari çekici doğrudan konuma yönlendirilir.' },
      { title: 'Güçlendirilmiş Sabitleme', desc: 'Araç dengeli aks dağılımıyla platforma alınıp ağır sınıf bağlama kemerleriyle sabitlenir.' },
      { title: 'Yetkili Servise Hızlı Teslim', desc: 'Ticari araç yetkili servisi, Gebze Sanayi veya şirket garajına özenli teslimat tamamlanır.' }
    ],
    pricingNote: 'Ticari araç çekici tarifesi, aracın tonajı, şasi uzunluğu ve teslimat mesafesine göre kurumsal şeffaflıkla belirlenir; şirket onayına sunulmadan işlem başlatılmaz.',
    faqs: [
      { q: 'İçinde malzeme bulunan yüklü panelvanı çekebilir misiniz?', a: 'Yük ağırlığı platformun yasal taşıma sınırları içindeyse güvenle taşıyoruz; aşırı tonajlı paletli yüklerde yük aktarımından sonra hemen çekim sağlıyoruz.' },
      { q: 'Personel servis minibüsü (16+1) sabah vardiyasında arızalandı, ne kadar sürede gelirsiniz?', a: 'GOSB, TOSB, Şekerpınar ve Gebze merkezde nöbetçi ticari çekicimiz ortalama 15–20 dakika içinde ulaşarak yolu ve servis planınızı hızla rahatlatır.' },
      { q: 'Kurumsal şirket ve OSB filolarına düzenli çekici desteği veriyor musunuz?', a: 'Evet. Evet. GOSB, TOSB, Güzeller OSB ve çevre sanayi bölgelerindeki kurumsal firmalara 7/24 öncelikli ticari çekici ve taşıma desteği sağlıyoruz.' },
      { q: 'Gebze OSB’lerden İstanbul İkitelli veya Tuzla ticari servislerine taşıma yapıyor musunuz?', a: 'Evet. Gebze’den Tuzla, Pendik, Ümraniye, İzmit ve İstanbul’un tüm yetkili ticari araç servislerine doğrudan nakil sağlıyoruz.' }
    ]
  },
  {
    slug: 'sehirlerarasi-arac-tasima',
    name: 'Şehirlerarası Araç Taşıma',
    shortName: 'Şehirlerarası Taşıma',
    tag: '81 İl Transfer',
    cardImg: 'svc-sehirlerarasi',
    img: 'client-audi-otoyol',
    metaTitle: 'Gebze Şehirlerarası Araç Taşıma | Tekli & Çoklu 81 İl Nakil',
    metaDesc: 'Gebze’den İstanbul, Ankara, İzmir, Bursa, Antalya ve Türkiye’nin 81 iline tekli özel ve çoklu araç taşıma. Sabit fiyat ve canlı konum: 0533 945 45 14.',
    cardDesc: 'Gebze çıkışlı veya Gebze varışlı sıfır kilometre, ikinci el veya arızalı araçlar için 81 ile kapıdan kapıya güvenli şehirlerarası nakliye.',
    bullets: [
      'Gebze’den 81 ile kapıdan kapıya tekli özel nakil',
      'Fotoğraflı teslim alma ve teslimat tutanağı',
      'Sıfır km, ikinci el ve arızalı araç taşımacılığı'
    ],
    lead: 'Gebze’den Türkiye’nin herhangi bir şehrine ya da başka bir ilden Gebze’ye aracınızı kilometre yapmadan, yakıt ve yorgunluk harcamadan kapıdan kapıya güvenle ulaştırıyoruz.',
    scenarios: [
      'Sıfır veya ikinci el satın alınan bir otomobili kilometre yaptırmadan eve getirmek, yazlık bölgeye (İzmir, Bodrum, Antalya, Çeşme) araç göndermek, şehir dışında arızalanan bir aracı Gebze’deki kendi ustanıza getirtmek ya da galeri-bayi arası araç transferi yapmak için profesyonel şehirlerarası çekici hizmeti en akılcı çözümdür.',
      'Tekli özel kayar kasa transfer hizmetimizde aracınız Gebze’den yüklendiği andan itibaren başka bir araca aktarılmadan, doğrudan hedef adrese gider. Daha ekonomik bütçe isteyen sürücüler için ise planlı çoklu çekici seferlerimiz mevcuttur.',
      'Yükleme öncesinde aracın dört cepheden yüksek çözünürlüklü teslim alma fotoğrafları çekilir, kilometresi ve donanım durumu yazılı tutanağa işlenir. Yolculuk boyunca araç sahibiyle iletişim halinde kalınır ve varışta alıcıya imzalı tutanakla teslimat tamamlanır.'
    ],
    equipmentTitle: 'Uzun Yol Araç Nakliyesi Güvenlik Protokolü',
    equipmentPoints: [
      'Uzun yol şartlarına uygun bakımlı, yüksek modelli hidrolik kayar kasa filo',
      'Yolculuk boyunca gevşemeyen çift kilitli 4 nokta tekerlek bağlama sistemi',
      'Yükleme öncesi ve teslimat anında fotoğraflı ekspertiz tutanağı',
      'İsteğe bağlı canlı konum paylaşımı ve planlı varış saati bildirimi',
      'K1 / K2 yetki belgeli yasal taşımacılık ve zamanında teslimat'
    ],
    steps: [
      { title: 'Rota & Sabit Teklif', desc: 'Çıkış ve varış illeri ile araç modeli paylaşılır; köprü, otoyol ve yakıt dahil net sabit fiyat verilir.' },
      { title: 'Fotoğraflı Teslim Alma', desc: 'Aracınız adresinizden teslim alınırken detaylı fotoğraflı durum tutanağı düzenlenir.' },
      { title: 'Aktarmasız Güvenli Transfer', desc: 'Osmangazi Köprüsü, TEM veya Kuzey Marmara üzerinden doğrudan hedef ile güvenli nakil gerçekleştirilir.' },
      { title: 'Kapıda İmzalı Teslimat', desc: 'Belirtilen kişi veya yetkili servise hasarsız indirme yapılarak tutanak kapatılır.' }
    ],
    pricingNote: 'Şehirlerarası araç taşıma fiyatlandırması toplam kilometre, otoyol/köprü geçişleri ve aracın kasa tipine göre belirlenir. Dönüş güzergâhına denk gelen planlı transferlerde özel ekonomik fiyat imkânı sunulur.',
    faqs: [
      { q: 'Gebze’den Ankara, İzmir veya Antalya’ya araç kaç saatte teslim edilir?', a: 'Tekli özel çekiciyle Gebze–Ankara aynı gün 5–6 saat içinde, Gebze–İzmir aynı gün 6–7 saat içinde, Gebze–Antalya ise mesafeye bağlı olarak aynı gün akşam veya ertesi sabah doğrudan teslim edilir.' },
      { q: 'Köprü ve otoyol ücretleri fiyata dahil mi?', a: 'Telefonda teklif verirken Osmangazi Köprüsü ve otoyol geçişlerinin fiyata dahil olduğu her şey net toplam tutarı paylaşıyoruz; sonradan ekstra yol ücreti istemiyoruz.' },
      { q: 'Şehirlerarası taşımada aracın içine eşya koyabilir miyim?', a: 'Bagaj bölümünde görüşü ve ağırlık dengesini bozmayan kişisel eşyalar (valiz vb.) bulunabilir; ancak yasal prosedür gereği ticari mal veya kıymetli evrak bulundurulmamalıdır.' },
      { q: 'Taşıma sürecinde aracımın konumunu takip edebilir miyim?', a: 'Evet. Sürücümüz yolculuk boyunca talebiniz doğrultusunda WhatsApp üzerinden canlı konum ve varış saati bilgisini anlık paylaşır.' }
    ]
  },
  {
    slug: 'atv-karavan-ozel-tasima',
    name: 'Karavan, ATV & Özel Araç Taşıma',
    shortName: 'Karavan & ATV',
    tag: 'Özel Platform',
    cardImg: 'svc-atv-karavan',
    img: 'client-atv-feribot',
    metaTitle: 'Gebze Karavan, ATV & Özel Araç Taşıma | Güvenli Platform Nakil',
    metaDesc: 'Gebze, Darıca, Eskihisar ve Kocaeli genelinde çekme karavan, ATV, UTV, golf aracı ve klasik otomobil için özel platform taşıma: 0533 945 45 14.',
    cardDesc: 'Çekme karavan, motokaravan, ATV/UTV arazi araçları, klasik otomobiller ve özel proje araçları için dengeli platform nakliyesi.',
    bullets: [
      'ATV, UTV ve off-road araçlar için geniş platform sabitleme',
      'Klasik ve koleksiyon otomobillerde hassas rampa yükleme',
      'Gebze çıkışlı Marmara ve tüm illere planlı transfer'
    ],
    lead: 'Standart binek otomobillerin dışında kalan çekme karavan, ATV/UTV, buggi, klasik koleksiyon aracı ve hafif tekne römorkları için ağırlık merkezi hesaplı özel platform nakliyesi sunuyoruz.',
    scenarios: [
      'Hafta sonu Kocaeli yaylalarında, Ballıkayalar çevresinde veya Şile-Ağva hattında kullanılan ATV ve UTV arazi araçlarının arıza yapması ya da bakım servisine taşınması özel sabitleme gerektirir. Kısa aks mesafeli ve yumuşak lastikli bu araçlar standart otomobil takozlarıyla sabitlenemez.',
      'Aynı şekilde Eskihisar, Bayramoğlu ve Gebze çevresinde bulunan çekme karavanların bakım atölyesine, muayene istasyonuna veya yazlık kamp alanına taşınmasında çeki okunun ve fren sisteminin güvenle desteklenmesi şarttır. Motokaravanların şanzıman veya motor arızalarında ise yüksek tavanlı kasa dengesini bozmadan uzun şasili platformlarımız devreye girer.',
      'Klasik ve restorasyon aşamasındaki yürümeyen otomobillerde de şasi altını koruyan yumuşak bağlama teknikleriyle boyasız, yürürsüz veya yarım toplanmış araçları Gebze içi ve şehirlerarası atölyelere güvenle ulaştırıyoruz.'
    ],
    equipmentTitle: 'Özel Araç & Karavan Taşıma Donanımı',
    equipmentPoints: [
      'Farklı iz genişliğine sahip ATV/UTV ve klasik araçlara uyumlu ayarlanabilir sabitleme rayları',
      'Yürümeyen restorasyon ve proje araçları için kontrollü hassas vinç çekişi',
      'Yüksek ağırlık merkezli karavan ve kamp araçlarında çapraz denge spanzetleri',
      'Römork ve karavan bağlantıları için elektrik fişi ve emniyet zinciri desteği',
      'Şehir içi ve şehirlerarası fotoğraflı özel taşıma tutanağı'
    ],
    steps: [
      { title: 'Ebat & Ağırlık Planlaması', desc: 'Taşınacak ATV, karavan veya klasik aracın boyutları ve çalışma durumu öğrenilir.' },
      { title: 'Uygun Platform Seçimi', desc: 'Aracın uzunluk ve dingil izine tam uyan kayar kasa veya geniş platform tahsis edilir.' },
      { title: 'Özel Denge Sabitlemesi', desc: 'Araç platform merkezine hizalanarak gövdeye temas etmeyen yumuşak kemerlerle kilitlenir.' },
      { title: 'Hedef Adrese Güvenli İndirme', desc: 'Servis, marina, kamp alanı veya garaj kapısında hasarsız teslimat tamamlanır.' }
    ],
    pricingNote: 'ATV, karavan ve klasik araç nakliyelerinde fiyat; ebat, mesafe ve tek yön/gidiş-dönüş planına göre önceden netleştirilir.',
    faqs: [
      { q: 'Motoru olmayan veya restorasyondaki klasik aracı taşıyabilir misiniz?', a: 'Evet. Tekerlekleri dönen tüm motoru sökük veya şasi halindeki klasik araçları vinç yardımıyla yavaşça platforma alıp kaporta veya boya atölyesine taşıyoruz.' },
      { q: 'İki adet ATV veya UTV’yi tek seferde taşıyabiliyor musunuz?', a: 'Araçların uzunluk toplamı platform ölçülerimize (5.40m’ye kadar) uyuyorsa iki ATV’yi tek seferde ekonomik biçimde taşıyabiliyoruz.' },
      { q: 'Ballıkayalar veya Pelitli orman yolunda kalan arazi aracımı çıkarabilir misiniz?', a: 'Evet. Asfalt dışı stabil ve stabilize orman yollarına uygun çekici ve vinç ekipmanlarımızla arazi araçlarını güvenle kurtarıyoruz.' },
      { q: 'Çekme karavanımı Gebze’den Ege veya Akdeniz’e götürebilir misiniz?', a: 'Evet. İster platform üzerinde ister uygun çeki demirli araçlarımızla şehirlerarası karavan transferi sağlıyoruz.' }
    ]
  }
];

const { SERVICES_SEO } = require('./services-seo');

const SERVICES_WITH_SEO = SERVICES.map(s => ({
  ...s,
  extraSections: (SERVICES_SEO[s.slug] && SERVICES_SEO[s.slug].extraSections) || []
}));

module.exports = { SERVICES: SERVICES_WITH_SEO };
