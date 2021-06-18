import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { API } from '../../config';
import styled from 'styled-components';

function Campaign() {
  const [myCampList, setMyCampList] = useState();

  // ${API.CAMP_LIST}
  const getMyCampList = () => {
    fetch('/data/campaignData.json', {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(myCampData => setMyCampList(myCampData.campaign));
    //myCampData.data.campaign
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
  ${({ theme }) => theme.flexSet()};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.calcVw(750, 40)}
    ${({ theme }) => theme.calcVw(750, 27)};
`;

export default Campaign;
