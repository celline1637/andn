import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Container from './components/Container';
import Address from './payment_info/Address';
import Orderer from './payment_info/Orderer';
import Payment from './payment_info/Payment';
import Price from './payment_info/Price';
import { useRecoilValue } from 'recoil';
import { orderState } from './payment_info/orderState';
import styled from 'styled-components/macro';

function Pay() {
  const history = useHistory();
  const orderInfo = useRecoilValue(orderState);

  // 버튼 활성화 조건 추가하기 (ex. 필수값이 모두 입력되었을 때 만)
  const sendOrderInfo = () => {
    fetch(``, {
      method: 'POST',
      body: JSON.stringify(orderInfo),
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'SUCCESS') {
          alert('참여 완료되었습니다.');
          history.push('/mypage_campaign');
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
