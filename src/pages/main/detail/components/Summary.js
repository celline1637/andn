import React from 'react';
import Button from '../../../../components/Button';
import styled from 'styled-components/macro';

function Summary({ url, subtitle, title }) {
  return (
    <Wrapper>
      <Img alt="캠페인 상세 이미지" src={url[0]} />
      <Title>
        <div className="title">{title}</div>
        <div className="subtitle">
          {subtitle.brand} | {subtitle.hostname}
        </div>
      </Title>
      <Cont>
        모인 금액 - 30,023원
        <br /> 남은시간 - 15일
        <br /> 후원자 - 324명
        <BtnGroup>
          <JoinButton fullWidth color="btn">
            캠페인 참여하기
          </JoinButton>
          <Button className="option">❤️</Button>
          <Button className="option">🍄</Button>
        </BtnGroup>
      </Cont>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.tablet`
    ${({ theme }) => theme.flexSet()};
    flex-wrap: wrap;
  `};
`;

const Img = styled.img`
  width: 100%;
  height: 45vmin;
  margin-bottom: ${({ theme }) => theme.calcVw(750, 30)};
  ${({ theme }) => theme.tablet`
    width: 40%;
    height: 25vmin;
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
  padding: 0 ${({ theme }) => theme.calcVw(750, 15)};
  ${({ theme }) => theme.tablet`
    ${({ theme }) => theme.flexColumnSet('space-between', 'flex-start')};
     width: 50%;
     height: 25vmin;
     font-size: 3vw;

  `};
`;

const BtnGroup = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexSet()};
  cursor: pointer;

  .option {
    display: none;
    border: none;
    ${({ theme }) => theme.tablet`
      display : flex;
      padding: 1rem;
      font-size: 1.5rem;
      line-height: 1rem;
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
