import Head from 'next/head';
import { Area, SITE, areaPath } from '@/lib/area';

/**
 * /night/{지역}-night 전용 head.
 *
 * canonical 은 트레일링 슬래시 없이 씁니다. 이 호스트(Cloudflare Pages)는
 * `/night/foo/` 요청을 `/night/foo` 로 308 리다이렉트하므로, 슬래시를 붙이면
 * canonical 이 리다이렉트를 가리키게 됩니다(색인 점검의 "리다이렉트 0" 항목).
 *
 * 인증 메타태그는 기존 페이지에서 그대로 복사했습니다(지어내지 않음).
 */
export default function AreaSEO({ area }: { area: Area }) {
  const canonical = `${SITE}${areaPath(area.slug)}`;
  const image = `${SITE}/og/${area.slug}-og.png`;
  const keywords = [area.kwA, area.kwB, area.kwC, `${area.kwA} 위치`, `${area.kwA} 추천`, `${area.kwA} 예약`].join(', ');

  return (
    <Head>
      <title key="title">{area.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" key="viewport" />
      <meta name="description" content={area.description} key="desc" />
      <meta name="keywords" content={keywords} key="kw" />
      <meta name="google-site-verification" content="HJjm7MRxykCQ7d_9L7glaTeeaWrmJIzAKY0BcNcfm88" key="gsv" />
      <meta name="naver-site-verification" content="28b5456ceb80424d098fe8074ecd062efa66bbd9" key="nsv" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" key="robots" />
      <meta name="theme-color" content="#111111" key="theme" />
      <link rel="canonical" href={canonical} key="canonical" />
      <link rel="alternate" hrefLang="ko-KR" href={canonical} key="hl:ko" />
      <link rel="alternate" hrefLang="x-default" href={canonical} key="hl:xd" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="fav32" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="fav16" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" key="apple" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" key="pre1" />
      {/* Pretendard 는 렌더 차단 자원이라 media="print" 로 받아 두고 로드 후 적용합니다. */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        media="print"
        id="nb-font"
        key="pretendard"
      />
      <script
        key="nb-font-swap"
        dangerouslySetInnerHTML={{
          __html:
            "(function(){var l=document.getElementById('nb-font');if(!l)return;var a=function(){l.media='all'};if(l.sheet)a();else l.addEventListener('load',a)})()",
        }}
      />
      <meta name="color-scheme" content="dark" key="color-scheme" />

      <meta property="og:type" content="article" key="og:type" />
      <meta property="og:site_name" content={`${area.kwA} 안내`} key="og:site" />
      <meta property="og:locale" content="ko_KR" key="og:locale" />
      <meta property="og:title" content={area.title} key="og:title" />
      <meta property="og:description" content={area.description} key="og:desc" />
      <meta property="og:url" content={canonical} key="og:url" />
      <meta property="og:image" content={image} key="og:img" />
      <meta property="og:image:secure_url" content={image} key="og:imgs" />
      <meta property="og:image:width" content="1200" key="og:w" />
      <meta property="og:image:height" content="1200" key="og:h" />
      <meta property="og:image:type" content="image/png" key="og:t" />
      <meta property="og:image:alt" content={area.ogAlt} key="og:alt" />

      {/* 1:1 정사각 이미지이므로 summary */}
      <meta name="twitter:card" content="summary" key="tw:card" />
      <meta name="twitter:title" content={area.title} key="tw:title" />
      <meta name="twitter:description" content={area.description} key="tw:desc" />
      <meta name="twitter:image" content={image} key="tw:img" />
      <meta name="twitter:image:alt" content={area.ogAlt} key="tw:alt" />
    </Head>
  );
}
