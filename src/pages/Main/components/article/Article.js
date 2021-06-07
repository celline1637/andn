import React from 'react';
import styled, { css } from 'styled-components/macro';

function Article({ children, title, subtitle, color = 'white', row }) {
  return (
    <Container color={color}>
      <Wrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Wrapper>
      <Text row={row}>{children}</Text>
    </Container>
  );
}

const Container = styled.article`
  padding: ${({ theme }) => theme.calcVh(4746, 636)} 0;
  background-color: ${({ theme, color }) => theme.colors[color]};
`;

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

const Text = styled.div`
  ${props =>
    props.row &&
    css`
      ${({ theme }) => theme.flexSet()};
    `};
`;

export default Article;
