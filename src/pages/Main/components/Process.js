import React from 'react';
import Article from './article/Article';
import Desc from './article/Desc';
import styled from 'styled-components/macro';

function Process() {
  return (
    <Article title="캠페인 프로세스" subtitle="어렵지 않아요">
      <Outter>
        {PROCESS.map(item => (
          <Wrapper key={item.title}>
            <Img alt={item.title} src={item.url} />
            <Desc title={item.title} contents={item.desc} center />
            <Arrow alt="arrow" src="/images/path.png" />
          </Wrapper>
        ))}
      </Outter>
    </Article>
  );
}

const Outter = styled.div`
  ${({ theme }) => theme.desktop`
    ${({ theme }) => theme.flexSet()};
`};
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
`;

const Img = styled.img`
  margin-bottom: ${({ theme }) => theme.calcVw(20.4)};
`;

const Arrow = styled.img`
  margin: ${({ theme }) => theme.calcVw(70)} 0;
`;

export default Process;

const PROCESS = [
  {
    url: '/images/experience.png',
    title: '브랜드 체험',
    desc: '브랜드가 제공하는 제품, 서비스, 공간 등을 먼저 무료로 체험해보세요.',
  },
  {
    url: '/images/plan.png',
    title: '컨텐츠 기획',
    desc: '체험 경험을 바탕으로 촬영 작가와 콘텐츠팀 지원을 받아 캠페인을 기획해보세요.',
  },
  {
    url: '/images/progress.png',
    title: '캠페인 진행',
    desc: '갬페인을 오픈하고 다양한 게스트와 함께 브랜드 경험을 공유해보세요.',
  },
];