import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도4 · 처음 가는 사람 시점 — 중점 소재: 첫 방문 실수
const venue = bySlug('bulgwang-hobak-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            <h1>불광동호박나이트</h1>
            <p>처음 가는 사람이 막히는 지점만 먼저 걷어냅니다</p>
          </header>

          <div className="container">
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              문 앞까지 갔다가 그냥 돌아섰다는 사람이 의외로 많습니다. 불광동호박나이트는 서울 은평구 통일로
              지하에 자리한 나이트클럽이고, 처음 가는 사람이 걸리는 지점은 대체로 정해져 있습니다. 그 몇 개만
              치우면 나머지는 현장에서 알아서 풀립니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">불광동호박나이트 앞에서 멈추는 이유</h2>
              <p>
                처음 오는 사람이 품는 걱정은 대개 셋입니다. 혼자 들어가도 되는지, 뭘 입어야 하는지, 자리는 누가
                정해 주는지. 셋 다 문 안쪽에서 해결되는 문제입니다. 나이트는 보통 입구에서 웨이터가 손님을 받고
                인원과 희망 자리를 물어본 다음 홀로 안내합니다. 불광동 호박나이트 역시 그 구조에서 벗어나지
                않습니다. 미리 정해 둘 것은 사실상 도착 시각 하나뿐입니다.
              </p>
              <p className="nb-next">그 시각이 왜 중요한지는 문을 열고 들어간 직후에 바로 드러납니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">도착하면 이 순서대로 하면 됩니다</h2>
              <p>
                들어가서 두리번거릴 필요는 없습니다. 웨이터를 부르고 인원 수를 말하면 절반은 끝납니다. 여기에
                머무를 시간을 덧붙이면 자리 배정이 훨씬 정확해집니다. 두 시간만 있다 갈 사람과 문 닫을 때까지 있을
                사람은 앉을 자리가 다르기 때문입니다. 초보가 가장 자주 하는 실수가 이 말을 안 하는 것입니다. 그냥
                아무 데나 앉혀 달라고 하면 대체로 통로 쪽으로 갑니다.
              </p>
              <p className="nb-next">그래서 자리 이야기를 조금 더 뜯어볼 필요가 있습니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">불광동호박나이트 자리는 어떻게 갈리나</h2>
              <p>
                나이트의 자리는 크게 무대 앞, 통로 쪽, 가장자리로 나뉩니다. 무대 앞은 소리와 조명을 정면으로
                받습니다. 대화는 거의 포기해야 하지만 분위기는 가장 확실합니다. 통로 쪽은 사람이 계속 지나가서
                시야가 넓은 대신 어수선합니다. 가장자리는 반대입니다. 목소리를 조금만 높이면 이야기가 되고, 대신
                무대와는 한 겹 떨어져 있습니다. 처음이라면 가장자리부터 시작해 보는 편이 무난합니다.
              </p>
              <p className="nb-next">자리를 정하고 나면 그다음에 궁금해지는 게 부킹입니다.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">부킹은 실제로 이렇게 돌아갑니다</h2>
              <p>
                부킹은 손님끼리 알아서 하는 게 아닙니다. 대체로 웨이터가 중간에서 다리를 놓습니다. 그래서 담당
                웨이터에게 어떤 자리를 원하는지 미리 말해 두는 것이 실제 결과를 좌우합니다. 조용히 마시고 싶다고
                하면 그렇게 놔둡니다. 처음 온 사람이 흔히 하는 실수는 말을 아끼는 것입니다. 원하는 것을 말하지
                않으면 웨이터도 어림짐작으로 움직일 수밖에 없습니다.
              </p>
              <p className="nb-next">이 모든 건 일단 가게에 도착해야 시작되는 이야기입니다.</p>
            </section>

            <section aria-labelledby="h2-5">
              <h2 id="h2-5">불광동호박나이트 위치와 가는 길</h2>
              <p>
                서울 은평구 통일로 730 지하 1층입니다. 3호선과 6호선이 만나는 불광역이 코앞이라 역에서 나와 몇 분만
                걸으면 닿습니다. 연신내나 구파발 쪽에서 넘어오기에도 부담이 없는 자리입니다. 불광동 나이트클럽을
                찾아 이 동네를 처음 오는 사람이라면 통일로 큰길만 기억하면 됩니다. 건물 지하로 내려가는 입구가
                따로 있으니 간판을 보고 내려가면 됩니다.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">남은 건 몇 시에 갈지 정하고 전화를 한 번 거는 일뿐입니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">불광동호박나이트 예약과 문의</h2>
              <p>
                저녁 7시에 문을 열어 새벽 5시까지 이어집니다. 문 여는 시각에 맞춰 들어가면 자리 선택 폭이 가장
                넓습니다. 반대로 열 시를 넘기면 테이블이 빠르게 차기 시작합니다. 인원이 셋을 넘거나 원하는 자리가
                분명하다면 미리 전화를 걸어 두는 편이 확실합니다. 처음 가는 불광동호박나이트라면 도착 시간과 인원,
                이 둘만 말해도 충분합니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">아래에 인근 지역 다른 홀도 함께 정리해 두었습니다.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>불광동 호박나이트를 처음 찾기 전에 자주 확인하는 항목만 모았습니다.</p>
              {venue.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">더 궁금한 게 있으면 전화로 물어보는 편이 가장 빠릅니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}
