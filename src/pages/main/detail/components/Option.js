import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from './Card';
import styled, { css } from 'styled-components';
import Button from '../../../../components/Button';
import { useRecoilState } from 'recoil';
import { orderState } from '../../pay/payment_info/orderState';

function Option({ option, isOptionShow, showOption }) {
  const history = useHistory();
  const [orderData, setOrderData] = useRecoilState(orderState);
  const [isShow, setIsShow] = useState(false);

  const plus = e => {
    let newOptions = [...option];
    const { id } = e.target;
    if (newOptions[id].stock > newOptions[id].quantity) {
      newOptions[id].quantity += 1;
    }
    setOrderData({ ...orderData, option: newOptions });
  };

  const minus = e => {
    let newOptions = [...option];
    const { id } = e.target;
    if (newOptions[id].quantity > 0) {
      newOptions[id].quantity -= 1;
    }
    setOrderData({ ...orderData, option: newOptions });
  };

  const calcTotal = option => {
    const selectedPrice = option.map((el, i) => el.price * el.quantity);
    return selectedPrice.reduce((acc, cur) => {
      return acc + cur;
    }, 3000);
  };

  const goToPay = () => {
    history.push('/pay');
  };

  const showBtn = () => {
    setIsShow(true);
  };

  return (
    !!option && (
      <Wrapper isOptionShow={isOptionShow}>
        <Button onClick={showOption} fullWidth>
          <i class="fas fa-chevron-down"></i>
        </Button>
        {option.map((item, i) => (
          <Card
            key={item.option_id}
            index={i}
            info={item}
            plus={plus}
            minus={minus}
            showBtn={showBtn}
          />
        ))}
        <Price>
          <div className="defaultPrice">(+) 배송비 3,000원</div>
          <div className="total">
            총
            <span className="price">
              {calcTotal(option).toLocaleString()}원
            </span>
          </div>
        </Price>
        <SelectBtn isShow={isShow} onClick={goToPay} color="btn" fullWidth>
          결제하기
        </SelectBtn>
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.calcVw(750, 10)};
  position: fixed;
  bottom: -100%;
  z-index: 999;
  background-color: white;
  box-shadow: rgb(30 30 30 / 15%) 0px -11px 18px -1px;
  transition: bottom 1s cubic-bezier(0.02, 0.01, 0, 1) 0s;
  ${({ isOptionShow }) =>
    isOptionShow &&
    css`
      bottom: 0px;
      transition: bottom 0.25s cubic-bezier(0.02, 0.01, 0, 1) 0s;
    `};

  ${({ theme }) => theme.tablet`
    width: 32%;
 
  `};

  & > button:first-of-type {
    padding: ${({ theme }) => theme.calcVw(750, 8)};
    color: ${({ theme }) => theme.colors.secondary_btn};
    border: none;

    &:hover,
    &:active {
      background-color: white;
    }

    ${({ theme }) => theme.tablet`
    display : none;
    `};
  }
`;

const SelectBtn = styled(Button)`
  padding: ${({ theme }) => theme.calcVw(750, 15)};
  margin: ${({ theme }) => theme.calcVw(750, 10)} 0;
  width: 98%;
  transition: transform 0.1s ease-in 0s;
  bottom: 4px;
  transform: translateY(0px);
  transform: ${({ isShow }) =>
    isShow ? 'translateY(0px)' : 'translateY(68px)'};
`;

const Price = styled.div`
  ${({ theme }) => theme.flexColumnSet('center', 'flex-end')};
  margin: 1rem;

  & > .defaultPrice {
    width: 100%;
    margin: 4vw 0;
    font-size: 3.333vw;
    text-align: right;
    color: rgb(153, 153, 153);
  }

  & > .total {
    font-size: 4.267vw;
    font-weight: bold;
    height: 100%;
    line-height: 8vw;
    text-align: right;
    color: rgb(255, 124, 0);

    & > .price {
      margin-left: 2vw;
      font-size: 7.2vw;
      font-weight: bold;
      height: 100%;
      line-height: 8vw;
      text-align: right;
      color: rgb(37, 37, 37);
    }
  }
`;

export default Option;
