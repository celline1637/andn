import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import Button from '../../components/Button';
import styled from 'styled-components/macro';

function Mypage() {
  return (
    <Container>
      <ExitArrow width="2.400vw" height="4.800vw" stroke="black" />
      <Box>
        <Title>내 정보</Title>
        <LogoutBtn color="secondary_btn" outline>
          로그아웃
        </LogoutBtn>
      </Box>
      <Box>
        <Link to="/">
          <Text>참여한 캠페인</Text>
          <StyledArrow width="1.6vw" height="3.2vw" stroke="#dbdbdb" />
        </Link>
      </Box>
      <Box>
        <Link to="/">
          <Text>내 정보 수정</Text>
          <StyledArrow width="1.6vw" height="3.2vw" stroke="#dbdbdb" />
        </Link>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding-top: ${({ theme }) => theme.calcVw(115.362)};
`;

const Box = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  padding: ${({ theme }) => theme.calcVw(30)} ${({ theme }) => theme.calcVw(42)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  & > a {
    width: 100%;
    ${({ theme }) => theme.flexSet('space-between')};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.calcVw(32)};
  line-height: ${({ theme }) => theme.calcVw(40)};
  letter-spacing: ${({ theme }) => theme.calcVw(-1.6)};
`;
const ExitArrow = styled(Arrow)`
  position: absolute;
  top: ${({ theme }) => theme.calcVw(32.7)};
  left: ${({ theme }) => theme.calcVw(43.5)};
`;

const StyledArrow = styled(Arrow)`
  transform: rotate(180deg);
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.calcVw(48)};
  line-height: ${({ theme }) => theme.calcVw(63)};
  letter-spacing: ${({ theme }) => theme.calcVw(-1.2)};
  font-weight: 700;
`;

const LogoutBtn = styled(Button)`
  border-radius: ${({ theme }) => theme.calcVw(24)};
  margin: 0;
`;
export default Mypage;
