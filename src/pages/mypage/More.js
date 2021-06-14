import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import DetailCard from './components/DetailCard';
import { API } from '../../config';

function More() {
  const [detail, setDetail] = useState();
  const params = useParams();

  const getMyCamp = () => {
    fetch(`${API.CAMP_DETAIL}/${params.id}`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(detailData => setDetail(detailData.data.campaign));
  };

  useEffect(() => {
    getMyCamp();
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
