import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import Button from '../../components/Button';
import styled from 'styled-components/macro';
import Container from './components/Container';
import Input from '../../components/Input';
import { API } from '../../config';
import SocialBtnGroup from './components/SocialLoginGroup';
import Divider from './components/Divider';

function Login() {
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
    const isValid = email.includes('@', '.') && password.length >= 8;

    if (!isValid) return alert('이메일 주소 또는 비밀번호를 확인해주세요.');

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
          history.push('/');
        } else if (res.status === 'INVALID_USER') {
          alert('가입되지 않은 유저입니다.');
        } else if (res.status === 'UNAUTHORIZATION') {
          alert('비밀번호가 일치하지 않습니다.');
        }
      });
  };

  const { email, password } = inputs;
  return (
    <Container title="로그인하기">
      <SocialBtnGroup />
      <Divider />
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
      <LoginBtn
        color="black"
        fullWidth
        onClick={handelLogin}
        // disabled={!isValid}
      >
        로그인
      </LoginBtn>
      <Link to="/admin_main">호스트로 로그인하기</Link>
    </Container>
  );
}

const LoginBtn = styled(Button)`
  height: ${({ theme }) => theme.calcVw(750, 100)};
  margin-bottom: ${({ theme }) => theme.calcVw(750, 30)};
`;

export default Login;
