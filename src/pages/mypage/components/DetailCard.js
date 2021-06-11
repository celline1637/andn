import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import CardInfo from './CardInfo';

function DetailCard({ title, detail, subtitle }) {
  const makeList = () => {
    const info = Object.values(detail);
    let infoGroup = {};
    for (let i = 0; i < subtitle.length; i++) {
      infoGroup[subtitle[i]] = info[i];
    }
    const result = Object.entries(infoGroup);
    return result;
  };

  const list = makeList();

  return (
    <Container>
      <Title>{title}</Title>
      {list.map(item => (
        <CardInfo title={item[0]} cont={item[1]} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding-top: ${({ theme }) => theme.calcVw(750, 79.5)};
  padding-right: ${({ theme }) => theme.calcVw(750, 42)};
  padding-left: ${({ theme }) => theme.calcVw(750, 42)};
  padding-bottom: ${({ theme }) => theme.calcVw(750, 90.5)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border}; ;
`;
const Title = styled.div`
  margin-bottom: ${({ theme }) => theme.calcVw(750, 40)};
  font-size: ${({ theme }) => theme.calcVw(750, 32)};
  line-height: ${({ theme }) => theme.calcVw(750, 38)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.6)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

export default DetailCard;
