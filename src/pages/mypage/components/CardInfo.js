import React from 'react';
import styled from 'styled-components/macro';

function CardInfo({ title, cont }) {
  const validator = cont => {
    if (typeof cont === 'number') {
      return `${cont.toLocaleString()}원`;
    } else if (Array.isArray(cont)) {
      let result = cont.map(option => (
        <div>
          {option.title} | {option.quantity}세트
        </div>
      ));
      return result;
    } else {
      return cont;
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Cont>{validator(cont)}</Cont>
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
