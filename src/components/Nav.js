import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { ReactComponent as Profile } from '../assets/826.svg';
import { ReactComponent as Menu } from '../assets/828.svg';
import styled from 'styled-components/macro';

function Nav() {
  const [isClicked, setIsClicked] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const goToMypage = () => {
    setIsClicked(true);
    history.push('/mypage');
  };

  const isMypage = location.pathname.includes('mypage');

  return (
    !isMypage && (
      <Container>
        <Logo alt="logo" src="/images/829.svg" />
        <MenuBtn type="button">
          <Menu width="5.600vw" height="4.267vw" />
        </MenuBtn>
        <LinkGroup>
          <Link>브랜드 모집</Link>
          <Link>호스트 지원</Link>
          <Link>
            <span>로그인</span>
            <Profile
              className="profile"
              width="4.467vw"
              height="5.333vw"
              stroke={isClicked ? '#ff7c00' : 'black'}
              onClick={goToMypage}
            />
          </Link>
        </LinkGroup>
      </Container>
    )
  );
}

const Container = styled.nav`
  ${({ theme }) => theme.flexSet('space-between')};
  padding: ${({ theme }) => theme.calcVw(34)} ${({ theme }) => theme.calcVw(42)};
  position: relative;
  ${({ theme }) => theme.desktop`
    padding: ${({ theme }) => theme.calcVwL(20)} 0;
  `};
`;

const Logo = styled.img`
  ${({ theme }) => theme.posCenter()};
  height: ${({ theme }) => theme.calcVw(44)};
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
