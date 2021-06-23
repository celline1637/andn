import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { orderState } from './orderState';
import Input from '../../../../components/Input';
import Container from '../components/Container';
import { API } from '../../../../config';

function Orderer() {
  const [inputs, setInputs] = useRecoilState(orderState);

  const getUserInfo = () => {
    fetch(API.GET_USERINFO, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res =>
        setInputs({
          ...inputs,
          orderer: res.data.name,
          orderer_contact: res.data.phone_number,
        })
      );
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container title="주문자" msg>
      <Input value={inputs.orderer} label="이름" />
      <Input
        value={inputs.orderer_contact}
        label="휴대전화"
        placeholder="01012345678 숫자만 입력해주세요"
      />
    </Container>
  );
}

export default Orderer;
