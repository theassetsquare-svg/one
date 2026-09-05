import PageThumb from '@/components/PageThumb';
import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';
import RelatedLinks from '@/components/RelatedLinks';

export default function Atmosphere() {
  return (
    <>
      <SEO
        title="대전원나이트 분위기 — 38세 이상 동년배가 모이는 자리"
        description="같은 연령대 손님들이 부담 없이 어울릴 수 있는 가게 분위기. 7080·90s·발라드 위주 음악과 여유로운 테이블, 신분증 검사 철저, 응대는 현장 맡습니다."
        path="/atmosphere"
        ogImage="https://c.nolcool.com/og/atmosphere.png"
        ogImageAlt="대전원나이트 분위기 — 만 38세 이상 손님 중심 홀"
        ogTitle="대전원나이트 분위기 — 38세+ 동년배 자리"
        ogDesc="음악·자리·손님층·안전 네 가지 한눈에."
      />
      <Schema image="https://c.nolcool.com/og/atmosphere.png" path="/atmosphere" crumb="분위기" pageType="WebPage" pageName="분위기 — 38세+ 동년배 자리" />
      <Layout>
        <div className="hero">
          <h1>대전원나이트 분위기</h1>
          <p>38세 이상 안전하고 품격 있는 공간</p>
        </div>
        <div className="container">
          {/* og:image 와 동일한 파일 — 네이버 썸네일 후보로 본문에 실제 노출합니다. */}
          <PageThumb src="/og/atmosphere.png" alt="대전원나이트 분위기 — 만 38세 이상 손님 중심 홀" />

          <PolicyBanner page="atmosphere" />
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
                <p>신분증 검사 철저. 웨이터 직접 응대.</p>
              </div>
            </div>
          </section>
          <section className="bsec">
            <h2>같은 공간도 시간대에 따라 성격이 달라집니다</h2>
            <p>
              문을 연 직후의 홀과 자정을 넘긴 홀은 같은 곳이라고 보기 어려울 만큼
              분위기가 다릅니다. 이른 시간에는 조명이 낮고 소리도 두껍지 않아 자리를
              고를 여유가 있습니다. 사람이 차오를수록 소리가 두꺼워지고, 남은 자리는
              통로 쪽으로 밀립니다. 어느 쪽이 좋은지는 그날 무엇을 하러 오셨는지에
              달려 있습니다.
            </p>
            <p>
              대화를 길게 하실 생각이면 무대에서 물러난 자리가 편합니다. 반대로
              분위기를 즐기실 생각이면 플로어 가까운 쪽이 낫습니다. 벽을 등진 자리는
              안정감을 주는 대신 우연히 마주치는 일이 줄어듭니다. 자리마다 얻는 것과
              잃는 것이 있어서, 어느 자리가 더 낫다고 잘라 말하기 어렵습니다.
            </p>
            <p>
              여기에 적은 내용은 나이트 홀에서 일반적으로 나타나는 구조입니다.
              이 업소의 실제 도면이나 좌석 수는 공개 자료로 확인되지 않아 적지
              않았습니다. 정확한 배치가 궁금하시면 방문 전에 문의해 주십시오.
            </p>
          </section>
          <RelatedLinks current="/atmosphere" />
        </div>
      </Layout>
    </>
  );
}
