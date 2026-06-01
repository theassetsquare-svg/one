import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';
import RelatedLinks from '@/components/RelatedLinks';

export default function FirstVisit() {
  return (
    <>
      <SEO
        title="대전원나이트 막내 첫 방문 6단계 가이드 — 입장·드레스코드·예약"
        description="처음 들르시는 분께 필요한 6단계. 38세 이상 신분증, 22시 전 여성 차비 3만원, 드레스코드, 주차, 결제까지 한 번에 정리했습니다. 도착 전  전화 권장."
        path="/first-visit"
        ogImage="https://one-5ei.pages.dev/og/first-visit.png"
        ogTitle="대전원나이트 막내 첫 방문 6단계 가이드"
        ogDesc="38세+ 처음 가시는 분께 막내가 안내."
      />
      <Schema path="/first-visit" crumb="첫방문" pageType="WebPage" pageName="첫 방문 6단계 가이드" />
      <Layout>
        <div className="hero">
          <h1>첫 방문 가이드</h1>
          <p>38세 이상 처음 가는 사람을 위한 6단계</p>
        </div>
        <div className="container">
          <PolicyBanner />
          <section aria-labelledby="fv-h">
            <h2 id="fv-h">📘 6단계 가이드</h2>
            <div className="bento">
              <div className="bic">
                <h3>① 신분증</h3>
                <p>38세 이상 확인용 필수. 주민등록증 / 운전면허증.</p>
              </div>
              <div className="bic">
                <h3>② 시간</h3>
                <p>여성 손님은 10시 이전 입장 시 차비 3만원 + 맥주 둘 다 받음.</p>
              </div>
              <div className="bic">
                <h3>③ 드레스코드</h3>
                <p>깔끔한 캐주얼. 슬리퍼·반바지 제한.</p>
              </div>
              <div className="bic">
                <h3>④ 예약</h3>
                <p>막내  전화 예약 권장. 당일 가능.</p>
              </div>
              <div className="bic">
                <h3>⑤ 주차</h3>
                <p>주변 공영주차장 이용. 대중교통·택시 권장.</p>
              </div>
              <div className="bic">
                <h3>⑥ 결제</h3>
                <p>카드 결제 가능. 인당·룸 별도 안내.</p>
              </div>
            </div>
          </section>
          <RelatedLinks current="/first-visit" />
        </div>
      </Layout>
    </>
  );
}
