import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { orderState } from './orderState';
import Input from '../../../../components/Input';
import Container from './components/Container';
import { API } from '../../../../config';
import { useHistory } from 'react-router';

function Orderer() {
  const [inputs, setInputs] = useRecoilState(orderState);
  const history = useHistory();

  const getUserInfo = () => {
    fetch(API.GET_USERINFO, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'SUCCESS') {
          setInputs(prev => {
            return {
              ...prev,
              orderer: res.data.name,
              orderer_contact: res.data.phone_number,
            };
          });
        } else if (res.status === 'EXPIRED_TOKEN') {
          alert('로그인 권한이 만료되었습니다. 다시 로그인해주세요.');
          localStorage.clear();
          history.push('/');
        }
      });
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container title="주문자" msg>
      <Input value={inputs.orderer} label="이름" readOnly />
      <Input
        value={inputs.orderer_contact}
        label="휴대전화"
        placeholder="01012345678 숫자만 입력해주세요"
        readOnly
      />
    </Container>
  );
}

export default Orderer;
