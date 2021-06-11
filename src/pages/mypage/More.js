import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import DetailCard from './components/DetailCard';
// 서버 연결 시 config 사용
// import { API } from '../../config';

function More() {
  const [detail, setDetail] = useState();
  // 동적 라우팅 시 params 사용
  // const params = useParams();
  // ${API}/${params.id}

  const getMyCamp = () => {
    fetch(`/data/detailData.json`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(detailData => setDetail(detailData));
  };

  useEffect(() => {
    getMyCamp();
  }, []);

  return (
    <>
      <Header text="캠페인 자세히보기" />
      {detail?.more.map((item, index) => (
        <DetailCard
          info={item}
          subtitle={SUBTITLE[index]}
          detail={item.detail}
        />
      ))}
    </>
  );
}

export default More;

const SUBTITLE = [
  ['캠페인 명', '참여자명', '참여날짜', '캠페인 구성'],
  ['결제수단', '결제금액'],
  ['받는 사람', '연락처', '주소', '배송시요청사항'],
];
