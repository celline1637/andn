import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
// 서버와 연결 시 config 사용
// import { API } from '../../config';
import styled from 'styled-components/macro';

function AdminCamp() {
  const [adminCampList, setAdminCampList] = useState();

  const getAdminCampList = () => {
    fetch(`/data/adminData.json`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(adminCampData => setAdminCampList(adminCampData.campaign));
  };

  useEffect(() => {
    getAdminCampList();
  }, []);

  return (
    <>
      <Header text="캠페인 관리" />
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
  ${({ theme }) => theme.flexSet()};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.calcVw(750, 40)}
    ${({ theme }) => theme.calcVw(750, 27)};
`;

export default AdminCamp;
