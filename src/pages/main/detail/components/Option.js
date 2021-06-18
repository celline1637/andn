import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from './Card';
import styled from 'styled-components';
import Button from '../../../../components/Button';

function Option({ option }) {
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

  return (
    !!options && (
      <Wrapper>
        <div>옵션 선택하기</div>
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
        <div>총{calcTotal(option)}원</div>
        <SelectBtn isShow={isShow} onClick={setInfo} color="btn" fullWidth>
          선물 선택
        </SelectBtn>
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.calcVw(750, 10)};
  ${({ theme }) => theme.tablet`
  width: 32%;
  `};
`;

const SelectBtn = styled(Button)`
  padding: ${({ theme }) => theme.calcVw(750, 15)};
  margin: ${({ theme }) => theme.calcVw(750, 10)} 0;
  width: 98%;
  transition: transform 0.1s ease-in 0s;
  bottom: 4px;
  transform: translateY(0px);
  /* transform: ${({ isShow }) =>
    isShow ? 'translateY(0px)' : 'translateY(68px)'}; */
`;

export default Option;
