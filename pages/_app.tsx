import '@/styles/globals.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { useEffect } from 'react';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (typeof window === 'undefined') return;
  // Pages Router native CWV stream — LCP / CLS / INP / FCP / TTFB / FID
  // Log to console so the field RUM signal is visible in DevTools without external deps.
  // eslint-disable-next-line no-console
  console.info(`[CWV] ${metric.name}=${Math.round(metric.value)}${metric.label ? ` (${metric.label})` : ''}`);
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      });
    }
  }, []);
  return <Component {...pageProps} />;
}
