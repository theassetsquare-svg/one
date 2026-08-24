import type { GetStaticPaths, GetStaticProps } from 'next';
import PickVenuePage from '@/components/pick/PickVenuePage';
import { VENUES } from '@/lib/pick';

/**
 * ★ 미색인 업소 페이지의 새 주소 — 도메인 바로 뒤 숫자 하나 (/1, /2 …)
 *   2026-08-23 대표님 확정. 업소 데이터에 num 이 붙으면 이 라우트가 그 페이지를 만듭니다.
 *
 * 주의: Next.js 는 고정 라우트(/faq, /access …)를 동적 라우트보다 먼저 찾으므로
 *       기존 루트 페이지들과 부딪히지 않습니다. 여기서는 숫자만 만듭니다.
 */
export default function NumPage({ slug }: { slug: string }) {
  return <PickVenuePage slug={slug} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: VENUES.filter((v) => v.num).map((v) => ({ params: { num: String(v.num) } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const num = String(params?.num);
  const v = VENUES.find((x) => String(x.num) === num);
  if (!v) throw new Error(`unknown num route: ${num}`);
  return { props: { slug: v.slug } };
};
