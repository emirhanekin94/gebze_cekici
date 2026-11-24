# Swiss / Apple Editorial Monochrome Towing Website Design System (v11)

> **Kullanım Amacı:** Bu dosya, `gebzecekici.tr` için sıfırdan tasarlanan siyah-beyaz, yüksek dönüşümlü, PageSpeed 98–100 uyumlu **Apple / Swiss Editorial** arayüz sisteminin birebir teknik şablonudur. Yeni bir çekici/yol yardım sitesi istendiğinde bu tasarım sistemi birebir yeniden uygulanabilir.

---

## 1. Renk Paleti (CSS Custom Properties)

```css
:root {
  color-scheme: light;

  /* Editorial Palette — Warm Cloud White + Crisp White + Matte Obsidian */
  --bg: #F7F6F2;
  --surface: #FFFFFF;
  --surface-tint: #EFECE6;
  --obsidian: #0E0E10;
  --obsidian-2: #17171B;
  --obsidian-hover: #222228;

  /* Ink Hierarchy */
  --ink: #0E0E10;
  --ink-2: #3F3E3B;
  --muted: #6E6C66;
  --ink-inv: #FFFFFF;
  --muted-inv: #8E8E93;

  /* Crisp Architectural Hairlines */
  --line: rgba(14, 14, 16, 0.09);
  --line-strong: rgba(14, 14, 16, 0.16);
  --obs-line: rgba(255, 255, 255, 0.1);
  --obs-line-strong: rgba(255, 255, 255, 0.18);

  /* Purposeful Micro-Accents (Yalnızca ikon, nokta ve yıldızlarda) */
  --signal-red: #DC2626;
  --wp-green: #16A34A;
  --wp-bright: #4ADE80;
  --star: #F59E0B;

  /* Diffused Studio Shadows */
  --shadow-xs: 0 1px 2px rgba(14, 14, 16, 0.04);
  --shadow-sm: 0 6px 24px rgba(14, 14, 16, 0.05);
  --shadow-md: 0 22px 48px -14px rgba(14, 14, 16, 0.12);
  --shadow-obs: 0 24px 60px -16px rgba(14, 14, 16, 0.28);

  /* Radii & Motion */
  --r-sm: 10px;
  --r-md: 16px;
  --r-lg: 22px;
  --r-xl: 26px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);

  /* Layout */
  --header-h: 72px;
  --container: 1280px;
}
```

---

## 2. Tipografi Sistemi

- **Display / Başlıklar:** `'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` (`font-weight: 700, 800`, `letter-spacing: -0.035em` – `-0.045em`, `line-height: 1.01` – `1.08`)
- **Body / Gövde Metni:** `'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` (`font-weight: 400, 500, 600, 700`, `line-height: 1.62`)
- **Telemetri / Koordinat / Etiketler:** `'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace` (`font-weight: 500, 600`, `text-transform: uppercase`, `letter-spacing: 0.08em`, `font-size: 0.7rem`)
- **Google Fonts (Non-Blocking):** `media="print" onload="this.media='all'"` ile PageSpeed render-blocking engellenir.

---

## 3. Mimari Bileşenler & Grid Yapısı

### A. Floating Glass Header (`.site-header` & `.header-inner`)
- Yapışkan (`position: sticky; top: 0; z-index: 900`), yuvarlatılmış (`border-radius: 15px`), buzlu cam (`rgba(255, 255, 255, 0.86)`, `backdrop-filter: saturate(180%) blur(20px)`).
- Sol: 34–36px amblem + `.logo-title` + `.logo-sub` (Bölge sayfalarında dinamik olarak bölge adına dönüşür).
- Orta: Tek satır temiz desktop navigasyonu.
- Sağ: Mat siyah (`#0E0E10`) `.btn-header-call` arama butonu (`#F87171` telefon ikonu).
- Mobil: `<header>` dışında kardeş element olarak duran `.mobile-drawer` tam ekran çekmece menüsü.

### B. 12-Kolon Editorial Hero & Bento Stage (`.hero-section`)
- **Üst Satır (`.hero-editorial-top`):** Solda canlı telemetri çubuğu (`.telemetry-bar`: yeşil nokta + koordinat + ana arterler) ve büyük anıtsal `<h1>` (ikinci yarısı `var(--muted)` kontrastlı); sağda `.hero-lead` açıklaması ve **sadece masaüstünde (`>= 769px`) görünen** CTA butonları.
- **Alt Sahne (`.hero-stage`):**
  - Sol (~%60): 4:3 kesintisiz `.showcase-card` saha fotoğrafı + sol alt köşede buzlu siyah `.showcase-corner-tag` rozeti.
  - Sağ (~%40): Mat Obsidyen (`#0E0E10`) `.dispatch-panel` hızlı teklif konsolu (Bölge + Araç Tipi seçimi + beyaz `WhatsApp'tan Fiyat Al` butonu + 3'lü güven istatistik şeridi).

### C. İçerik Bölümleri & Kart Sistemi
- **Hizmetler / Bölgeler / Blog:** Saf beyaz (`#FFFFFF`) kartlar, `1px solid var(--line)` ince mimari çerçeve, `border-radius: 22px`, yumuşak hover yükselmesi.
- **Neden Biz (Bento Grid):** Fotoğraflı sol vitrin kartı + sağda 2x2 mimari teknik standart kartları.
- **Obsidian Dark Highlight Band:** Mat siyah (`#0E0E10`) tam genişlikte vurgu şeritleri ve istatistik kutuları.
- **Mat Karbon 4 Sütunlu Footer (`.site-footer`):** Üst bantta büyük telefon numarası ve WhatsApp yönlendirme; altta 4 sütunlu link mimarisi (Hizmetler, Popüler Bölgeler, Kurumsal, İntikal Merkezi) + KVKK linki.

### D. Alt Sabit Aksiyon Çubuğu (`.sticky-actions.mobile-sticky-dock`)
- **Mobil (`<= 768px`):** Ekranın altına tam oturan buzlu beyaz cam bar (`rgba(255, 255, 255, 0.97)`, `border-radius: 18px 18px 0 0`, yukarı yönlü gölge `0 -10px 30px rgba(14, 14, 16, 0.22)`).
  - Sol: `HEMEN ARA` — Mat siyah (`#0E0E10`), beyaz metin, `#F87171` telefon ikonu.
  - Sağ: `KONUM AT` — Sıcak taş beyazı (`#F4F3EF`), siyah metin, `1.5px` çerçeve, `#16A34A` WhatsApp ikonu.
- **Masaüstü (`>= 769px`):** Sağ alt köşede kompakt yüzen buzlu beyaz kapsül (`right: 22px; bottom: 22px; border-radius: 14px`).

---

## 4. Performans, SEO & Tasarım İlkeleri
1. **Zero AI Slop:** Neon gradient yok, yapay parlama yok, başlıklarda ham emoji yok.
2. **Zero CLS:** Her `<img>` üzerinde kesin `width` ve `height`, `<picture>` ile mobil (`-m.webp`) ve masaüstü (`.webp`) ayrımı.
3. **Safari Reader Mode Koruması:** Bölge ve hizmet sayfalarında `<article>` yerine `<div class="article-body">` ve `.seo-section-block` kullanılır.
4. **Hız:** Vanilla CSS + defer Vanilla JS; harita için tıklamayla yüklenen Map Facade (`.map-facade`).
5. **Kaynak Yedeği:** Orijinal tam CSS dosyası Git geçmişinde `develop` branch commit `a82fbec` altında saklıdır (`git show a82fbec:css/style.css`).
