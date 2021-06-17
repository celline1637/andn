import React, { useEffect } from 'react';
import Container from './components/Container';
import { useRecoilState } from 'recoil';
import { orderState } from './orderState';

function Price() {
  const [inputs, setInputs] = useRecoilState(orderState);
  let optionData = JSON.parse(localStorage.getItem('optionData'));

  const calcTotal = options => {
    const selectedPrice = options.map((el, i) => el.price * el.quantity);
    return selectedPrice.reduce((acc, cur) => {
      return acc + cur;
    }, 3000);
  };

  const setOrderData = () => {
    setInputs({ ...inputs, total: calcTotal(optionData) });
  };

  useEffect(() => {
    setOrderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container title="결제 금액">
      <>
        <div>총 캠페인 금액</div>
        <div>{calcTotal(optionData) - 3000}</div>
      </>
      <>
        <div>배송비</div>
        <div>3000원</div>
      </>
      <hr />
      <>
        <div>최종 결제 금액</div>
        <div>{`${calcTotal(optionData)}원`}</div>
      </>
    </Container>
  );
}

export default Price;
