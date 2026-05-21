export default function PolicyBanner() {
  return (
    <section className="pb" id="policy" aria-labelledby="policy-title">
      <div className="t" id="policy-title">
        🎯 입장 정책 안내
      </div>
      <div className="a">38세 이상 입장 가능합니다</div>
      <div className="bx">
        <div className="bt">💎 10시 이전 입장 여성 손님</div>
        <div className="bs">✨ 2가지 모두 받습니다 ✨</div>
        <div className="bi">
          <span className="ic" aria-hidden="true">
            💵
          </span>
          <span>① 차비 3만원 지급</span>
        </div>
        <div className="bi">
          <span className="ic" aria-hidden="true">
            🍺
          </span>
          <span>② 맥주 기본 서비스</span>
        </div>
      </div>
    </section>
  );
}
