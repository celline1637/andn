import React from 'react';
import Button from '../../../../components/Button';
import styled from 'styled-components/macro';

function Summary({ url, subtitle, title, showOption }) {
  return (
    <Wrapper>
      <Img alt="캠페인 상세 이미지" src={url} />
      <Title>
        <div className="title">{title}</div>
        <div className="subtitle">
          {subtitle.brand} | {subtitle.host}
        </div>
      </Title>
      <Cont>
        <Text>모인 금액</Text>
        <Num>
          30,023
          <span>원</span>
        </Num>
        <Text>남은 시간</Text>
        <Num>
          15
          <span>일</span>
        </Num>
        <Text>후원자</Text>
        <Num>
          324
          <span>명</span>
        </Num>
        <BtnGroup>
          <JoinButton onClick={showOption} fullWidth color="btn">
            캠페인 참여하기
          </JoinButton>
          <Button color="border" outline className="option">
            <i className="far fa-heart"></i>
          </Button>
          <Button color="border" outline className="option">
            <i className="fas fa-share-alt"></i>
          </Button>
        </BtnGroup>
      </Cont>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  ${({ theme }) => theme.tablet`
    ${({ theme }) => theme.flexSet('space-between')};
    flex-wrap: wrap;
  `};
`;

const Img = styled.img`
  width: 100%;
  height: 50vmin;
  object-fit: cover;
  margin-bottom: ${({ theme }) => theme.calcVw(750, 30)};
  ${({ theme }) => theme.tablet`
    width: 46%;
    height: 25vmin;
    margin-bottom: 0;

  `};
`;

const Title = styled.div`
  padding: 0 ${({ theme }) => theme.calcVw(750, 15)};

  ${({ theme }) => theme.tablet`
   ${({ theme }) => theme.flexColumnSet()};
   width: 100%;
   order: -1;
   margin : ${({ theme }) => theme.calcVw(750, 30)};
  `};

  & > div {
    margin-bottom: ${({ theme }) => theme.calcVw(750, 10)};
  }

  .title {
    font-size: ${({ theme }) => theme.calcVw(750, 38)};
    font-weight: 500;
    letter-spacing: ${({ theme }) => theme.calcVw(750, -0.5)};
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.tablet`
     font-size: ${({ theme }) => theme.calcVw(750, 20)};
  `};
  }

  .subtitle {
    font-size: ${({ theme }) => theme.calcVw(750, 20)};
    font-weight: 500;
    letter-spacing: ${({ theme }) => theme.calcVw(750, -0.5)};
    color: ${({ theme }) => theme.colors.secondary_btn};
    ${({ theme }) => theme.tablet`
     font-size: ${({ theme }) => theme.calcVw(750, 16)};
  `};
  }
`;

const Cont = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.calcVw(750, 10)}
    ${({ theme }) => theme.calcVw(750, 15)} 0;
  font-size: ${({ theme }) => theme.calcVw(750, 20)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -0.5)};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.tablet`
    ${({ theme }) => theme.flexColumnSet('space-between', 'flex-start')};
     width: 50%;
     height: 25vmin;
     font-size: 3vw;
  `};
`;

const Text = styled.div`
  margin-bottom: 0.4rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary_btn};
`;

const Num = styled.div`
  margin-bottom: 0.4rem;
  font-size: 2rem;

  & > span {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary_btn};
  }
`;

const BtnGroup = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexSet()};
  cursor: pointer;
  /* 
  ${({ theme }) => theme.tablet`
    ${({ theme }) => theme.flexSet('flex-end')};
  `}; */

  .option {
    display: none;
    border: none;
    ${({ theme }) => theme.tablet`
      display : flex;
      padding: 1rem;
      font-size: 1.5rem;
      line-height: 1rem;
      color: ${({ theme }) => theme.colors.border};;
    `};
  }
`;

const JoinButton = styled(Button)`
  margin: ${({ theme }) => theme.calcVw(750, 10)} 0;
  padding: ${({ theme }) => theme.calcVw(750, 20)}
    ${({ theme }) => theme.calcVw(750, 80)};
  font-size: 4vw;
  line-height: 4.8vw;
  letter-spacing: -0.1vw;
  border: none;
  ${({ theme }) => theme.tablet`
    margin: 1rem 0;
    padding: 1rem;
    font-size: 1.2rem;
    line-height: 1rem;
  `};
`;

export default Summary;
