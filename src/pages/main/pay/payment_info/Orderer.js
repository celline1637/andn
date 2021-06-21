import React from 'react';
import { useRecoilState } from 'recoil';
import { orderState } from './orderState';
import Input from '../../../../components/Input';
import Container from '../components/Container';
import { debounce } from 'lodash';

function Orderer() {
  const [inputs, setInputs] = useRecoilState(orderState);

  const handleInput = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Container title="주문자" msg bt>
      <Input
        onChange={debounce(handleInput, 500)}
        name="orderer"
        label="이름"
      />
      <Input
        onChange={debounce(handleInput, 500)}
        name="orderer_contact"
        label="휴대전화"
        placeholder="01012345678 숫자만 입력해주세요"
      />
    </Container>
  );
}

export default Orderer;
