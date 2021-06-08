import React from 'react';
import styled, { css } from 'styled-components';

function Desc({ title, contents, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Title>{title}</Title>
      <Contents {...rest}>{contents}</Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 ${({ theme }) => theme.calcVw(375, 38)};
  ${props =>
    props.center &&
    css`
      ${({ theme }) => theme.flexColumnSet()};
    `};
`;

const Title = styled.dt`
  font-size: ${({ theme }) => theme.calcRem(21)};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.calcVw(15)};
`;

const Contents = styled.dd`
  font-size: ${({ theme }) => theme.calcRem(16)};
  line-height: 1.63;
  letter-spacing: -0.4px;
  margin-bottom: ${({ theme }) => theme.calcVw(15)};
  ${props =>
    props.center &&
    css`
      text-align: center;
    `};
`;

export default Desc;
