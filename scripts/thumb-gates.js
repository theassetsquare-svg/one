/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * 썸메일 노출 게이트 T1~T6 — 네이버가 썸네일을 안 띄울 핑계를 0개로 만드는 검사기.
 * 실행: npm run build && node scripts/thumb-gates.js   (하나라도 FAIL 이면 배포 금지)
 *
 * 검사 대상: out/ 안의 모든 정적 HTML (404·구글 인증 파일 제외).
 *
 *   T1 본문 <img> 존재
 *   T2 og:image 파일 == 본문 img 파일 (같은 파일이어야 함)
 *   T3 메타 9종 완비 (og:image / secure_url / width 1200 / height 1200 / type png /
 *      alt / twitter:card=summary / twitter:image / name=thumbnail)
 *   T4 PNG 실측 1200x1200
 *   T5 PNG 300KB 이하
 *   T6 alt 에 가게 이름(허브·홈은 페이지 이름) 포함 — alt 첫 어절이 <title> 안에 있는지로 검사
 *
 * ⚠️ 예외 1건: 홈(index.html) 은 "헤더·푸터·고정바 없이 글만 보이게" 라는 별도 지시가 있는
 *    단독 성공스토리 페이지라 본문 이미지를 넣지 않습니다(T1·T2 면제, 나머지 전부 적용).
 *    면제 사실은 아래 결과에 EXCEPTION 으로 그대로 출력합니다. 숨기지 않습니다.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'out');
const PUBLIC = path.join(ROOT, 'public');
const SKIP = ['404.html', 'googlea4fecf0a9f9b8d59.html'];
const NO_BODY_IMG = ['index.html']; // 홈 — 위 주석 참조
const LIMIT = 300 * 1024;

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) {
      if (['_next', 'og', 'icons'].includes(e.name)) continue;
      walk(p);
    } else if (e.name.endsWith('.html') && !SKIP.includes(e.name)) files.push(p);
  }
})(OUT);
files.sort();

const one = (h, re) => {
  const m = h.match(re);
  return m ? m[1] : null;
};
const relOf = (u) => (u || '').replace(/^https?:\/\/[^/]+/, '');

(async () => {
  const rows = [];
  for (const f of files) {
    const rel = f.replace(OUT + path.sep, '');
    const h = fs.readFileSync(f, 'utf8');
    const body = (h.match(/<body[\s\S]*<\/body>/) || [''])[0];
    const imgs = [...body.matchAll(/<img[^>]*>/g)].map((m) => m[0]).filter((t) => !/src="data:/.test(t));
    const bodyImg = imgs[0] || null;
    const bodySrc = bodyImg ? one(bodyImg, /src="([^"]+)"/) : null;
    const bodyAlt = bodyImg ? one(bodyImg, /alt="([^"]*)"/) : null;
    const og = one(h, /property="og:image" content="([^"]+)"/);
    const meta = {
      'og:image': og,
      'og:image:secure_url': one(h, /property="og:image:secure_url" content="([^"]+)"/),
      'og:image:width': one(h, /property="og:image:width" content="([^"]+)"/),
      'og:image:height': one(h, /property="og:image:height" content="([^"]+)"/),
      'og:image:type': one(h, /property="og:image:type" content="([^"]+)"/),
      'og:image:alt': one(h, /property="og:image:alt" content="([^"]+)"/),
      'twitter:card': one(h, /name="twitter:card" content="([^"]+)"/),
      'twitter:image': one(h, /name="twitter:image" content="([^"]+)"/),
      thumbnail: one(h, /name="thumbnail" content="([^"]+)"/),
    };
    const title = one(h, /<title[^>]*>([^<]*)<\/title>/) || '';
    const exempt = NO_BODY_IMG.includes(path.basename(rel)) && rel === path.basename(rel);

    // 파일 실측
    let dim = null;
    let kb = null;
    const ogRel = relOf(og);
    if (ogRel) {
      const p = path.join(PUBLIC, ogRel);
      if (fs.existsSync(p)) {
        const md = await sharp(p).metadata();
        dim = `${md.width}x${md.height}`;
        kb = Math.round(fs.statSync(p).size / 1024);
      }
    }

    const fail = [];
    if (!exempt && !bodyImg) fail.push('T1 본문img 없음');
    if (!exempt && bodyImg && relOf(bodySrc) !== ogRel) fail.push(`T2 og≠본문(${relOf(bodySrc)} vs ${ogRel})`);
    for (const [k, v] of Object.entries(meta)) if (!v) fail.push(`T3 ${k} 없음`);
    if (meta['og:image'] && !/^https:\/\//.test(meta['og:image'])) fail.push('T3 og:image 절대URL 아님');
    if (meta['og:image:width'] !== '1200') fail.push(`T3 width=${meta['og:image:width']}`);
    if (meta['og:image:height'] !== '1200') fail.push(`T3 height=${meta['og:image:height']}`);
    if (meta['og:image:type'] !== 'image/png') fail.push(`T3 type=${meta['og:image:type']}`);
    if (meta['twitter:card'] !== 'summary') fail.push(`T3 twitter:card=${meta['twitter:card']}`);
    if (dim !== '1200x1200') fail.push(`T4 실측 ${dim}`);
    if (kb === null || kb > 300) fail.push(`T5 ${kb}KB`);
    const altForName = (bodyAlt || meta['og:image:alt'] || '').trim();
    const firstWord = altForName.split(/\s+/)[0] || '';
    if (!firstWord || !title.includes(firstWord)) fail.push(`T6 alt 이름 불일치(${firstWord})`);
    if (!exempt && bodyAlt !== null && meta['og:image:alt'] && bodyAlt !== meta['og:image:alt'])
      fail.push('T6 본문alt≠og:alt');

    rows.push({ rel, exempt, bodySrc: relOf(bodySrc), og: ogRel, dim, kb, fail, alt: altForName });
  }

  const failed = rows.filter((r) => r.fail.length);
  const exempts = rows.filter((r) => r.exempt);
  console.log('=== 썸네일 게이트 T1~T6 ===');
  console.log(`검사 페이지 ${rows.length}장 · 통과 ${rows.length - failed.length} · 실패 ${failed.length} · 예외 ${exempts.length}`);
  for (const r of exempts) console.log(`EXCEPTION | ${r.rel} | 본문img 면제(글만 보이는 단독 페이지) — 메타·파일 검사는 통과 필요`);
  for (const r of failed) console.log(`FAIL | ${r.rel} | ${r.fail.join(' / ')}`);
  const dims = [...new Set(rows.map((r) => r.dim))];
  const maxKb = Math.max(...rows.map((r) => r.kb || 0));
  console.log(`치수 분포 ${dims.join(',')} · 최대 용량 ${maxKb}KB`);
  fs.writeFileSync(path.join(ROOT, '.thumb-report.json'), JSON.stringify(rows, null, 1));
  process.exit(failed.length ? 1 : 0);
})();
