import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { orderState } from './orderState';
import Button from '../../../../components/Button';
import Container from './components/Container';
import styled, { css } from 'styled-components/macro';

function Payment() {
  const [inputs, setInputs] = useRecoilState(orderState);
  const [isSelected, setIsSelected] = useState({
    card: false,
    account: false,
  });

  const setOrderData = e => {
    e.preventDefault();
    const { name, innerText } = e.target;
    setInputs({ ...inputs, payment: innerText });
    if (name === 'card') {
      setIsSelected({ card: true, account: false });
    }
    if (name === 'account') {
      setIsSelected({ card: false, account: true });
    }
  };

  return (
    <Container title="결제 수단">
      <Wrapper>
        <PaymentBtn
          name="card"
          isSelected={isSelected.card}
          outline
          fullWidth
          color="primary_bgc"
          onClick={setOrderData}
        >
          카드
        </PaymentBtn>
        <PaymentBtn
          name="account"
          isSelected={isSelected.account}
          outline
          fullWidth
          color="primary_bgc"
          onClick={setOrderData}
        >
          무통장 입금
        </PaymentBtn>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

const PaymentBtn = styled(Button)`
  padding: ${({ theme }) => theme.calcVw(750, 74)};
  border-radius: 0;
  color: ${({ theme }) => theme.colors.th};
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: gray;
      color: white;
    `};
`;

export default Payment;
