import type { GetStaticPaths, GetStaticProps } from 'next';
import PickVenuePage from '@/components/pick/PickVenuePage';
import { VENUES } from '@/lib/pick';

/**
 * ★★ 2026-08-29 — 가게 페이지를 /info/ 폴더 안으로 옮겼다.
 *   평면 주소는 색인 0.2%, 폴더 주소는 100% [[index-cause-flat-url-2026-08-28]]
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
