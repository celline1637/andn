import { atom } from 'recoil';

export const orderState = atom({
  key: 'orderState',
  default: {
    orderer: '',
    orderer_contact: '',
    recipient: '',
    recipient_contact: '',
    address: '',
    payment: '',
    option: '',
    request: '',
  },
});
