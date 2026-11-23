'use strict';
/**
 * ============================================================================
 * GEBZE YOL YARDIM — 10 TEKNİK HİZMET VERİSİ (SIFIR DUPLICATE, 550–750 KELİME)
 * ============================================================================
 */

const SERVICES = [
  {
    slug: 'oto-cekici',
    name: 'Kayar Kasa Oto Çekici',
    shortName: 'Oto Çekici',
    tag: 'Hidrolik Platform',
    img: 'gebze-hero-otoyol',
    metaTitle: 'Gebze Oto Çekici | 7/24 Kayar Kasa Hasarsız Araç Çekme',
    metaDesc: 'Gebze, GOSB, TEM ve D-100 hattında düşük eğimli hidrolik kayar kasa oto çekici. 10–15 dk varış, kaskolu taşıma ve sabit fiyat için 0533 945 45 14.',
    cardDesc: 'Binek, SUV, spor ve elektrikli araçlar için sıfır eğimli hidrolik kayar kasa ile 4 noktadan tekerlek sabitlemeli şehir içi ve otoyol çekici.',
    bullets: [
      'Düşük açılı hidrolik kayar platform',
      '4 tekerlekten jant koruyucu spanzet sabitleme',
      'Kaskolu taşıma ve telefonda sabit ücret'
    ],
    lead: 'Gebze içi tüm mahalleler, organize sanayi bölgeleri ve otoyol bağlantılarında hidrolik kayar kasa platformlu araçlarımızla binek, spor ve SUV sınıfı araçları tampona dokunmadan güvenle taşıyoruz.',
    scenarios: [
      'Gebze merkez sokakları, D-100 Karayolu veya TEM otoyolunda yaşanan hararet, enjektör, triger, marş dinamosu, debriyaj seti veya elektrik tesisatı arızalarında yürüyemeyen araçların en yakın yetkili ya da özel servise nakli öncelikli uzmanlık alanımızdır. Klasik sabit kasalı veya çatal kollu eski tip çekiciler, özellikle tampon yüksekliği düşük yeni nesil sedan, hatchback ve sportif tampon eklentili araçların alt muhafazasına ve ön lip bölümüne sürtme riski taşır.',
      'Filomuzda görev yapan tamamı hidrolik piston destekli kayar kasa kurtarıcılar, platformu asfalt zeminle neredeyse sıfır açı yapacak biçimde geriye indirir. Motoru çalışmayan ya da direksiyon hidroliği devre dışı kalmış araçlar, halat ucundaki yumuşak bez çeki sapanı kullanılarak tampon plastiklerine baskı uygulamadan yavaş ve kontrollü biçimde platforma alınır.',
      'Yükleme tamamlandığında aracın alt salıncaklarına veya jant tellerine metal kanca takılmaz. Dört lastiğin tamamı özel dokuma tekerlek üstü spanzet kemerleri ve tekerlek takozlarıyla platform deliklerine kilitlenir. Bu yöntem sayesinde frenleme ve viraj geçişlerinde araç süspansiyonu doğal esnemesini korur, şasi gerilmez ve rot-balans ayarı bozulmaz.'
    ],
    equipmentTitle: 'Kayar Kasa Donanım & Sıfır Hasar Standartları',
    equipmentPoints: [
      'Alüminyum takviyeli düşük eğimli kayar rampa ve düşük şasi uzatma takozları',
      '5 ton çekme kapasiteli uzaktan kumandalı hidrolik tambur vinci',
      'Çelik jant ve lastik yanaklarını koruyan kauçuk takviyeli 4 nokta bağlama kayışları',
      'Gece otoyol müdahaleleri için yüksek lümenli LED tepe ikaz barı ve 150 metrelik reflektör güvenlik şeridi',
      'Yükleme öncesi ve teslimat anında fotoğraflı tutanak ile taşıma emtia kaskosu güvencesi'
    ],
    steps: [
      { title: 'Konum & Arıza Bildirimi', desc: '0533 945 45 14 hattından aramanız veya WhatsApp konumunuzu paylaşmanızla en yakın kayar kasa ekibimiz atanır.' },
      { title: '10–15 Dakikada Güvenli Yanaşma', desc: 'Trafik akışı dubalarla güvence altına alınır, platform açısı aracınızın şasi yüksekliğine göre ayarlanır.' },
      { title: 'Temassız Yükleme & Kilitleme', desc: 'Araç çekme gözünden kontrollü vinçle platforma alınır, 4 tekerlek lastik üstü kemerlerle sabitlenir.' },
      { title: 'Servis Kapısına Teslimat', desc: 'Gebze Sanayi, yetkili servis veya belirttiğiniz otopark noktasına hasarsız indirme ve mobil POS ile faturalandırma yapılır.' }
    ],
    pricingNote: 'Kayar kasa oto çekici fiyatlandırması; Gebze içi çıkış mesafesi, gidilecek servis veya ilçe kilometresi ve aracın ağırlık sınıfına göre hesaplanır. Aracınız platforma alınmadan önce net rakam yazılı veya sözlü olarak onayınıza sunulur; yol trafiği nedeniyle bekleme veya gece sürpriz farkı uygulanmaz.',
    faqs: [
      { q: 'Ön tamponu alçak spor araçlar kayar kasaya sürter mi?', a: 'Hayır. Düşük açılı hidrolik rampaya ek olarak kullandığımız ahşap-kompozit ara uzatma rampaları sayesinde rampa eğimi 6 derecenin altına iner; ön ek ve difüzör zemine temas etmez.' },
      { q: 'Aracımın çekme gözü (çeki demiri) yoksa nasıl yükleniyor?', a: 'Fabrika çekme halkası bulunmayan araçlarda şasi altındaki onaylı kurtarma kancalarına yumuşak tekstil V-sapan bağlanarak plastik tampona değmeden platforma alım yapılır.' },
      { q: 'Çekici geldiğinde araç içinde yolcu olarak seyahat edebilir miyim?', a: 'Kabin içi çift kişilik yolcu koltuğumuzda araç sahibi ve bir refakatçisi emniyet kemerli şekilde teslimat noktasına kadar ekibimizle birlikte gidebilir.' },
      { q: 'Kasko poliçemdeki çekici hakkıyla fatura uyumlu mu?', a: 'Evet. KDV’li kurumsal oto kurtarma faturamızı kasko şirketinizin geri ödeme süreçlerinde doğrudan ibraz edebilirsiniz.' }
    ]
  },
  {
    slug: 'oto-kurtarma',
    name: 'Kazalı & Şarampol Oto Kurtarma',
    shortName: 'Oto Kurtarma',
    tag: 'Ağır Kurtarma',
    img: 'gebze-kazali-kurtarma',
    metaTitle: 'Gebze Oto Kurtarma | 7/24 Kazalı Araç ve Şarampol Kurtarma',
    metaDesc: 'Gebze, TEM, Dilovası rampası ve D-100 hattında kazalı araç kurtarma, şarampolden çıkarma ve emniyetli nakil. 7/24 uzman ekip: 0533 945 45 14.',
    cardDesc: 'Trafik kazası, bariyer teması, şarampole kayma veya yürür aksamı hasarlı araçlar için vinçli ve paten aparatlı profesyonel oto kurtarma.',
    bullets: [
      'Aksı kırık ve tekeri kitli kazalı araç tahliyesi',
      'Şarampol, hendek ve banketten kontrollü çıkarma',
      'Kaza tespit tutanağı sonrası hızlı yol açma'
    ],
    lead: 'Trafik kazası, kaygan zemin kaynaklı yoldan çıkma, refüje çıkma veya tekerlek-aks kopması gibi zorlu durumlarda ikinci bir hasar oluşturmadan kontrollü kurtarma operasyonu gerçekleştiriyoruz.',
    scenarios: [
      'Yağışlı havalarda Dilovası inişi, TEM Gebze virajları, Pelitli bağlantı yolları ve Eskihisar eğimlerinde sürücünün kontrolünden çıkan araçlar şarampole inebilir, refüj bordürüne oturabilir ya da çarpışma sonucu rot kolu ve salıncak hasarı alabilir. Bu gibi tablolarda sıradan çekme halatıyla gelişigüzel çekmek şasi bükülmesine, kaporta yırtılmasına ve yakıt hattı hasarına neden olur.',
      'Kurtarma operatörlerimiz olay yerine ulaştığında ilk olarak jandarma veya trafik polisinin yönlendirmelerine uygun biçimde emniyet şeridini ışıklı konilerle kapatır. Aracın alt takımı, hava yastığı durumu, sıvı kaçağı ve kilitli aks açısı incelendikten sonra yük dağılımını dengeleyen makara sistemi kurulur.',
      'Tekerleği kopmuş veya dönmeyen kazalı otomobillerde tekerlek altı kaydırma kızakları (skates) ve hidrolik kriko takımları devreye alınır. Araç platforma milimetrik çekişle oturtularak sigorta eksperinin inceleyeceği yetkili servise veya yediemin dışındaki tercih ettiğiniz özel tamirhaneye nakledilir.'
    ],
    equipmentTitle: 'Kaza ve Şarampol Müdahale Ekipmanlarımız',
    equipmentPoints: [
      'Çift tamburlu yön değiştirmeli makara sistemi ve yüksek mukavemetli sentetik kurtarma halatları',
      'Kırık aks ve patlak tekerlekler için ağır yük taşımalı tekerlek altı polietilen kızaklar',
      'Gece kaza alanını gündüze çeviren 360 derece döner LED projektörler',
      'Yangın söndürme tüpü, akü kutup ayırıcı el aletleri ve yağ-sıvı emici güvenlik kiti',
      'Kaza sonrası kasko ve trafik sigortası dosyalarına uygun detaylı fatura düzenleme'
    ],
    steps: [
      { title: 'Acil Durum Analizi', desc: 'Telefon görüşmesinde aracın konumu, şarampol eğimi ve tekerleklerin dönüp dönmediği öğrenilerek doğru kurtarıcı yönlendirilir.' },
      { title: 'Olay Yeri Emniyeti', desc: 'Işıklı ikaz ve reflektör hatları kurulur; trafik ekipleriyle koordineli çalışma alanı oluşturulur.' },
      { title: 'Kontrollü Vinç Kurtarması', desc: 'Aracın ağırlık merkezi dengelenerek şasi ve kaportada ek deformasyon yaratmadan yola ve platforma alınır.' },
      { title: 'Sigorta Servisine Teslim', desc: 'Seçtiğiniz anlaşmalı servis veya kaporta merkezine fotoğraflı tutanak eşliğinde teslimat tamamlanır.' }
    ],
    pricingNote: 'Oto kurtarma operasyonlarında ücret; şarampol derinliği, ek vinç veya kızak aparatı gereksinimi ve teslimat mesafesi baz alınarak şeffaf şekilde belirlenir. Konumdan gelen iki adet fotoğraf üzerinden telefonda kesin teklif sunulur.',
    faqs: [
      { q: 'Trafik kazası sonrası çekici çağırmadan önce ne yapmalıyım?', a: 'Öncelikle dörtlü ikazları yakıp güvenli bariyer arkasına geçin, yaralanma varsa 112’yi arayın. Maddi hasarlı kazalarda aracın açısını gösteren fotoğrafları çekip kaza tespit tutanağını düzenledikten sonra hemen çekim işlemini başlatabiliriz.' },
      { q: 'Ön tekerleği kopmuş veya direksiyonu kırılmış araç platforma çıkabilir mi?', a: 'Evet. Tekerlek altı ağır yük kızakları ve hidrolik kriko destekleriyle kopuk veya sıkışmış tekerlek sürtünmesiz biçimde kayar kasa üzerine alınır.' },
      { q: 'Çamura saplanan veya tarlaya kayan SUV araçları çıkarabiliyor musunuz?', a: 'Evet. Uzun metrajlı sentetik vinç halatı ve yönlendirici makaralarla asfalt dışındaki çamur, mıcır ve hendek zeminlerinden araçları güvenle asfalta çekiyoruz.' },
      { q: 'Sigorta şirketimle anlaşmanız yoksa çekici ücretini geri alabilir miyim?', a: 'Çoğu kasko poliçesi fatura ibrazı karşılığında kaza kaynaklı kurtarma masrafını poliçe limitleri dahilinde sigortalıya iade eder; faturalarımız bu prosedüre tam uyumludur.' }
    ]
  },
  {
    slug: 'kapali-otopark-cekici',
    name: 'Kapalı Otopark Çekici',
    shortName: 'Kapalı Otopark',
    tag: 'Alçak Kabin 1.90m',
    img: 'gebze-kapali-otopark',
    metaTitle: 'Gebze Kapalı Otopark Çekici | Alçak Tavan & AVM Garaj Kurtarıcı',
    metaDesc: 'Gebze Center AVM, Mutlukent siteleri ve rezidans kapalı otoparklarından alçak kabinli özel çekiciyle hasarsız araç çıkarma. 7/24: 0533 945 45 14.',
    cardDesc: 'AVM, rezidans, hastane ve site katlı otoparklarının alçak tavan ve dar spiral rampalarına rahatça giren 1.90m yüksekliğinde özel çekici.',
    bullets: [
      '1.90 metre tavan yüksekliğine uyumlu alçak şasi araç',
      'Dar dönüşlü -2 / -3 kat rampalarında sıfır sürtme',
      'Tekerlek aparatlı elektrikli/otomatik araç tahliyesi'
    ],
    lead: 'Gebze Center AVM, Mutlukent ve Kirazpınar toplu konut projeleri, iş merkezi ve hastane katlı otoparklarında standart çekicilerin giremediği alçak tavanlı katlara özel kompakt kurtarıcımızla iniyoruz.',
    scenarios: [
      'Modern rezidansların ve alışveriş merkezlerinin kapalı otopark giriş yükseklikleri çoğunlukla 2.00 ile 2.15 metre arasında sınırlandırılmıştır. Standart kamyonet şasili kayar kasa çekiciler 2.45 metreye ulaşan kabin ve tepe lambası yüksekliği nedeniyle bu garajlara kesinlikle giremez; tavan borularına, havalandırma kanallarına veya yönlendirme tabelalarına çarpma tehlikesi doğurur.',
      'Kapalı otopark operasyonları için filomuzda özel olarak modifiye edilmiş, kısa dingil mesafeli ve toplam yüksekliği 1.90 metrenin altında kalan hidrolik gözlüklü kurtarıcı araçlar hazır bekler. İster eksi üçüncü katta park halinde kalsın ister dar spiral rampanın tam ortasında stop etsin, aracınız bulunduğu park cebinden dikkatlice alınır.',
      'Elektronik el freni (EPB) kilitli, şanzımanı P konumundan çıkmayan veya marş basmayan lüks binek ve elektrikli araçlarda arka tekerlek altına doli (taşıyıcı tekerlek arabası) yerleştirilir. Böylece dar kolonlar arasında keskin manevralar yapılırken aracınızın ne tamponu ne de aktarma organları en ufak baskı görmez.'
    ],
    equipmentTitle: 'Katlı Garaj & Dar Alan Kurtarma Teknolojisi',
    equipmentPoints: [
      '1.90m altındaki tavanlara ve dik otopark giriş rampalarına uyumlu kompakt 4x4 çekici kabini',
      'Hidrolik açılır-kapanır tekerlek kavrama gözlüğü (tampon ve karter teması sıfır)',
      'Kilitli arka tekerlekler için rulmanlı ağır hizmet doli (go-jak) taşıma arabaları',
      'Otopark içi diğer park halindeki araçlara zarar vermemek için kısa dönüş yarıçapı',
      'Otopark çıkışından sonra şehir içi veya şehirlerarası nakil için dışarıda hazır kayar kasa aktarım seçeneği'
    ],
    steps: [
      { title: 'Otopark Katı & Yükseklik Bilgisi', desc: 'Aracın bulunduğu kat, tavan yüksekliği ve şanzıman/el freni durumu telefonla teyit edilir.' },
      { title: 'Alçak Kabin Ekip Girişi', desc: 'Özel kapalı otopark aracımız güvenlikten geçerek doğrudan aracınızın park cebine iner.' },
      { title: 'Gözlük & Doli ile Çıkarma', desc: 'Ön tekerlekler hidrolik gözlükle kavranır; kilitli arka teker varsa doli takılarak spiral rampadan açık alana çıkarılır.' },
      { title: 'Servis Nakli veya Aktarım', desc: 'Açık alanda araç doğrudan servise götürülür veya uzun mesafe için kayar kasaya aktarılır.' }
    ],
    pricingNote: 'Kapalı otopark çekici ücreti; kat sayısı, doli (tekerlek arabası) gereksinimi ve açık alana çıkarıldıktan sonraki servis mesafesine göre sabit olarak belirlenir.',
    faqs: [
      { q: 'Otopark tavanı 2.00 metre, çekiciniz gerçekten sığar mı?', a: 'Evet. Kapalı otopark kurtarıcımızın en yüksek noktası 1.88 metredir; 2.00 metre sınırlı tüm AVM, rezidans ve apartman garajlarına güvenle girer.' },
      { q: 'Elektronik el freni boşalmıyor ve vites P konumunda kilitli, çıkarabilir misiniz?', a: 'Evet. Go-Jak hidrolik tekerlek kaldırma aparatları ve doli arabalarıyla dört tekerleği yerden keserek aracı sürüklemeden dar park alanından dışarı alıyoruz.' },
      { q: 'Aracım iki duvar ve kolon arasında çok sıkışık park edilmiş, müdahale mümkün mü?', a: 'Hidrolik tekerlek krikoları aracın yanına paralel manevra yapabilmemizi sağlar; aracı yan kaydırarak aks eksenine hizaladıktan sonra güvenle çıkarıyoruz.' },
      { q: 'Gebze Center veya hastane otoparklarında yönetim izni gerekir mi?', a: 'Sürücü veya araç ruhsat sahibinin güvenliğe bilgi vermesi yeterlidir; kurumsal kimlikli aracımızla hızlıca giriş yapıyoruz.' }
    ]
  },
  {
    slug: 'ahtapot-cekici',
    name: 'Ahtapot Çekici & Vinçli Kurtarma',
    shortName: 'Ahtapot Çekici',
    tag: '4 Teker Askılı Vinç',
    img: 'gebze-ahtapot-vinc',
    metaTitle: 'Gebze Ahtapot Çekici | Vinçli & Tekerlek Askılı Oto Kurtarıcı',
    metaDesc: 'Gebze’de direksiyonu kilitli, şanzımanı arızalı veya sıkışmış araçlar için 4 tekerlekten kaldıran ahtapot vinçli çekici. 7/24: 0533 945 45 14.',
    cardDesc: 'Tekerleği dönmeyen, şanzımanı P konumunda kilitli, dört çeker (AWD) veya dar açıda sıkışmış araçların vinçle dikey kaldırılarak yüklenmesi.',
    bullets: [
      '4 tekerlekten dikey kaldırma — sıfır sürükleme',
      'Elektrikli, 4x4 ve kilitli şanzımanlara %100 uyum',
      'Kaldırım, bariyer ve dar sokaktan temassız alım'
    ],
    lead: 'Yürüyemeyen, vitesi boşa alınamayan, elektrikli park freni devre dışı bırakılamayan veya park ettiği yerde önü-arkası kapalı kalan araçlar için dört tekerlek askılı ahtapot vinçli çekici hizmeti sunuyoruz.',
    scenarios: [
      'Yeni nesil çift kavramalı (DSG, EDC, S-Tronic) otomatik araçlarda mekatronik kartı arızalandığında ya da tam elektrikli otomobillerde 12V destek aküsü çöktüğünde araç kendisini güvenlik kilidine alır. Bu durumda tekerlekler kesinlikle dönmez ve klasik halatla sürükleyerek çekmeye çalışmak hem diferansiyeli hem şanzıman dişlilerini parçalar.',
      'Ahtapot çekici sistemi, aracın yanından uzanan hidrolik bomlu vinç kolu ve dört lastiğe ayrı ayrı geçirilen kauçuk korumalı çelik çerçeve aparatlarıyla aracı yerden dikey olarak kaldırır. Lastiklerin yere tek bir santimetre sürtünmesine izin vermeden, aracı doğrudan kendi platformuna indirir.',
      'Ayrıca Gebze Merkez, Mustafapaşa ve İstasyon Mahallesi gibi park yoğunluğunun yüksek olduğu dar caddelerde önü ve arkası başka araçlarla kapatılmış arızalı otomobiller, başka araçların yerinden oynatılmasına gerek kalmadan yandan vinç operasyonuyla olduğu yerden havalandırılarak alınır.'
    ],
    equipmentTitle: 'Ahtapot Vinç & Tekerlek Askı Mühendisliği',
    equipmentPoints: [
      '360 derece dönebilen yüksek tonajlı hidrolik katlanır bomlu vinç sistemi',
      'Ağırlık dengesini otomatik eşitleyen terazili H-bar kaldırma traversi',
      'Çamurluk ve jant boyasına kesinlikle değmeyen ayarlanabilir tekerlek kavrama çatalı',
      'Elektrikli araç batarya alt tablasına baskı yapmadan yalnızca lastik sırtından taşıma',
      'Sertifikalı vinç operatörü ve yüksek limitli taşıma kaskosu'
    ],
    steps: [
      { title: 'Kilit & Konum Tespiti', desc: 'Aracın elektrik/şanzıman kilidi ve çevresindeki üst enerji hattı veya ağaç dalı mesafesi teyit edilir.' },
      { title: 'Destek Ayaklarının Kurulması', desc: 'Ahtapot çekici yan hidrolik denge ayaklarını açarak zemine tam sabitlenir.' },
      { title: '4 Tekerlekten Dikey Kaldırma', desc: 'Dört lastiğe koruyucu askı aparatları geçirilip araç dengeli biçimde havalandırılarak kasaya oturtulur.' },
      { title: 'Kaskolu Servis Teslimi', desc: 'Teslimat noktasında yine aynı vinç hassasiyetiyle araç servis alanına indirilir.' }
    ],
    pricingNote: 'Ahtapot vinçli çekici tarifesi, özel vinç operatörü ve ağır hidrolik ekipman kullanımı nedeniyle standart kayar kasadan farklı hesaplanır; konum ve servis mesafesine göre çağrı sırasında sabit fiyat verilir.',
    faqs: [
      { q: 'Ahtapot çekici aracımın çamurluğunu veya jantlarını çizer mi?', a: 'Kesinlikle hayır. Kullandığımız geniş açılı kaldırma traversi ve yumuşak kayışlı tekerlek aparatları gövdeden açıkta çalışır; temas yalnızca lastik tabanındadır.' },
      { q: 'Togg, Tesla gibi elektrikli araçlar için ahtapot çekici mi gerekir?', a: 'Eğer araç çekme moduna (Tow Mode) alınamıyor ve tekerlekler kilitli kalıyorsa batarya altını korumanın en güvenli yolu ahtapot çekici veya tekerlek dolisidir.' },
      { q: 'Önümde ve arkamda araç park etmiş, yoldan çıkışım kapalı; alabilir misiniz?', a: 'Evet. Ahtapot çekicinin en büyük avantajı aracı önden veya arkadan çekmeye gerek duymadan yan şeritten dikey kaldırarak platforma alabilmesidir.' },
      { q: 'Ahtapot çekici Gebze’de gece de çalışıyor mu?', a: 'Evet. Vinçli ahtapot ekibimiz de 7/24 nöbetçi düzende Gebze, Çayırova, Darıca ve Dilovası hattında aktif görev yapar.' }
    ]
  },
  {
    slug: 'aku-takviye',
    name: 'Yerinde Akü Takviye',
    shortName: 'Akü Takviye',
    tag: '12V / 24V Korumalı',
    img: 'gebze-aku-takviye',
    metaTitle: 'Gebze Akü Takviye | 7/24 Yerinde Akım Korumalı Akü Şarj & Destek',
    metaDesc: 'Gebze’de aracınız marş basmıyorsa 12V/24V pik akım korumalı booster ile yerinde güvenli akü takviye. 15 dk içinde kapınızda: 0533 945 45 14.',
    cardDesc: 'Start-Stop, hibrit ve elektronik beyinli araçlar için voltaj dalgalanmasını önleyen dijital akım korumalı booster ile 7/24 yerinde akü takviye.',
    bullets: [
      'ECU (araç beyni) korumalı dijital 12V/24V booster',
      'Şarj dinamosu (alternatör) voltaj ölçümü dahil',
      'Çekiciye gerek kalmadan 15 dakikada çözüm'
    ],
    lead: 'Soğuk sabahlarda, farların açık unutulmasında veya uzun süre park halinde kalan araçlarda boşalan aküyü, başka bir araçtan kablo bağlayıp elektronik beyni riske atmadan profesyonel booster cihazıyla yerinde çalıştırıyoruz.',
    scenarios: [
      'Yeni nesil otomobillerde onlarca kontrol ünitesi (ECU, ABS, şanzıman beyni, multimedya modülü) hassas voltaj toleransıyla çalışır. Komşu bir araçtan ucuz ince kablolarla yapılan bilinçsiz aktarmalarda anlık voltaj sıçraması (pik akım) yaşanabilir; bu durum ana sigorta tablasını yakarak yüksek tamir faturalarına yol açar.',
      'Gebze Yol Yardım mobil ekiplerimiz, hem binek 12V (AGM/EFB Start-Stop dahil) hem de ticari kamyonet ve minibüslerin 24V sistemlerine tam uyumlu, dahili ters kutup ve aşırı akım korumalı lityum-profesyonel takviye istasyonları taşır. İşlem öncesinde dijital multimetre ile akünüzün açık devre gerilimi ölçülür.',
      'Araç çalıştırıldıktan sonra işimiz bitmez: şarj dinamosunun (alternatör) aküyü doğru gerilim aralığında (13.8V–14.4V) doldurup doldurmadığı kontrol edilir. Eğer sorun aküde değil de şarj dinamosu ya da marş motorundaysa sürücü yolda tekrar kalmaması için anında bilgilendirilir ve istenirse en yakın oto elektrikçiye çekim sağlanır.'
    ],
    equipmentTitle: 'Beyin Korumalı Akü Takviye Donanımımız',
    equipmentPoints: [
      'Pik akım ve ters bağlantı korumalı profesyonel 12V / 24V yüksek amperli booster cihazları',
      'Start-Stop (AGM / EFB) ve hibrit araçların yardımcı 12V akülerine uyumlu hassas mod',
      'Dijital akü sağlık (CCA) ve şarj dinamosu voltaj analiz cihazı',
      'Kutup başı oksit temizleme fırçası ve gevşek kelepçe sabitleme el takımları',
      'Kapalı otopark ve dar sitelere hızlı ulaşan mobil yol yardım aracı'
    ],
    steps: [
      { title: 'Hızlı Konum Paylaşımı', desc: 'WhatsApp konumunuzu veya otopark bilgisini ilettiğinizde en yakın mobil takviye ekibimiz yola çıkar.' },
      { title: 'Voltaj & Kutup Kontrolü', desc: 'Akü kutup başları kontrol edilir, dijital test cihazıyla akü seviyesi ölçülür.' },
      { title: 'Güvenli Booster Takviyesi', desc: 'Akım korumalı profesyonel cihazla kıvılcım ve voltaj dalgalanması olmadan ilk marş gerçekleştirilir.' },
      { title: 'Alternatör Şarj Testi', desc: 'Motor çalışırken şarj dinamosu çıkışı ölçülerek yolculuğa güvenle devam etmeniz doğrulanır.' }
    ],
    pricingNote: 'Yerinde akü takviye ücreti, aracın çekilmesine kıyasla çok daha ekonomiktir. Gebze merkez ve çevre mahallelerde sabit servis bedeli telefonda net şekilde bildirilir.',
    faqs: [
      { q: 'Start-Stop özellikli veya hibrit aracım takviye yapılırken zarar görür mü?', a: 'Hayır. Araçtan araca riskli aktarma yerine dahili regülatörlü ve pik akım korumalı booster cihazları kullandığımız için elektronik modüller %100 güvendedir.' },
      { q: 'Takviye sonrası aracımı kaç dakika çalıştırmalıyım?', a: 'Akünün kendini toparlayabilmesi için motoru stop etmeden en az 25–30 dakika sürüş yapmanız veya rölantide yüksek devir olmadan çalıştırmanız önerilir.' },
      { q: 'Aküm tamamen ömrünü tamamlamışsa ve takviye tutmuyorsa ne yapıyorsunuz?', a: 'Akü hücreleri kısa devre yaptıysa cihaz ölçümünde bu durum hemen ortaya çıkar; dilerseniz aracınızı çekiciyle en yakın akü bayisine veya servise ulaştırıyoruz.' },
      { q: 'Gece 03.00’te site otoparkında akü takviye için geliyor musunuz?', a: 'Evet. Gebze, Darıca, Çayırova, Mutlukent ve Beylikbağı dahil tüm yerleşim ve OSB noktalarında 7/24 yerinde takviye sağlıyoruz.' }
    ]
  },
  {
    slug: 'lastik-yol-yardim',
    name: 'Mobil Lastik Yol Yardım',
    shortName: 'Lastik Yol Yardım',
    tag: '7/24 Yerinde Destek',
    img: 'gebze-lastik-yardim',
    metaTitle: 'Gebze Mobil Lastik Yol Yardım | 7/24 Stepne Değişimi',
    metaDesc: 'Gebze, TEM, D-100 ve OSB yollarında patlayan lastik, sıkışmış bijon ve stepnesiz araçlar için 7/24 mobil lastik yol yardım. Hemen ara: 0533 945 45 14.',
    cardDesc: 'Otoyolda veya gece karanlığında lastiği patlayan, bijonu kaynamış ya da stepnesi bulunmayan sürücüler için güvenli yerinde değişim ve lastikçi nakli.',
    bullets: [
      'Torklu bijon sökme ve hidrolik kriko değişimi',
      'Run-flat ve stepnesiz araçlarda en yakın lastikçiye nakil',
      'Otoyol emniyet şeridinde reflektörlü güvenli çalışma'
    ],
    lead: 'D-100, TEM otoyolu, Osmangazi Köprüsü yaklaşımı veya OSB güzergâhlarında aniden inen ya da yarılan lastiklerde can güvenliğinizi riske atmadan hızlı mobil lastik desteği ve güvenli değişim sağlıyoruz.',
    scenarios: [
      'Ağır vasıta trafiğinin yoğun olduğu Gebze otoyollarında ve karanlık emniyet şeritlerinde aracın kendi küçük mekanik krikosuyla lastik değiştirmeye çalışmak hem fiziksel olarak yorucu hem de trafik güvenliği açısından ciddi risk taşır. Özellikle hava tabancasıyla fazla sıkılmış veya korozyon yüzünden kaynamış bijonlar standart anahtarla açılmaz, hatta bijon başı sıyrılabilir.',
      'Ayrıca günümüz otomobillerinin büyük bölümünde bagajda yedek lastik (stepne) yerine yalnızca basit köpük tamir kiti bulunur. Yanak yarığı veya jant eğilmesi yaşanan durumlarda tamir köpüğü kesinlikle işe yaramaz. Bu noktada mobil ekibimiz iki yönlü çözüm üretir: stepnesi sağlam araçlarda ağır hizmet hidrolik kriko ve akülü darbeli tork anahtarıyla dakikalar içinde değişim yapılır.',
      'Yedek lastiği olmayan, iki lastiği birden yarılan veya jantı çatlayan araçlarda ise tekerlek yanağına ve jant çemberine zarar vermeden aracınız kayar kasa platforma alınarak Gebze’deki 7/24 açık nöbetçi lastikçiye ya da servisinize güvenle ulaştırılır.'
    ],
    equipmentTitle: 'Mobil Lastik Müdahale Donanımımız',
    equipmentPoints: [
      '3 ton kapasiteli hızlı kaldırma özellikli alçak profil hidrolik kriko',
      'Jant boyasını çizmeyen teflon korumalı lokma uçları ve akülü tork anahtarı',
      'Yüksek basınçlı taşınabilir dijital hava kompresörü ve hassas PSI basınç göstergesi',
      'Sıkışmış şifreli bijon ve paslı saplamalar için özel söküm el takımları',
      'Stepne uyumsuzluğu halinde anında 7/24 açık lastikçiye kayar kasa nakil seçeneği'
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
      { q: 'Şifreli bijon anahtarımı bulamıyorum, yine de yardımcı olabilir misiniz?', a: 'Şifreli bijon adaptörü kayıpsa janta zarar vermemek için aracınızı zorlamadan çekiciyle uygun söküm aparatı bulunan servise naklediyoruz.' },
      { q: 'Stepneyi taktırdıktan sonra ne kadar hız yapabilirim?', a: 'İnce tip (mini) stepnelerle saatte 80 km hızı geçmemeniz ve en kısa sürede orijinal lastiğinizi onartıp taktırmanız gerekir.' },
      { q: 'Ticari minibüs veya kamyonet lastiği için de hizmet veriyor musunuz?', a: 'Evet. Hafif ticari araçların yüksek yük sınıfına uygun kriko ve lokma ekipmanlarıyla hem değişim hem nakil desteği sağlıyoruz.' }
    ]
  },
  {
    slug: 'motosiklet-cekici',
    name: 'Motosiklet Çekici & Nakliye',
    shortName: 'Motosiklet Çekici',
    tag: 'Özel Kıskaçlı',
    img: 'gebze-motosiklet-cekici',
    metaTitle: 'Gebze Motosiklet Çekici | Aparatlı & Kaskolu Motor Taşıma',
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
      'Noter devri, TÜVTÜRK muayenesi, servis bakımı ve şehirlerarası kaskolu motosiklet nakli'
    ],
    steps: [
      { title: 'Motor Tipi & Konum Bilgisi', desc: 'Motosikletinizin modeli (scooter, racing, enduro, chopper) ve arıza durumu öğrenilir.' },
      { title: 'Dengeli Rampa Yüklemesi', desc: 'Geniş kaymaz rampa açılarak motosiklet iki personel veya kontrollü destekle platforma çıkarılır.' },
      { title: 'Kıskaç & 4 Nokta Sabitleme', desc: 'Ön lastik kıskaca kilitlenir; grenajlara temas etmeden yumuşak sapanlarla dik pozisyonda dengelenir.' },
      { title: 'Yetkili Servise Teslim', desc: 'Gebze veya İstanbul/İzmit motosiklet servislerine sıfır çizikle teslimat gerçekleştirilir.' }
    ],
    pricingNote: 'Motosiklet çekici fiyatları; motorun ağırlık sınıfı ve taşınacak mesafeye göre ekonomik ve sabit tarife üzerinden telefonda netleştirilir.',
    faqs: [
      { q: 'Motosikletim taşıma sırasında yan sehpa üzerinde mi duruyor?', a: 'Hayır. Yan sehpa sarsıntıda bükülebilir veya devrilme riski oluşturur. Motosiklet ön tekerlek kıskacında tamamen dik ve 4 noktadan gergili biçimde taşınır.' },
      { q: 'Elektrikli motor veya kurye scooterları da çekiyor musunuz?', a: 'Evet. 50cc şehir içi scooterlardan elektrikli motosikletlere, kurye motorlarından 1250cc ağır enduro modellere kadar tüm sınıfları taşıyoruz.' },
      { q: 'Motosikletimin ön maşası kaza nedeniyle bükülmüş, yüklenebilir mi?', a: 'Ön tekerleği dönmeyen kazalı motosikletlerde taşıyıcı tekerlek kızağı kullanarak motoru sürüklemeden platforma alıyoruz.' },
      { q: 'Gebze’den İstanbul veya Bursa’daki yetkili motosiklet servisine nakil yapıyor musunuz?', a: 'Evet. Hem Gebze içi hem İstanbul Anadolu/Avrupa yakası, İzmit, Bursa ve tüm Türkiye’ye kaskolu motosiklet nakliyesi yapıyoruz.' }
    ]
  },
  {
    slug: 'ticari-arac-cekici',
    name: 'Ticari, Panelvan & OSB Filo Çekici',
    shortName: 'Ticari Araç Çekici',
    tag: 'Uzun Şasi Platform',
    img: 'gebze-ticari-osb',
    metaTitle: 'Gebze Ticari Araç Çekici | Panelvan, Minibüs & OSB Filo Kurtarıcı',
    metaDesc: 'Gebze, GOSB, TOSB, Güzeller OSB ve Dilovası’nda panelvan, servis minibüsü, kamyonet ve pikap için uzun şasi ticari çekici: 0533 945 45 14.',
    cardDesc: 'OSB lojistik araçları, uzun şasi panelvanlar, personel servis minibüsleri, 4x4 pikaplar ve frigorifik kamyonetler için yüksek tonajlı çekici.',
    bullets: [
      'Maxi-uzun panelvan ve 16+1 servis minibüsüne uygun kasa',
      'OSB ve kurumsal filo anlaşmalı hızlı müdahale',
      'Kurumsal KDV’li e-fatura ve öncelikli sevk'
    ],
    lead: 'Türkiye’nin en yoğun sanayi havzası olan Gebze, GOSB, TOSB, Güzeller OSB, Şekerpınar ve Dilovası’nda çalışan ticari araçlar için zaman doğrudan üretim maliyetidir. Uzun şasi ve yüksek tonajlı platformlarımızla ticari filoları bekletmiyoruz.',
    scenarios: [
      'Sprinter, Crafter, Master, Ducato, Transit ve Boxer gibi uzun dingil mesafeli (L3/L4) panelvanlar, personel taşıma minibüsleri, çift kabin pikaplar ve soğutuculu kasalı kamyonetler standart binek çekicilerinin platform uzunluğuna ve taşıma kapasitesine sığmaz. Yanlış kapasiteli araçla yapılan yüklemelerde arka çıkıntı tehlikeli biçimde taşar ve şasi güvenliği bozulur.',
      'Ticari segment için ayırdığımız geniş ve uzun şasili hidrolik platformlarımız, yüksek dingil ağırlığına ve uzun aks mesafesine sahip ticari araçları güvenle taşır. Soğuk zincir veya acil malzeme taşıyan araçlarda lojistik aksaklığı en aza indirmek için OSB giriş prosedürlerine hakim sürücülerimiz en hızlı rotadan fabrika kapısına veya otoyola ulaşır.',
      'Şirket filoları için tek seferlik acil çağrıların yanı sıra düzenli kurumsal faturalandırma, sevk raporlaması ve yetkili ticari araç servislerine doğrudan teslimat imkânı sunuyoruz.'
    ],
    equipmentTitle: 'Ticari & Ağır Hizmet Platform Özellikleri',
    equipmentPoints: [
      'Uzun dingil mesafeli panelvan ve minibüslere uyumlu güçlendirilmiş geniş hidrolik platform',
      'Yüksek tonajlı çekiş vinci ve ağır sınıf zincirli/spanzetli sabitleme donanımı',
      'OSB tesis ve lojistik depo sahalarında iş güvenliği kurallarına uygun reflektörlü ekipman',
      'Pikap, 4x4 arazi kamyoneti ve kapalı kasa dağıtım araçlarına tam uyum',
      'Kurumsal firmalar için aynı gün KDV’li e-fatura ve mobil POS ödeme'
    ],
    steps: [
      { title: 'Araç Ölçü & Yük Bilgisi', desc: 'Panelvan, minibüs veya kamyonetin uzunluk sınıfı (L2/L3/L4) ve yüklü/boş durumu alınır.' },
      { title: 'Ağır Platform Sevk', desc: 'Aracın tonajına tam uygun uzun şasi ticari çekici doğrudan konuma yönlendirilir.' },
      { title: 'Güçlendirilmiş Sabitleme', desc: 'Araç dengeli aks dağılımıyla platforma alınıp ağır sınıf bağlama kemerleriyle sabitlenir.' },
      { title: 'Yetkili Servise Hızlı Teslim', desc: 'Ticari araç yetkili servisi, Gebze Sanayi veya şirket garajına faturalı teslimat tamamlanır.' }
    ],
    pricingNote: 'Ticari araç çekici tarifesi, aracın tonajı, şasi uzunluğu ve teslimat mesafesine göre kurumsal şeffaflıkla belirlenir; şirket onayına sunulmadan işlem başlatılmaz.',
    faqs: [
      { q: 'İçinde malzeme bulunan yüklü panelvanı çekebilir misiniz?', a: 'Yük ağırlığı platformun yasal taşıma sınırları içindeyse güvenle taşıyoruz; aşırı tonajlı paletli yüklerde yük aktarımından sonra hemen çekim sağlıyoruz.' },
      { q: 'Personel servis minibüsü (16+1) sabah vardiyasında arızalandı, ne kadar sürede gelirsiniz?', a: 'GOSB, TOSB, Şekerpınar ve Gebze merkezde nöbetçi ticari çekicimiz ortalama 15–20 dakika içinde ulaşarak yolu ve servis planınızı hızla rahatlatır.' },
      { q: 'Şirketimiz adına KDV’li fatura kesebilir misiniz?', a: 'Evet. Vergi numaranızı paylaştığınızda ticari kurtarma ve taşıma hizmetimiz için resmi KDV’li e-fatura düzenlenir.' },
      { q: 'Gebze OSB’lerden İstanbul İkitelli veya Tuzla ticari servislerine taşıma yapıyor musunuz?', a: 'Evet. Gebze’den Tuzla, Pendik, Ümraniye, İzmit ve İstanbul’un tüm yetkili ticari araç servislerine doğrudan nakil sağlıyoruz.' }
    ]
  },
  {
    slug: 'is-makinesi-tasima',
    name: 'Forklift & İş Makinesi Taşıma',
    shortName: 'İş Makinesi Taşıma',
    tag: 'OSB Endüstriyel',
    img: 'gebze-is-makinesi',
    metaTitle: 'Gebze Forklift & İş Makinesi Taşıma | OSB Şantiye Nakli',
    metaDesc: 'Gebze, GOSB, TOSB, Güzeller OSB, Pelitli ve Dilovası’nda forklift, makaslı platform, mini ekskavatör ve bobcat taşıma. 7/24: 0533 945 45 14.',
    cardDesc: 'Fabrikalar, depolar ve şantiyeler arası akülü/dizel forklift, manlift, makaslı platform, mini kepçe ve traktör için güvenli rampa taşıma.',
    bullets: [
      'Forklift, makaslı platform (manlift) ve mini kepçe nakli',
      'Ağır zincir gerdirme ve çelik kasa zemin desteği',
      'Gebze OSB’ler arası aynı gün hızlı transfer'
    ],
    lead: 'Gebze’nin devasa organize sanayi ekosisteminde fabrika içi ekipman değişimleri, kiralık makine teslimatları ve şantiye transferleri için forklift, makaslı platform ve mini iş makinelerini sigortalı taşıyoruz.',
    scenarios: [
      'GOSB, TOSB, Güzeller OSB, GEPOSB, İMES Dilovası ve Balçık sanayi sitelerindeki üretim tesislerinde arızalanan dizel veya akülü forkliftlerin bakım atölyesine gönderilmesi, kiralanan makaslı personel yükselticilerin (manlift) şantiyeye ulaştırılması veya mini ekskavatörlerin (bobcat) iş sahasına sevki sık karşılaşılan endüstriyel ihtiyaçlardır.',
      'Forklift ve makaslı platformlar küçük çaplı dolgu lastiklere ve çok alçak şasi açıklığına sahiptir. Yüksek açılı standart rampalarda şasi ortası askıda kalır ve makine ilerleyemez. Çelik takviyeli, düşük açılı ağır rampa sistemimiz bu ekipmanların askıda kalmadan platforma çıkmasını sağlar.',
      'Ağırlık merkezi yoğun olan endüstriyel makineler, yükleme sonrasında yüksek mukavemetli zincir gerdirme (spanzet + çelik zincir) ve tekerlek takozlarıyla platforma sabitlenir. Fabrika sahası içi hız limitleri ve İSG kurallarına tam uyumla teslimat tamamlanır.'
    ],
    equipmentTitle: 'Endüstriyel Ekipman Taşıma Standartları',
    equipmentPoints: [
      'Dolgu lastikli forklift ve makaslı platformlara uyumlu alçak açılı ağır çelik rampa',
      'Ağır yük sınıfı çelik zincir gergileri ve kaymaz platform zemini',
      'Çalışmayan arızalı forkliftler için yüksek tonajlı hidrolik çekme vinci',
      'OSB depo rampaları ve fabrika kapılarında İSG kurallarına uygun operasyon',
      'Kaskolu taşıma ve kurumsal sözleşmeli nakliye faturası'
    ],
    steps: [
      { title: 'Makine Tonajı & Ölçü Teyidi', desc: 'Forklift, manlift veya mini ekskavatörün ağırlık ve ebat bilgisi ile teslimat noktası belirlenir.' },
      { title: 'Fabrika Sahasına Giriş', desc: 'Güvenlik ve iş güvenliği kurallarına uygun olarak yükleme alanına yanaşılır.' },
      { title: 'Düşük Eğimli Yükleme & Zincirleme', desc: 'Makine askıda kalmadan platforma alınıp çelik zincir ve takozlarla kilitlenir.' },
      { title: 'Şantiye veya Servis Teslimatı', desc: 'Hedef fabrika, depo veya bakım servisine zamanında ve tutanaklı teslimat yapılır.' }
    ],
    pricingNote: 'Forklift ve iş makinesi taşıma fiyatları, makinenin tonajı ve OSB/ilçe arası mesafeye göre belirlenir; kiralama firmaları ve fabrikalar için toplu taşıma avantajları sunulur.',
    faqs: [
      { q: 'Aküsü bitmiş veya yürümeyen forklifti de yükleyebiliyor musunuz?', a: 'Evet. Çalışmayan veya freni serbest bırakılabilen forklift ve platformları yüksek tonajlı hidrolik tambur vincimizle çekerek platforma alıyoruz.' },
      { q: 'Kaç tona kadar forklift ve mini iş makinesi taşıyorsunuz?', a: 'Binek-ağır hizmet platformlarımızla 3.5 tona kadar akülü/dizel forklift, makaslı platform, mini yükleyici ve bobcat taşımalarını doğrudan yapıyoruz.' },
      { q: 'Aynı gün içinde GOSB’tan Dilovası İMES OSB’ye transfer yapılabilir mi?', a: 'Evet. Gebze içi tüm OSB’ler arasında randevulu veya acil aynı gün hızlı transfer sağlıyoruz.' },
      { q: 'Makine nakliyesi sırasında taşıma sigortası geçerli mi?', a: 'Evet. Yükleme anından indirme anına kadar ekipmanınız taşıma sorumluluk sigortası güvencesi altındadır.' }
    ]
  },
  {
    slug: 'sehirlerarasi-arac-tasima',
    name: 'Şehirlerarası Araç Taşıma',
    shortName: 'Şehirlerarası Taşıma',
    tag: '81 İl Kaskolu',
    img: 'gebze-sehirlerarasi',
    metaTitle: 'Gebze Şehirlerarası Araç Taşıma | Kaskolu VIP Tekli & Çoklu Nakil',
    metaDesc: 'Gebze’den İstanbul, Ankara, İzmir, Bursa, Antalya ve Türkiye’nin 81 iline kaskolu tekli araç taşıma. Sabit fiyat ve canlı konum takibi: 0533 945 45 14.',
    cardDesc: 'Gebze çıkışlı veya Gebze varışlı sıfır kilometre, ikinci el, arızalı veya lüks araçlar için 81 ile tekli VIP ve kaskolu şehirlerarası nakliye.',
    bullets: [
      'Gebze’den 81 ile kapıdan kapıya tekli özel nakil',
      'Tam kapsamlı emtia taşıma sigortası ve teslim tutanağı',
      'Sıfır km, klasik, spor ve arızalı araç taşımacılığı'
    ],
    lead: 'Gebze’den Türkiye’nin herhangi bir şehrine ya da başka bir ilden Gebze’ye aracınızı kilometre yapmadan, yakıt ve yorgunluk harcamadan, tam kapsamlı taşıma kaskosuyla kapıdan kapıya ulaştırıyoruz.',
    scenarios: [
      'Sıfır veya ikinci el satın alınan bir otomobili kilometre yaptırmadan eve getirmek, yazlık bölgeye (İzmir, Bodrum, Antalya, Çeşme) araç göndermek, şehir dışında arızalanan bir aracı Gebze’deki kendi ustanıza getirtmek ya da galeri-bayi arası araç transferi yapmak için profesyonel şehirlerarası çekici hizmeti en akılcı çözümdür.',
      'Büyük çoklu tır taşımalarında araçların günlerce aktarma noktalarında beklemesi ve birden fazla kez indirilip bindirilmesi risk oluşturabilir. Tekli özel kayar kasa transfer hizmetimizde aracınız Gebze’den yüklendiği andan itibaren başka bir araca aktarılmadan, doğrudan hedef adrese gider.',
      'Yükleme öncesinde aracın dört cepheden yüksek çözünürlüklü teslim alma fotoğrafları çekilir, kilometresi ve donanım durumu yazılı tutanağa işlenir. Yolculuk boyunca araç sahibiyle iletişim halinde kalınır ve varışta alıcıya imzalı tutanakla teslimat tamamlanır.'
    ],
    equipmentTitle: 'Uzun Yol Araç Nakliyesi Güvenlik Protokolü',
    equipmentPoints: [
      'Uzun yol şartlarına uygun bakımlı, yüksek modelli hidrolik kayar kasa filo',
      'Yolculuk boyunca gevşemeyen çift kilitli 4 nokta tekerlek bağlama sistemi',
      'Yükleme öncesi ve teslimat anında fotoğraflı ekspertiz tutanağı',
      'İsteğe bağlı canlı konum paylaşımı ve planlı varış saati bildirimi',
      'K1 / K2 yetki belgeli yasal taşımacılık ve şehirlerarası tam kapsamlı emtia kaskosu'
    ],
    steps: [
      { title: 'Rota & Sabit Teklif', desc: 'Çıkış ve varış illeri ile araç modeli paylaşılır; köprü, otoyol ve yakıt dahil her şey net sabit fiyat verilir.' },
      { title: 'Fotoğraflı Teslim Alma', desc: 'Aracınız adresinizden teslim alınırken detaylı fotoğraflı durum tutanağı düzenlenir.' },
      { title: 'Aktarmasız Güvenli Transfer', desc: 'Osmangazi Köprüsü, TEM veya Kuzey Marmara üzerinden doğrudan hedef ile güvenli nakil gerçekleştirilir.' },
      { title: 'Kapıda İmzalı Teslimat', desc: 'Belirtilen kişi veya yetkili servise hasarsız indirme yapılarak tutanak kapatılır.' }
    ],
    pricingNote: 'Şehirlerarası araç taşıma fiyatlandırması toplam kilometre, otoyol/köprü geçişleri ve aracın kasa tipine göre belirlenir. Dönüş güzergâhına denk gelen planlı transferlerde özel ekonomik fiyat imkânı sunulur.',
    faqs: [
      { q: 'Gebze’den Ankara, İzmir veya Antalya’ya araç kaç saatte teslim edilir?', a: 'Tekli özel çekiciyle Gebze–Ankara aynı gün 5–6 saat içinde, Gebze–İzmir aynı gün 6–7 saat içinde, Gebze–Antalya ise mesafeye bağlı olarak aynı gün akşam veya ertesi sabah doğrudan teslim edilir.' },
      { q: 'Köprü ve otoyol ücretleri fiyata dahil mi?', a: 'Telefonda teklif verirken Osmangazi Köprüsü ve otoyol geçişlerinin fiyata dahil olduğu her şey net toplam tutarı paylaşıyoruz; sonradan ekstra yol ücreti istemiyoruz.' },
      { q: 'Şehirlerarası taşımada aracın içine eşya koyabilir miyim?', a: 'Bagaj bölümünde görüşü ve ağırlık dengesini bozmayan kişisel eşyalar (valiz vb.) bulunabilir; ancak yasal prosedür gereği ticari mal veya kıymetli evrak bulundurulmamalıdır.' },
      { q: 'Sıfır kilometre veya yüksek değerli lüks aracım sigortalı mı taşınır?', a: 'Evet. Araç değerine uygun yüksek limitli taşıma kaskosu poliçesi yükleme öncesinde hazırlanarak tarafınızla paylaşılır.' }
    ]
  },
  {
    slug: 'kazali-luks-arac-tasima',
    name: 'Lüks, Spor & Elektrikli Araç Çekici',
    shortName: 'Lüks & EV Çekici',
    tag: 'VIP Sıfır Temas',
    img: 'gebze-luks-arac',
    metaTitle: 'Gebze Lüks, Spor & Elektrikli Araç Çekici | VIP Hasarsız Taşıma',
    metaDesc: 'Gebze, Bilişim Vadisi, Mutlukent ve TEM hattında düşük şasili spor, lüks segment ve elektrikli araçlar için sıfır temaslı VIP çekici: 0533 945 45 14.',
    cardDesc: 'Alçak şasili spor otomobiller, premium sedanlar ve Togg, Tesla, Porsche Taycan gibi elektrikli araçlar için ekstra uzun rampalı VIP nakil.',
    bullets: [
      '6° altı eğim sağlayan ek uzun kompozit rampalar',
      'Elektrikli araç (EV) batarya altı tam koruma protokolü',
      'Yüksek teminatlı VIP taşıma kaskosu'
    ],
    lead: 'Gebze Bilişim Vadisi, Mutlukent, Darıca Bayramoğlu ve otoyol hattındaki lüks, sportif ve tam elektrikli araçların hassas batarya tabanı, karbon lip ve jant yapısına özel ekipmanlarla sıfır temaslı VIP nakil hizmeti veriyoruz.',
    scenarios: [
      'Tam elektrikli araçların (Togg T10X, Tesla Model Y, BMW i serisi, Mercedes EQ, Volvo EX, Porsche Taycan) şasi altının tamamı yüksek voltajlı lityum-iyon batarya paketiyle kaplıdır. Yanlış noktadan kriko basılması veya dik rampa açısıyla aracın altının sürtülmesi ciddi batarya muhafaza hasarına yol açabilir.',
      'Benzer şekilde yerden yüksekliği düşük spor otomobillerde, hava süspansiyonu (Airmatic) inmiş premium SUV ve sedanlarda standart platform açısı tampon altına temas eder. VIP operasyonlarımızda hidrolik kayar kasaya ek olarak kademeli düşük açı uzatma rampaları serilir ve araç altından tek bir milimetre temas olmadan yükleme gerçekleştirilir.',
      'Bağlama aşamasında jant tellerinden veya alüminyum salıncaklardan çekme yapılmaz; yumuşak kılıflı lastik üstü ağ kemerleriyle sabitleme tamamlanır. Araç sahiplerine yükleme ve teslimat aşamalarının tamamı anlık fotoğraf ve video ile raporlanır.'
    ],
    equipmentTitle: 'VIP & Elektrikli Araç (EV) Taşıma Donanımı',
    equipmentPoints: [
      'Süper spor ve Airmatic arızalı araçlar için kademeli 6° altı kompozit rampa seti',
      'Elektrikli araçlarda rejeneratif motor hasarını sıfırlayan 4 tekerlekli serbest taşıma',
      'Kumaş korumalı, çizmez jant koruyucu lastik üstü ağ spanzetler',
      'Togg, Tesla ve Avrupa premium marka yetkili servis prosedürlerine hakim deneyimli operatörler',
      'Yüksek bedelli özel VIP emtia taşıma sigortası'
    ],
    steps: [
      { title: 'Model & Çekme Modu Kontrolü', desc: 'Aracın modeli, süspansiyon yüksekliği ve EV çekme modu (Tow Mode) durumu telefonda netleştirilir.' },
      { title: 'Kademeli Düşük Açı Kurulumu', desc: 'Hidrolik kayar kasa indirilip ek uzatma rampaları hizalanarak sürtme ihtimali sıfırlanır.' },
      { title: 'Yumuşak Sabitleme & Fotoğraf Kaydı', desc: 'Araç jant ve gövdeye değmeyen tekstil kemerlerle kilitlenip dört açıdan fotoğraflanır.' },
      { title: 'Yetkili Servis VIP Teslimat', desc: 'İlgili marka yetkili servisine veya özel adrese tutanaklı ve kaskolu teslimat yapılır.' }
    ],
    pricingNote: 'Lüks ve elektrikli araç taşıma hizmetimizde ek düşük açı rampa kurulumu standart olarak dahildir; şeffaf sabit ücret yolculuk öncesi onayınıza sunulur.',
    faqs: [
      { q: 'Elektrikli aracımın şarjı tamamen bitti ve hareket etmiyor, nasıl çekiyorsunuz?', a: '12V sistemi aktifse araç çekme moduna (Tow Mode) alınarak kayar kasaya yüklenir; sistem tamamen kilitliyse tekerlek altı paten/doli aparatları veya ahtapot vinçle sürüklemeden taşıyoruz.' },
      { q: 'Hava süspansiyonu (Airmatic) çökmüş aracı sürtmeden alabilir misiniz?', a: 'Evet. Kademeli uzatma rampaları ve tekerlek altı takoz tekniğiyle gövdesi yere çok yaklaşmış araçları dahi ön tampona dokunmadan platforma alıyoruz.' },
      { q: 'Bilişim Vadisi ve Gebze’den İstanbul’daki yetkili premium servislere taşıyor musunuz?', a: 'Evet. Kartal, Maltepe, Ataşehir, Maslak, İstinye ve İzmit’teki tüm yetkili premium ve EV servislerine sigortalı nakil gerçekleştiriyoruz.' },
      { q: 'Taşıma sırasında aracımın fotoğraf ve canlı konum bilgisi paylaşılıyor mu?', a: 'İsteğiniz doğrultusunda yükleme anı fotoğrafları, canlı konum linki ve servise teslim anı görüntüleri WhatsApp üzerinden anlık paylaşılır.' }
    ]
  },
  {
    slug: 'atv-karavan-ozel-tasima',
    name: 'Karavan, ATV & Özel Araç Taşıma',
    shortName: 'Karavan & ATV',
    tag: 'Özel Platform',
    img: 'gebze-atv-ozel',
    metaTitle: 'Gebze Karavan, ATV & Özel Araç Taşıma | Sigortalı Platform Nakil',
    metaDesc: 'Gebze, Darıca, Eskihisar ve Kocaeli genelinde çekme karavan, ATV, UTV, golf aracı ve klasik otomobil için özel platform taşıma: 0533 945 45 14.',
    cardDesc: 'Çekme karavan, motokaravan, ATV/UTV arazi araçları, klasik otomobiller ve özel proje araçları için dengeli ve kaskolu nakliye.',
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
      'Şehir içi ve şehirlerarası sigortalı özel taşıma tutanağı'
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
      { q: 'Çekme karavanımı Gebze’den Ege veya Akdeniz’e götürebilir misiniz?', a: 'Evet. İster platform üzerinde ister uygun çeki demirli araçlarımızla kaskolu şehirlerarası karavan transferi sağlıyoruz.' }
    ]
  }
];

const { SERVICES_SEO } = require('./services-seo');

const SERVICES_WITH_SEO = SERVICES.map(s => ({
  ...s,
  extraSections: (SERVICES_SEO[s.slug] && SERVICES_SEO[s.slug].extraSections) || []
}));

module.exports = { SERVICES: SERVICES_WITH_SEO };
