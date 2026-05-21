import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';

export default function Access() {
  return (
    <>
      <SEO
        title="대전원나이트 막내 오시는 길 — 대전 시내·청주·세종 30분, 주차 안내"
        description="대전원나이트 막내 위치는 대전 시내. 청주·세종에서 자차로 약 30분 거리. 주차·택시·길안내 한 번에 정리. 도착 전 막내 010-8677-1258 전화 권장."
        path="/access"
        ogImage="https://one-5ei.pages.dev/og/access.png"
        ogTitle="대전원나이트 막내 오시는 길"
        ogDesc="대전 시내 + 청주·세종 30분 거리, 주차·택시 안내."
      />
      <Schema path="/access" crumb="오시는길" />
      <Layout>
        <div className="hero">
          <h1>오시는 길</h1>
          <p>대전 시내 + 청주·세종 30분 거리</p>
        </div>
        <div className="container">
          <PolicyBanner />
          <section aria-labelledby="ac-h">
            <h2 id="ac-h">🚗 위치 및 교통</h2>
            <div className="bento">
              <div className="bic">
                <h3>📍 위치</h3>
                <p>대전광역시 시내. 자세한 위치는 막내 전화 안내.</p>
              </div>
              <div className="bic">
                <h3>🛣️ 청주에서</h3>
                <p>자차 약 30분. 청주IC → 경부고속도로.</p>
              </div>
              <div className="bic">
                <h3>🚙 세종에서</h3>
                <p>자차 약 30분. 호남고속도로 / 일반국도.</p>
              </div>
              <div className="bic">
                <h3>🅿️ 주차</h3>
                <p>주변 공영주차장 이용. 대리·택시 권장.</p>
              </div>
              <div className="bic">
                <h3>🚕 택시</h3>
                <p>대전 시내 어디서나 10~20분 내.</p>
              </div>
              <div className="bic">
                <h3>📞 길안내</h3>
                <p>막내 010-8677-1258. 도착 전 전화하면 자세히 안내.</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
