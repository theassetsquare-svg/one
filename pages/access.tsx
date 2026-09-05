import PageThumb from '@/components/PageThumb';
import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';
import RelatedLinks from '@/components/RelatedLinks';

export default function Access() {
  return (
    <>
      <SEO
        title="대전원나이트 오시는 길 — 대전 시내·청주·세종 30분, 주차 안내"
        description="가게는 시내에 있으며 청주·세종에서 자차로 약 30분 거리. 주차장·택시·교통편을 한 번에 정리했습니다. 도착 전 카톡 besta12로 문의하시면 드립니다."
        path="/access"
        ogImage="https://c.nolcool.com/og/access.png"
        ogImageAlt="대전원나이트 오시는 길 — 대전 시내·청주·세종 30분 거리 안내"
        ogTitle="대전원나이트 오시는 길"
        ogDesc="대전 시내 + 청주·세종 30분 거리, 주차·택시 안내."
      />
      <Schema image="https://c.nolcool.com/og/access.png" path="/access" crumb="오시는길" pageType="WebPage" pageName="오시는 길 — 시내·청주·세종 30분" />
      <Layout>
        <div className="hero">
          <h1>대전원나이트 오시는 길</h1>
          <p>대전 시내 + 청주·세종 30분 거리</p>
        </div>
        <div className="container">
          {/* og:image 와 동일한 파일 — 네이버 썸네일 후보로 본문에 실제 노출합니다. */}
          <PageThumb src="/og/access.png" alt="대전원나이트 오시는 길 — 대전 시내·청주·세종 30분 거리 안내" />

          <PolicyBanner page="access" />
          <section aria-labelledby="ac-h">
            <h2 id="ac-h">🚗 위치 및 교통</h2>
            <div className="bento">
              <div className="bic">
                <h3>📍 위치</h3>
                <p>대전광역시 시내. 자세한 위치는 카톡 besta12 안내.</p>
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
                <h3>💬 길안내</h3>
                <p>푸터의 광고문의 카톡 아이디 besta12. 도착 전 문의하면 자세히 안내.</p>
              </div>
            </div>
          </section>
          <section className="bsec">
            <h2>도착 시각을 먼저 정하면 길이 단순해집니다</h2>
            <p>
              오시는 길에서 가장 자주 어긋나는 것은 거리보다 시각입니다. 같은 출발지라도
              해가 진 뒤와 자정 무렵의 도로 사정이 다르고, 돌아가는 방법도 그때 갈립니다.
              그래서 출발 전에 정할 것은 두 가지뿐입니다. 몇 시에 도착할 것인가, 그리고
              어떻게 돌아갈 것인가.
            </p>
            <p>
              자차로 오실 계획이면 돌아갈 방법을 먼저 정해 두시는 편이 안전합니다.
              술을 드실 자리라면 대리를 부르거나 차를 두고 가는 쪽을 권합니다.
              대중교통으로 오실 계획이면 막차 시각을 미리 확인해 두시면 자정 이후에
              고민할 일이 없습니다. 노선과 시각은 지역·요일마다 달라 여기에 적지 않고,
              출발 전에 직접 확인하시기를 권합니다.
            </p>
            <p>
              초행이시면 도착 직전에 한 번 연락 주시는 편이 가장 빠릅니다. 건물 앞까지
              말로 안내해 드릴 수 있습니다. 확인되지 않은 주차 자리 수나 요금은 이 쪽에
              적지 않았습니다. 지어낸 숫자를 보고 오시면 헛걸음이 되기 때문입니다.
            </p>
          </section>
          <RelatedLinks current="/access" />
        </div>
      </Layout>
    </>
  );
}
