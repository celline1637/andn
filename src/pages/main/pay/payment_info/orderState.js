import { atom, selector } from 'recoil';

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

export const optionState = selector({
  key: 'optionState',
  set: ({ set }, newValue) => {
    set(orderState.option, newValue);
  },
});
