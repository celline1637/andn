import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { orderState } from './payment_info/orderState';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Container from './components/Container';
import Address from './payment_info/Address';
import Orderer from './payment_info/Orderer';
import Payment from './payment_info/Payment';
import Price from './payment_info/Price';
import { API } from '../../../config';
import checkValid from '../../../utils/checkValid';
import styled from 'styled-components/macro';

function Pay() {
  const history = useHistory();
  const orderData = useRecoilValue(orderState);

  const sendOrderInfo = () => {
    const isAllValid = checkValid(orderData, Object.keys(orderData));
    if (!isAllValid) return alert('필수 입력란을 확인해주세요');
    console.log(orderData);
    fetch(API.PAY, {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify(orderData),
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'SUCCESS') {
          alert('참여 완료되었습니다.');
          history.push('/mypage_campaign');
        } else if (res.status === 'EXPRIED_TOKEN') {
          alert('로그인 권한이 만료되었습니다. 다시 로그인해주세요.');
          localStorage.clear();
          history.push('/');
        }
      })
      .catch(error => alert(error.message));
  };

  return (
    <Wrapper>
      <Header text="주문 / 결제" />
      <Orderer />
      <Address />
      <Price />
      <Payment />
      <Container>
        <PayBtn onClick={sendOrderInfo} type="submit" color="btn" fullWidth>
          결제하기
        </PayBtn>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.payment_bgc}; ;
`;

const PayBtn = styled(Button)`
  padding: ${({ theme }) => theme.calcVw(750, 32)};
  border: none;
  border-radius: 0;
  font-size: ${({ theme }) => theme.calcVw(750, 30)};
  line-height: ${({ theme }) => theme.calcVw(750, 55)};
  font-weight: 500;
`;

export default Pay;
