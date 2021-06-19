import { atom } from 'recoil';

//state 분리할까 고민중
export const orderState = atom({
  key: 'orderState',
  default: {
    orderer: '',
    orderer_contact: '',
    recipient: '',
    recipient_contact: '',
    address: '',
    payment: '',
    option: [],
    request: '',
  },
});
