// const HOST = 'http://192.168.0.57:8000';
const HOST = 'http://3.34.245.245:8000';

export const API = {
  SIGNIN: `${HOST}/users/signin`,
  ADMIN_SIGNIN: `${HOST}/users/admin`,
  ADMIN_LIST: `${HOST}/campaigns/adminlist`,
  ADMIN_DETAIL: `${HOST}/campaigns/admindetail`,
  ALLCAMP_LIST: `${HOST}/campaigns/list`,
  ALLCAMP_DETAIL: `${HOST}/campaigns/detail`,
  MYCAMP_LIST: `${HOST}/campaigns/userlist`,
  MYCAMP_DETAIL: `${HOST}/campaigns/userdetail`,
  PAY: `${HOST}/campaigns/pay`,
  CHANGE: `${HOST}/users/password`,
  USERINFO: `${HOST}/users/userinfo`,
};
