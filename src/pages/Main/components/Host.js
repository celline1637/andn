import React from 'react';
import styled from 'styled-components/macro';
import Article from './article/Article';
import Desc from './article/Desc';

function Host() {
  return (
    <Article title={HOST.title} subtitle={HOST.subtitle}>
      <Wrapper>
        <Img alt="host" src="/images/first.png" />
        <Desc contents={HOST.desc} />
      </Wrapper>
    </Article>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.desktop`
    ${({ theme }) => theme.flexSet()};
`};
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.calcVw(16)};

  ${({ theme }) => theme.desktop`
    width: ${({ theme }) => theme.calcVwL(583)};
    margin: 0 ${({ theme }) => theme.calcVwL(65)} 0 0;
  `};
`;

export default Host;

const HOST = {
  title: '캠페인 주최자, 호스트',
  subtitle: '엔덴이 찾는 호스트',
  desc: '호스트는 브랜드 캠페인을 직접 주최하여 가치 소비자에게 색다른 경험의 기회를 제공합니다. 캠페인은 제품 체혐, 공간 탐방, 문화체험 등 엔덴에 입점한 브랜드를 자유롭게 진행할 수 있습니다.',
};
