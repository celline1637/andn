import React from 'react';
import styled from 'styled-components/macro';

function Footer() {
  return (
    <Wrapper>
      <Logo alt="logo" src="/images/logo_white.png" />
      <p>주식회사 와이어즈 | 대표이사 조석현 | 사업자등록변호 691-87-00786</p>
      <p>
        서울시 강남구 도산대로 54길 103층 | 통신판매신고업번호
        제2018-서울마포-1778호 <br /> Copyright 2021 © YerzInc
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.calcVw(750, 750, 47)}
    ${({ theme }) => theme.calcVw(750, 21)};
  background-color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.calcVw(750, 10)};
  line-height: ${({ theme }) => theme.calcVw(750, 18)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -0.5)};
  font-weight: 200;
  color: white;

  ${({ theme }) => theme.desktop`
    ${({ theme }) => theme.flexColumnSet()};
    padding: ${({ theme }) => theme.calcVwL(62)};

  `};
`;

const Logo = styled.img`
  width: ${({ theme }) => theme.calcVw(750, 57.9)};
  height: ${({ theme }) => theme.calcVw(750, 17.7)};
  margin-bottom: ${({ theme }) => theme.calcVw(750, 14.8)};
`;

export default Footer;
