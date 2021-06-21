import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { ReactComponent as Logo } from '../../assets/logo_circle.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { API } from '../../config';
import styled from 'styled-components/macro';

function AdminMain() {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handelLogin = e => {
    e.preventDefault();
    const { email, password } = inputs;
    if (isValid) {
      fetch(`${API.SIGNIN}`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.status === 'SUCCESS') {
            alert('로그인 되었습니다.');
            localStorage.setItem('token', res.data.token);
            //페이지 이동 여부 확인하기
            history.push('/admin_login');
          } else if (res.status === 'INVALID_USER') {
            alert('가입되지 않은 유저입니다.');
          } else if (res.status === 'UNAUTHORIZATION') {
            alert('비밀번호가 일치하지 않습니다.');
          }
        });
    } else {
      alert('이메일 주소 또는 비밀번호를 확인해주세요.');
    }
  };

  const { email, password } = inputs;
  const isValid = 'dks';
  return (
    <Container>
      <Wrapper>
        <Logo width="34.680vw" height="43.347vw" />
        <Title>엔덴 관리자 페이지</Title>
      </Wrapper>
      <Input
        value={email}
        name="email"
        onChange={handleInput}
        type="text"
        autocapitalize="off"
        placeholder="아이디를 입력해주세요"
      />
      <Input
        value={password}
        name="password"
        type="password"
        autocomplete="current-password"
        autocapitalize="off"
        onChange={handleInput}
        placeholder="비밀번호를 입력해주세요"
      />
      <LoginBtn color="btn" fullWidth onClick={handelLogin} disabled={!isValid}>
        로그인
      </LoginBtn>
    </Container>
  );
}

const Container = styled.form`
  ${({ theme }) => theme.flexColumnSet()};
  height: 100vh;
  padding: 0 ${({ theme }) => theme.calcVw(750, 43)};
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
`;

const Title = styled.div`
  margin-top: ${({ theme }) => theme.calcVw(750, 43)};
  margin-bottom: ${({ theme }) => theme.calcVw(750, 130)};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.calcVw(750, 48)};
  line-height: ${({ theme }) => theme.calcVw(750, 63)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.2)};
  font-weight: 700;
`;

const LoginBtn = styled(Button)`
  height: ${({ theme }) => theme.calcVw(750, 100)};
  margin-top: ${({ theme }) => theme.calcVw(750, 17)};
  border-radius: 0;
  border: none;
`;

export default AdminMain;
