import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';

function Card({ key, info }) {
  console.log(info);
  return (
    <Wrapper>
      <Name>
        {/* <p>{info.title}</p> */}
        <p>{info.price}</p>
      </Name>
      <Count>
        <Button color="black" outline>
          -
        </Button>
        <div>{info.quantity}</div>
        <Button color="black" outline>
          +
        </Button>
      </Count>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet()};
  margin: ${({ theme }) => theme.calcVw(750, 10)} 0;
  padding: 1rem;
  background-color: lightblue;
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
