/**
 * /pick/* + 홈 전용 테마 — 차콜 + 오렌지.
 *
 * ⚠️ 기존 globals.css(골드 계열)는 손대지 않습니다. 여기서 필요한 만큼만 덮어씁니다.
 * ⚠️ .pkbar(하단 고정 바)는 조상에 transform/filter/backdrop-filter 가 없어야 뷰포트 기준으로
 *    고정됩니다. 그래서 레이아웃 최상단 프래그먼트에서 바로 렌더합니다.
 */
export const PK_CHARCOAL = '#16181C';
export const PK_ORANGE = '#F2600C';

export const PICK_CSS = `
body{background:${PK_CHARCOAL};padding-bottom:calc(86px + env(safe-area-inset-bottom,0px))}
:focus-visible{outline:3px solid ${PK_ORANGE}}
nav{background:rgba(22,24,28,0.96);border-bottom:2px solid ${PK_ORANGE}}
nav .logo{color:${PK_ORANGE}}
nav .nl a:hover,nav .nl a.active{background:${PK_ORANGE};color:#fff}
footer{background:#101215;border-top:2px solid rgba(242,96,12,0.35)}
footer a{color:${PK_ORANGE}}

.pk-crumb{max-width:1100px;margin:0 auto;padding:14px 20px 0;color:#8b9099;font-size:0.88rem}
.pk-crumb a{color:${PK_ORANGE}}

.pk-hero{padding:clamp(26px,6vw,52px) 20px 4px;max-width:1100px;margin:0 auto}
.pk-hero .pk-eyebrow{display:inline-block;background:rgba(242,96,12,0.14);border:1px solid rgba(242,96,12,0.5);color:${PK_ORANGE};font-weight:800;font-size:0.86rem;padding:6px 14px;border-radius:999px;margin-bottom:14px}
.pk-hero h1{font-size:clamp(1.7rem,5.4vw,3rem);font-weight:900;color:#fff;letter-spacing:-0.03em;line-height:1.2;margin-bottom:12px}
.pk-hero p{color:#c3c8d0;font-size:clamp(0.98rem,2.4vw,1.12rem);max-width:820px}

.pk-wrap{max-width:1100px;margin:0 auto;padding:0 20px}
.pk-lead{color:#c9ced6;line-height:1.85;margin:18px 0 26px;font-size:clamp(0.98rem,2.4vw,1.08rem)}

.pk-answer{background:#1E2126;border-left:6px solid ${PK_ORANGE};border-radius:14px;padding:20px 22px;margin:0 0 26px}
.pk-answer h2{font-size:1rem;color:${PK_ORANGE};margin:0 0 12px;text-align:left;font-weight:900;letter-spacing:0.02em}
.pk-answer ol{margin:0;padding-left:1.25rem;color:#e6e9ee}
.pk-answer li{margin-bottom:8px;line-height:1.75;font-size:clamp(0.96rem,2.3vw,1.05rem)}
.pk-answer li:last-child{margin-bottom:0}

.pk-tblwrap{overflow-x:auto;margin:0 0 30px}
.pk-tbl{width:100%;border-collapse:collapse;font-size:clamp(0.92rem,2.2vw,1rem)}
.pk-tbl caption{text-align:left;color:#8b9099;padding-bottom:10px;font-size:0.92rem}
.pk-tbl th,.pk-tbl td{border:1px solid #2C3038;padding:11px 14px;text-align:left;vertical-align:top}
.pk-tbl th{color:${PK_ORANGE};background:#1B1E23;white-space:nowrap;width:32%;font-weight:800}
.pk-tbl td{color:#d7dbe1}

.pk-sec{padding:0 0 30px}
.pk-sec h2{font-size:clamp(1.25rem,3.4vw,1.7rem);color:#fff;text-align:left;margin:0 0 14px;font-weight:900;line-height:1.35}
.pk-sec h2::before{content:'';display:block;width:44px;height:4px;background:${PK_ORANGE};border-radius:2px;margin-bottom:12px}
.pk-sec p{color:#c3c8d0;line-height:1.85;margin-bottom:14px;font-size:clamp(0.96rem,2.3vw,1.05rem)}

.pk-check{background:#1B1E23;border:1px solid #2C3038;border-left:6px solid ${PK_ORANGE};border-radius:14px;padding:20px 22px;margin:6px 0 4px}
.pk-check h3{color:${PK_ORANGE};font-size:clamp(1rem,2.5vw,1.15rem);margin:0 0 14px;font-weight:900}
.pk-check ul{list-style:none;margin:0;padding:0}
.pk-check li{position:relative;padding-left:34px;margin-bottom:12px;color:#dfe3e9;line-height:1.7;font-size:clamp(0.94rem,2.3vw,1.02rem)}
.pk-check li:last-child{margin-bottom:0}
.pk-check li::before{content:'✓';position:absolute;left:0;top:1px;width:22px;height:22px;border-radius:6px;border:2px solid ${PK_ORANGE};color:${PK_ORANGE};font-size:0.82rem;font-weight:900;display:flex;align-items:center;justify-content:center}

.pk-verdict{background:linear-gradient(180deg,#22252B 0%,#1B1E23 100%);border:1px solid rgba(242,96,12,0.45);border-radius:16px;padding:24px;margin:6px 0 30px}
.pk-verdict h2{color:${PK_ORANGE};font-size:clamp(1.25rem,3.4vw,1.7rem);margin:0 0 14px;text-align:left;font-weight:900}
.pk-verdict p{color:#dadfe6;line-height:1.85;margin-bottom:12px}
.pk-verdict p:last-child{margin-bottom:0}

.pk-faq{background:#1B1E23;border:1px solid #2C3038;border-radius:12px;margin-bottom:10px;overflow:hidden}
.pk-faq summary{padding:16px 20px;cursor:pointer;font-weight:800;color:${PK_ORANGE};list-style:none;font-size:clamp(0.98rem,2.4vw,1.08rem)}
.pk-faq summary::-webkit-details-marker{display:none}
.pk-faq p{padding:0 20px 18px;color:#c3c8d0;margin:0;line-height:1.8}

.pk-oneline{border-top:1px solid #2C3038;margin-top:26px;padding:20px 0 8px;color:#fff;font-weight:800;font-size:clamp(1rem,2.6vw,1.15rem)}
.pk-oneline span{color:${PK_ORANGE};margin-right:8px}

.pk-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px}
.pk-card{display:block;background:#1B1E23;border:1px solid #2C3038;border-radius:14px;padding:18px 20px;transition:border-color .2s,transform .2s}
.pk-card:hover{border-color:${PK_ORANGE};transform:translateY(-3px)}
.pk-card h3{color:#fff;font-size:1.05rem;margin:0 0 6px;font-weight:800}
.pk-card p{color:#9aa1ab;margin:0;font-size:0.92rem;line-height:1.6}
.pk-card .pk-axis{color:${PK_ORANGE};font-size:0.86rem;margin-top:8px;display:block}

.pk-rel{max-width:1100px;margin:0 auto;padding:6px 20px 40px}
.pk-rel h2{color:#fff;font-size:clamp(1.2rem,3.2vw,1.6rem);text-align:left;margin-bottom:16px;font-weight:900}

div.pkbar{position:fixed;left:0;right:0;bottom:0;z-index:99999;display:flex;align-items:center;justify-content:center;
  height:80px;box-sizing:content-box;padding:0;padding-bottom:env(safe-area-inset-bottom,0px);
  background:${PK_ORANGE};color:#fff;font-weight:900;font-size:18px;box-shadow:0 -2px 14px rgba(0,0,0,.45);
  transform:translateZ(0);backface-visibility:hidden}
div.pkbar a,div.pkbar span{color:#fff;display:flex;align-items:center;gap:8px;height:100%;padding:0 10px;white-space:nowrap;font-weight:900}
div.pkbar a{width:100%;flex:1 1 auto;justify-content:center;text-decoration:none}
div.pkbar .pkbar-sub{font-size:clamp(0.86rem,3.4vw,1.05rem);color:#141414;font-weight:800}
div.pkbar .pkbar-tel{font-size:clamp(1.5rem,7.4vw,2.2rem);font-weight:900;letter-spacing:0.01em;color:#fff}
div.pkbar b{color:#141414;background:#fff;border-radius:8px;padding:2px 10px;margin-left:2px}
@media(max-width:480px){div.pkbar{height:76px;font-size:15px}body{padding-bottom:calc(96px + env(safe-area-inset-bottom,0px))}}
@media(max-width:360px){div.pkbar{font-size:13px}}
`;
