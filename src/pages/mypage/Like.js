import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { API } from '../../config';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router';

function Like() {
  const [myCampList, setMyCampList] = useState();
  const history = useHistory();

  const getMyLikedList = signal => {
    fetch(API.MYCAMP_LIST, {
      headers: { Authorization: localStorage.getItem('token') },
      signal,
    })
      .then(res => res.json())
      .then(myCampData => {
        if (myCampData.status === 'SUCCESS') {
          setMyCampList(myCampData.data.campaign);
        }
        if (myCampData.status === 'EXPIRE_TOKEN') {
          alert('로그인 권한이 만료되었습니다. 다시 로그인해주세요.');
          localStorage.clear();
          history.push('/');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getMyLikedList(signal);

    return function cleanup() {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header text="좋아한 캠페인" />
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

export default Like;
