import React from 'react';
import styled from 'styled-components/macro';
import CardInfo from './CardInfo';

function DetailCard({ info, subtitle }) {
  let infoList = Object.values(info.detail);
  return (
    <Container>
      <Title>{info.title}</Title>
      {subtitle.map((item, i) => (
        <CardInfo title={item} cont={infoList[i]} />
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
