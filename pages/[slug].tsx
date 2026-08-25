import type { GetStaticPaths, GetStaticProps } from 'next';
import PickVenuePage from '@/components/pick/PickVenuePage';
import { VENUES } from '@/lib/pick';

/**
 * ★ 가게 페이지 — 메인주소 바로 뒤에 가게이름 (/sillim-grandprix-night)
 *   2026-08-26 대표님 확정. 중간에 /pick/ 같은 단어를 넣지 않는다.
 *
 * 주의: Next.js 는 고정 라우트(/faq, /access …)를 동적 라우트보다 먼저 찾으므로
 *       기존 루트 페이지들과 부딪히지 않습니다.
 */
export default function VenuePage({ slug }: { slug: string }) {
  return <PickVenuePage slug={slug} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: VENUES.map((v) => ({ params: { slug: v.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug);
  const v = VENUES.find((x) => x.slug === slug);
  if (!v) throw new Error(`unknown venue route: ${slug}`);
  return { props: { slug: v.slug } };
};
