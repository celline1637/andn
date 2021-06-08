import React from 'react';
import styled, { css } from 'styled-components/macro';

function Desc({ title, contents, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Title>{title}</Title>
      <Contents {...rest}>{contents}</Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 ${({ theme }) => theme.calcVw(38)};
  ${props =>
    props.center &&
    css`
      ${({ theme }) => theme.flexColumnSet()};
    `};

  ${({ theme }) => theme.desktop`
      width: ${({ theme }) => theme.calcVwL(580)};
      margin: 0;
    `};
`;

const Title = styled.dt`
  font-size: ${({ theme }) => theme.calcVw(21)};
  font-weight: 700;
  line-height: ${({ theme }) => theme.calcVw(30)};
  letter-spacing: ${({ theme }) => theme.calcVw(-0.53)};
  margin-bottom: ${({ theme }) => theme.calcVw(15)};
  ${({ theme }) => theme.desktop`
    font-size: ${({ theme }) => theme.calcVwL(32)};
    font-weight: 700;
    line-height: ${({ theme }) => theme.calcVwL(48)};
    letter-spacing: ${({ theme }) => theme.calcVwL(-0.8)};
    margin-bottom: ${({ theme }) => theme.calcVwL(34)};
  `};
`;

const Contents = styled.dd`
  //default
  font-size: ${({ theme }) => theme.calcVw(16)};
  line-height: ${({ theme }) => theme.calcVw(24)};
  letter-spacing: ${({ theme }) => theme.calcVw(-0.4)};
  margin-bottom: ${({ theme }) => theme.calcVw(15)};

  ${({ theme }) => theme.desktop`
    font-size: ${({ theme }) => theme.calcVwL(24)};
    line-height: ${({ theme }) => theme.calcVwL(36)};
    letter-spacing: ${({ theme }) => theme.calcVwL(-0.6)};
    margin-bottom: 0;
    `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  //benefits & process
  ${props =>
    props.details &&
    css`
      font-size: ${({ theme }) => theme.calcVw(15)};
      line-height: ${({ theme }) => theme.calcVw(24)};
      letter-spacing: ${({ theme }) => theme.calcVw(-0.38)};

      ${({ theme }) => theme.descktop`
        font-size: ${({ theme }) => theme.calcVwL(21)};
        line-height: ${({ theme }) => theme.calcVwL(32)};
        letter-spacing: ${({ theme }) => theme.calcVwL(-0.53)};
        margin-bottom: 0;
      `};
    `};
`;

export default Desc;
