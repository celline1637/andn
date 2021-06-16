import { atom } from 'recoil';

export const ordererState = atom({
  key: 'ordererState',
  default: { orderer: '', orderer_contact: '' },
});
