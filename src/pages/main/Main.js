import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import ProductCard from '../../components/ProductCard';
function Main() {
  const [allCampList, setAllCampList] = useState();

  const getAllCampList = () => {
    fetch(`/data/adminData.json`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(adminCampData => setAllCampList(adminCampData.campaign));
  };

  useEffect(() => {
    getAllCampList();
  }, []);

  return (
    <Wrapper>
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
  ${({ theme }) => theme.flexSet()};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.calcVw(750, 40)}
    ${({ theme }) => theme.calcVw(750, 27)};
`;

export default Main;
