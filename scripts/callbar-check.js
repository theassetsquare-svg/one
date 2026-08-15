/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * [14] 고정 전화바 검증 — Playwright.
 * 실행: node scripts/callbar-check.js <baseUrl>
 *  ① scrollHeight > innerHeight  ② scrollY=0 일 때 .callbar top
 *  ③ 최하단 스크롤 + 300ms 후 top  ④ 차이 0 이어야 PASS
 *  ⑤ 모바일 390x844 / 데스크톱 1920x1080  → 13페이지 x 2 = 26회
 * 추가: 조상 체인에 transform/filter/perspective/backdrop-filter/will-change/contain 검사,
 *       G12 고정바가 푸터 .ad-inquiry 를 가리지 않는지, G08 .ad-inquiry 대비.
 */
const { chromium } = require('playwright');

const BASE = process.argv[2] || 'http://localhost:4321';
const SLUGS = [
  'eunpyeong-night', 'changwon-night', 'ulsan-night', 'gangnam-night', 'daejeon-night',
  'sillim-night', 'sangbong-night', 'suyu-night', 'busan-night', 'suwon-night',
  'ansan-night', 'yucheon-night', 'ilsan-night',
];
const VIEWPORTS = [
  { name: 'mobile 390x844', width: 390, height: 844 },
  { name: 'desktop 1920x1080', width: 1920, height: 1080 },
];

const lin = (c) => { const s = c / 255; return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4); };
const lum = (rgb) => 0.2126 * lin(rgb[0]) + 0.7152 * lin(rgb[1]) + 0.0722 * lin(rgb[2]);
const parseRgb = (s) => (s.match(/\d+/g) || ['0', '0', '0']).slice(0, 3).map(Number);
const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

(async () => {
  const browser = await chromium.launch({
    ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}),
    args: ['--no-sandbox'],
  });
  const rows = [];
  let fails = 0;
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    for (const slug of SLUGS) {
      const url = `${BASE}/night/${slug}`;
      const t0 = Date.now();
      const resp = await page.goto(url, { waitUntil: 'load', timeout: 45000 });
      const loadMs = Date.now() - t0;
      await page.waitForSelector('.callbar');

      const data = await page.evaluate(() => {
        const bar = document.querySelector('.callbar');
        const scrollable = document.documentElement.scrollHeight > window.innerHeight;
        const top0 = bar.getBoundingClientRect().top;
        // 조상 체인 검사
        const bad = [];
        let el = bar.parentElement;
        while (el) {
          const cs = getComputedStyle(el);
          const hit = [];
          if (cs.transform && cs.transform !== 'none') hit.push('transform');
          if (cs.filter && cs.filter !== 'none') hit.push('filter');
          if (cs.perspective && cs.perspective !== 'none') hit.push('perspective');
          if (cs.backdropFilter && cs.backdropFilter !== 'none') hit.push('backdrop-filter');
          if (/transform/.test(cs.willChange || '')) hit.push('will-change:transform');
          if (/paint|strict|content/.test(cs.contain || '')) hit.push('contain');
          if (hit.length) bad.push(`${el.tagName}${el.id ? '#' + el.id : ''}:${hit.join('/')}`);
          el = el.parentElement;
        }
        const parentTag = bar.parentElement ? bar.parentElement.tagName : '?';
        // 고정바 vs 푸터 .ad-inquiry 겹침
        const ad = document.querySelector('.ad-inquiry');
        const adCs = ad ? getComputedStyle(ad) : null;
        return {
          scrollable,
          top0,
          bad,
          parentTag,
          barH: bar.getBoundingClientRect().height,
          adBg: adCs ? adCs.backgroundColor : '',
          adFg: adCs ? adCs.color : '',
        };
      });

      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await page.waitForTimeout(300);
      const after = await page.evaluate(() => {
        const bar = document.querySelector('.callbar');
        const barR = bar.getBoundingClientRect();
        const ad = document.querySelector('.ad-inquiry');
        const adR = ad ? ad.getBoundingClientRect() : null;
        return {
          top1: barR.top,
          // 고정바가 .ad-inquiry 를 덮는지 (겹침 픽셀)
          overlap: adR ? Math.max(0, Math.min(adR.bottom, barR.bottom) - Math.max(adR.top, barR.top)) : -1,
        };
      });

      const diff = Math.abs(after.top1 - data.top0);
      const barText = await page.$eval('.callbar', (e) => e.textContent.trim());
      const hasBesta = barText.includes('besta12');
      const ok = data.scrollable && diff === 0 && data.bad.length === 0 && after.overlap === 0;
      if (!ok) fails++;
      rows.push({
        vp: vp.name, slug, http: resp.status(), loadMs,
        scrollable: data.scrollable, top0: data.top0.toFixed(1), top1: after.top1.toFixed(1),
        diff, ancestors: data.bad.length ? data.bad.join(',') : 'clean',
        parent: data.parentTag,
        adOverlap: after.overlap,
        adContrast: data.adBg ? contrast(parseRgb(data.adBg), parseRgb(data.adFg)).toFixed(2) : '-',
        barBesta: hasBesta ? 'yes' : 'no',
        pass: ok,
      });
    }
    await ctx.close();
  }
  await browser.close();
  console.log(JSON.stringify(rows, null, 0).replace(/\},\{/g, '},\n{'));
  console.log(`\n측정 ${rows.length}회 / FAIL ${fails}회`);
  process.exit(fails ? 1 : 0);
})();
