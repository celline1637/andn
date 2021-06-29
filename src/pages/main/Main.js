import React, { useState, useEffect, lazy, Suspense } from 'react';
import { API } from '../../config';
import SlickCarousel from './components/SlickCarousel';
import Loader from '../../components/Loader';
import styled from 'styled-components/macro';

const ProductCard = lazy(() => import('../../components/ProductCard'));

function Main() {
  const [allCampList, setAllCampList] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch(API.ALLCAMP_LIST, {
      signal,
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(adminCampData => setAllCampList(adminCampData.data.campaign))
      .catch(err => {
        console.log(err);
      });

    return function cleanup() {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <SlickCarousel />
      {allCampList?.map(camp => (
        <Suspense fallback={<Loader />}>
          <ProductCard id={camp.id} key={camp.id} data={camp} type="main" />
        </Suspense>
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
