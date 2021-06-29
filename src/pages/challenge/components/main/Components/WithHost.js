import React, { useState, useEffect } from 'react';
import ChallengeCarousel from './ChallengeCarousel';
import styled, { css } from 'styled-components/macro';

function WithHost() {
  const [challenge, setChallenge] = useState();
  const [slider, setSlider] = useState({});
  const [activeTab, setActiveTab] = useState({
    active: 1,
  });

  const tabHandler = id => {
    setActiveTab({ active: id });
  };

  const setSliderObj = () => {
    const result = {};
    if (challenge !== undefined)
      for (let i = 0; i < challenge.length; i++) {
        result[i] = (
          <ChallengeCarousel desc={challenge[i].desc} img={challenge[i].img} />
        );
        setSlider(result);
      }
  };

  console.log(slider);

  useEffect(() => {
    setSliderObj();
  }, [challenge]);

  useEffect(() => {
    fetch('/data/challengeData.json')
      .then(res => res.json())
      .then(res => {
        setChallenge(res.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Host>
      <div className="title">
        호스트와 함께하는
        <br />
        캠페인 챌린지
      </div>
      <HostList>
        {challenge?.map((host, idx) => (
          <Profile
            onClick={() => tabHandler(idx)}
            key={host.id}
            active={activeTab.active}
          >
            <img alt="프로필" src={host.host.profile} />

            <div className="name">{host.host.name}</div>
          </Profile>
        ))}
      </HostList>
      <Divider />
      {slider[activeTab.active]}
    </Host>
  );
}

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
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  padding-left: ${({ theme }) => theme.calcVw(750, 52.5)};
`;

const Profile = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  margin-right: ${({ theme }) => theme.calcVw(750, 21.5)};

  .name {
    font-size: ${({ theme }) => theme.calcVw(750, 25)};
    font-weight: 500;
  }

  & > img {
    width: ${({ theme }) => theme.calcVw(750, 130)};
    height: ${({ theme }) => theme.calcVw(750, 130)};
    margin-bottom: ${({ theme }) => theme.calcVw(750, 18.5)};
    border-radius: 50%;
  }

  ${({ active }) => {
    let idx = active;
    return css`
      &:nth-of-type(${idx + 1}) {
        & > img {
          border: ${({ theme }) => theme.calcVw(750, 4)} solid orange;
        }
      }
    `;
  }};
`;

const Divider = styled.hr`
  margin: ${({ theme }) => theme.calcVw(750, 46.5)}
    ${({ theme }) => theme.calcVw(750, 42.5)}
    ${({ theme }) => theme.calcVw(750, 35.5)};
  border: 1px solid lightgray;
`;

export default WithHost;
