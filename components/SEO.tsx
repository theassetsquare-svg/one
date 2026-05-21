import Head from 'next/head';

const SITE = 'https://one-5ei.pages.dev';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  ogTitle?: string;
  ogDesc?: string;
  ogImage?: string;
};

export default function SEO({
  title,
  description,
  path = '/',
  ogTitle,
  ogDesc,
  ogImage,
}: SEOProps) {
  const canonical = `${SITE}${path}`;
  const image = ogImage || `${SITE}/og/og-search-thumb.png`;
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" key="viewport" />
      <meta name="description" content={description} key="desc" />
      <meta
        name="keywords"
        content="대전원나이트, 대전 원나이트, 대전나이트, 대전 나이트, 대전 나이트클럽, 대전 38세 이상 나이트, 대전원나이트 막내, 대전원나이트 후기, 대전원나이트 예약, 대전 클럽"
        key="kw"
      />
      <meta name="google-site-verification" content="HJjm7MRxykCQ7d_9L7glaTeeaWrmJIzAKY0BcNcfm88" key="gsv" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" key="robots" />
      <meta name="theme-color" content="#FF1744" key="theme" />
      <meta name="format-detection" content="telephone=no" key="fmt" />
      <link rel="canonical" href={canonical} key="canonical" />
      <link rel="alternate" hrefLang="ko-KR" href={canonical} key="hl:ko" />
      <link rel="alternate" hrefLang="x-default" href={canonical} key="hl:xd" />
      <meta name="geo.region" content="KR-30" key="geo:r" />
      <meta name="geo.placename" content="대전광역시" key="geo:p" />
      <meta name="ICBM" content="36.3504, 127.3845" key="icbm" />
      <meta name="author" content="대전원나이트 막내" key="author" />
      <meta name="publisher" content="대전원나이트 막내" key="pub" />
      <link rel="manifest" href="/site.webmanifest" key="manifest" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="fav32" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="fav16" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" key="apple" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" key="dns1" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" key="pre1" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        key="pretendard"
      />
      <link rel="preload" as="image" href="/og/og-search-thumb.png" fetchPriority="high" key="lcp" />
      <meta name="color-scheme" content="dark" key="color-scheme" />
      <meta name="HandheldFriendly" content="True" key="hh" />
      <meta name="MobileOptimized" content="320" key="mo" />

      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:site_name" content="대전원나이트 막내" key="og:site" />
      <meta property="og:locale" content="ko_KR" key="og:locale" />
      <meta property="og:locale:alternate" content="ko" key="og:loc:alt" />
      <meta property="og:title" content={ogTitle || title} key="og:title" />
      <meta property="og:description" content={ogDesc || description} key="og:desc" />
      <meta property="og:url" content={canonical} key="og:url" />
      <meta property="og:image" content={image} key="og:img" />
      <meta property="og:image:secure_url" content={image} key="og:imgs" />
      <meta property="og:image:width" content="1080" key="og:w" />
      <meta property="og:image:height" content="1080" key="og:h" />
      <meta property="og:image:type" content="image/png" key="og:t" />
      <meta property="og:image:alt" content="대전원나이트 막내 - 38세 이상 + 여성 손님 2가지 혜택" key="og:alt" />
      <meta name="thumbnail" content={image} key="thumb" />

      <meta name="twitter:card" content="summary_large_image" key="tw:card" />
      <meta name="twitter:title" content={ogTitle || title} key="tw:title" />
      <meta name="twitter:description" content={ogDesc || description} key="tw:desc" />
      <meta name="twitter:image" content={image} key="tw:img" />

      <meta property="naver:image" content={image} key="nv:img" />
    </Head>
  );
}
