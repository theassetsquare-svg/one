import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도1 · 정면 소개형 — 중점 소재: 홀의 성격과 규모
const venue = bySlug('ansan-hit-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            <h1>안산히트나이트</h1>
            <p>역 앞에 붙은 홀은 성격이 따로 있습니다</p>
          </header>

          <div className="container">
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              퇴근길에 그대로 들를 수 있는 홀. 안산히트나이트를 한 줄로 규정하면 그렇습니다. 경기 안산시 상록구
              상록수역 앞에 자리한 관광 나이트클럽이고, 위치가 곧 성격이 된 경우입니다. 어떤 홀인지 자리 구조부터
              풀어 보겠습니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">안산히트나이트는 어떤 홀인가</h2>
              <p>
                역세권에 붙은 홀은 사람이 오는 방식이 다릅니다. 멀리서 작정하고 찾아오는 곳이 아니라, 하루를 끝내고
                가까우니까 들르는 곳이 됩니다. 그래서 초저녁부터 사람이 들어오고, 홀 분위기도 급격히 달아오르기보다
                서서히 올라갑니다. 안산 히트나이트가 지역 손님 비중이 높은 것도 같은 이유입니다. 관광 나이트클럽
                업종으로 등록된 곳이고, 홀 구조 역시 그 성격에 맞춰져 있습니다.
              </p>
              <p className="nb-next">그 성격은 홀 안 자리 배치에서 더 분명하게 드러납니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">안산히트나이트 자리는 셋으로 갈립니다</h2>
              <p>
                무대 앞, 통로 쪽, 가장자리. 대부분의 나이트가 이 셋으로 나뉩니다. 무대 앞은 소리와 조명을 정면으로
                받아 열기가 가장 셉니다. 통로 쪽은 사람이 계속 지나가 시야가 넓은 대신 어수선합니다. 가장자리는
                한 겹 물러나 있어 목소리를 조금 높이면 대화가 됩니다. 어디에 앉느냐로 같은 밤이 전혀 다르게
                기억됩니다. 자리가 그 홀의 성격을 가장 정확히 말해 줍니다.
              </p>
              <p className="nb-next">언제 들어가느냐에 따라 그 자리의 값도 달라집니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">시간대별로 홀이 채워지는 속도</h2>
              <p>
                초저녁 홀은 조용합니다. 조명이 낮고 사람이 적어 둘러보기 좋습니다. 아홉 시를 지나면서 테이블이 하나
                둘 차고, 열 시를 넘기면 좋은 자리부터 사라집니다. 열한 시 전후가 가장 두껍습니다. 이 시간대에는
                자리를 옮기거나 일행을 찾기가 어렵습니다. 역 앞이라는 조건 때문에 퇴근 시간대부터 사람이 들어오는
                편이라, 초저녁이 아주 한산하지는 않습니다.
              </p>
              <p className="nb-next">사람이 차오르면 자연히 움직임이 생깁니다.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">부킹은 웨이터를 통해 돕니다</h2>
              <p>
                손님끼리 직접 하는 구조가 아닙니다. 대체로 웨이터가 중간에서 자리를 연결합니다. 그래서 담당에게
                원하는 방향을 미리 말해 두는 것이 결과를 좌우합니다. 조용히 마시겠다고 하면 그렇게 놔둡니다.
                반대로 아무 말도 하지 않으면 웨이터는 어림짐작으로 움직입니다. 인원과 원하는 자리, 여기에 오늘
                무엇을 하러 왔는지 한 줄만 더하면 충분합니다.
              </p>
              <p className="nb-next">이제 어디로 가야 하는지 정리하겠습니다.</p>
            </section>

            <section aria-labelledby="h2-5" id="nb-access">
              <h2 id="h2-5">안산히트나이트 위치</h2>
              <p>
                경기도 안산시 상록구 상록수로 34, 본오동 874 상록수아카데미타워 지층입니다. 4호선 상록수역이
                가까워 역에서 나와 걸어가면 됩니다. 안산 나이트클럽을 찾아 상록구 쪽을 처음 오는 사람이라면 상록수역
                을 기준으로 잡으면 됩니다. 건물 지층이라 내려가는 입구를 한 번 확인하면 됩니다.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">남은 건 언제 갈지 정하고 연락하는 일뿐입니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">안산히트나이트 예약과 문의</h2>
              <p>
                전화로 미리 잡을 수 있습니다. 평일 초저녁이면 없이 가도 자리가 나지만, 주말이나 인원이 많은 날은
                미리 걸어 두는 편이 확실합니다. 말할 것은 셋입니다. 인원, 도착 시간, 원하는 자리. 역 앞이라 도착
                시간을 맞추기 쉬운 것도 장점입니다. 안산히트나이트에서 원하는 자리를 잡으려면 이 통화 한 번이면
                충분합니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">홀 성격에 대한 나머지 질문은 아래에 모았습니다.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>안산 히트나이트의 홀 성격을 묻는 항목만 따로 모았습니다.</p>
              {venue.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">아래에 수도권 다른 홀도 함께 정리해 두었습니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}
