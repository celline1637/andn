import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Card from './Card';
import styled from 'styled-components';
import { optionState } from './optionState';

function Option({ option }) {
  const [options, setOptions] = useState(option);

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
          />
        ))}
        <div>총{calcTotal(option)}원</div>
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

export default Option;
