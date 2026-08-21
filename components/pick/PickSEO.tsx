import Head from 'next/head';
import { SITE } from '@/lib/pick';

/**
 * /pick/* + 허브 + 홈 공용 head.
 *
 * 기존 components/SEO.tsx 는 대전원나이트 기본값이 박혀 있어 그대로 쓰면 40곳 정보가 섞입니다.
 * 그래서 건드리지 않고 별도 컴포넌트로 분리했습니다.
 *
 * canonical: /pick/{slug}/ 는 디렉터리 인덱스(index.html)로 배포되므로 슬래시를 붙입니다.
 */
export default function PickSEO({
  title,
  description,
  path,
  image,
  imageAlt,
  keywords,
}: {
  title: string;
  description: string;
  /** 예: '/pick/sillim-grandprix-night/' 또는 '/' */
  path: string;
  /** 예: '/og/pick-sillim-grandprix-night.png' */
  image: string;
  imageAlt: string;
  keywords: string[];
}) {
  const canonical = `${SITE}${path}`;
  const img = `${SITE}${image}`;

  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" key="viewport" />
      <meta name="description" content={description} key="desc" />
      <meta name="keywords" content={keywords.join(', ')} key="kw" />
      <meta name="google-site-verification" content="HJjm7MRxykCQ7d_9L7glaTeeaWrmJIzAKY0BcNcfm88" key="gsv" />
      <meta name="naver-site-verification" content="4c0c71d52261d939278fd1b9725cbd3ffc643045" key="nsv" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" key="robots" />
      <meta name="theme-color" content="#16181C" key="theme" />
      <meta name="color-scheme" content="dark" key="color-scheme" />
      <link rel="canonical" href={canonical} key="canonical" />
      <link rel="alternate" hrefLang="ko-KR" href={canonical} key="hl:ko" />
      <link rel="alternate" hrefLang="x-default" href={canonical} key="hl:xd" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="fav32" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="fav16" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" key="apple" />
      {/*
        Pretendard 는 렌더 차단 자원입니다. media="print" 로 받아 두고 로드 완료 후 적용합니다.
        도착 전에는 globals.css 의 시스템 폰트 폴백으로 글자가 먼저 보입니다.
      */}
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" key="pre1" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        media="print"
        id="pk-font"
        key="pretendard"
      />
      <script
        key="pk-font-swap"
        dangerouslySetInnerHTML={{
          __html:
            "(function(){var l=document.getElementById('pk-font');if(!l)return;var a=function(){l.media='all'};if(l.sheet)a();else l.addEventListener('load',a)})()",
        }}
      />

      <meta property="og:type" content="article" key="og:type" />
      <meta property="og:site_name" content="전국 나이트, 고르는 기준" key="og:site" />
      <meta property="og:locale" content="ko_KR" key="og:locale" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:desc" />
      <meta property="og:url" content={canonical} key="og:url" />
      <meta property="og:image" content={img} key="og:img" />
      <meta property="og:image:secure_url" content={img} key="og:imgs" />
      <meta property="og:image:width" content="1200" key="og:w" />
      <meta property="og:image:height" content="1200" key="og:h" />
      <meta property="og:image:type" content="image/png" key="og:t" />
      <meta property="og:image:alt" content={imageAlt} key="og:alt" />

      {/* 네이버 썸네일 후보 — og:image 와 같은 파일 */}
      <meta name="thumbnail" content={img} key="thumb" />

      {/* 1:1 정사각 이미지이므로 summary */}
      <meta name="twitter:card" content="summary" key="tw:card" />
      <meta name="twitter:title" content={title} key="tw:title" />
      <meta name="twitter:description" content={description} key="tw:desc" />
      <meta name="twitter:image" content={img} key="tw:img" />
      <meta name="twitter:image:alt" content={imageAlt} key="tw:alt" />
    </Head>
  );
}
