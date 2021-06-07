import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <button type="button">
        <Menu alt="menu" src="/images/menu.png" />
      </button>
      <Logo alt="logo" src="/images/logo.png" />
      <Link>
        <Profile alt="profile" src="/images/profile.png" />
      </Link>
    </Container>
  );
}

const Container = styled.header`
  ${({ theme }) => theme.flexSet('space-between')};
  padding: 0 21px;
  position: relative;
  height: ${({ theme }) => theme.calcVh(812, 47)};
`;

const Menu = styled.img`
  width: 21px;
  height: 21px;
`;

const Logo = styled.img`
  ${({ theme }) => theme.posCenter()};
`;

const Profile = styled.img`
  width: 21px;
  height: 21px;
`;

export default Header;
