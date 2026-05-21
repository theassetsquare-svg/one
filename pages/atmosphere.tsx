import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';

export default function Atmosphere() {
  return (
    <>
      <SEO
        title="대전원나이트 막내 분위기 — 38세 이상 동년배가 모이는 자리"
        description="대전원나이트 막내는 38세 이상 동년배 손님들이 부담 없이 어울리는 분위기입니다. 7080·90s·발라드 위주 음악, 여유로운 테이블, 막내 웨이터 직접 응대. 신분증 검사 철저."
        path="/atmosphere"
        ogImage="https://one-5ei.pages.dev/og/atmosphere.png"
        ogTitle="대전원나이트 막내 분위기 — 38세+ 동년배 자리"
        ogDesc="음악·자리·손님층·안전 네 가지 한눈에."
      />
      <Schema path="/atmosphere" crumb="분위기" />
      <Layout>
        <div className="hero">
          <h1>대전원나이트 분위기</h1>
          <p>38세 이상 안전하고 품격 있는 공간</p>
        </div>
        <div className="container">
          <PolicyBanner />
          <section aria-labelledby="atm-h">
            <h2 id="atm-h">🎶 공간 소개</h2>
            <div className="bento">
              <div className="bic">
                <h3>🎵 음악</h3>
                <p>30~40대가 좋아하는 7080·90s·발라드·댄스 위주.</p>
              </div>
              <div className="bic">
                <h3>🪑 자리</h3>
                <p>여유로운 테이블 간격. 단체석·VIP룸 별도.</p>
              </div>
              <div className="bic">
                <h3>👥 손님층</h3>
                <p>38세 이상 같은 나이대. 부담 없는 모임 환영.</p>
              </div>
              <div className="bic">
                <h3>🛡️ 안전</h3>
                <p>신분증 검사 철저. 막내 웨이터 직접 응대.</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
