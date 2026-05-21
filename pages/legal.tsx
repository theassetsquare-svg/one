import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';

export default function Legal() {
  return (
    <>
      <SEO
        title="대전원나이트 합법 운영 정책 — 38세+ 사업주 운영 정책 안내"
        description="대전원나이트 막내 합법 운영 정책. 방심위, 정보통신망법, 38세+ 운영 정책 안내."
        path="/legal"
        ogImage="https://one-5ei.pages.dev/og/legal.png"
      />
      <Schema path="/legal" crumb="합법운영" />
      <Layout>
        <div className="hero">
          <h1>합법 운영 정책</h1>
          <p>사업주 운영 정책 안내</p>
        </div>
        <div className="container">
          <section aria-labelledby="lg-h">
            <h2 id="lg-h">🛡️ 운영 정책 6가지</h2>
            <div className="bento">
              <div className="bic">
                <h3>① 사업자 등록</h3>
                <p>대전광역시 정상 사업자 등록. 세무 신고 정상.</p>
              </div>
              <div className="bic">
                <h3>② 38세+ 입장 정책</h3>
                <p>사업주 재량에 따른 연령 운영 정책. 신분증 검사 필수.</p>
              </div>
              <div className="bic">
                <h3>③ 방심위 권장 준수</h3>
                <p>방송통신심의위원회 권장 사항 준수.</p>
              </div>
              <div className="bic">
                <h3>④ 정보통신망법</h3>
                <p>광고 표시 / 개인정보 보호 / 청소년 보호 준수.</p>
              </div>
              <div className="bic">
                <h3>⑤ 화재·안전</h3>
                <p>소방·전기 정기 점검. 비상구 확보.</p>
              </div>
              <div className="bic">
                <h3>⑥ 공정 운영</h3>
                <p>가짜 별점·후기 사용 금지. 광고 내용 사실 기반.</p>
              </div>
            </div>
            <h3 style={{ marginTop: 32 }}>📌 광고 안내</h3>
            <p>
              본 사이트는 합법 운영 사업장의 광고 페이지입니다. 38세 이상 입장 정책 및 10시 이전
              여성 손님 차비·맥주 서비스 안내는 사업주의 운영 정책이며, 모두 합법 범위 내에서
              이루어집니다.
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
}
