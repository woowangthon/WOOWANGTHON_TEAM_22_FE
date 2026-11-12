// 환경별 설정 예시. 이 파일을 config.js로 복사한 뒤 값을 채우세요. (config.js는 git에 올라가지 않음)
// FE에는 공개용 Publishable key만 넣습니다. Supabase Secret key·AI 공급자 키는 절대 넣지 않습니다.
window.APP_CONFIG = {
  // BE 서버 주소 (끝에 / 없이). 로컬 BE 기본값: http://127.0.0.1:8000
  API_BASE: 'http://127.0.0.1:8000',
  // Supabase 프로젝트 주소와 Publishable key (sb_publishable_…)
  SUPABASE_URL: 'https://nnbmxtiouvsuszretahg.supabase.co',
  SUPABASE_PUBLISHABLE_KEY: '',
  // (선택) 제한시간(ms). 인증 세션 조회·요청·응답 본문 읽기 전체 기준. 생략하면 기본값 사용
  // TIMEOUT_MS: {request: 60000, ai: 150000, save: 90000, auth: 20000, slow: 8000},
};
