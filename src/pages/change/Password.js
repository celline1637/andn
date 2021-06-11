import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
// import { API } from '../../../config';
import { ReactComponent as Warning } from '../../assets/warning.svg';

function Password(params) {
  const [inputs, setInputs] = useState({
    password: '',
    secondaryPassword: '',
  });

  const [isComplete, setIsComplete] = useState(false);

  const handleInputs = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const checkValidation = () => {
    const { password } = inputs;
    if (password === '') {
      return 'true';
    } else {
      return (
        /^[a-zA-Z0-9]{8,32}$/.test(password) &&
        /[a-z]/g.test(password) &&
        /[0-9]/g.test(password)
      );
    }
  };

  const changePassword = () => {
    if (isEqual && isValid) {
      fetch(``, {
        method: 'POST',
        body: JSON.stringify({
          password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.status === 'SUCCESS') {
            setIsComplete(true);
          }
        });
    }
  };

  const { password, secondaryPassword } = inputs;
  const isValid = checkValidation();
  const isEqual = password === secondaryPassword;

  return (
    <>
      <Header text="비밀번호 수정" />
      <Wrapper>
        <Input
          onChange={handleInputs}
          value={password}
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          disabled={isComplete}
        />
        <Condition>
          <Warning fill={isValid ? '#ff7c00' : '#F52D1E'} />
          <Validation isValid={isValid}>영문, 숫자 조합, 8자 ~ 32자</Validation>
        </Condition>
        <Input
          onChange={handleInputs}
          value={secondaryPassword}
          name="secondaryPassword"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 확인해 주세요."
          disabled={isComplete}
        />
        {!isEqual && (
          <Condition>
            <Warning fill={isEqual ? '#ff7c00' : '#F52D1E'} />
            <Equality isEqual={isEqual}>
              아이디/비밀번호가 일치하지 않습니다.
            </Equality>
          </Condition>
        )}
        {!isComplete ? (
          <ChangeBtn
            disabled={isEqual && isValid}
            onClick={changePassword}
            color="btn"
            fullWidth
          >
            수정
          </ChangeBtn>
        ) : (
          <CompleteBtn disabled color="complete_btn" outline fullWidth>
            수정 완료
          </CompleteBtn>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.calcVw(750, 97)}
    ${({ theme }) => theme.calcVw(750, 42)};
`;

const Condition = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  padding-top: ${({ theme }) => theme.calcVw(750, 17.2)};
  margin-bottom: ${({ theme }) => theme.calcVw(750, 38.9)};
  color: ${({ theme }) => theme.colors.secondary_btn};
  font-size: ${({ theme }) => theme.calcVw(750, 22)};
  font-weight: 500;
`;

const Validation = styled.span`
  display: inline-block;
  margin-top: ${({ theme }) => theme.calcVw(750, 6)};
  margin-left: ${({ theme }) => theme.calcVw(750, 9)};
  color: ${({ isValid }) => !isValid && '#F52D1E'};
`;

const Equality = styled(Validation)`
  color: ${({ isEqual }) => !isEqual && '#F52D1E'};
`;

const CompleteBtn = styled(Button)`
  margin-top: ${({ theme }) => theme.calcVw(750, 69.6)};
  padding: ${({ theme }) => theme.calcVw(750, 10)}
    ${({ theme }) => theme.calcVw(750, 25)};
  font-size: ${({ theme }) => theme.calcVw(750, 31)};
  font-weight: 500;
  line-height: ${({ theme }) => theme.calcVw(750, 56)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -0.78)};
  border-radius: 0;
`;

const ChangeBtn = styled(CompleteBtn)`
  margin-top: ${({ theme }) => theme.calcVw(750, 69.6)};
  padding: ${({ theme }) => theme.calcVw(750, 10)}
    ${({ theme }) => theme.calcVw(750, 25)};
  font-size: ${({ theme }) => theme.calcVw(750, 31)};
  font-weight: 500;
  line-height: ${({ theme }) => theme.calcVw(750, 56)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -0.78)};
  border: none;
  border-radius: 0;
`;

export default Password;
