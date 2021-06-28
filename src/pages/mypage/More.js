import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import DetailCard from './components/DetailCard';
import { API } from '../../config';

function More() {
  const [detail, setDetail] = useState();
  const params = useParams();
  const history = useHistory();

  // const getMyCamp = signal => {
  //   fetch(
  //     `${API.MYCAMP_DETAIL}/${params.id}`,
  //     {
  //       headers: { Authorization: localStorage.getItem('token') },
  //     },
  //     { signal: signal }
  //   )
  //     .then(res => res.json())
  //     .then(detailData => {
  //       if (detailData.status === 'SUCCESS') {
  //         setDetail(detailData.data.campaign);
  //       } else if (detailData.status === 'EXPIRED_TOKEN') {
  //         alert('로그인 권한이 만료되었습니다. 다시 로그인해주세요.');
  //         localStorage.clear();
  //         history.push('/');
  //       }
  //     });
  // };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(`${API.MYCAMP_DETAIL}/${params.id}`, {
      headers: { Authorization: localStorage.getItem('token') },
      signal: signal,
    })
      .then(res => res.json())
      .then(detailData => {
        if (detailData.status === 'SUCCESS') {
          setDetail(detailData.data.campaign);
        } else if (detailData.status === 'EXPIRED_TOKEN') {
          alert('로그인 권한이 만료되었습니다. 다시 로그인해주세요.');
          localStorage.clear();
          history.push('/');
        }
      })
      .catch(err => {
        console.log(err);
      });

    return function cleanup() {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header text="캠페인 자세히보기" />
      {detail?.more.map((item, i) => (
        <DetailCard key={item.title} info={item} subtitle={SUBTITLE[i]} />
      ))}
    </>
  );
}

export default More;

const SUBTITLE = [
  ['캠페인 명', '참여자명', '참여날짜', '캠페인 구성'],
  ['결제수단', '결제금액'],
  ['받는 사람', '연락처', '주소', '배송 시 요청 사항'],
];
