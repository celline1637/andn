import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components/macro';
import Button from '../../../components/Button';
import Option from './components/Option';
import Summary from './components/Summary';
import { API } from '../../../config';

function Detail() {
  const params = useParams();
  const [campInfo, setCampInfo] = useState();
  const [isOptionShow, setIsOptionShow] = useState(false);

  //`${API.MYCAMP_DETAIL}/${params.id}`
  // /data/campDetailData.json
  const getCampInfo = () => {
    fetch(`${API.ALLCAMP_DETAIL}/${params.id}`)
      .then(res => res.json())
      .then(campInfo => setCampInfo(campInfo.data.campaign.result));
  };

  const showOption = () => {
    setIsOptionShow(true);
  };

  useEffect(() => {
    getCampInfo();
  }, []);

  return (
    !!campInfo && (
      <Container>
        <Summary
          url={campInfo.url}
          subtitle={campInfo.subtitle}
          title={campInfo.title}
          showOption={showOption}
        />
        <Desc>
          <img
            alt="캠페인 상세정보"
            src="http://andn.co.kr/static/media/Content2.c5d41558.png"
          />
        </Desc>
        <Option isOptionShow={isOptionShow} option={campInfo.option} />
      </Container>
    )
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexColumnSet('flex-start', 'flex-start')};
  overflow: hidden;

  ${({ theme }) => theme.tablet`
    // ${({ theme }) => theme.flexSet('space-between')};
    width: 1080px;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;

const Desc = styled.div`
  width: 100%;
  overflow: hidden;
  ${({ theme }) => theme.tablet`
    width: 68%;
  `};

  & > img {
    width: 100%;
  }
`;

export default Detail;
