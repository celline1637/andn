import React from 'react';
import styled from 'styled-components';

function Desc({ title, contents }) {
  return (
    <>
      <Title>{title}</Title>
      <Contents>{contents}</Contents>
    </>
  );
}

const Title = styled.dt`
  font-size: ${({ theme }) => theme.calcRem(21)};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.calcVh(812, 15)};
`;

const Contents = styled.dd`
  font-size: ${({ theme }) => theme.calcRem(15)};
  margin-bottom: ${({ theme }) => theme.calcVh(812, 15)};
`;

export default Desc;
