import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
// 서버와 연결 시 config 사용
import { API } from '../../config';
import styled from 'styled-components/macro';
import CampGraph from '../graph/CampGraph';

function AdminCamp() {
  const [adminCampList, setAdminCampList] = useState();
  const history = useHistory();

  const getAdminCampList = () => {
    fetch(API.ADMIN_LIST, {
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
          <ProductCard
            id={camp.id}
            key={camp.id}
            url={camp.url}
            subtitle={camp.subtitle}
            title={camp.title}
            type="admin"
          />
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
