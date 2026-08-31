import Head from 'next/head';
import { 슬래시정본 } from '../../lib/canonical';
import { NightVenue, SITE, nightPath } from '@/lib/night';

/**
 * /night/* 전용 head.
 *
 * 기존 components/SEO.tsx 는 대전원나이트 기본값(og 1080x1080, twitter summary_large_image,
 * 대전 키워드/지오태그)이 박혀 있어 그대로 쓰면 13개 업소 정보가 섞입니다.
 * 그래서 건드리지 않고 별도 컴포넌트로 분리했습니다.
 *
 * canonical 은 끝 슬래시를 붙입니다 (2026-08-31 next.config.ts trailingSlash: true).
 * 예전 주석은 슬래시를 빼라고 했는데, 그때는 이 사이트가 슬래시 없는 쪽을 200 으로
 * 냈기 때문입니다. 지금은 반대로 슬래시 쪽이 200 입니다.
 *
 * ★ 같은 업소 화면이 /area/ 밑에 놓인 쪽도 있습니다(pages/area/suwon-chance-dome-night-1.tsx).
 *   그런 쪽은 nightPath 가 /info/... 를 내주므로 canonical 이 남의 주소를 가리킵니다.
 *   그래서 주소를 직접 줄 수 있게 canonicalPath 를 받습니다.
 */
export default function NightSEO({ venue, canonicalPath }: { venue: NightVenue; canonicalPath?: string }) {
  const canonical = `${SITE}${슬래시정본(canonicalPath ?? nightPath(venue.slug))}`;
  const image = `${SITE}/og/${venue.slug}-og${venue.ogV ?? ""}.png`;
  const keywords = [
    venue.nameA,
    venue.nameB,
    venue.nameC,
    `${venue.nameA} 위치`,
    `${venue.nameA} 예약`,
    `${venue.nameA} 자리`,
  ].join(', ');

  return (
    <Head>
      <title key="title">{venue.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" key="viewport" />
      <meta name="description" content={venue.description} key="desc" />
      <meta name="keywords" content={keywords} key="kw" />
      <meta name="google-site-verification" content="HJjm7MRxykCQ7d_9L7glaTeeaWrmJIzAKY0BcNcfm88" key="gsv" />
      <meta name="naver-site-verification" content="4c0c71d52261d939278fd1b9725cbd3ffc643045" key="nsv" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" key="robots" />
      <meta name="theme-color" content="#111111" key="theme" />
      <meta name="author" content={venue.nameA} key="author" />
      <meta name="publisher" content={venue.nameA} key="pub" />
      <link rel="canonical" href={canonical} key="canonical" />
      <link rel="alternate" hrefLang="ko-KR" href={canonical} key="hl:ko" />
      <link rel="alternate" hrefLang="x-default" href={canonical} key="hl:xd" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="fav32" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="fav16" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" key="apple" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" key="pre1" />
      {/*
        Pretendard 는 렌더 차단 자원입니다. 그대로 두면 폰트가 도착할 때까지 본문 글자가
        그려지지 않아 FCP/LCP 가 무너집니다. media="print" 로 받아 두고 로드 완료 후 적용합니다.
        도착 전에는 globals.css 의 시스템 폰트 폴백으로 글자가 먼저 보입니다.
      */}
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
      <meta property="og:site_name" content={venue.nameA} key="og:site" />
      <meta property="og:locale" content="ko_KR" key="og:locale" />
      <meta property="og:title" content={venue.title} key="og:title" />
      <meta property="og:description" content={venue.description} key="og:desc" />
      <meta property="og:url" content={canonical} key="og:url" />
      <meta property="og:image" content={image} key="og:img" />
      <meta property="og:image:secure_url" content={image} key="og:imgs" />
      <meta property="og:image:width" content="1200" key="og:w" />
      <meta property="og:image:height" content="1200" key="og:h" />
      <meta property="og:image:type" content="image/png" key="og:t" />
      <meta property="og:image:alt" content={venue.ogAlt} key="og:alt" />

      {/* 네이버 썸네일 후보 — og:image 와 같은 파일 */}
      <meta name="thumbnail" content={image} key="thumb" />

      {/* 1:1 정사각 이미지이므로 summary */}
      <meta name="twitter:card" content="summary" key="tw:card" />
      <meta name="twitter:title" content={venue.title} key="tw:title" />
      <meta name="twitter:description" content={venue.description} key="tw:desc" />
      <meta name="twitter:image" content={image} key="tw:img" />
      <meta name="twitter:image:alt" content={venue.ogAlt} key="tw:alt" />
    </Head>
  );
}
