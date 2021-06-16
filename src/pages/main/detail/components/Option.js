import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Card from './Card';
import styled from 'styled-components';
import { optionState } from './optionState';

function Option({ option }) {
  const [optionList, setOptionList] = useRecoilState(optionState);
  const getOptionList = () => {
    setOptionList(option);
  };

  useEffect(() => {
    getOptionList();
  }, []);

  console.log(optionList);

  const add = (index, quantity) => {
    setOptionList(
      optionList.map((option, i) =>
        index === i ? { ...option, quantity: quantity + 1 } : option
      )
    );
  };

  const minus = (index, quantity) => {
    setOptionList(
      optionList.map((option, i) =>
        index === i ? { ...option, quantity: quantity - 1 } : option
      )
    );
  };

  //useState사용
  // const [total, setTotal] = useState(0);
  // const [options, setOptions] = useState(option);
  // const plus = (index, quantity) => {
  //   setOptions(
  //     options.map((option, i) =>
  //       index === i ? { ...option, quantity: quantity + 1 } : option
  //     )
  //   );
  // };
  // const minus = (index, quantity) => {
  //   setOptions(
  //     options.map((option, i) =>
  //       index === i ? { ...option, quantity: quantity - 1 } : option
  //     )
  //   );
  // };

  return (
    !!optionList && (
      <Wrapper>
        <div>옵션 선택하기</div>
        {/* {option.map((item, i) => (
        <Card
          key={item.id}
          quantity={item.quantity}
          index={i}
          info={item}
          plus={plus}
          minus={minus}
        />
      ))} */}
        {optionList.map(item => (
          <Card key={item.id} item={item} add={add} minus={minus} />
        ))}
        <div>총액</div>
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
