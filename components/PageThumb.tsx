/**
 * 본문 썸네일 — og:image 와 "같은 파일"을 본문에도 실제로 렌더합니다.
 *
 * 네이버는 검색결과 썸네일을 고를 때 og:image 만 보지 않고 본문에 실제로 존재하는
 * 이미지를 함께 봅니다. 그래서 전 페이지에서 직답 박스(없으면 h1) 바로 아래에
 * 같은 파일을 1200x1200 원본 크기 속성 그대로 넣습니다.
 *
 * ⚠️ src 는 반드시 해당 페이지 og:image 와 동일한 파일이어야 합니다 (게이트 ②에서 검사).
 * ⚠️ alt 에는 가게 이름(허브는 사이트 이름) + 페이지 주제가 들어가야 합니다 (게이트 ⑥).
 */
export default function PageThumb({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={1200}
      height={1200}
      style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '18px auto', borderRadius: 18 }}
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
  );
}
