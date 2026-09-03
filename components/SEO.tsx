import Head from 'next/head';
import { 슬래시정본 } from '../lib/canonical';

const SITE = 'https://c.nolcool.com';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  ogTitle?: string;
  ogDesc?: string;
  ogImage?: string;
  /**
   * 페이지별 상위노출 타깃이 다를 때만 덮어씁니다.
   * 넘기지 않으면 기존 대전원나이트 기본값 그대로 → 기존 9개 페이지 SEO 영향 없음.
   */
  keywords?: string;
  ogImageAlt?: string;
  siteName?: string;
  /** rss.xml은 대전원나이트 피드입니다. 별개 가게 페이지에서는 false. */
  rss?: boolean;
  geoRegion?: string;
  geoPlacename?: string;
  icbm?: string;
};

const DEFAULT_KEYWORDS =
  '대전원나이트, 대전 원나이트, 대전나이트, 대전 나이트, 대전 나이트클럽, 대전 38세 이상 나이트, 대전원나이트 후기, 대전원나이트 예약, 대전 클럽';

export default function SEO({
  title,
  description,
  path = '/',
  ogTitle,
  ogDesc,
  ogImage,
  keywords = DEFAULT_KEYWORDS,
  ogImageAlt = '대전원나이트 - 38세 이상 + 여성 손님 2가지 혜택',
  siteName = '대전원나이트',
  rss = true,
  geoRegion = 'KR-30',
  geoPlacename = '대전광역시',
  icbm = '36.3504, 127.3845',
}: SEOProps) {
  const canonical = `${SITE}${슬래시정본(path)}`;
  const image = ogImage || `${SITE}/og/og-search-thumb.png`;
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" key="viewport" />
      <meta name="description" content={description} key="desc" />
      <meta name="keywords" content={keywords} key="kw" />
      <meta name="google-site-verification" content="HJjm7MRxykCQ7d_9L7glaTeeaWrmJIzAKY0BcNcfm88" key="gsv" />
      <meta name="naver-site-verification" content="4c0c71d52261d939278fd1b9725cbd3ffc643045" key="nsv" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" key="robots" />
      <meta name="theme-color" content="#FF1744" key="theme" />
      <meta name="format-detection" content="telephone=no" key="fmt" />
      <link rel="canonical" href={canonical} key="canonical" />
      {rss ? (
        <link
          rel="alternate"
          type="application/rss+xml"
          title="대전원나이트 RSS"
          href={`${SITE}/rss.xml`}
          key="rss"
        />
      ) : null}
      <link rel="alternate" hrefLang="ko-KR" href={canonical} key="hl:ko" />
      <link rel="alternate" hrefLang="x-default" href={canonical} key="hl:xd" />
      <meta name="geo.region" content={geoRegion} key="geo:r" />
      <meta name="geo.placename" content={geoPlacename} key="geo:p" />
      <meta name="ICBM" content={icbm} key="icbm" />
      <meta name="author" content={siteName} key="author" />
      <meta name="publisher" content={siteName} key="pub" />
      <link rel="manifest" href="/site.webmanifest" key="manifest" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://c.nolcool.com/favicon-32x32.png" key="fav32" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://c.nolcool.com/favicon-16x16.png" key="fav16" />
      <link rel="apple-touch-icon" href="https://c.nolcool.com/icons/apple-touch-icon.png" key="apple" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" key="dns1" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" key="pre1" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        key="pretendard"
      />
      <link rel="preload" as="image" href={image} fetchPriority="high" key="lcp" />
      <meta name="color-scheme" content="dark" key="color-scheme" />
      <meta name="HandheldFriendly" content="True" key="hh" />
      <meta name="MobileOptimized" content="320" key="mo" />

      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:site_name" content={siteName} key="og:site" />
      <meta property="og:locale" content="ko_KR" key="og:locale" />
      <meta property="og:locale:alternate" content="ko" key="og:loc:alt" />
      {/* ★ 2026-08-26 — 네이버 가이드: og:title 은 title 과 같게 쓴다 */}
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={ogDesc || description} key="og:desc" />
      <meta property="og:url" content={canonical} key="og:url" />
      <meta property="og:image" content={image} key="og:img" />
      <meta property="og:image:secure_url" content={image} key="og:imgs" />
      <meta property="og:image:width" content="1200" key="og:w" />
      <meta property="og:image:height" content="1200" key="og:h" />
      <meta property="og:image:type" content="image/png" key="og:t" />
      <meta property="og:image:alt" content={ogImageAlt} key="og:alt" />
      <meta name="thumbnail" content={image} key="thumb" />

      {/* 1:1 정사각 이미지이므로 summary */}
      <meta name="twitter:card" content="summary" key="tw:card" />
      <meta name="twitter:title" content={ogTitle || title} key="tw:title" />
      <meta name="twitter:description" content={ogDesc || description} key="tw:desc" />
      <meta name="twitter:image" content={image} key="tw:img" />

      <meta property="naver:image" content={image} key="nv:img" />
    </Head>
  );
}
