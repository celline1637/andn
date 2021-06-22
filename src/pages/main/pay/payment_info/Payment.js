import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { orderState } from './orderState';
import Button from '../../../../components/Button';
import Container from './components/Container';
import styled from 'styled-components/macro';

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

  console.log(isSelected);

  return (
    <Container title="결제 수단">
      <Wrapper>
        <Button
          name="card"
          isSelected={isSelected.card}
          outline
          fullWidth
          color="primary_bgc"
          onClick={setOrderData}
        >
          카드
        </Button>
        <Button
          name="account"
          isSelected={isSelected.account}
          outline
          fullWidth
          color="primary_bgc"
          onClick={setOrderData}
        >
          무통장 입금
        </Button>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet()};

  button {
    padding: ${({ theme }) => theme.calcVw(750, 74)};
    border-radius: 0;
    color: ${({ theme }) => theme.colors.th};
    background-color: ${({ isSelected }) =>
      isSelected ? 'secondary_btn' : 'none'};

    &:focus {
      background-color: red;
    }
  }
`;

export default Payment;
