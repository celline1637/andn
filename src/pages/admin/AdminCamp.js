import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { API } from '../../config';
import CampGraph from './graph/CampGraph';
import styled from 'styled-components/macro';

function AdminCamp() {
  const [adminCampList, setAdminCampList] = useState();
  const history = useHistory();

  const getAdminCampList = () => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch(API.ADMIN_LIST, {
      signal: signal,
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'EXPIRED_TOKEN') {
          alert('로그인 권한이 만료되었습니다. 다시 로그인해주세요.');
          localStorage.clear();
          history.push('/');
        } else if (res.status === 'SUCCESS') {
          setAdminCampList(res.data.campaign);
        }
      });
  };

  useEffect(() => {
    getAdminCampList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header text="캠페인 관리" />
      <CampGraph />
      <Wrapper>
        {adminCampList?.map(camp => (
          <ProductCard id={camp.id} key={camp.id} data={camp} type="admin" />
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.calcVw(750, 40)}
    ${({ theme }) => theme.calcVw(750, 27)};
`;

export default AdminCamp;
