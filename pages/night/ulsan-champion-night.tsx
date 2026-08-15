import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도6 · 오해 깨기형 — 중점 소재: 옷차림·준비물 오해
const venue = bySlug('ulsan-champion-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            <h1>울산챔피언나이트</h1>
            <p>소문으로 굳어진 이야기부터 하나씩 걷어냅니다</p>
          </header>

          <div className="container">
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              정장을 입어야 한다고 알고 계셨다면 그건 사실이 아닙니다. 울산챔피언나이트는 울산 남구 삼산동에 있는
              대형 홀이고, 사람들이 굳게 믿고 있는 이야기 중 상당수가 실제와 어긋납니다. 옷차림부터 준비물까지
              차례로 뒤집어 보겠습니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">울산챔피언나이트를 둘러싼 흔한 오해</h2>
              <p>
                가장 자주 도는 이야기는 옷을 갖춰 입어야 들어갈 수 있다는 것입니다. 여기에 예약이 없으면 아예 문
                앞에서 막힌다는 말, 혼자 가면 자리를 안 준다는 말이 따라붙습니다. 셋 다 실제와는 거리가 있습니다.
                이런 소문은 대체로 특정 시기, 특정 홀의 이야기가 옮겨 다니면서 굳어진 것입니다. 울산 챔피언나이트를
                두고 도는 이야기도 그 경로를 그대로 밟았습니다.
              </p>
              <p className="nb-next">그렇다면 실제로는 어느 선까지가 기준인지 짚어야 합니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">실제 기준은 훨씬 느슨합니다</h2>
              <p>
                나이트의 옷차림 기준은 보통 하나로 요약됩니다. 지나치게 편한 차림만 아니면 됩니다. 슬리퍼나 운동복
                차림이 걸리는 것이지 정장을 요구하는 게 아닙니다. 깔끔한 캐주얼이면 대체로 충분합니다. 준비물도
                간단합니다. 신분증과 결제 수단, 그게 거의 전부입니다. 짐이 많으면 오히려 자리에서 거치적거려
                불편해집니다. 가볍게 가는 편이 낫습니다.
              </p>
              <p className="nb-next">차림이 정리되면 다음 관심사는 어디에 앉느냐로 넘어갑니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">울산챔피언나이트 좌석은 이렇게 나뉩니다</h2>
              <p>
                대형 홀은 자리에 따라 체감이 크게 갈립니다. 무대 정면은 소리와 조명을 그대로 받아 열기가 가장
                셉니다. 대화는 사실상 어렵습니다. 홀 가장자리는 반대로 목소리를 조금 높이면 이야기가 됩니다.
                시끄러워서 말이 안 통한다는 것도 절반만 맞는 이야기입니다. 어디에 앉느냐에 따라 완전히 달라집니다.
                통로 쪽은 시야는 좋지만 사람이 계속 지나갑니다.
              </p>
              <p className="nb-next">자리만큼 크게 작용하는 게 몇 시에 들어가느냐입니다.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">시간대에 따라 완전히 다른 곳이 됩니다</h2>
              <p>
                초저녁 홀은 조용합니다. 조명도 낮고 사람도 적어 처음 오는 사람이 둘러보기에 좋습니다. 열 시를
                넘기면서 테이블이 차기 시작하고, 열한 시 전후로 가장 두꺼워집니다. 이 시간대만 보고 나이트 전체를
                판단하니 오해가 생깁니다. 새벽으로 넘어가면 다시 한 번 결이 바뀝니다. 같은 홀인데 세 번쯤 다른
                얼굴을 보여주는 셈입니다.
              </p>
              <p className="nb-next">직접 확인하려면 우선 어디로 가야 하는지부터 알아야 합니다.</p>
            </section>

            <section aria-labelledby="h2-5" id="nb-access">
              <h2 id="h2-5">울산챔피언나이트 위치</h2>
              <p>
                울산광역시 남구 삼산동 1559-17, 정동로 75입니다. 삼산동 번화가 한복판이라 주변에 식당과 술집이
                밀집해 있습니다. 저녁을 먹고 걸어서 넘어오기 좋은 자리입니다. 울산은 도시철도가 없어 대부분 버스나
                차로 움직입니다. 울산 나이트클럽을 처음 찾는 사람이라도 삼산동 상권만 기억하면 헤맬 일은 거의
                없습니다.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">자리를 확실히 하고 싶다면 도착 전에 연락해 두는 편이 좋습니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">울산챔피언나이트 예약과 문의</h2>
              <p>
                예약이 반드시 필요한 건 아니지만, 인원이 많거나 원하는 자리가 분명하면 미리 잡는 쪽이 유리합니다.
                전화로 인원과 도착 시간만 말하면 됩니다. 혼자 가도 자리를 안 준다는 이야기 역시 사실이 아닙니다.
                웨이터가 자리와 합석을 정리해 주기 때문입니다. 울산챔피언나이트에 대해 굳어진 이야기들은 대체로 이
                한 통으로 정리됩니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">남은 오해는 아래 질문 목록에서 확인해 보세요.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>울산 챔피언나이트를 두고 잘못 알려진 부분이 특히 많은 항목입니다.</p>
              {venue.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">목록에 없는 내용은 전화로 확인하는 편이 정확합니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}
