import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Container from './components/Container';
import Address from './payment_info/Address';
import Orderer from './payment_info/Orderer';

function Pay() {
  return (
    <Wrapper>
      <Header text="주문 / 결제" />
      <Orderer />
      <Address />
      <Container title="결제 금액"></Container>
      <Container title="결제 수단">
        <Button>카드</Button>
        <Button>무통장 입금</Button>
      </Container>
      <Container>
        <PayBtn type="submit" color="btn" fullWidth>
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

// const CONTENTS = [
//   {
//     title: '주문자',
//     mgs: true,
//     cont: [
//       { label: '이름' },
//       { label: '휴대전화', text: '01012345678 숫자만 입력해주세요' },
//     ],
//   },
//   {
//     title: '배송지',
//     mgs: true,
//     btn: true,
//     cont: [
//       { label: '이름' },
//       { label: '휴대전화', text: '01012345678 숫자만 입력해주세요' },
//       { label: '주소', text: '상세 주소 입력' },
//       { label: '배송 시 요청 사항', text: '부재 시 문 앞에 놓아주세요' },
//     ],
//   },
//   // { title: '결제금액', cont: ['총 캠페인 금액', '배송비', '최종결제 금액'] },
//   // { title: '결제수단', cont: ['카드', '무통장 입금'] },
// ];
