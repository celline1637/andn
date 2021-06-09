import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import DetailCard from './components/DetailCard';
import CardInfo from './components/CardInfo';
// 서버 연결 시 config 사용
// import { API } from '../../config';

function More() {
  const [detail, setDetail] = useState();
  const params = useParams();

  // 동적 라우팅 시 params 사용
  // ${API}/${params.id}
  const getMyCamp = () => {
    fetch(`/data/detailData.json`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(detailData => setDetail(detailData.more));
  };

  useEffect(() => {
    getMyCamp();
  }, []);

  return (
    <>
      <Header text="캠페인 자세히보기" />
      {detail?.map(item => (
        <DetailCard title={item.title}>
          {item.detail.map(item => (
            <CardInfo title={item.title} cont={item.cont} />
          ))}
        </DetailCard>
      ))}
    </>
  );
}

export default More;
