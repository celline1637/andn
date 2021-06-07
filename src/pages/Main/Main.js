import React from 'react';
import Support from './components/Support';
import Contents from './components/contents/Contents';
import Header from './components/contents/Header';
import Desc from './components/contents/Desc';

export default function Main() {
  return (
    <>
      <Support />
      <Contents>
        <Header title="캠페인 주최자, 호스트" subtitle="에덴이 찾는 호스트" />
        <img alt="contenst" src="/images/first.png" />
        <Desc contents="호스트는 브랜드 캠페인" />
      </Contents>
    </>
  );
}

const BENEFITS = [
  {
    url: '/images/first.png',
    title: '촬영 지원',
    desc: '감도 높은 콘텐츠를 위해 전문 사진작가가 촬영을 지원합니다. 외부 촬영부터 간단한 영상 제작까지도 가능합니다.',
  },
  {
    url: '/images/first.png',
    title: '콘텐츠 에디팅 지원',
    desc: '국내 최고 수준의 콘텐츠 에디팅 팀이 호스트와 함께 가치소비 경험을 이끌 영상, 이미지, 글 등을 가공하고 편집합니다.',
  },
  {
    url: '/images/first.png',
    title: '브랜드 무료체험 지원',
    desc: '가치 소비 경험을 이끌 수 있도록 제품, 서비스, 공간, 문화 체험 등 다양한 영역의 가치보시 브랜드를 무료로 제공합니다.',
  },
];

const PROCESS = [
  {
    url: '/images/first.png',
    title: '브랜드 체럼',
    desc: '브랜드가 제공하는 제품, 서비스, 공간 등을 먼저 무료로 체험해보세요.',
  },
  {
    url: '/images/first.png',
    title: '컨텐츠 기획',
    desc: '체험 경험을 바탕으로 촬영 작가와 콘텐츠팀 지원을 받아 캠페인을 기획해보세요.',
  },
  {
    url: '/images/first.png',
    title: '캠페인 진행',
    desc: '갬페인을 오픈하고 다양한 게스트와 함께 브랜드 경험을 공유해보세요.',
  },
];
