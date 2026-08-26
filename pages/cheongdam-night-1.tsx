import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도7 · 문답형 — 중점 소재: 예약·문의 절차. H2 전부 질문형 12개.
const venue = bySlug('cheongdam-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            <h1>청담나이트</h1>
            <p>실제로 들어온 질문만 순서대로 끊어 답했습니다</p>
          </header>

          <div className="container">
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              가장 많이 들어오는 질문은 예약을 꼭 해야 하느냐는 것입니다. 청담나이트는 강남구 영동대로 지하에 있는
              나이트클럽이고, 답은 요일에 따라 갈립니다. 나머지 질문도 같은 방식으로 하나씩 끊어 두었습니다.
            </p>

            <section aria-labelledby="q1">
              <h2 id="q1">청담나이트 예약, 꼭 해야 하나요?</h2>
              <p>
                평일 초저녁이면 없이 가도 자리가 납니다. 다만 금요일과 토요일은 이야기가 다릅니다. 열 시를 넘기면
                남은 자리가 통로 쪽으로 밀리기 때문입니다. 원하는 자리가 분명한 사람일수록 미리 거는 편이
                유리합니다. 예약이라고 해서 복잡한 절차가 있는 것도 아닙니다.
              </p>
              <p className="nb-next">그럼 예약할 때 뭘 말해야 하는지가 다음 문제입니다.</p>
            </section>

            <section aria-labelledby="q2">
              <h2 id="q2">예약할 때 뭘 말하면 되나요?</h2>
              <p>
                셋이면 충분합니다. 인원, 도착 시간, 원하는 자리. 여기에 머무를 시간을 덧붙이면 배정이 더
                정확해집니다. 두 시간만 있다 갈 사람과 끝까지 있을 사람은 앉히는 자리가 다르기 때문입니다. 반대로
                아무 말 없이 자리만 요청하면 대체로 남는 곳으로 갑니다.
              </p>
              <p className="nb-next">그럼 언제쯤 걸어 두는 게 적당할까요.</p>
            </section>

            <section aria-labelledby="q3">
              <h2 id="q3">며칠 전에 연락하는 게 좋나요?</h2>
              <p>
                주말은 하루 이틀 앞이 무난합니다. 평일은 당일에 걸어도 대체로 됩니다. 연휴나 공휴일 전날은 예외라
                조금 더 여유를 두는 편이 안전합니다. 이런 날은 홀 전체가 일찍 차기 때문에 늦게 걸수록 선택지가
                줄어듭니다. 날짜만 정해졌다면 일찍 거는 게 손해 볼 일은 없습니다.
              </p>
              <p className="nb-next">시간이 정해졌다면 몇 시에 들어갈지도 정해야 합니다.</p>
            </section>

            <section aria-labelledby="q4">
              <h2 id="q4">청담나이트는 몇 시에 여나요?</h2>
              <p>
                청담 나이트는 매일 저녁 8시에 문을 열어 새벽 5시에 닫습니다. 요일에 따라 여는 시각이 달라지지 않습니다. 문 여는
                시각에 맞춰 들어가면 홀이 비어 있어 자리를 고르기 좋습니다. 대신 사람이 적어 분위기는 아직 올라오지
                않은 상태입니다.
              </p>
              <p className="nb-next">그렇다면 분위기가 오르는 시각은 언제일까요.</p>
            </section>

            <section aria-labelledby="q5">
              <h2 id="q5">가장 붐비는 시간은 언제인가요?</h2>
              <p>
                보통 열한 시 전후입니다. 이 무렵이면 테이블이 거의 차고 통로에 사람이 많아집니다. 자리를 옮기거나
                일행을 찾기가 가장 어려운 시간대이기도 합니다. 열기를 원한다면 이때가 맞고, 여유를 원한다면 한두
                시간 앞이나 뒤가 낫습니다.
              </p>
              <p className="nb-next">붐빌 때 어디에 앉아 있느냐가 그래서 중요해집니다.</p>
            </section>

            <section aria-labelledby="q6">
              <h2 id="q6">자리는 어디가 나은가요?</h2>
              <p>
                무대 앞은 소리와 조명을 정면으로 받습니다. 대화는 어렵지만 분위기는 확실합니다. 가장자리는 한 겹
                물러나 있어 목소리를 조금 높이면 이야기가 됩니다. 통로 쪽은 시야가 넓은 대신 계속 사람이
                지나갑니다. 무엇을 하러 왔는지에 따라 답이 갈립니다.
              </p>
              <p className="nb-next">인원이 몇 명이냐에 따라서도 답이 달라집니다.</p>
            </section>

            <section aria-labelledby="q7">
              <h2 id="q7">몇 명이 가는 게 무난한가요?</h2>
              <p>
                둘에서 넷이 가장 편합니다. 이 인원이면 테이블 하나로 정리되기 때문입니다. 다섯을 넘어가면 자리를
                붙이거나 나눠 앉아야 해서 미리 말해 두는 편이 좋습니다. 인원이 많을수록 예약 시점을 앞당기는 게
                실제로 효과가 큽니다.
              </p>
              <p className="nb-next">혼자 오는 경우는 어떨까요.</p>
            </section>

            <section aria-labelledby="q8">
              <h2 id="q8">혼자 가도 괜찮나요?</h2>
              <p>
                괜찮습니다. 웨이터가 자리와 합석을 정리해 주기 때문에 혼자 온 손님도 드물지 않습니다. 다만 혼자일
                때는 원하는 바를 더 분명히 말해 두는 편이 좋습니다. 조용히 있고 싶은지, 사람을 만나고 싶은지에 따라
                안내가 완전히 달라집니다.
              </p>
              <p className="nb-next">옷차림 때문에 걱정하는 분도 많습니다.</p>
            </section>

            <section aria-labelledby="q9">
              <h2 id="q9">옷은 어느 정도로 입어야 하나요?</h2>
              <p>
                깔끔한 캐주얼이면 대체로 충분합니다. 정장을 요구하는 구조가 아닙니다. 슬리퍼나 지나치게 편한 차림만
                피하면 문제될 일이 거의 없습니다. 신분증은 챙기는 편이 안전합니다. 확인 절차에서 걸리면 문 앞에서
                시간을 버리게 됩니다.
              </p>
              <p className="nb-next">부킹이 어떻게 돌아가는지도 자주 묻습니다.</p>
            </section>

            <section aria-labelledby="q10">
              <h2 id="q10">부킹은 어떻게 돌아가나요?</h2>
              <p>
                손님끼리 알아서 하는 구조가 아닙니다. 대체로 웨이터가 중간에서 연결합니다. 그래서 담당에게 원하는
                방향을 미리 말해 두는 게 결과를 좌우합니다. 조용히 마시겠다고 하면 그렇게 놔둡니다. 말을 아끼면
                웨이터도 어림짐작으로 움직일 수밖에 없습니다.
              </p>
              <p className="nb-next">그럼 위치는 어떻게 찾아가면 될까요.</p>
            </section>

            <section aria-labelledby="q11" id="nb-access">
              <h2 id="q11">청담나이트 위치가 어디인가요?</h2>
              <p>
                서울 강남구 영동대로 737 지하 1층입니다. 청담역 9번 출구에서 걸어서 3분 남짓입니다. 청담동
                나이트클럽을 찾아 이 일대를 처음 오는 사람이라면 영동대로 큰길만 기억하면 됩니다. 예전 이름인
                H2O나이트로 부르는 사람도 아직 많습니다.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">마지막으로 연락은 어디로 하면 되는지 정리합니다.</p>
            </section>

            <section aria-labelledby="q12" id="nb-contact">
              <h2 id="q12">청담나이트 문의는 어디로 하나요?</h2>
              <p>
                전화 한 통이면 됩니다. 인원과 도착 시간을 말하면 나머지는 담당이 맞춰 둡니다. 자리 변경이나 일행
                합류처럼 당일에 생기는 일도 같은 번호로 정리됩니다. 청담 나이트에 처음 가는 사람일수록 이 통화 한
                번이 실제로 크게 작용합니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">아래에 인근 다른 홀도 함께 정리해 두었습니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}
