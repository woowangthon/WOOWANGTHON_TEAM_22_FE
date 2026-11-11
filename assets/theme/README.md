# assets/theme

테마 방 배경·일기장 표지 장식 후보 (v0.3 theme, 확정 전)

- 출처: [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji) `Flat` 스타일 SVG (main 브랜치, 2026-11-10 받음)
- 라이선스: MIT — 원문 [../LICENSE-fluentui-emoji.txt](../LICENSE-fluentui-emoji.txt). 배포 시 이 고지 유지
- 색 상속: 없음. 모든 색이 SVG 안에 고정값으로 들어 있고 `currentColor`를 쓰지 않음 (테마 토큰으로 색이 바뀌지 않음)
- 원본 파일은 수정하지 않음. 32×32 viewBox, `<img>` 또는 CSS 배경으로 사용

| 원래 이름 | 파일 | 원본 경로 |
|---|---|---|
| Snowman | `snowman.svg` | `assets/Snowman/Flat/snowman_flat.svg` |
| Wrapped gift | `wrapped_gift.svg` | `assets/Wrapped gift/Flat/wrapped_gift_flat.svg` |
| Black cat | `black_cat.svg` | `assets/Black cat/Flat/black_cat_flat.svg` |
| Crescent moon | `crescent_moon.svg` | `assets/Crescent moon/Flat/crescent_moon_flat.svg` |
| Full moon | `full_moon.svg` | `assets/Full moon/Flat/full_moon_flat.svg` |

## 벽지·바닥 타일 (팀 자체 제작, 출처 표기 불필요)

참고 이미지의 분위기만 따라 직접 그림. 벽지는 1200px 타일에 고정 시드로 무작위 배치(가장자리 이어짐), `index.html`의 `--wallpaper`

| 파일 | 내용 |
|---|---|
| `wall_christmas.svg` | 흰 벽 플랫레이: 솔가지·호랑가시 열매·빨강/은색 오너먼트·사탕·은색 별·진저브레드 별·은색 구슬 |
| `wall_halloween.svg` | 보라 밤하늘: 노랑·흰 별, 반짝이는 점, 검은 박쥐 |
| `wall_seollal.svg` | 연분홍 벽: 한지 창살 무늬 원 + 주황 꽃·흰 구름·반짝임 |
| `floor_oak.svg` | 바닥(크리스마스·핼러윈): 밝은 오크 판자 마루, 엇갈린 이음매와 나뭇결 |
| `floor_herringbone.svg` | 바닥(설날): 꿀색 헤링본 마루 |
| `rug_christmas.svg` | 카펫: 별·트리·눈송이·선물 패치워크 테두리 + 초록 니트에 빨강 지그재그 띠 |
| `rug_halloween.svg` | 카펫: 둥근 주황 물결 테두리 + 검정 띠 + 거미줄과 빨간 거미 |
| `rug_seollal.svg` | 카펫: 짚 멍석 위 한지 윷판·윷가락·말 |
| `deco_bunting_halloween.svg` | 핼러윈 천장 가랜드: 주황(호박 얼굴)·검정(노란 눈)·보라 삼각 깃발 |
| `deco_spider.svg` | 핼러윈: 천장 실에 매달린 거미 |
| `deco_lantern.svg` | 설날 청사초롱: 위 홍색·아래 청색 비단, 나무 살·뚜껑, 붉은 술 |
| `bokjumeoni.svg` | 설날 소파 위 복주머니: 노란 입구·자주 끈·색동 줄무늬 몸통 (테마 장식 `art[0]`) |
| `deco_moon_halloween.svg` | 핼러윈: 달력·책장 뒤 큰 노란 달과 박쥐 |
| `deco_skyline_halloween.svg` | 핼러윈: 벽 아래 실루엣 (언덕·귀신의 집·묘비·십자가·마른 나무) |
| `deco_web_corner.svg` | 핼러윈: 오른쪽 위 모서리 거미줄 |
| `deco_pine_seollal.svg` | 설날: 청록 솔잎 소나무 가지와 주황 꽃 (왼쪽은 CSS로 뒤집어 씀) |
| `deco_hills_seollal.svg` | 설날: 벽 아래 분홍 산 두 겹 + 청록 물결(청해파) |
| `deco_garland_christmas.svg` | 크리스마스: 한 줄로 이어진 솔가지 가랜드 (달력 위 구간은 얕게, 오너먼트는 양쪽만) + 이음매 빨간 리본 |

창밖 연출의 까치는 `index.html` 안의 인라인 SVG(팀 자체 제작), 박쥐는 `../tree/bat.svg`(Fluent Emoji, MIT)
