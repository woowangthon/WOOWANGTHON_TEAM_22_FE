# assets/item

상점 가구·장식 후보 (v0.3 furniture/decoration, 상품 목록은 BE와 확정 전)

- 출처: [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji) `Flat` 스타일 SVG (main 브랜치, 2026-11-10 받음)
- 라이선스: MIT — 원문 [../LICENSE-fluentui-emoji.txt](../LICENSE-fluentui-emoji.txt). 배포 시 이 고지 유지
- 색 상속: 없음. 모든 색이 SVG 안에 고정값으로 들어 있고 `currentColor`를 쓰지 않음 (테마 토큰으로 색이 바뀌지 않음)
- 원본 파일은 수정하지 않음. 32×32 viewBox, `<img>` 또는 CSS 배경으로 사용

| 원래 이름 | 파일 | 원본 경로 |
|---|---|---|
| Couch and lamp | `couch_and_lamp.svg` | `assets/Couch and lamp/Flat/couch_and_lamp_flat.svg` |
| Chair | `chair.svg` | `assets/Chair/Flat/chair_flat.svg` |
| Bed | `bed.svg` | `assets/Bed/Flat/bed_flat.svg` |
| Mirror | `mirror.svg` | `assets/Mirror/Flat/mirror_flat.svg` |
| Door | `door.svg` | `assets/Door/Flat/door_flat.svg` |
| Framed picture | `framed_picture.svg` | `assets/Framed picture/Flat/framed_picture_flat.svg` |
| Mantelpiece clock | `mantelpiece_clock.svg` | `assets/Mantelpiece clock/Flat/mantelpiece_clock_flat.svg` |
| Candle | `candle.svg` | `assets/Candle/Flat/candle_flat.svg` |
| Books | `books.svg` | `assets/Books/Flat/books_flat.svg` |
| Teddy bear | `teddy_bear.svg` | `assets/Teddy bear/Flat/teddy_bear_flat.svg` |
| Sunflower | `sunflower.svg` | `assets/Sunflower/Flat/sunflower_flat.svg` |
| Tulip | `tulip.svg` | `assets/Tulip/Flat/tulip_flat.svg` |
| Star | `star.svg` | `assets/Star/Flat/star_flat.svg` |
| Bell | `bell.svg` | `assets/Bell/Flat/bell_flat.svg` |
| File cabinet | `file_cabinet.svg` | `assets/File cabinet/Flat/file_cabinet_flat.svg` (2026-11-11 받음) |
| Musical keyboard | `musical_keyboard.svg` | `assets/Musical keyboard/Flat/musical_keyboard_flat.svg` (2026-11-11 받음) |
| Guitar | `guitar.svg` | `assets/Guitar/Flat/guitar_flat.svg` (2026-11-11 받음) |
| Radio | `radio.svg` | `assets/Radio/Flat/radio_flat.svg` (2026-11-11 받음) |
| Cactus | `cactus.svg` | `assets/Cactus/Flat/cactus_flat.svg` (2026-11-11 받음) |
| Globe showing asia-australia | `globe.svg` | `assets/Globe showing asia-australia/Flat/globe_showing_asia-australia_flat.svg` (2026-11-11 받음) |
| Teapot | `teapot.svg` | `assets/Teapot/Flat/teapot_flat.svg` (2026-11-11 받음) |
| Basket | `basket.svg` | `assets/Basket/Flat/basket_flat.svg` (2026-11-11 받음) |
| Alarm clock | `alarm_clock.svg` | `assets/Alarm clock/Flat/alarm_clock_flat.svg` (2026-11-11 받음) |
| Socks | `socks.svg` | `assets/Socks/Flat/socks_flat.svg` (2026-11-11 받음) |
| Hot beverage | `hot_beverage.svg` | `assets/Hot beverage/Flat/hot_beverage_flat.svg` (2026-11-11 받음) |
| Candy | `candy.svg` | `assets/Candy/Flat/candy_flat.svg` (2026-11-11 받음) |
| Sled | `sled.svg` | `assets/Sled/Flat/sled_flat.svg` (2026-11-11 받음) |
| Deer | `deer.svg` | `assets/Deer/Flat/deer_flat.svg` (2026-11-11 받음) |
| Jack-o-lantern | `jack_o_lantern.svg` | `assets/Jack-o-lantern/Flat/jack-o-lantern_flat.svg` (2026-11-11 받음) |
| Ghost | `ghost.svg` | `assets/Ghost/Flat/ghost_flat.svg` (2026-11-11 받음) |
| Crystal ball | `crystal_ball.svg` | `assets/Crystal ball/Flat/crystal_ball_flat.svg` (2026-11-11 받음) |
| Broom | `broom.svg` | `assets/Broom/Flat/broom_flat.svg` (2026-11-11 받음) |
| Owl | `owl.svg` | `assets/Owl/Flat/owl_flat.svg` (2026-11-11 받음) |
| Kite | `kite.svg` | `assets/Kite/Flat/kite_flat.svg` (2026-11-11 받음) |
| Teacup without handle | `teacup.svg` | `assets/Teacup without handle/Flat/teacup_without_handle_flat.svg` (2026-11-11 받음) |
| Potted plant | `potted_plant.svg` | `assets/Potted plant/Flat/potted_plant_flat.svg` (2026-11-11 받음) |
| Bouquet | `bouquet.svg` | `assets/Bouquet/Flat/bouquet_flat.svg` (2026-11-11 받음) |
| Yarn | `yarn.svg` | `assets/Yarn/Flat/yarn_flat.svg` (2026-11-11 받음) |
| Laptop | `laptop.svg` | `assets/Laptop/Flat/laptop_flat.svg` (2026-11-11 받음) |
| Television | `television.svg` | `assets/Television/Flat/television_flat.svg` (2026-11-11 받음) |

