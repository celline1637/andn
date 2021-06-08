import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <img alt="logo" src="/images/logo_white.png" />
      <p>주식회사 와이어즈 | 대표이사 조석현 | 사업자등록변호 691-87-00786</p>
      <p>
        서울시 강남구 도산대로 54길 103층 | 통신판매신고업번호
        제2018-서울마포-1778호 <br /> Copyright 2021 © YerzInc
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${({ theme }) => theme.calcVw(167)};
  background-color: ${({ theme }) => theme.colors.black};

  & > p {
    color: white;
  }
`;

export default Footer;
