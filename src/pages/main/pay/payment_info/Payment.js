import React from 'react';
import Button from '../../../../components/Button';
import Container from './components/Container';
import { useRecoilState } from 'recoil';
import { orderState } from './orderState';
import styled from 'styled-components/macro';

function Payment() {
  const [inputs, setInputs] = useRecoilState(orderState);

  const setOrderData = e => {
    e.preventDefault();
    setInputs({ ...inputs, payment: e.target.innerText });
  };

  return (
    <Container title="결제 수단">
      <Wrapper>
        <Button outline fullWidth color="primary_bgc" onClick={setOrderData}>
          카드
        </Button>
        <Button outline fullWidth color="primary_bgc" onClick={setOrderData}>
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
  }
`;

export default Payment;
