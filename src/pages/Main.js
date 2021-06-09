import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import { API } from '../config';

function Main() {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    username: '',
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
    const { username, password } = inputs;
    if (isValid) {
      fetch(`${API.SIGNIN}`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.status === 'SUCCESS') {
            alert('로그인 되었습니다.');
            localStorage.setItem('token', res.data.token);
            history.push('/');
          } else if (res.status === 'INVALID_USER_ERROR') {
            alert('가입되지 않은 유저입니다.');
          } else if (res.status === 'UNAUTHORIZATION_ERROR') {
            alert('비밀번호가 일치하지 않습니다.');
          }
        });
    } else {
      alert('이메일 주소 또는 비밀번호를 확인해주세요.');
    }
  };

  const { username, password } = inputs;
  const isValid = username.includes('@', '.') && password.length >= 8;
  return (
    <Container>
      <Input
        value={username}
        name="username"
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
      <LoginBtn color="black" fullWidth>
        로그인
      </LoginBtn>
    </Container>
  );
}

const Container = styled.div``;

const LoginBtn = styled(Button)`
  height: ${({ theme }) => theme.calcVw(750, 48)}; ;
`;

export default Main;