## 판매 상품 목록 FE 확정안 (BE 상점 DB 등록 전)

상점 탭은 `테마` / `가구·장식` 두 개. 판매 목록 = 아래 테마 3개 + 생활 가구·소품 9개 + 테마 장식·기본 방 가구 21개 (총 33개). 위 후보 표에만 있고 아래 표에 없는 그림(의자·침대·거울 등)은 판매하지 않음.

테마 (`asset_key`·`width`·`height`는 `null`, 미리보기 그림은 FE `THEMES`, 영구 보유·환불 불가):

| item_id | name | category | price_coins | background_asset_key | diary_cover_asset_key | adult_tree_asset_key |
|---|---|---|---|---|---|---|
| `theme_christmas` | 크리스마스 테마 | theme | 120 | `room_christmas` | `cover_christmas` | `tree_adult_christmas` |
| `theme_halloween` | 핼러윈 테마 | theme | 120 | `room_halloween` | `cover_halloween` | `tree_adult_halloween` |
| `theme_seollal` | 설날 테마 | theme | 120 | `room_seollal` | `cover_seollal` | `tree_adult_seollal` |

## 상품 데이터 제안 — 테마와 무관한 생활 가구·소품 (BE 등록 전, 팀 확인 필요)

계약 7-6에 따라 FE가 정해 BE에 공유하는 상품 목록. 상점 DB의 `asset_key`는 이 폴더의 파일 이름과 같아야 함 (`assets/item/<asset_key>.svg`).

가격 기준: 일기 보상은 하루 최대 30코인 (일주일 210, 한 달 약 900).
- 소품(`decoration`) 30~60코인 = 일기 1~2일
- 가구(`furniture`) 90~180코인 = 일기 3~6일
- 테마(계약 예시 120코인)보다 큰 가구는 피아노 하나만 두어, 한 달 꾸준히 쓰면 이 목록을 대부분 살 수 있게 함

크기는 1440×900 방 좌표(px). 그림이 정사각형이라 width = height.

| item_id | name | category | asset_key | width | height | price_coins | 모으는 기간 |
|---|---|---|---|---|---|---|---|
| `basket_01` | 바구니 | decoration | `basket` | 80 | 80 | 30 | 1일 |
| `cactus_01` | 선인장 | decoration | `cactus` | 80 | 80 | 40 | 2일 |
| `teapot_01` | 찻주전자 | decoration | `teapot` | 70 | 70 | 40 | 2일 |
| `alarm_clock_01` | 탁상시계 | decoration | `alarm_clock` | 60 | 60 | 50 | 2일 |
| `globe_01` | 지구본 | decoration | `globe` | 90 | 90 | 60 | 2일 |
| `radio_01` | 라디오 | furniture | `radio` | 100 | 100 | 90 | 3일 |
| `guitar_01` | 기타 | furniture | `guitar` | 120 | 120 | 120 | 4일 |
| `file_cabinet_01` | 서랍장 | furniture | `file_cabinet` | 130 | 130 | 150 | 5일 |
| `musical_keyboard_01` | 전자 피아노 | furniture | `musical_keyboard` | 160 | 160 | 180 | 6일 |

