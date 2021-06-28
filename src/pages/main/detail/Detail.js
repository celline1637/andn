import React, { useState, useEffect, lazy } from 'react';
import { useParams } from 'react-router';
import { API } from '../../../config';
import Button from '../../../components/Button';
import ScrollTopArrow from '../../../components/ScrollArrow';
import styled, { css } from 'styled-components/macro';

const Summary = lazy(() => import('./components/Summary'));
const Option = lazy(() => import('./components/Option'));

function Detail() {
  const params = useParams();
  const [campInfo, setCampInfo] = useState();
  const [isContentsShow, setIsContentsShow] = useState(false);
  const [isOptionShow, setIsOptionShow] = useState(false);

  const showOption = () => {
    setIsOptionShow(!isOptionShow);
  };

  const showContents = () => {
    setIsContentsShow(!isContentsShow);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(`${API.ALLCAMP_DETAIL}/${params.id}`, { signal })
      .then(res => res.json())
      .then(campInfo => setCampInfo(campInfo.data.campaign.result))
      .catch(err => {
        console.log(err);
      });

    return function cleanup() {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Contents isContentsShow={isContentsShow}>
          <img
            alt="캠페인 상세정보"
            src="http://andn.co.kr/static/media/Content2.c5d41558.png"
          ></img>
          <ScrollTopArrow />
          <BtnWrapper>
            <ShowMoreContentBtn color="black" onClick={showContents} fullWidth>
              {isContentsShow ? '스토리 접기' : '스토리 더보기'}
            </ShowMoreContentBtn>
          </BtnWrapper>
        </Contents>
        <Option
          showOption={showOption}
          isOptionShow={isOptionShow}
          option={campInfo.option}
        />
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

const Contents = styled.div`
  width: 100%;
  position: relative;

  /* 스토리 접힐때 */
  ${({ isContentsShow }) =>
    !isContentsShow &&
    css`
      overflow: hidden;
      height: 1050px;
    `};

  ${({ theme }) => theme.tablet`
    width: 68%;
  `};

  & > img {
    width: 100%;
  }
`;

const BtnWrapper = styled.div`
  padding: 16px 18px;
  width: 100%;
  background: rgb(255, 255, 255);
  position: absolute;
  bottom: 0px;
  box-shadow: transparent 0px 0px 0px 1px inset,
    rgb(0 0 0 / 10%) 0px 0em 0px 0px inset;
`;

const ShowMoreContentBtn = styled(Button)`
  padding: 16px 18px;
  font-weight: 500;
`;

export default Detail;
