import React from 'react';
import styled from 'styled-components';

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
`;
const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.calcRem(15)};
`;

export default Header;
