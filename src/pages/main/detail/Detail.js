import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components/macro';
import Button from '../../../components/Button';
import Option from './components/Option';
import Summary from './components/Summary';
// import { API } from '../../../config';

function Detail() {
  const [campInfo, setCampInfo] = useState();
  // 서버 연결 시 params 사용
  // const params = useParams();
  //`${API.CAMP_DETAIL}/${params.id}`

  const getCampInfo = () => {
    fetch(`/data/campDetailData.json`)
      .then(res => res.json())
      .then(campInfo => setCampInfo(campInfo.result));
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
        />
        <Desc>
          {campInfo.summary}
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus officia ex quidem eos dicta totam odit praesentium
            doloribus earum! Repellendus quia doloremque, laboriosam ipsum fugit
            illo facere voluptate aliquid beatae.Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Necessitatibus officia ex quidem eos
            dicta totam odit praesentium doloribus earum! Repellendus quia
            doloremque, laboriosam ipsum fugit illo facere voluptate aliquid
            beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus officia ex quidem eos dicta totam odit praesentium
            doloribus earum! Repellendus quia doloremque, laboriosam ipsum fugit
            illo facere voluptate aliquid beatae.
          </div>
        </Desc>
        <Option option={campInfo.option} />
      </Container>
    )
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexColumnSet('flex-start', 'flex-start')};
  ${({ theme }) => theme.tablet`
    ${({ theme }) => theme.flexSet()};
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;

const Desc = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.calcVw(750, 10)};
  ${({ theme }) => theme.tablet`
    width: 68%;
  `};
`;

export default Detail;
