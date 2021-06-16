import React from 'react';
import Button from '../../../../components/Button';
import Container from './components/Container';
import styled from 'styled-components/macro';

function Payment(params) {
  return (
    <Container>
      <PayBtn type="submit" color="btn" fullWidth>
        결제하기
      </PayBtn>
    </Container>
  );
}

const PayBtn = styled(Button)`
  padding: ${({ theme }) => theme.calcVw(750, 32)};
  border: none;
  border-radius: 0;
  font-size: ${({ theme }) => theme.calcVw(750, 30)};
  line-height: ${({ theme }) => theme.calcVw(750, 55)};
  font-weight: 500;
`;

export default Payment;
