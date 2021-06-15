import React, { useEffect, useState } from 'react';
import Card from './Card';
import styled from 'styled-components';

function Option({ option }) {
  console.log(option);
  const [options, setOptions] = useState({
    1: { price: 1000, quantity: 0, stock: 5 },
    2: { price: 2000, quantity: 0, stock: 5 },
    3: { price: 3000, quantity: 0, stock: 5 },
  });

  // const add = i => {
  //   if (options[i].stock > options) {
  //     setOptions(...options, options[i].quantity + 1);
  //   }
  // };

  // const subtract = i => {
  //   if (options > 0) {
  //     setOptions(...options, options[i].quantity - 1);
  //   }
  // };

  return (
    <Wrapper>
      <div>옵션 선택하기</div>
      {option.map((item, i) => (
        <Card key={item.id} info={options[i + 1]} />
      ))}
      <div>총액</div>
    </Wrapper>
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
