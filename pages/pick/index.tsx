import PageThumb from '@/components/PageThumb';
import PickSEO from '@/components/pick/PickSEO';
import PickLayout from '@/components/pick/PickLayout';
import { Checklist } from '@/components/pick/PickParts';
import { REGION_GROUPS, SITE, VENUES, bySlug, pickPath } from '@/lib/pick';

/** 허브 — 전국 나이트 고르기 40 */
const TITLE = '전국 나이트 고르기 40 — 지역별 선택 기준 한자리에';
const DESC =
  '전국 나이트 40곳을 선택 축으로 정리한 목록입니다. 어떤 사람에게 맞는 홀인지, 가기 전 무엇을 확인해야 하는지 기준으로 나눴습니다. 확인되지 않은 정보는 확인 불가로 남깁니다.';

export default function PickHub() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE}/pick#list`,
    name: '전국 나이트 고르기 40',
    numberOfItems: VENUES.length,
    itemListElement: VENUES.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: v.nameA,
      url: `${SITE}${pickPath(v.slug)}`,
    })),
  };
  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE}/pick#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '전국 나이트 고르기 40', item: `${SITE}/pick` },
    ],
  };

  return (
    <>
      <PickSEO
        title={TITLE}
        description={DESC}
        path="/pick"
        image="/og/pick-hub.png"
        imageAlt="전국 나이트 고르기 40 — 지역별 선택 기준 목록 카드"
        keywords={['전국 나이트', '나이트 고르는 기준', '지역별 나이트', '나이트클럽 목록', '나이트 선택 가이드']}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <PickLayout footerLines={['전국 나이트 고르기 40', '지역별 선택 기준 안내']}>
        <nav className="pk-crumb" aria-label="위치 경로">
          <span>전국 나이트 고르기 40</span>
        </nav>

        <article>
          <header className="pk-hero">
            <span className="pk-eyebrow">허브 · 40곳</span>
            <h1>전국 나이트 고르기 40</h1>
            <p>이름이 아니라 기준으로 고르는 목록입니다. 각 페이지는 어떤 사람에게 맞는 홀인지부터 답합니다.</p>
          </header>

          <div className="pk-wrap">
            {/* og:image 와 동일한 파일 — 네이버 썸네일 후보로 본문에 실제 노출합니다. */}
            <PageThumb src="/og/pick-hub.png" alt="전국 나이트 고르기 40 — 지역별 선택 기준 목록 카드" />

            <p className="pk-lead">
              같은 값을 내도 어디에 앉느냐에 따라 밤이 완전히 달라집니다. 그래서 이 목록은 순위를 매기지 않습니다.
              대신 40곳마다 하나씩 선택 축을 붙여 두었습니다. 오늘 인원과 시간과 이동 방법을 먼저 정하고 나면
              고를 곳은 저절로 좁혀집니다.
            </p>

            <section className="pk-sec" aria-labelledby="h2-axis">
              <h2 id="h2-axis">무엇을 기준으로 고르면 될까요?</h2>
              <p>
                네 가지만 정하면 대부분 정리됩니다. 인원, 도착 시간, 이동 방법, 그리고 오늘 밤의 목적입니다. 이 넷이
                정해지면 나머지 조건은 부수적입니다.
              </p>
              <Checklist
                title="목록을 보기 전에 정할 네 가지"
                items={[
                  '몇 명이 가는가 — 부스와 룸과 홀 테이블의 답이 여기서 갈립니다',
                  '몇 시에 도착하는가 — 초저녁은 자리, 늦은 밤은 열기를 얻습니다',
                  '어떻게 오가는가 — 차를 쓸지 말지에 따라 후보가 절반으로 줄어듭니다',
                  '오늘의 목적은 무엇인가 — 대화인지 무대인지에 따라 결론이 뒤집힙니다',
                ]}
              />
            </section>

            <section className="pk-sec" aria-labelledby="h2-unknown">
              <h2 id="h2-unknown">확인되지 않은 정보는 어떻게 적었나요?</h2>
              <p>
                주소·가장 가까운 역·층·출입 연령을 웹에서 확인해 표로 옮겼습니다. 자료가 없거나 서로 어긋나는
                항목은 그럴듯하게 채우지 않고 <strong>확인 불가</strong>로 남겼습니다. 없는 정보를 지어내면 그때부터
                안내가 아니라 추측이 되기 때문입니다.
              </p>
              <p>
                연령은 완전문으로만 적습니다. 확인된 곳은 만 27세 이상, 만 38세 이상 두 곳뿐이고 나머지는 확인
                불가입니다. 방문 전에 직접 물어보는 편이 정확합니다.
              </p>
            </section>

            <section className="pk-sec" aria-labelledby="h2-list" id="pk-list">
              <h2 id="h2-list">지역별 40곳</h2>
              <p>각 줄의 한 문장이 그 페이지가 잡은 선택 축입니다. 자신의 조건과 겹치는 곳부터 열어 보십시오.</p>
              {REGION_GROUPS.map((g) => (
                <div key={g.id} id={`pk-${g.id}`} style={{ marginBottom: 28 }}>
                  <h3 style={{ color: '#fff', margin: '18px 0 12px', fontSize: '1.15rem', fontWeight: 800 }}>
                    {g.label} <span style={{ color: '#8b9099', fontWeight: 600 }}>{g.slugs.length}곳</span>
                  </h3>
                  <div className="pk-grid">
                    {g.slugs.map((s) => {
                      const v = bySlug(s);
                      return (
                        <a key={s} href={pickPath(s)} className="pk-card">
                          <h3>{v.nameA}</h3>
                          <p>{v.region}</p>
                          <span className="pk-axis">{v.axis}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </article>

        <aside className="pk-rel" aria-labelledby="pk-rel-h">
          <h2 id="pk-rel-h">업소를 운영하고 계신다면</h2>
          <div className="pk-grid">
            <div className="pk-card">
              <h3>광고문의</h3>
              <p>카카오톡 besta12 — 업소 사장님 대상 광고·제휴 입점 문의 채널입니다.</p>
              <span className="pk-axis">손님 예약 창구가 아닙니다</span>
            </div>
          </div>
        </aside>
      </PickLayout>
    </>
  );
}
