import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import Button from '../../components/Button';
import styled from 'styled-components/macro';

function AdminLogin() {
  const history = useHistory();

  const handleLogout = () => {
    alert('로그아웃 되었습니다.');
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <Box>
        <Title>andn admin</Title>
        <LogoutBtn color="secondary_btn" outline onClick={handleLogout}>
          로그아웃
        </LogoutBtn>
      </Box>
      <Box>
        <Link to="/admin_camp">
          <Text>캠페인 관리</Text>
          <StyledArrow width="1.6vw" height="3.2vw" stroke="#dbdbdb" />
        </Link>
      </Box>
    </>
  );
}

const Box = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  padding: ${({ theme }) => theme.calcVw(750, 30)}
    ${({ theme }) => theme.calcVw(750, 42)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  & > a {
    width: 100%;
    ${({ theme }) => theme.flexSet('space-between')};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.calcVw(750, 54)};
  font-weight: 800;
  line-height: ${({ theme }) => theme.calcVw(750, 63)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.35)};
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.calcVw(750, 32)};
  line-height: ${({ theme }) => theme.calcVw(750, 40)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.6)};
`;

const StyledArrow = styled(Arrow)`
  transform: rotate(180deg);
`;

const LogoutBtn = styled(Button)`
  height: auto;
  padding: ${({ theme }) => theme.calcVw(750, 10)}
    ${({ theme }) => theme.calcVw(750, 25)};
  border-radius: ${({ theme }) => theme.calcVw(750, 24)};
  margin: 0;
  font-size: ${({ theme }) => theme.calcVw(750, 20)};
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1)};
`;

export default AdminLogin;
