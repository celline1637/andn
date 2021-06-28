// const HOST = 'http://192.168.0.57:8000';
const HOST = 'http://3.34.245.245:8000';
// const HOST = 'http://10.58.7.185:8000';

export const API = {
  //로그인
  SIGNIN: `${HOST}/users/signin`,
  KAKAO: `${HOST}/users/signin/kakao`,
  //구매 관련
  ALLCAMP_LIST: `${HOST}/campaigns/list`,
  ALLCAMP_DETAIL: `${HOST}/campaigns/detail`,
  PAY: `${HOST}/campaigns/pay`,
  //마이페이지
  MYCAMP_LIST: `${HOST}/campaigns/userlist`,
  MYCAMP_DETAIL: `${HOST}/campaigns/userdetail`,
  MYCAMP_LIKED: `${HOST}/users/like`,
  CHANGE: `${HOST}/users/password`,
  CHECK_PASSWORD: `${HOST}/users/checkpassword`,
  GET_USERINFO: `${HOST}/users/info`,
  USERINFO: `${HOST}/users/userinfo`,
  //관리자 페이지
  ADMIN_SIGNIN: `${HOST}/users/admin`,
  ADMIN_LIST: `${HOST}/campaigns/adminlist`,
  ADMIN_LIST_GRAPH: `${HOST}/campaigns/monthly`,
  ADMIN_DETAIL: `${HOST}/campaigns/admindetail`,
  ADMIN_DETAIL_GRAPH: `${HOST}/campaigns/monthlydetail`,
};
