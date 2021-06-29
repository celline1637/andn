import React, { useState } from 'react';
import styled from 'styled-components';
import WithHost from './main/Components/WithHost';

function Challenge() {
  return (
    <Wrapper>
      <Intro>
        <Circle>
          <div className="title">challenge</div>
          <div className="subtitle">
            구매 후 엔덴 챌린지에 참여한 분들에겐 특별한 베네핏이 주어져요 !
          </div>
        </Circle>
      </Intro>
      <WithHost />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Intro = styled.div`
  position: relative;
  height: 100vw;
  background-color: ${({ theme }) => theme.colors.btn};
`;

const Circle = styled.div`
  ${({ theme }) => theme.posCenter()};
  ${({ theme }) => theme.flexColumnSet()};
  width: ${({ theme }) => theme.calcVw(750, 526.7)};
  height: ${({ theme }) => theme.calcVw(750, 428.5)};
  border: ${({ theme }) => theme.calcVw(750, 4)} solid white;
  color: white;
  border-radius: 50%;

  .title {
    font-family: 'Be Vietnam', sans-serif;
    font-size: ${({ theme }) => theme.calcVw(750, 72)};
    margin-bottom: ${({ theme }) => theme.calcVw(750, 29)};
    letter-spacing: ${({ theme }) => theme.calcVw(750, -3.6)};
    font-weight: 500;
  }

  .subtitle {
    font-size: ${({ theme }) => theme.calcVw(750, 26)};
    line-height: ${({ theme }) => theme.calcVw(750, 40)};
    letter-spacing: ${({ theme }) => theme.calcVw(750, -0.65)};
    font-weight: 500;
    text-align: center;
  }
`;

const Host = styled.div`
  .title {
    margin: ${({ theme }) => theme.calcVw(750, 197)} auto
      ${({ theme }) => theme.calcVw(750, 72.5)};
    font-size: ${({ theme }) => theme.calcVw(750, 40)};
    line-height: ${({ theme }) => theme.calcVw(750, 54)};
    letter-spacing: ${({ theme }) => theme.calcVw(750, -2)};
    font-weight: 600;
    text-align: center;
  }
`;

const HostList = styled.div`
  white-space: nowrap;
  overflow: scroll;
  padding-left: ${({ theme }) => theme.calcVw(750, 52.5)};
`;

const Profile = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  display: inline-block;
  margin-right: ${({ theme }) => theme.calcVw(750, 21.5)};
  & > img {
    width: ${({ theme }) => theme.calcVw(750, 130)};
    height: ${({ theme }) => theme.calcVw(750, 130)};
    margin-bottom: ${({ theme }) => theme.calcVw(750, 18.5)};
    border: ${({ theme }) => theme.calcVw(750, 4)} solid orange;
    border-radius: 50%;
  }

  .name {
    font-size: ${({ theme }) => theme.calcVw(750, 25)};
    font-weight: 500;
  }
`;

const Divider = styled.hr`
  margin: ${({ theme }) => theme.calcVw(750, 46.5)}
    ${({ theme }) => theme.calcVw(750, 42.5)}
    ${({ theme }) => theme.calcVw(750, 35.5)};
  border: 1px solid lightgray;
`;

const Slider = styled.div`
  .description {
  }
`;

export default Challenge;

const NAME = ['이승희', '상희양', '오원', '장인성', '한씨'];
