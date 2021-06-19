import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from './Card';
import styled, { css } from 'styled-components';
import Button from '../../../../components/Button';

function Option({ option, isOptionShow }) {
  const history = useHistory();
  const [options, setOptions] = useState(option);
  const [isShow, setIsShow] = useState(false);

  const plus = e => {
    let newOptions = [...options];
    const { id } = e.target;
    if (newOptions[id].stock > newOptions[id].quantity) {
      newOptions[id].quantity += 1;
    }
    setOptions(newOptions);
  };

  const minus = e => {
    let newOptions = [...options];
    const { id } = e.target;
    if (newOptions[id].quantity > 0) {
      newOptions[id].quantity -= 1;
    }
    setOptions(newOptions);
  };

  const calcTotal = options => {
    const selectedPrice = options.map((el, i) => el.price * el.quantity);
    return selectedPrice.reduce((acc, cur) => {
      return acc + cur;
    }, 3000);
  };

  const setInfo = () => {
    localStorage.setItem('optionData', JSON.stringify(options));
    history.push('/pay');
  };

  const showBtn = () => {
    setIsShow(true);
  };

  console.log(isOptionShow);

  return (
    !!options && (
      <Wrapper isOptionShow={isOptionShow}>
        <Button fullWidth>
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
        <SelectBtn isShow={isShow} onClick={setInfo} color="btn" fullWidth>
          선물 선택
        </SelectBtn>
      </Wrapper>
    )
  );
}

// const isShow = css`
//   ${props =>
//     props.isOptionShow &&
//     css`
//       background-color: red;
//     `}
// `;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: ${({ theme }) => theme.calcVw(750, 10)};
  border-radius: 4px;
  bottom: 0px;
  z-index: 999;
  position: fixed;
  transition: bottom 0.25s cubic-bezier(0.02, 0.01, 0, 1) 0s;
  box-shadow: rgb(30 30 30 / 15%) 0px -11px 18px -1px;

  ${({ theme }) => theme.tablet`
    width: 32%;
     position: ;
  `};

  & > button:first-of-type {
    padding: ${({ theme }) => theme.calcVw(750, 8)};
    color: ${({ theme }) => theme.colors.secondary_btn};
    border: none;
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
