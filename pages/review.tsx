import PageThumb from '@/components/PageThumb';
import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';
import RelatedLinks from '@/components/RelatedLinks';

export default function Review() {
  return (
    <>
      <SEO
        title="대전원나이트 후기 — 38세 이상 단골들이 말하는 진짜 분위기"
        description="가게를 다녀가신 같은 연령대 단골 손님들이 직접 말해주신 진짜 분위기. 자리·여성 혜택·응대 만족도를 사실 그대로 정리했으며, 별점이나 평점은 사용하지 않습니다."
        path="/review"
        ogImage="https://c.nolcool.com/og/review.png"
        ogImageAlt="대전원나이트 후기 모음"
        ogTitle="대전원나이트 후기 — 단골 진짜 분위기"
        ogDesc="가짜 별점 없음. 38세+ 손님 실제 의견 기반."
      />
      <Schema image="https://c.nolcool.com/og/review.png" path="/review" crumb="후기" pageType="WebPage" pageName="단골 후기" />
      <Layout>
        <div className="hero">
          <h1>대전원나이트 후기</h1>
          <p>직접 가본 사람들 이야기</p>
        </div>
        <div className="container">
          {/* og:image 와 동일한 파일 — 네이버 썸네일 후보로 본문에 실제 노출합니다. */}
          <PageThumb src="/og/review.png" alt="대전원나이트 후기 모음" />

          <PolicyBanner page="review" />
          <section aria-labelledby="rv-h">
            <h2 id="rv-h">💬 왜 단골이 되었나</h2>
            <div className="bento">
              <div className="bic">
                <h3>같은 연령대</h3>
                <p>38세 이상 손님들이 모이는 곳. 어색하지 않은 분위기.</p>
              </div>
              <div className="bic">
                <h3>여성 손님 혜택</h3>
                <p>10시 이전 차비 3만원 + 맥주 둘 다. 부담 없이 들를 수 있음.</p>
              </div>
              <div className="bic">
                <h3>직통 응대</h3>
                <p>중간 단계 없이 현장에서 바로 받아주는 진짜 직통 번호.</p>
              </div>
              <div className="bic">
                <h3>안심 분위기</h3>
                <p>신분증 검사 철저 + 웨이터 직접 응대. 처음도 부담 없음.</p>
              </div>
            </div>
            <p style={{ marginTop: 24, fontSize: '0.95rem', color: '#888', textAlign: 'center' }}>
              ※ 본 페이지의 후기는 실 방문 손님 의견을 정리한 것이며, 별점·평점은 표시하지 않습니다.
            </p>
          </section>
          <section className="bsec">
            <h2>후기를 다루는 방식</h2>
            <p>
              이 쪽에는 후기를 지어내어 싣지 않습니다. 별점이나 평점도 매기지
              않습니다. 근거 없이 좋은 말을 늘어놓으면 읽는 분이 판단할 거리가
              사라지고, 오셨을 때 이야기가 달라집니다. 그래서 확인되지 않은 평가는
              적지 않는 쪽을 택했습니다.
            </p>
            <p>
              대신 판단에 도움이 되는 것을 적습니다. 어떤 자리가 무엇을 얻고 무엇을
              잃는지, 시간대에 따라 홀이 어떻게 달라지는지, 인원에 따라 무엇을 먼저
              정해야 하는지 같은 것들입니다. 이런 내용은 특정 업소를 띄우지 않고도
              적을 수 있고, 실제로 도움이 됩니다.
            </p>
            <p>
              잘못된 내용이 있으면 정정 요청을 받습니다. 확인되면 고치고, 확인되지
              않으면 확인되지 않았다고 적습니다. 이 원칙은 이 사이트의 모든 쪽에
              같이 적용합니다.
            </p>
          </section>
          <RelatedLinks current="/review" />
        </div>
      </Layout>
    </>
  );
}
