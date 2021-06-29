import React, { useState } from 'react';
import Camp from './components/Camp';
import Challenge from './components/Challenge';
import Detail from './components/Detail';
import styled, { css } from 'styled-components/macro';

function ChallengeMain() {
  const [activeTab, setActiveTab] = useState({ activeTab: 1 });

  const menuTabHandler = id => {
    setActiveTab({ activeTab: id });
  };

  const tab = {
    0: <Camp />,
    1: <Challenge />,
    2: <Detail />,
  };

  return (
    <Wrapper>
      <Tabs>
        {TITLE.map((title, idx) => (
          <Title
            onClick={() => menuTabHandler(idx)}
            active={activeTab.activeTab}
          >
            {title}
          </Title>
        ))}
      </Tabs>
      <Contents>{tab[activeTab.activeTab]}</Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Tabs = styled.ul`
  ${({ theme }) => theme.flexSet()};
`;

const Title = styled.li`
  width: ${({ theme }) => theme.calcVw(750, 202)};
  padding: ${({ theme }) => theme.calcVw(750, 21.5)}
    ${({ theme }) => theme.calcVw(750, 11)};
  text-align: center;
  font-size: ${({ theme }) => theme.calcVw(750, 26)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -0.65)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.th};

  ${({ active }) => {
    let idx = active;
    return css`
      &:nth-of-type(${idx + 1}) {
        color: black;
        border-bottom: ${({ theme }) => theme.calcVw(750, 4)} solid
          ${({ theme }) => theme.colors.btn};
      }
    `;
  }};
`;

const Contents = styled.div``;

export default ChallengeMain;

const TITLE = ['캠페인', '챌린지', '상세 정보'];