테마 상품이 아니므로 `background_asset_key`·`diary_cover_asset_key`·`adult_tree_asset_key`는 모두 `null`. 환불(7-4)은 구매 당시 가격 전액.

## 테마 장식·기본 방 가구 추가 제안 (BE 등록 전, 팀 확인 필요)

가격 기준은 위와 같음 (소품 30~60 = 일기 1~2일, 가구 90~180 = 3~6일). 계약에 테마 전용 상품이 없으므로 모두 일반 `furniture`·`decoration`이고 어느 테마에서든 배치 가능. 테마별 한정 판매는 상품 필드 추가가 필요해 BE와 별도 협의.

팀 자체 제작 그림 (출처 표기 불필요, 색은 seollal 디자인 시스템):

| 파일 | 내용 |
|---|---|
| `bokjumeoni.svg` | 복주머니 (`../theme/bokjumeoni.svg`와 같은 그림) |
| `cheongsachorong.svg` | 청사초롱 (`../theme/deco_lantern.svg`와 같은 그림, 50×130 비율) |
| `yut_set.svg` | 멍석 위 윷가락 네 개와 말 두 개 |
| `tteokguk.svg` | 놋그릇 떡국 (떡·지단·김·파) |

| 어울리는 테마 | item_id | name | category | asset_key | width | height | price_coins | 모으는 기간 |
|---|---|---|---|---|---|---|---|---|
| 크리스마스 | `socks_01` | 크리스마스 양말 | decoration | `socks` | 70 | 70 | 30 | 1일 |
| 크리스마스 | `hot_beverage_01` | 따뜻한 코코아 | decoration | `hot_beverage` | 60 | 60 | 40 | 2일 |
| 크리스마스 | `candy_01` | 사탕 | decoration | `candy` | 60 | 60 | 40 | 2일 |
| 크리스마스 | `sled_01` | 썰매 | furniture | `sled` | 130 | 130 | 120 | 4일 |
| 크리스마스 | `deer_01` | 순록 | furniture | `deer` | 150 | 150 | 150 | 5일 |
| 핼러윈 | `jack_o_lantern_01` | 호박 등불 | decoration | `jack_o_lantern` | 80 | 80 | 40 | 2일 |
| 핼러윈 | `ghost_01` | 꼬마 유령 | decoration | `ghost` | 80 | 80 | 50 | 2일 |
| 핼러윈 | `crystal_ball_01` | 수정 구슬 | decoration | `crystal_ball` | 70 | 70 | 60 | 2일 |
| 핼러윈 | `broom_01` | 마녀 빗자루 | furniture | `broom` | 120 | 120 | 90 | 3일 |
| 핼러윈 | `owl_01` | 부엉이 | furniture | `owl` | 110 | 110 | 120 | 4일 |
| 설날 | `teacup_01` | 찻잔 | decoration | `teacup` | 60 | 60 | 30 | 1일 |
| 설날 | `kite_01` | 방패연 | decoration | `kite` | 90 | 90 | 40 | 2일 |
| 설날 | `tteokguk_01` | 떡국 한 그릇 | decoration | `tteokguk` | 70 | 70 | 40 | 2일 |
| 설날 | `bokjumeoni_01` | 복주머니 | decoration | `bokjumeoni` | 70 | 70 | 50 | 2일 |
| 설날 | `cheongsachorong_01` | 청사초롱 | furniture | `cheongsachorong` | 50 | 130 | 90 | 3일 |
| 설날 | `yut_set_01` | 윷놀이 세트 | furniture | `yut_set` | 120 | 120 | 120 | 4일 |
| 기본 | `yarn_01` | 털실 | decoration | `yarn` | 60 | 60 | 30 | 1일 |
| 기본 | `bouquet_01` | 꽃다발 | decoration | `bouquet` | 70 | 70 | 40 | 2일 |
| 기본 | `potted_plant_01` | 화분 | decoration | `potted_plant` | 90 | 90 | 50 | 2일 |
| 기본 | `laptop_01` | 노트북 | furniture | `laptop` | 110 | 110 | 120 | 4일 |
| 기본 | `television_01` | 텔레비전 | furniture | `television` | 150 | 150 | 180 | 6일 |

테마 상품이 아니므로 `background_asset_key`·`diary_cover_asset_key`·`adult_tree_asset_key`는 모두 `null`. 환불(7-4)은 구매 당시 가격 전액.
