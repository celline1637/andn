import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Profile } from '../assets/826.svg';
import { ReactComponent as Menu } from '../assets/828.svg';
import styled from 'styled-components/macro';

function Nav() {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();

  const handleColor = () => {
    setIsHover(preveState => !preveState);
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
          <Link to="/mypage">
            <span>로그인</span>
            <Profile
              className="profile"
              width="4.467vw"
              height="5.333vw"
              stroke={isHover ? '#ff7c00' : 'black'}
              onMouseEnter={handleColor}
              onMouseLeave={handleColor}
              onMouseUp={handleColor}
              onTouchStart={handleColor}
              onTouchEnd={handleColor}
            />
          </Link>
        </LinkGroup>
      </Container>
    )
  );
}

const Container = styled.nav`
  ${({ theme }) => theme.flexSet('space-between')};
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
