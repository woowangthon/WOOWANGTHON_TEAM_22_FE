# assets/tree

화분(나무) 성장 단계와 테마 성체 나무 합성용

- 출처: [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji) `Flat` 스타일 SVG (main 브랜치, 2026-11-10 받음)
- 라이선스: MIT — 원문 [../LICENSE-fluentui-emoji.txt](../LICENSE-fluentui-emoji.txt). 배포 시 이 고지 유지
- 색 상속: 없음. 모든 색이 SVG 안에 고정값으로 들어 있고 `currentColor`를 쓰지 않음 (테마 토큰으로 색이 바뀌지 않음)
- 원본 파일은 수정하지 않음. 32×32 viewBox, `<img>` 또는 CSS 배경으로 사용

| 원래 이름 | 파일 | 원본 경로 |
|---|---|---|
| Chestnut | `tree_seed.svg` | `assets/Chestnut/Flat/chestnut_flat.svg` |
| Seedling | `seedling.svg` | `assets/Seedling/Flat/seedling_flat.svg` |
| Herb | `herb.svg` | `assets/Herb/Flat/herb_flat.svg` |
| Leafy green | `leafy_green.svg` | `assets/Leafy green/Flat/leafy_green_flat.svg` |
| Evergreen tree | `evergreen_tree.svg` | `assets/Evergreen tree/Flat/evergreen_tree_flat.svg` |
| Deciduous tree | `deciduous_tree.svg` | `assets/Deciduous tree/Flat/deciduous_tree_flat.svg` |
| Christmas tree | `christmas_tree.svg` | `assets/Christmas tree/Flat/christmas_tree_flat.svg` |
| Sparkles | `sparkles.svg` | `assets/Sparkles/Flat/sparkles_flat.svg` |
| Jack-o-lantern | `jack_o_lantern.svg` | `assets/Jack-o-lantern/Flat/jack-o-lantern_flat.svg` |
| Ghost | `ghost.svg` | `assets/Ghost/Flat/ghost_flat.svg` |
| Kite | `kite.svg` | `assets/Kite/Flat/kite_flat.svg` |
| Bat | `bat.svg` | `assets/Bat/Flat/bat_flat.svg` (2026-11-11 받음) |

직접 그린 장식 (팀 자체 제작, 출처 표기 불필요. 색은 seollal 디자인 시스템):

| 이름 | 파일 | 내용 |
|---|---|---|
| 한지 무늬 장식 | `orn_hanji.svg` | 고리 + 한지 원판에 분홍 수(壽)자 무늬(단순화) + 노리개 술 |
| 태극기 장식 | `orn_taegukgi.svg` | 고리 + 3:2 태극기 (태극 지름 = 깃발 높이 1/2, 건·곤·감·리 4괘) |

## 나무 `asset_key` → 파일 매핑 (FE `TREE_ASSETS`)

FE는 서버 응답의 `tree.asset_key`만 보고 아래 파일을 고름 (단계·테마를 FE가 조합하지 않음). 화분 그릇은 고정 그림이고 식물만 바뀜. 크기는 식물 그림 폭(화분 칸의 80%) 대비 배율. 밑동 아래 여백(viewBox 32 기준)만큼 그림을 내려 줄기·밑동 끝이 화분 테두리 뒤에 묻히게 함 (새싹의 갈색 흙더미도 테두리 뒤로 가려짐, 원본 SVG는 그대로).

| `asset_key` | 파일 | 크기 | 밑동 아래 여백 |
|---|---|---|---|
| `tree_stage_0` | 없음 (빈 화분) | — | — |
| `tree_stage_1` | `seedling.svg` | 0.26 | 10.39 |
| `tree_stage_2` | `seedling.svg` | 0.38 | 10.39 |
| `tree_stage_3` | `evergreen_tree.svg` | 0.56 | 2 |
| `tree_stage_4` | `evergreen_tree.svg` | 0.67 | 2 |
| `tree_stage_5` | `evergreen_tree.svg` | 0.78 | 2 |
| `tree_stage_6` | `evergreen_tree.svg` | 0.88 | 2 |
| `tree_adult_default` | `evergreen_tree.svg` | 1 | 2 |
| `tree_adult_christmas` | `christmas_tree.svg` + 장식 `sparkles.svg` | 1 | 2 |
| `tree_adult_halloween` | `evergreen_tree.svg` + 장식 `ghost.svg`, `jack_o_lantern.svg` | 1 | 2 |
| `tree_adult_seollal` | `evergreen_tree.svg` + 장식 `orn_hanji.svg`, `orn_taegukgi.svg` | 1 | 2 |

테마 성체의 작은 장식은 나무 그림 위 별도 층(`.tree-orn`)에 붙임: 나무 칸(32×32) 기준 가운데 x%, y%와 폭%. 크리스마스: 반짝임 (72, 20, 20). 할로윈: 유령 (55, 41, 24), 호박 (35, 72, 22). 설날: 한지 무늬 (60, 45, 23), 태극기 (35, 72, 26).

입체감: 나무와 장식 그림은 원본 그대로 두고, FE가 그림 모양(CSS mask) 안에 오른쪽 위 반사광과 왼쪽·아래 그늘을 덧칠함 (`.tree-shade`, 장식은 `.lit`). 할로윈 방에서는 조금 어둡게 표시.

- 모르는 키: `tree_adult_`로 시작하면 `tree_adult_default`, 그 밖에는 `tree_stage_0`(빈 화분)
- 단계 그림에 쓰지 않는 파일: `tree_seed.svg`, `herb.svg`, `leafy_green.svg`, `deciduous_tree.svg`
- 그 밖의 테마 성체 키는 모르는 키로 보고 기본 성체 표시
- 성장 단계용으로 그린 세트가 아니라 Fluent 낱개 그림을 단계에 맞춰 배치한 것 (상업 이용 가능한 단계별 세트를 찾으면 교체)
