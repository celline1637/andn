import React from 'react';
import styled from 'styled-components';
import Article from './article/Article';
import Desc from './article/Desc';

function Benefits() {
  return (
    <Article
      title="호스트 지원 혜택"
      subtitle="호스트가 되면 이런 점이 좋아요"
      color="bgc"
    >
      {BENEFITS.map(item => (
        <Wrapper key={item.title}>
          <Img alt={item.title} src={item.url} />
          <Desc title={item.title} contents={item.desc} />
        </Wrapper>
      ))}
    </Article>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  ${({ theme }) => theme.desktop`
    flex-direction : row;

    &:nth-child(3) {
      flex-direction: row-reverse;
  }
  `};
`;

const Img = styled.img`
  width: 80%;
  margin-bottom: ${({ theme }) => theme.calcRem(20)};
  ${({ theme }) => theme.desktop`
    width: 30.2%
  `};
`;

export default Benefits;

const BENEFITS = [
  {
    url: '/images/film.png',
    title: '촬영 지원',
    desc: '감도 높은 콘텐츠를 위해 전문 사진작가가 촬영을 지원합니다. 외부 촬영부터 간단한 영상 제작까지도 가능합니다.',
  },
  {
    url: '/images/editing.png',
    title: '콘텐츠 에디팅 지원',
    desc: '국내 최고 수준의 콘텐츠 에디팅 팀이 호스트와 함께 가치소비 경험을 이끌 영상, 이미지, 글 등을 가공하고 편집합니다.',
  },
  {
    url: '/images/free.png',
    title: '브랜드 무료체험 지원',
    desc: '가치 소비 경험을 이끌 수 있도록 제품, 서비스, 공간, 문화 체험 등 다양한 영역의 가치보시 브랜드를 무료로 제공합니다.',
  },
];
