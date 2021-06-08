import React from 'react';
import styled from 'styled-components/macro';

function Header({ title, subtitle }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100vw;
  ${({ theme }) => theme.flexColumnSet()};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.calcRem(24)};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.calcRem(10)};
`;

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.calcRem(15)};
  margin-bottom: ${({ theme }) => theme.calcRem(29)};
`;

export default Header;
