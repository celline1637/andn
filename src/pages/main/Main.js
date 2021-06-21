import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import ProductCard from '../../components/ProductCard';
import { API } from '../../config';
import Carousel from './components/Carousel';

function Main() {
  const [allCampList, setAllCampList] = useState();

  const getAllCampList = () => {
    fetch(API.ALLCAMP_LIST)
      .then(res => res.json())
      .then(adminCampData => setAllCampList(adminCampData.data.campaign));
  };

  useEffect(() => {
    getAllCampList();
  }, []);

  return (
    <Wrapper>
      <Carousel />
      {allCampList?.map(camp => (
        <ProductCard
          id={camp.id}
          key={camp.id}
          url={camp.url}
          subtitle={camp.subtitle}
          title={camp.title}
          type="main"
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.calcVw(750, 40)}
    ${({ theme }) => theme.calcVw(750, 27)};
`;

export default Main;
