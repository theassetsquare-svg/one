import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도8 · 시간 흐름형 — 중점 소재: 시간대별 밀집도
const venue = bySlug('daejeon-one-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            <h1>대전원나이트</h1>
            <p>저녁 8시부터 문 닫을 때까지, 밤이 흐르는 순서</p>
          </header>

          <div className="container">
            <span className="nb-age">만 38세 이상</span>
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              저녁 8시. 대전원나이트의 하루는 이 시각에 시작됩니다. 대전 동구 용전동에 있는 홀이고 출입은 만 38세
              이상만 가능합니다. 여기서부터 문 닫는 시각까지, 시간대마다 홀이 어떻게 채워지는지 순서대로
              따라가겠습니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">저녁 8시, 대전원나이트가 문을 엽니다</h2>
              <p>
                문이 열린 직후의 홀은 비어 있습니다. 조명도 낮고 소리도 아직 크지 않습니다. 이 시간에 들어오는 손님
                대부분은 자리를 고르러 온 사람들입니다. 홀 전체가 비어 있으니 무대 앞이든 가장자리든 원하는 대로
                앉을 수 있습니다. 대전 원나이트에 처음 오는 사람이라면 이 시간대가 둘러보기 가장 편합니다. 소리에
                압도되지 않고 구조를 눈에 담을 수 있기 때문입니다.
              </p>
              <p className="nb-next">한 시간쯤 지나면 이 여유가 조금씩 줄어들기 시작합니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">아홉 시, 자리가 잡히기 시작합니다</h2>
              <p>
                아홉 시를 넘기면 테이블이 하나둘 채워집니다. 아직 홀 전체가 찬 건 아니지만 좋은 자리부터 먼저
                나갑니다. 무대에서 적당히 떨어진 가장자리, 통로에서 한 칸 물러난 자리 같은 곳입니다. 이 시간대에
                도착하면 선택지가 있으면서 분위기도 어느 정도 올라와 있습니다. 자리를 고르는 것과 열기를 함께
                가져가려면 대체로 이 무렵이 균형점입니다.
              </p>
              <p className="nb-next">그다음 한 시간 동안 홀의 온도가 확실히 달라집니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">열 시 무렵, 대전원나이트의 온도가 오릅니다</h2>
              <p>
                열 시를 지나면서 곡이 빨라지고 조명이 잦게 바뀝니다. 사람이 자리에서 일어나기 시작하는 것도 이
                무렵입니다. 남아 있는 빈 테이블은 대체로 통로 쪽이나 구석에 몰립니다. 늦게 도착한 사람은 자리를
                고르는 게 아니라 남은 자리를 받게 됩니다. 웨이터의 움직임도 이때부터 빨라집니다. 부킹과 합석이
                본격적으로 도는 구간이기 때문입니다.
              </p>
              <p className="nb-next">한 시간만 더 지나면 홀은 가장 두꺼워집니다.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">열한 시 전후, 가장 두꺼운 구간</h2>
              <p>
                밀도가 가장 높은 시간대입니다. 테이블이 거의 차고 통로에도 사람이 섭니다. 이 시간대에는 자리를
                옮기거나 일행을 찾기가 어렵습니다. 그래서 미리 자리를 정해 두고 움직이는 게 중요합니다. 열기를 보러
                온 사람에게는 이 구간이 목적지입니다. 반대로 조용한 밤을 원했다면 한 시간쯤 앞에 도착해 가장자리에
                자리를 잡아 두는 편이 낫습니다.
              </p>
              <p className="nb-next">절정이 지나면 홀은 서서히 정리 국면으로 넘어갑니다.</p>
            </section>

            <section aria-labelledby="h2-5">
              <h2 id="h2-5">마무리, 대전원나이트가 문을 닫기까지</h2>
              <p>
                평일에는 새벽 2시 30분, 금요일과 토요일에는 새벽 3시 30분에 닫습니다. 마지막 한 시간은 대체로 곡이
                느려집니다. 조명이 낮아지고 자리를 뜨는 사람이 늘어납니다. 이 구간은 대화하기에 오히려 좋습니다.
                소리가 줄고 통로가 비기 때문입니다. 짐을 챙기고 일행을 모으기에도 알맞은 시간입니다. 마감 시각은
                요일에 따라 한 시간 차이가 나니 미리 확인해 두세요.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">이 흐름 안에서 어디에 자리를 잡을지 정하는 게 남았습니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">대전원나이트 방문 전 정리</h2>
              <p>
                용전동 대전복합터미널 인근입니다. 터미널을 기준으로 잡으면 찾기 쉽습니다. 대전 나이트클럽 가운데
                또래끼리 모이는 성격이 뚜렷한 편이라, 만 38세 이상이라는 기준이 실제로 홀 분위기를 만듭니다.
                신분증은 챙겨 가세요. 도착 시각만 정해도 그날 밤의 결이 상당 부분 결정됩니다. 대전원나이트를 처음
                찾는다면 아홉 시 전후를 권합니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">시간대별로 자주 나오는 질문을 아래에 모았습니다.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>대전 원나이트의 시간대와 기준을 묻는 항목만 따로 모았습니다.</p>
              {venue.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">아래에 다른 지역 홀도 함께 정리해 두었습니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}
