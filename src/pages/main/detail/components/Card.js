import React, { useEffect, useState } from 'react';
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import { countState } from './count';
import styled from 'styled-components';
import Button from '../../../../components/Button';

function Card({ key, info, plus, minus, index }) {
  return (
    <Wrapper>
      <Name>
        <p>{info.title}</p>
        <p>{info.price}</p>
      </Name>
      <Count>
        <Button id={index} onClick={minus} color="black" outline>
          -
        </Button>
        <div>{info.quantity}</div>
        <Button id={index} onClick={plus} color="black" outline>
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
