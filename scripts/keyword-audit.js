/* eslint-disable @typescript-eslint/no-var-requires */
const https = require('https');

const SITE = 'https://one-5ei.pages.dev';
const PAGES = [
  '/',
  '/event',
  '/story',
  '/atmosphere',
  '/first-visit',
  '/access',
  '/faq',
  '/review',
  '/contact',
];

// Keywords to monitor for stuffing — primary brand/local keywords
const KEYWORDS = ['대전원나이트', '대전나이트', '대전 나이트클럽', '까치', '38세', '차비 3만원', '맥주'];

// Maximum acceptable density per VISIBLE body text (excluding scripts/meta)
const MAX_BODY_OCCURRENCES = {
  '대전원나이트': 8,
  '대전나이트': 4,
  '대전 나이트클럽': 3,
  '까치': 25,
  '38세': 12,
  '차비 3만원': 8,
  '맥주': 10,
};

// Banned patterns — 3 keywords in a row anywhere in body
const STUFFING_PATTERNS = [
  /대전원나이트[\s·,]*대전나이트[\s·,]*대전 나이트클럽/,
  /대전나이트[\s·,]*대전원나이트[\s·,]*대전 나이트클럽/,
  /대전 나이트클럽[\s·,]*대전원나이트[\s·,]*대전나이트/,
];

function get(path) {
  return new Promise((resolve, reject) => {
    https
      .get(SITE + path, (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

// Extract MAIN body text only (excludes nav/footer/RelatedLinks/sticky FCB)
// Reason: nav and footer keywords are semantic chrome, not content stuffing.
function extractVisibleText(html) {
  let cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<head[\s\S]*?<\/head>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    // Remove RelatedLinks (class="related") and sticky phone button (class="fcb")
    .replace(/<section[^>]*class="[^"]*related[^"]*"[\s\S]*?<\/section>/gi, '')
    .replace(/<a[^>]*class="[^"]*fcb[^"]*"[\s\S]*?<\/a>/gi, '');
  return cleaned
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function countAll(text, needle) {
  let count = 0;
  let i = 0;
  while ((i = text.indexOf(needle, i)) !== -1) {
    count++;
    i += needle.length;
  }
  return count;
}

(async () => {
  let totalFail = 0;
  const failPages = [];

  for (const p of PAGES) {
    const html = await get(p);
    const body = extractVisibleText(html);
    const bytes = Buffer.byteLength(body, 'utf8');

    console.log(`\n=== ${p} ===`);
    console.log(`  Body text: ${bytes} bytes`);

    const issues = [];

    // Density check
    for (const kw of KEYWORDS) {
      const n = countAll(body, kw);
      const max = MAX_BODY_OCCURRENCES[kw];
      const flag = n > max ? `❌ ${n}/${max}` : `✅ ${n}/${max}`;
      console.log(`  ${kw}: ${flag}`);
      if (n > max) issues.push(`${kw}=${n} (max ${max})`);
    }

    // Stuffing pattern check
    for (const re of STUFFING_PATTERNS) {
      if (re.test(body)) {
        const m = body.match(re);
        issues.push(`stuffing pattern: ${m[0].slice(0, 60)}`);
      }
    }

    // Repeated-word adjacency check (same keyword 3 times within 80 chars)
    for (const kw of KEYWORDS) {
      const re = new RegExp(`${kw}[\\s\\S]{0,80}${kw}[\\s\\S]{0,80}${kw}`, 'g');
      const m = body.match(re);
      if (m) issues.push(`triple proximity: ${kw}`);
    }

    if (issues.length === 0) {
      console.log('  ✅ no stuffing detected');
    } else {
      console.log('  ⚠️ issues:', issues.join(' | '));
      totalFail++;
      failPages.push({ p, issues });
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  if (totalFail === 0) {
    console.log('🎉 ALL 9 PAGES PASSED keyword stuffing audit');
    process.exit(0);
  } else {
    console.log(`❌ ${totalFail}/${PAGES.length} pages have stuffing issues`);
    process.exit(1);
  }
})().catch((e) => {
  console.error('audit error:', e);
  process.exit(1);
});
