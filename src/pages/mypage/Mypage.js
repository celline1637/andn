import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import Button from '../../components/Button';
import styled from 'styled-components/macro';

function Mypage() {
  const history = useHistory();

  const goToMain = () => {
    history.push('/');
  };

  const handleLogout = () => {
    alert('로그아웃 되었습니다.');
    localStorage.clear();
    history.push('/');
  };

  return (
    <Container>
      <ExitArrow
        width="2.400vw"
        height="4.800vw"
        stroke="black"
        onClick={goToMain}
      />
      <Box>
        <Title>내 정보</Title>
        <LogoutBtn color="secondary_btn" outline onClick={handleLogout}>
          로그아웃
        </LogoutBtn>
      </Box>
      {LINKS.map(link => (
        <Box key={link.title}>
          <Link to={link.link}>
            <Text>{link.title}</Text>
            <StyledArrow width="1.6vw" height="3.2vw" stroke="#dbdbdb" />
          </Link>
        </Box>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding-top: ${({ theme }) => theme.calcVw(750, 115.362)};
`;

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

const Text = styled.span`
  font-size: ${({ theme }) => theme.calcVw(750, 32)};
  line-height: ${({ theme }) => theme.calcVw(750, 40)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.6)};
`;
const ExitArrow = styled(Arrow)`
  position: absolute;
  top: ${({ theme }) => theme.calcVw(750, 32.7)};
  left: ${({ theme }) => theme.calcVw(750, 43.5)};
`;

const StyledArrow = styled(Arrow)`
  transform: rotate(180deg);
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.calcVw(750, 48)};
  line-height: ${({ theme }) => theme.calcVw(750, 63)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.2)};
  font-weight: 700;
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
export default Mypage;

const LINKS = [
  { title: '참여한 캠페인', link: '/mypage_campaign' },
  { title: '내 정보 수정', link: '/mypage_change' },
  { title: '좋아한 캠페인', link: '/mypage_like' },
];
