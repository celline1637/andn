import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { ReactComponent as Profile } from '../assets/826.svg';
import { ReactComponent as Menu } from '../assets/828.svg';
import styled from 'styled-components/macro';

function Nav() {
  const location = useLocation();
  const history = useHistory();
  const isMypage = location.pathname.includes('mypage');
  const isPaypage = location.pathname.includes('pay');
  const isLogin = localStorage.getItem('token');
  // const isAdminpage = location.pathname.includes('admin');
  const isLoginpage = location.pathname.includes('login');

  // old version :  로그인 한 경우에만 마이페이지 접근
  // const isLogin = localStorage.getItem('token');
  // const goToMypage = () => {
  //   isLogin ? history.push('/mypage') : alert('로그인을 해주세요.');
  // };

  const goToMain = () => {
    history.push('/');
  };

  const goToMypageOrLogin = () => {
    isLogin ? history.push('/mypage') : history.push('/login');
  };

  return (
    !(isMypage || isPaypage) && (
      <Container>
        <Logo alt="logo" src="/images/831.svg" onClick={goToMain} />
        {!isLoginpage && (
          <>
            <MenuBtn type="button">
              <Menu width="5.600vw" height="4.267vw" />
            </MenuBtn>
            <LinkGroup>
              <Link>브랜드 모집</Link>
              <Link>호스트 지원</Link>
              <Link onClick={goToMypageOrLogin}>
                <span>로그인</span>
                <Profile
                  className="profile"
                  width="4.467vw"
                  height="5.333vw"
                  stroke={isLogin ? 'blue' : 'black'}
                />
              </Link>
            </LinkGroup>
          </>
        )}
      </Container>
    )
  );
}

const Container = styled.nav`
  ${({ theme }) => theme.flexSet('space-between')};
  height: ${({ theme }) => theme.calcVw(750, 100)};
  padding: ${({ theme }) => theme.calcVw(750, 34)}
    ${({ theme }) => theme.calcVw(750, 42)};
  position: relative;
  ${({ theme }) => theme.desktop`
    padding: ${({ theme }) => theme.calcVwL(20)} 0;
  `};
`;

const Logo = styled.img`
  ${({ theme }) => theme.posCenter()};
  height: ${({ theme }) => theme.calcVw(750, 44)};
  cursor: pointer;
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

const LinkGroup = styled.div`
  ${({ theme }) => theme.desktop`
  ${({ theme }) => theme.flexSet('flex-end')};
  width: 100%;
  margin-right: ${({ theme }) => theme.calcVwL(435)};
`};

  .profile {
    cursor: pointer;
    &:hover {
      stroke: ${({ theme }) => theme.colors.btn};
    }

    ${({ theme }) => theme.desktop`
     display: none;
   `};
  }

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
