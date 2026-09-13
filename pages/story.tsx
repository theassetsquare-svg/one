import PageThumb from '@/components/PageThumb';
import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';
import RelatedLinks from '@/components/RelatedLinks';

export default function Story() {
  return (
    <>
      <SEO
        title="대전원나이트 웨이터 이야기 — 38세 이상 기준이 된 이유"
        description="가게가 같은 연령대만 받는 이유, 늦은 시간 여성 손님께 차비와 기본 맥주를 함께 드리는 이유. 현장에서 직접 들려드리는 운영 철학과 응대 약속을 정리했습니다."
        path="/story"
        ogImage="https://c.nolcool.com/og/story.png"
        ogImageAlt="대전원나이트 웨이터 이야기"
        ogTitle="대전원나이트 웨이터 이야기 — 38세+ 기준이 된 이유"
        ogDesc="차비 3만원과 맥주를 함께 드리는 이유."
      />
      <Schema image="https://c.nolcool.com/og/story.png" path="/story" crumb="이야기" pageType="AboutPage" pageName="웨이터 이야기" />
      <Layout>
        <div className="hero">
          <h1>대전원나이트 웨이터 이야기</h1>
          <p>대전 나이트라이프의 기준점이 된 이유</p>
        </div>
        <div className="container">
          {/* og:image 와 동일한 파일 — 네이버 썸네일 후보로 본문에 실제 노출합니다. */}
          <PageThumb src="/og/story.png" alt="대전원나이트 웨이터 이야기" />

          <PolicyBanner page="story" />
          <section aria-labelledby="why-h">
            <h2 id="why-h">왜 38세 이상인가</h2>
            <p>
              20대 / 30대 초반 위주의 공간과 분명히 다른 결의 자리가 필요했습니다. 같은
              연령대의 손님들이 부담 없이 어울릴 수 있는 안전한 공간 — 이게 가게가 38세 이상
              입장 정책을 운영하는 이유입니다.
            </p>
            <h3>왜 여성 손님께 차비를 드리나</h3>
            <p>
              늦은 시간 이동이 부담스러운 여성 손님이 안심하고 들를 수 있도록, 10시 이전 입장
              시 차비 3만원과 기본 맥주 서비스를 함께 제공합니다. 한 가지만이 아니라 둘 다
              받습니다.
            </p>
            <h3>직통 응대 약속</h3>
            <p>
              예약·VIP룸·단체 모임은 방문 당일 현장에서 직원에게 직접 묻는 것이 가장 정확합니다.
              푸터의 카톡 besta12 는 업소 사장님 대상 광고 입점 문의 창구라 손님 예약은 받지 않습니다.
            </p>
          </section>
          <RelatedLinks current="/story" />
        </div>
      </Layout>
    </>
  );
}
