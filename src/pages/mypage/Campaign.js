import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { API } from '../../config';
import styled from 'styled-components/macro';

function Campaign() {
  const [myCampList, setMyCampList] = useState();
  //TODO : 토근이 만료되면 자동 로그아웃 또는 연장할 수 있게 수정하기
  const getMyCampList = () => {
    fetch(API.MYCAMP_LIST, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(myCampData => setMyCampList(myCampData.data.campaign));
  };

  useEffect(() => {
    getMyCampList();
  }, []);

  return (
    <>
      <Header text="참여한 캠페인" />
      <Wrapper>
        {myCampList &&
          myCampList.map(camp => (
            <ProductCard
              id={camp.id}
              key={camp.id}
              url={camp.url}
              subtitle={camp.subtitle}
              title={camp.title}
              type="user"
            />
          ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.calcVw(750, 40)}
    ${({ theme }) => theme.calcVw(750, 27)};
`;

export default Campaign;
