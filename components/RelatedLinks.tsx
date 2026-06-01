import Link from 'next/link';

type Related = { href: string; label: string; hint: string };

const ALL: Record<string, Related> = {
  '/': { href: '/', label: '홈', hint: '한눈에 보는 가게 안내' },
  '/event': { href: '/event', label: '이벤트', hint: '여성 손님 차비 + 맥주' },
  '/story': { href: '/story', label: '막내 이야기', hint: '운영 철학과 응대 약속' },
  '/atmosphere': { href: '/atmosphere', label: '분위기', hint: '음악·자리·손님층' },
  '/first-visit': { href: '/first-visit', label: '첫 방문', hint: '6단계 가이드' },
  '/access': { href: '/access', label: '오시는 길', hint: '시내·청주·세종·주차' },
  '/faq': { href: '/faq', label: 'FAQ', hint: '자주 묻는 12가지' },
  '/review': { href: '/review', label: '후기', hint: '단골 진짜 분위기' },
  '/contact': { href: '/contact', label: '예약 직통', hint: '' },
};

export default function RelatedLinks({ current }: { current: string }) {
  const all = Object.values(ALL).filter((x) => x.href !== current);
  const picks = all.slice(0, 3);
  if (picks.length === 0) return null;
  return (
    <section aria-labelledby="rl-h" className="related">
      <h2 id="rl-h">이어 보면 좋은 페이지</h2>
      <div className="bento">
        {picks.map((p) => (
          <Link key={p.href} href={p.href} className="bic" aria-label={`${p.label} — ${p.hint}`}>
            <h3>{p.label}</h3>
            <p>{p.hint}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function pickRelated(current: string, prefer: string[]) {
  const list: Related[] = [];
  for (const k of prefer) {
    if (k !== current && ALL[k]) list.push(ALL[k]);
    if (list.length >= 3) break;
  }
  return list;
}
