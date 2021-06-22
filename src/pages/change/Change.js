import React, { useState } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { useHistory } from 'react-router';
import { API } from '../../config';
import styled from 'styled-components/macro';
import { useEffect } from 'react/cjs/react.development';

function Change() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState('');

  const goToChangePage = () => {
    history.push('/mypage_change_password');
  };

  const getUserInfo = () => {
    fetch(API.USERINFO)
      .then(res => res.json())
      .then(res => setUserInfo(res.data));
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <Header text="내 정보 수정" />
      <ul>
        <Box>
          <Title>이메일</Title>
          <Cont>{userInfo}</Cont>
        </Box>
        <Box>
          <Title>비밀번호</Title>
          <ChangeBtn onClick={goToChangePage} color="secondary_btn" outline>
            변경
          </ChangeBtn>
        </Box>
      </ul>
    </>
  );
}

const Box = styled.li`
  ${({ theme }) => theme.flexSet('flex-start')};
  padding: ${({ theme }) => theme.calcVw(750, 30)}
    ${({ theme }) => theme.calcVw(750, 42)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:first-child {
    margin-top: ${({ theme }) => theme.calcVw(750, 99)};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const Title = styled.span`
  width: ${({ theme }) => theme.calcVw(750, 201)};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.calcVw(750, 26)};
  line-height: ${({ theme }) => theme.calcVw(750, 40)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.3)};
`;

const Cont = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.calcVw(750, 28)};
  line-height: ${({ theme }) => theme.calcVw(750, 40)};
`;

const ChangeBtn = styled(Button)`
  padding: ${({ theme }) => theme.calcVw(750, 10)}
    ${({ theme }) => theme.calcVw(750, 25)};
  font-size: ${({ theme }) => theme.calcVw(750, 20)};
  font-weight: 500;
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1)};
  border-radius: ${({ theme }) => theme.calcVw(750, 24)};
`;

export default Change;
