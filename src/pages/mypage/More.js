import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { API } from '../../config';
import { useParams } from 'react-router-dom';
import DetailCard from './components/DetailCard';
import CardInfo from './components/CardInfo';

function More() {
  const [detail, setDetail] = useState();
  const params = useParams();

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
    console.log(detail);
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
