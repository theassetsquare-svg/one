import Head from 'next/head';
import AdContact from '@/components/AdContact';
import { AD_KAKAO, SITE, VENUES, nightPath } from '@/lib/night';
import { AREAS, areaPath } from '@/lib/area';

/**
 * /night/ 목록 허브. 13개 업소 페이지로 1단계 직접 링크합니다.
 *
 * ⚠️ 기존 대전원나이트 홈(/)과 불광동호박나이트 페이지는 서로 별개 가게라 링크로 묶지 않습니다.
 *    그래서 이 허브도 기존 페이지를 수정해 붙이지 않고 독립 목록으로 둡니다.
 */
const CSS = `
body{padding-bottom:calc(84px + env(safe-area-inset-bottom,0px))}
div.callbar{
  position:fixed; left:0; right:0; bottom:0; z-index:99999;
  display:flex; align-items:center; justify-content:center; gap:12px;
  height:64px; box-sizing:content-box; padding:0;
  padding-bottom:env(safe-area-inset-bottom,0px);
  background:#111; color:#fff; font-weight:800; font-size:18px;
  box-shadow:0 -2px 14px rgba(0,0,0,.35); border-top:0;
  transform:translateZ(0); backface-visibility:hidden;
}
div.callbar span{display:flex; align-items:center; gap:6px; white-space:nowrap}
div.callbar b{color:#FFD700}
@media(max-width:480px){
  div.callbar{height:60px; font-size:16px}
  body{padding-bottom:calc(80px + env(safe-area-inset-bottom,0px))}
}
.nb-hero{padding:clamp(28px,6vw,56px) 20px 8px; text-align:center}
.nb-hero h1{font-size:clamp(1.8rem,6vw,3.2rem); font-weight:900; color:#FFD700; line-height:1.15; margin-bottom:12px}
.nb-hero p{color:#ccc; max-width:760px; margin:0 auto}
`;

/* ★ 2026-08-31 — trailingSlash: true 로 바뀌어 /night/ 가 200 이다. */
const canonical = `${SITE}/night/`;
const OG_ALT = '나이트 안내 13곳 목록 — 지역별 위치·시간·자리 정리';

