import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Container>
      <Logo alt="logo" src="/images/logo.png" />
      <MenuBtn type="button">
        <Menu alt="menu" src="/images/menu.png" />
      </MenuBtn>
      <LinkGroup>
        <Link>브랜드 모집</Link>
        <Link>호스트 지원</Link>
        <Link>
          <span>로그인</span>
          <Profile alt="profile" src="/images/profile.png" />
        </Link>
      </LinkGroup>
    </Container>
  );
}

const Container = styled.nav`
  ${({ theme }) => theme.flexSet('space-between')};
  padding: ${({ theme }) => theme.calcVw(17)} ${({ theme }) => theme.calcVw(21)};
  position: relative;
  ${({ theme }) => theme.desktop`
    padding: ${({ theme }) => theme.calcVwL(20)} 0;
  `};
`;

const Logo = styled.img`
  ${({ theme }) => theme.posCenter()};
  height: ${({ theme }) => theme.calcVw(22)};
  ${({ theme }) => theme.desktop`
    ${({ theme }) => theme.posCenterY()};
      left: ${({ theme }) => theme.calcVwL(435)};
      height: ${({ theme }) => theme.calcVwL(27.6)};
  `};
`;

const MenuBtn = styled.button`
  ${({ theme }) => theme.desktop`
     display: none;
`};
`;

const Menu = styled.img`
  width: ${({ theme }) => theme.calcVw(21)};
  height: ${({ theme }) => theme.calcVw(21)};
`;

const Profile = styled.img`
  height: ${({ theme }) => theme.calcVw(20)};
  ${({ theme }) => theme.desktop`
    display: none;
  `};
`;

const LinkGroup = styled.div`
  ${({ theme }) => theme.desktop`
  ${({ theme }) => theme.flexSet('flex-end')};
  width: 100%;
  margin-right: ${({ theme }) => theme.calcVwL(435)};
`};

  & > a {
    display: none;
    color: black;
    ${({ theme }) => theme.desktop`
       display: flex;
       margin-right: 30px;
    `};

    &:last-of-type {
      display: flex;
      margin: 0;

      & > span {
        display: none;
        ${({ theme }) => theme.desktop`
           display: flex;
        `};
      }
    }
  }
`;

export default Nav;
