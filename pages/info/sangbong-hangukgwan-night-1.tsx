import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도10 · 짧은 요약형(문단 짧게, 표·목록 중심) — 중점 소재: 방문 전 체크리스트
const venue = bySlug('sangbong-hangukgwan-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            <h1>상봉동한국관나이트</h1>
            <p>확인된 것만 짧게 끊어 정리했습니다</p>
          </header>

          <div className="container">
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              밤이 가장 긴 홀입니다. 상봉동한국관나이트는 서울 중랑구 망우로 2층에 있고, 저녁 7시에 열어 아침
              6시에 닫습니다. 방문 전에 확인할 것만 아래에 끊어 두었습니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">상봉동한국관나이트 한눈에</h2>
              <FactTable venue={venue} />
              <ul>
                <li>마감이 아침 6시라 늦게 합류해도 시간이 남습니다.</li>
                <li>금·토는 시간을 둘로 나눠 돌립니다.</li>
                <li>테이블·부스·룸이 따로 있습니다.</li>
              </ul>
              <p className="nb-next">가장 먼저 정해야 할 건 어디에 앉을지입니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">좌석 세 가지</h2>
              <ul>
                <li>테이블 — 두세 명. 홀 소리를 그대로 받습니다.</li>
                <li>부스 — 네 명 안팎. 자리는 구분되고 분위기는 받습니다.</li>
                <li>룸 — 문이 닫혀 무대 소리가 한 겹 걸러집니다.</li>
              </ul>
              <p>대화가 목적이면 룸, 무대가 목적이면 테이블입니다. 부스는 그 사이에 놓입니다.</p>
              <p className="nb-next">자리를 정했다면 다음은 시간입니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">상봉동한국관나이트 시간표</h2>
              <ul>
                <li>매일 저녁 7시 개장, 아침 6시 마감.</li>
                <li>금·토 1부 — 밤 10시부터 새벽 2시.</li>
                <li>금·토 2부 — 새벽 2시부터 아침 6시.</li>
              </ul>
              <p>
                평일은 시간을 나누지 않습니다. 2부제는 금요일과 토요일에만 돕니다. 새벽에 합류할 계획이라면 2부를
                기준으로 잡으면 됩니다.
              </p>
              <p className="nb-next">시간이 정해지면 인원 수를 맞출 차례입니다.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">인원별 기준</h2>
              <ul>
                <li>둘 — 테이블 하나로 충분합니다.</li>
                <li>셋에서 넷 — 부스가 가장 편합니다.</li>
                <li>다섯 이상 — 룸을 잡는 편이 낫습니다.</li>
              </ul>
              <p>
                테이블을 여러 개 붙이면 대화가 갈라집니다. 인원이 많을수록 예약 시점을 앞당기는 게 실제로 효과가
                큽니다.
              </p>
              <p className="nb-next">남은 건 어떻게 찾아가느냐입니다.</p>
            </section>

            <section aria-labelledby="h2-5" id="nb-access">
              <h2 id="h2-5">상봉동한국관나이트 위치</h2>
              <p>서울 중랑구 망우로 326, 2층입니다. 7호선과 경의중앙선이 지나는 상봉역에서 도보 3~5분입니다.</p>
              <p>
                상봉동 나이트클럽을 처음 찾는 사람이라면 망우로 큰길만 기억하면 됩니다. 2층이라 간판이 눈에 잘
                들어오는 자리입니다.
              </p>
              <p className="nb-next">주말 방문이라면 예약을 먼저 챙겨야 합니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">상봉동한국관나이트 방문 전 체크리스트</h2>
              <ul>
                <li>날짜 — 금·토면 1부인지 2부인지 정합니다.</li>
                <li>인원 — 테이블·부스·룸 중 무엇을 잡을지 갈립니다.</li>
                <li>도착 시간 — 늦을수록 남는 자리가 줄어듭니다.</li>
                <li>신분증 — 확인 절차에서 시간을 버리지 않게 합니다.</li>
              </ul>
              <p>
                상봉동 한국관나이트처럼 마감이 늦은 곳은 늦게 도착해도 시간이 남습니다. 다만 자리는 이야기가
                다릅니다. 상봉동한국관나이트에서 원하는 자리를 잡으려면 미리 걸어 두는 편이 확실합니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">짧게 답할 수 있는 질문은 아래에 모았습니다.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>상봉동 한국관나이트의 2부제와 좌석을 묻는 항목만 모았습니다.</p>
              {venue.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">아래에 서울 인근 다른 홀도 정리해 두었습니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}
