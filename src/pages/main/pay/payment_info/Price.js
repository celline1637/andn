import React from 'react';
import Container from './components/Container';
import { useRecoilValue } from 'recoil';
import { orderState } from './orderState';
import styled from 'styled-components/macro';

function Price() {
  const inputs = useRecoilValue(orderState);

  const calcTotal = options => {
    const selectedPrice = options.map((el, i) => el.price * el.quantity);
    return selectedPrice.reduce((acc, cur) => {
      return acc + cur;
    }, 3000);
  };

  return (
    <Container title="결제 금액">
      <Wrapper>
        <SubPrice>총 캠페인 금액</SubPrice>
        <SubPrice>{`${(
          calcTotal(inputs.option) - 3000
        ).toLocaleString()}원`}</SubPrice>
      </Wrapper>
      <Wrapper>
        <SubPrice>배송비</SubPrice>
        <SubPrice>3,000원</SubPrice>
      </Wrapper>
      <Divider />
      <Wrapper>
        <Total>최종 결제 금액</Total>
        <TotalPrice>{`${calcTotal(
          inputs.option
        ).toLocaleString()}원`}</TotalPrice>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  margin-bottom: ${({ theme }) => theme.calcVw(750, 21)};
`;

const SubPrice = styled.div`
  color: ${({ theme }) => theme.colors.th};
  font-size: ${({ theme }) => theme.calcVw(750, 28)};
  font-weight: 500;
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.4)};
`;

const Total = styled.div`
  margin-top: ${({ theme }) => theme.calcVw(750, 30)};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.calcVw(750, 28)};
  font-weight: 500;
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.4)};
`;

const TotalPrice = styled.div`
  margin-top: ${({ theme }) => theme.calcVw(750, 30)};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.calcVw(750, 36)};
  font-weight: 500;
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
`;

const Divider = styled.hr`
  margin-top: ${({ theme }) => theme.calcVw(750, 8)}; ;
`;

export default Price;
