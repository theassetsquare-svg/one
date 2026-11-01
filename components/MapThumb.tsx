/**
 * [전체67-1 2026-11-01] PageThumb 앞단 — 카드 표(lib/thumb-map.json)에 이 쪽이 있으면 그 카드를, 없으면 준 src·alt 그대로 PageThumb 에 넘긴다.
 * og:image(NightSEO·PickSEO·AreaSEO)와 같은 표를 보므로 본문 첫 그림 = og 그림이 지켜진다(게이트 ②).
 */
import PageThumb from './PageThumb';
import { useThumb } from '@/lib/thumb';

export default function MapThumb({ src, alt }: { src: string; alt: string }) {
  const 표카드 = useThumb();
  return <PageThumb src={표카드 ? 표카드.file : src} alt={표카드 ? 표카드.alt : alt} />;
}
