'use strict';
/**
 * ============================================================================
 * GEBZE YOL YARDIM — TÜM 26 HİZMET BÖLGESİ (TEK KAYNAK BİRLEŞTİRİCİ)
 * ============================================================================
 */

const { REGIONS_PART_1 } = require('./regions-part1');
const { REGIONS_PART_2 } = require('./regions-part2');
const { REGIONS_SEO_1 } = require('./regions-seo-1');
const { REGIONS_SEO_2 } = require('./regions-seo-2');

const SEO_MAP = { ...REGIONS_SEO_1, ...REGIONS_SEO_2 };

// İlk 6 stratejik (featured) bölge ana sayfada önde görünür, kalan 20 bölge toggle ile açılır.
const ALL_RAW = [...REGIONS_PART_1, ...REGIONS_PART_2].map(r => ({
  ...r,
  extraSections: (SEO_MAP[r.slug] && SEO_MAP[r.slug].extraSections) || []
}));
const REGIONS = [
  ...ALL_RAW.filter(r => r.featured),
  ...ALL_RAW.filter(r => !r.featured)
];

module.exports = { REGIONS };
