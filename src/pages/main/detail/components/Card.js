import React, { useEffect, useState } from 'react';
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import { countState } from './count';
import styled from 'styled-components';
import Button from '../../../../components/Button';

function Card({ key, info, plus, minus, index }) {
  // const [num, setNum] = useState(0);
  // const add = () => {
  //   if (info.stock > num) {
  //     setNum(num + 1);
  //   }
  // };

  // const substract = () => {
  //   if (num > 0) {
  //     setNum(num - 1);
  //   }
  // };

  // useEffect(() => {
  //   plus(index, num);
  //   minus(index, num);
  //   console.log(info, index, num);
  // }, [num]);

  return (
    <Wrapper>
      <Name>
        <p>{info.title}</p>
        <p>{info.price}</p>
      </Name>
      <Count>
        <Button onClick={minus} color="black" outline id={index}>
          -
        </Button>
        <div>{info.quantity}</div>
        <Button onClick={plus} color="black" outline id={index}>
          +
        </Button>
      </Count>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  margin: ${({ theme }) => theme.calcVw(750, 10)} 0;
  padding: 1rem;
`;

const Name = styled.div``;

const Count = styled.div`
  ${({ theme }) => theme.flexSet()};

  button {
    font-size: ${({ theme }) => theme.calcVw(750, 10)};
    padding: 0.5em;
  }
`;

export default Card;
