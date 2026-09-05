import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도12 · 실수 방지형 — 중점 소재: 시간·인원·복장 실수
const venue = bySlug('busan-asiad-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            {/* 설계도 4장 — 광고주 쪽 상단 「광고」 라벨 (S4 2026-09-05) */}
            <p className="ad-label" style={{ display: "inline-block", margin: "0 0 10px", padding: "3px 10px", border: "1px solid #c9a227", borderRadius: 4, fontSize: 12, color: "#c9a227", letterSpacing: ".04em" }}>광고</p>
            <h1>부산아시아드나이트</h1>
            <p>헛걸음으로 끝나는 밤에는 공통점이 있습니다</p>
          </header>

          <div className="container">
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              일행과 층이 엇갈려 삼십 분을 버리는 경우가 가장 흔합니다. 부산아시아드나이트는 부산 동래구 온천동에
              있고 지하 두 개 층을 함께 씁니다. 이 구조를 모르고 가면 첫 삼십 분이 통째로 날아갑니다. 자주 나오는
              실수 셋을 먼저 짚습니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">실수 하나, 부산아시아드나이트 층을 안 맞춥니다</h2>
              <p>
                지하 1층과 지하 2층을 함께 쓰는 구조입니다. 일행에게 그냥 안에 있다고 말하면 서로 다른 층에서
                한참을 찾게 됩니다. 홀 안은 소리가 커서 전화도 잘 안 들립니다. 자리를 잡았다면 층과 자리 위치를
                묶어서 알려 줘야 합니다. 부산 아시아드나이트에서 시간을 가장 많이 버리는 지점이 정확히 여기입니다.
                말 한 마디 차이로 삼십 분이 갈립니다.
              </p>
              <p className="nb-next">두 번째 실수는 시계와 관련이 있습니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">실수 둘, 사람이 몰리는 시각에 도착합니다</h2>
              <p>
                열 시 전후는 홀이 가장 빠르게 차는 구간입니다. 이 시간에 맞춰 도착하면 자리를 고르는 게 아니라 남은
                자리를 받게 됩니다. 통로 쪽이나 구석이 대부분입니다. 열기를 보러 온 거라면 문제될 게 없지만,
                자리를 고르려고 갔다면 목적이 어긋납니다. 한 시간만 앞당겨도 선택지가 확실히 늘어납니다. 도착 시각
                하나가 그날 자리를 결정합니다.
              </p>
              <p className="nb-next">세 번째는 문 앞에서 걸리는 문제입니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">실수 셋, 차림과 신분증을 챙기지 않습니다</h2>
              <p>
                옷차림 기준은 대체로 느슨합니다. 정장을 요구하는 구조가 아닙니다. 다만 슬리퍼나 지나치게 편한
                차림은 걸릴 수 있습니다. 깔끔한 캐주얼이면 충분합니다. 신분증은 아예 다른 문제입니다. 확인 절차에서
                걸리면 문 앞에서 그대로 돌아 나오게 됩니다. 여기까지 와서 못 들어가는 것만큼 허무한 일도 없습니다.
                주머니에 넣어 두면 끝나는 문제입니다.
              </p>
              <p className="nb-next">셋을 뒤집으면 그대로 대안이 됩니다.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">부산아시아드나이트 헛걸음 막는 순서</h2>
              <p>
                먼저 층을 정합니다. 일행 중 먼저 도착한 사람이 자리를 잡고 층과 위치를 알립니다. 다음은 시간입니다.
                아홉 시 전후면 자리 선택 폭이 넓습니다. 마지막으로 신분증과 차림을 확인합니다. 이 셋만 정리해도
                문제 대부분이 사라집니다. 연중무휴로 알려져 있어 요일 걱정은 덜하지만, 요일에 따라 사람 수가 크게
                달라지는 점은 감안해야 합니다.
              </p>
              <p className="nb-next">순서가 잡혔으면 실제 위치를 확인할 차례입니다.</p>
            </section>

            <section aria-labelledby="h2-5" id="nb-access">
              <h2 id="h2-5">부산아시아드나이트 위치</h2>
              <p>
                부산광역시 동래구 온천장로107번길 32, 지하 1층과 2층입니다. 온천장역 3번 출구에서 걸어서 5분쯤
                걸립니다. 부산 나이트클럽을 찾아 동래 쪽을 처음 오는 사람이라면 온천장역을 기준으로 잡으면 됩니다.
                건물에 도착한 뒤에는 내려가는 층을 한 번 더 확인하세요.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">자리를 확실히 하려면 도착 전에 정리해 두는 게 낫습니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">부산아시아드나이트 예약과 문의</h2>
              <p>
                평일 초저녁이면 예약 없이도 자리가 납니다. 금요일과 토요일 밤은 다릅니다. 인원이 많거나 원하는
                자리가 분명하다면 미리 잡아 두는 편이 확실합니다. 전화할 때 인원, 도착 시간, 원하는 층까지 함께
                말하면 일행 찾는 문제도 같이 해결됩니다. 부산아시아드나이트에서 헛걸음을 막는 가장 짧은 방법이
                이겁니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">놓치기 쉬운 나머지 항목은 아래에 모았습니다.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>부산 아시아드나이트에서 놓치기 쉬운 항목만 따로 모았습니다.</p>
              {venue.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">아래에 영남권 다른 홀도 함께 정리해 두었습니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}
