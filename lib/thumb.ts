/**
 * [전체67-1 2026-11-01] 쪽마다 고유 카드(대표님 2026-09-24 「썸네일 19곳 모든 쪽」) — i·j·f·g 와 같은 꼴.
 * lib/thumb-map.json(쪽 경로 → 카드 파일·alt)에 있으면 그 카드를 og·본문 첫 그림·JSON-LD image 에 같이 쓴다.
 * 표는 naver-watch/scripts/thumb/apply-thumbs.mjs 가 만든다. 없는 쪽은 옛 그림(자료의 ogV 이름) 그대로.
 * 경로는 next/router 의 asPath(정적 내보내기에서도 그 쪽 경로) — 서버·브라우저가 같은 값을 본다.
 */
import { useRouter } from 'next/router';
import 카드표 from './thumb-map.json';

export type 쪽카드 = { file: string; alt: string; ogOnly?: boolean };
export function 카드찾기(pathname: string): 쪽카드 | undefined {
  const p0 = pathname.split(/[?#]/)[0] || '/';
  const p = p0.endsWith('/') ? p0 : p0 + '/';
  return (카드표 as { 쪽: Record<string, 쪽카드> }).쪽[p];
}
export function useThumb(): 쪽카드 | undefined {
  const r = useRouter();
  return 카드찾기(r?.asPath || '/');
}
