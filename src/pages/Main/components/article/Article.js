import React from 'react';
import styled, { css } from 'styled-components/macro';

function Article({ children, color = 'white', title, subtitle, top = '98' }) {
  return (
    <Container color={color} top={top}>
      <Wrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Wrapper>
      {/* <Detail {...rest}> */}
      {children}
      {/* </Detail> */}
    </Container>
  );
}

const Container = styled.article`
  padding: ${({ theme }) => theme.calcVw(98)} 0;
  background-color: ${({ theme, color }) => theme.colors[color]};
  ${({ theme }) => theme.desktop`
    padding: ${({ theme }) => theme.calcVwL(228)} 0;
  `};
`;

const Wrapper = styled.header`
  ${({ theme }) => theme.flexColumnSet()};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.calcVw(24)};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.calcVw(10)};

  ${({ theme }) => theme.desktop`
    font-size: ${({ theme }) => theme.calcVwL(42)};
    line-height: ${({ theme }) => theme.calcVwL(54)};
    letter-spacing: ${({ theme }) => theme.calcVwL(-1.05)};
    margin-bottom: ${({ theme }) => theme.calcVwL(20)};
  `};
`;

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.calcVw(15)};
  margin-bottom: ${({ theme }) => theme.calcVw(29)};
  ${({ theme }) => theme.desktop`
    font-size: ${({ theme }) => theme.calcVwL(24)};
    line-height: ${({ theme }) => theme.calcVwL(31)};
    letter-spacing: ${({ theme }) => theme.calcVwL(-0.6)};
    color: ${({ theme }) => theme.colors.secondary_text};
  `};
`;

// const Detail = styled.div`
//   ${({ theme }) => theme.flexColumnSet()};
//   ${props =>
//     props.row &&
//     css`
//       ${({ theme }) => theme.flexSet()};
//     `};
// `;

export default Article;
