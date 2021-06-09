import React from 'react';
import styled from 'styled-components';

function CardInfo({
  title = '캠페인 명',
  cont = '채식 간식 비견, 모든 댕댕이들의 행복을 위해',
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Cont>{cont}</Cont>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'flex-start')};
`;

const Title = styled.span`
  width: ${({ theme }) => theme.calcVw(750, 232)};
  font-size: ${({ theme }) => theme.calcVw(750, 26)};
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.3)};
  font-weight: 700;
  color: #555555;
`;

const Cont = styled.span`
  width: ${({ theme }) => theme.calcVw(750, 434)};
  font-size: ${({ theme }) => theme.calcVw(750, 28)};
  line-height: ${({ theme }) => theme.calcVw(750, 40)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.4)};
  font-weight: 500;
  color: #555555;
`;

export default CardInfo;
