//응답 메시지 모음
const limit = 5;

module.exports = {
  SUCCESS: 'Request 성공',
  NULL_VALUE: '필요한 값이 없거나 잘못되었습니다.',
  OUT_OF_VALUE: '파라미터 값이 잘못되었습니다.',
  WRONG_INDEX: '잘못된 인덱스 접근입니다.',
  DB_ERROR: 'DB 오류',
  INTERNAL_SERVER_ERROR: '서버 오류입니다.',
  DUPLICATE_ERROR: '중복된 요청입니다.',
  PERMISSION_ERROR: '권한이 없습니다.',
  ENTITY_NOT_EXIST: 'DB에 없는 데이터 관련 요청입니다.',
  NO_PAGE_ERROR: '해당 라우트는 존재하지 않습니다.',

  // token
  EMPTY_TOKEN: '토큰 값이 없습니다.',
  EXPIRED_TOKEN: '토큰 값이 만료되었습니다.',
  INVALID_TOKEN: '유효하지 않은 토큰값입니다.',
  AUTH_SUCCESS: '인증에 성공했습니다.',
  ISSUE_SUCCESS: '새로운 토큰이 생성되었습니다.',

  // 회원가입
  CREATED_USER: '회원 가입 성공',
  ALREADY_EMAIL: '이미 사용중인 이메일입니다.',
  AVAILABLE_USERNAME: '사용 가능한 아이디입니다.',
  SUCCESS_SNS_CHECK: '가입되어 있는 계정입니다.',
  FAIL_SNS_CHECK: '가입되어 있지 않은 계정입니다.',
  //FAIL_SINGUP: '회원 가입 실패',

  // 로그인
  LOGIN_SUCCESS: '로그인 성공',

  //LOGIN_FAIL: '로그인 실패',
  LOGOUT_SUCCESS: '로그아웃 성공',
  NO_USER: '존재하지 않는 회원입니다.',
  MISS_MATCH_PW: '비밀번호가 맞지 않습니다.',

  // 자동차 및 타이어 정보 저장
  TRIM_TIRE_SAVE_SUCCESS: '자동차 및 타이어 정보 저장 성공',
  TOO_MUCH_DATA: `한 번에 최대 ${limit}명까지만 요청이 가능합니다.`,
  EMPTY_TIRE_VALUE: '타이어 규격 정보가 존재하지 않습니다.',
  INVALID_TIRE_VALUE: '올바르지 않은 타이어 규격 정보입니다.',

  // 타이어 정보 조회
  READ_TIRE_SUCCESS: '타이어 정보 조회 성공',
};
