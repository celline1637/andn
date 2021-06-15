import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Button from '../../../components/Button';
// import { API } from '../../../config';

function Detail() {
  const [campInfo, setCampInfo] = useState();
  // const params = useParams();

  console.log(campInfo);

  //`${API.CAMP_DETAIL}/${params.id}`
  const getCampInfo = () => {
    fetch(`/data/campDetailData.json`)
      .then(res => res.json())
      .then(campInfo => setCampInfo(campInfo));
  };

  useEffect(() => {
    getCampInfo();
  }, []);

  const { title, subtitle, url, summary, option } = campInfo?.result;
  return (
    <Container>
      <img alt="캠페인 상세 이미지" src={url[0]} srcSet={(url[1], url[2])} />
      <div>{title}</div>
      <div>
        {subtitle.brand} | {subtitle.hostname}
      </div>
      <div>{summary}</div>
      {option.map(card => (
        <>
          <div>{card.title}</div>
          <div>{card.price}</div>
        </>
      ))}
      <Button color="btn">캠페인 참여하기</Button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

export default Detail;
