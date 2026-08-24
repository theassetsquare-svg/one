import type { GetStaticPaths, GetStaticProps } from 'next';
import PickVenuePage from '@/components/pick/PickVenuePage';
import { VENUES } from '@/lib/pick';

/**
 * 40개 업소 "고르는 기준" 페이지 — /pick/{slug}
 *
 * ★ num 이 붙은 업소는 도메인 바로 뒤 숫자 주소(/1)로 옮겨졌으므로 여기서 만들지 않습니다.
 *   (옛 주소를 남기지 않는다 — 301 리다이렉트도 만들지 않습니다)
 */
export default PickVenuePage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: VENUES.filter((v) => !v.num).map((v) => ({ params: { slug: v.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { slug: String(params?.slug) },
});
