import React, { useEffect, useState } from 'react';
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import { countState } from './count';
import styled from 'styled-components';
import Button from '../../../../components/Button';

function Card({ key, item, add, minus }) {
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
        <p>{item.title}</p>
        <p>{item.price}</p>
      </Name>
      <Count>
        <Button
          onClick={() => {
            minus(key, item.quantity);
          }}
          color="black"
          outline
        >
          -
        </Button>
        <div>{item.quantity}</div>
        <Button
          onClick={() => {
            add(key, item.quantity);
          }}
          color="black"
          outline
        >
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
