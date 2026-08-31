/** 주소를 슬래시 정본으로 맞춘다.
 *
 *  2026-08-31 — 이 사이트는 next.config.ts 의 trailingSlash: true 로
 *  /access/ 처럼 슬래시 붙은 주소가 200 이다. canonical 이 슬래시 없는 쪽을
 *  가리키면 네이버에게 "이 문서의 정본은 리디렉션되는 주소"라고 알려주는 꼴이 된다.
 *
 *  정규식은 쓰지 않는다 — 점을 이스케이프하다 아무 주소나 걸리는 사고가 났었다.
 */
export function 슬래시정본(경로: string): string {
  if (!경로 || 경로 === "/") return "/";
  if (경로.endsWith("/")) return 경로;
  const 몸통 = 경로.split("#")[0].split("?")[0];
  const 뒤 = 경로.slice(몸통.length);
  const 끝조각 = 몸통.split("/").pop() || "";
  if (끝조각.includes(".")) return 경로;   /* /llms.txt 같은 파일 주소는 그대로 */
  return 몸통 + "/" + 뒤;
}
