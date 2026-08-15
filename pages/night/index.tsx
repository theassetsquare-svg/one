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

const canonical = `${SITE}/night`;

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
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="나이트 안내 13곳 목록" />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content="ko_KR" />
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
      </footer>

      <div className="callbar" role="complementary" aria-label="광고 제휴 문의">
        <span>
          광고·제휴 입점 문의 카톡 <b>{AD_KAKAO}</b>
        </span>
      </div>
    </>
  );
}
