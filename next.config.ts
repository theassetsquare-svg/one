import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  /* ★ 2026-08-31 — 사이트맵은 슬래시형(/access/)인데 서버가 308 로 슬래시를 떼어내
     사이트맵 89개 중 74개가 리디렉션이었다. 수집 예산만 버리고 색인이 안 된다.
     슬래시 쪽을 정본으로 삼는다. */
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
