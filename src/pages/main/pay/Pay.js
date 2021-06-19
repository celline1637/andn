import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Container from './components/Container';
import Address from './payment_info/Address';
import Orderer from './payment_info/Orderer';
import Payment from './payment_info/Payment';
import Price from './payment_info/Price';
import { useRecoilState } from 'recoil';
import { orderState } from './payment_info/orderState';
import styled from 'styled-components/macro';

function Pay() {
  const history = useHistory();
  const [orderData, setOrderData] = useRecoilState(orderState);

  console.log(orderData.option[0]);

  // 버튼 활성화 조건 추가하기 (ex. 필수값이 모두 입력되었을 때 만)
  const sendOrderInfo = () => {
    const option = JSON.parse(localStorage.getItem('optionData'));
    setOrderData({ ...orderData, option });

    //첫 시도는 무조건 에러인 경우 해결하기!(error msg : option이 안들어 있음)
    orderData.option &&
      fetch(`http://192.168.0.57:8000/campaigns/pay`, {
        method: 'POST',
        headers: { Authorization: localStorage.getItem('token') },
        body: JSON.stringify(orderData),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'SUCCESS') {
            alert('참여 완료되었습니다.');
            history.push('/mypage_campaign');
          }
        })
        .catch(error => alert(error.message));
  };

  // const postForm = () => {
  //   const post_form_data = new FormData();
  //   // const checkAllValid = checkValid(form, Object.keys(form));
  //   // if (!checkAllValid) return alert('모든 정보를 입력해주세요');

  //   // const { project_img_data, profile_img_data } = form;
  //   // post_form_data.append('info', JSON.stringify(form));
  //   // post_form_data.append('project_img', project_img_data);
  //   // post_form_data.append('profile_img', profile_img_data);
  //   post_form_data.append('payment', orderData);

  //   console.log(post_form_data);

  //   fetch(`http://192.168.0.57:8000/campaigns/pay`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //     body: post_form_data,
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       if (res.status === 'SUCCESS') {
  //         alert('참여 완료되었습니다.');
  //         history.push('/mypage_campaign');
  //       }
  //     })
  //     .catch(err => console.log(err));
  // };

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