export default function NightIndex() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '나이트 안내 페이지 목록',
    itemListElement: VENUES.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: v.nameA,
      url: `${SITE}${nightPath(v.slug)}`,
    })),
  };

  return (
    <>
      <Head>
        <title>나이트 안내 13곳 목록 — 지역별 위치·시간·자리 정리</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta
          name="description"
          content="서울·경기·대전·부산·울산·창원 나이트 13곳을 한자리에 모았습니다. 업소별 위치와 영업시간, 좌석 구성, 문의 방법을 페이지마다 따로 정리했습니다."
        />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
        {/* ★ 2026-08-25 — 이 허브만 사이트 인증 태그가 빠져 있었다.
            홈과 가게 페이지에는 다 들어 있는데 여기만 없어서, 전수 점검에서 드물게 걸렸다.
            소유 확인 자체는 홈으로 되지만 사이트 안에서 규칙이 어긋나 있으면 안 된다. */}
        <meta name="google-site-verification" content="HJjm7MRxykCQ7d_9L7glaTeeaWrmJIzAKY0BcNcfm88" key="gsv" />
        <meta name="naver-site-verification" content="4c0c71d52261d939278fd1b9725cbd3ffc643045" key="nsv" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="나이트 안내 13곳 목록 — 지역별 위치·시간·자리 정리" />
        <meta
          property="og:description"
          content="서울·경기·대전·부산·울산·창원 나이트 13곳의 위치와 영업시간, 좌석 구성을 업소별로 정리한 목록입니다."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content="ko_KR" />
        {/* 1:1 정사각 이미지이므로 summary */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="나이트 안내 13곳 목록" />
        <meta
          name="twitter:description"
          content="서울·경기·대전·부산·울산·창원 나이트 13곳의 위치와 영업시간, 좌석 구성을 업소별로 정리한 목록입니다."
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          media="print"
          id="nb-font"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.getElementById('nb-font');if(!l)return;var a=function(){l.media='all'};if(l.sheet)a();else l.addEventListener('load',a)})()",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
        {/* ★ 2026-08-31 — 이동 경로가 없어 검색 결과에 경로가 안 나왔다(점검표 #72) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "바닥에서 다시 올라온 1,247일", item: SITE + "/" },
                { "@type": "ListItem", position: 2, name: "나이트 안내", item: SITE + "/night/" },
              ],
            }),
          }}
        />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav aria-label="주요 메뉴">
        <div className="ni">
          <a href="/night/" className="logo">
            나이트 안내
          </a>
        </div>
      </nav>

      <main>
        <article>
          <header className="nb-hero">
            <h1>나이트 안내 13곳</h1>
            <p>지역별로 위치와 시간, 자리 구성을 업소마다 따로 정리했습니다.</p>
          </header>
          <div className="container">

            <section aria-labelledby="list-h">
              <h2 id="list-h">업소별 안내 페이지</h2>
              <div className="bento">
                {VENUES.map((v) => (
                  <a key={v.slug} href={nightPath(v.slug)} className="bic">
                    <h3>{v.nameA}</h3>
                    <p>{v.region}</p>
                  </a>
                ))}
              </div>
            </section>

            {/* 지역 키워드 안내 13개로 1단계 직접 링크 */}
            <section aria-labelledby="area-h">
              <h2 id="area-h">지역별 안내 페이지</h2>
              <div className="bento">
                {AREAS.map((a) => (
                  <a key={a.slug} href={areaPath(a.slug)} className="bic">
                    <h3>{a.kwA}</h3>
                    <p>{a.region}</p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>

      <footer>
        <p>
          <strong>나이트 안내</strong>
        </p>
        <p>업소별 페이지에서 위치·영업시간·좌석 구성을 확인하세요.</p>
        <AdContact />
        <p className="legal-note">© 2026 나이트 안내 페이지</p>
              {/* ★ 2026-08-31 — 연령·관계 고지 (점검표 #121 · #122) */}
        <p style={{ margin: "10px 0 0", fontSize: 13, lineHeight: 1.7, color: "#9aa0a6" }}>
          만 19세 이상 이용 가능한 성인 업소 안내입니다. 업소와 제휴 관계가 없는 정보 페이지입니다.
        </p>
        <p className="cafe-link" style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.7 }}><a href="https://nolcool.com/cafe/?utm_source=c&utm_medium=site_link&utm_campaign=cafe" rel="noopener">놀쿨 카페 안내 →</a></p>
</footer>

      <div className="callbar" role="complementary" aria-label="광고 제휴 문의">
        <span>
          광고·제휴 입점 문의 카톡 <b>{AD_KAKAO}</b>
        </span>
      </div>
      {/* ★ 전체 목록 — 허브가 모든 가게 페이지를 링크해야 네이버가 전부 찾아간다 */}
      <nav className="nl-all" aria-label="나이트 전체 보기" style={{ maxWidth: 900, margin: "48px auto 40px", padding: "22px 18px", borderTop: "1px solid rgba(128,128,128,.28)" }}>
        <h2 style={{ fontSize: "1.05rem", margin: "0 0 14px" }}>나이트 전체 보기 (50곳)</h2>
        <h3 style={{ fontSize: ".95rem", margin: "16px 0 8px", opacity: .75 }}>서울</h3>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))", gap: "8px 16px", fontSize: ".92rem" }}>
          <li><a href="/info/gangseo-hobak-night/">강서호박나이트</a></li>
          <li><a href="/info/gildong-chance-night/">길동찬스나이트</a></li>
          <li><a href="/info/nowon-hobak-night/">노원호박나이트</a></li>
          <li><a href="/info/dapsimni-miracle-night/">답십리미라클나이트</a></li>
          <li><a href="/info/doksan-gukbingwan-night/">독산동국빈관나이트</a></li>
          <li><a href="/info/sangbong-hangukgwan-night-1/">상봉동한국관나이트</a></li>
          <li><a href="/info/sangbong-hangukgwan-night/">상봉동한국관나이트</a></li>
          <li><a href="/info/seongnam-shampoo-night/">성남샴푸나이트</a></li>
          <li><a href="/info/suyu-shampoo-night-1/">수유샴푸나이트</a></li>
          <li><a href="/info/suyu-shampoo-night/">수유샴푸나이트</a></li>
          <li><a href="/info/sillim-grandprix-night-1/">신림그랑프리나이트</a></li>
          <li><a href="/info/sillim-grandprix-night/">신림그랑프리나이트</a></li>
          <li><a href="/info/yeongdeungpo-terminal-night/">영등포터미널나이트</a></li>
          <li><a href="/info/cheongdam-night-1/">청담나이트</a></li>
          <li><a href="/info/cheongdam-night/">청담나이트</a></li>
        </ul>
        <h3 style={{ fontSize: ".95rem", margin: "16px 0 8px", opacity: .75 }}>경기·인천</h3>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))", gap: "8px 16px", fontSize: ".92rem" }}>
          <li><a href="/info/guri-hobak-night/">구리호박나이트</a></li>
          <li><a href="/info/bucheon-gorae-night/">부천고래나이트</a></li>
          <li><a href="/info/suwon-korea-night/">수원코리아나이트</a></li>
          <li><a href="/info/ansan-hit-night-1/">안산히트나이트</a></li>
          <li><a href="/info/ansan-hit-night/">안산히트나이트</a></li>
          <li><a href="/info/osan-hobak-night/">오산호박나이트</a></li>
          <li><a href="/info/uijeongbu-baekakgwan-night/">의정부백악관나이트</a></li>
          <li><a href="/info/uijeongbu-hangukgwan-night/">의정부한국관나이트</a></li>
          <li><a href="/info/indeogwon-gukbingwan-night/">인덕원국빈관나이트</a></li>
          <li><a href="/info/incheon-arabian-night/">인천아라비안나이트</a></li>
          <li><a href="/info/ilsan-shampoo-night-1/">일산샴푸나이트</a></li>
          <li><a href="/info/ilsan-shampoo-night/">일산샴푸나이트</a></li>
          <li><a href="/info/pyeongtaek-hobak-night/">평택호박나이트</a></li>
        </ul>
        <h3 style={{ fontSize: ".95rem", margin: "16px 0 8px", opacity: .75 }}>충청</h3>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))", gap: "8px 16px", fontSize: ".92rem" }}>
          <li><a href="/info/daejeon-seven-night-1/">대전세븐나이트</a></li>
          <li><a href="/info/daejeon-seven-night/">대전세븐나이트</a></li>
          <li><a href="/info/daejeon-one-night-1/">대전원나이트</a></li>
          <li><a href="/info/daejeon-one-night/">대전원나이트</a></li>
          <li><a href="/info/seosan-hobak-night/">서산호박나이트</a></li>
          <li><a href="/info/cheonan-stardome-night/">천안스타돔나이트</a></li>
          <li><a href="/info/cheonan-korea-night/">천안코리아나이트</a></li>
          <li><a href="/info/cheongju-hobak-night/">청주호박나이트</a></li>
        </ul>
        <h3 style={{ fontSize: ".95rem", margin: "16px 0 8px", opacity: .75 }}>영남</h3>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))", gap: "8px 16px", fontSize: ".92rem" }}>
          <li><a href="/info/gumi-hobak-night/">구미호박나이트</a></li>
          <li><a href="/info/daegu-hobak-night/">대구호박나이트</a></li>
          <li><a href="/info/busan-asiad-night-1/">부산아시아드나이트</a></li>
          <li><a href="/info/busan-asiad-night/">부산아시아드나이트</a></li>
          <li><a href="/info/ulsan-newworld-night/">울산뉴월드나이트</a></li>
          <li><a href="/info/ulsan-champion-night/">울산챔피언나이트</a></li>
          <li><a href="/info/ulsan-champion-night-guide/">울산챔피언나이트</a></li>
          <li><a href="/info/changwon-lululala-night/">창원룰루랄라나이트</a></li>
          <li><a href="/info/changwon-lululala-night-guide/">창원룰루랄라나이트</a></li>
        </ul>
        <h3 style={{ fontSize: ".95rem", margin: "16px 0 8px", opacity: .75 }}>호남·제주</h3>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))", gap: "8px 16px", fontSize: ".92rem" }}>
          <li><a href="/info/gwangju-sangmu-night/">광주상무나이트</a></li>
          <li><a href="/info/gwangju-cheomdan-night/">광주첨단나이트</a></li>
          <li><a href="/info/jeju-do-night/">제주도나이트</a></li>
        </ul>
        <h3 style={{ fontSize: ".95rem", margin: "16px 0 8px", opacity: .75 }}>그 밖의 지역</h3>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))", gap: "8px 16px", fontSize: ".92rem" }}>
          <li><a href="/info/bulgwang-hobak-night/">불광동호박나이트</a></li>
          <li><a href="/info/bulgwang-hobak-night-guide/">불광동호박나이트</a></li>
        </ul>
      </nav>
    </>
  );
}
