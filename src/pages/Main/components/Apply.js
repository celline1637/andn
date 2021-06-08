import React from 'react';
import styled from 'styled-components/macro';
import Button from '../../../components/Button';

function Apply() {
  const goToForm = () => {
    window.open('https://5fkdinm7z85.typeform.com/to/TaX72LGe');
  };

  return (
    <Container>
      <Inner>
        <Img alt="main_image" src="/images/main_circle.png" />
        <Wrapper>
          <Title>선한 영향력을 펼치는 가장 쉬운 방법</Title>
          <SubTitle>가치소비 경험을 이끄는 호스트가 되어보세요</SubTitle>
          <StyledButton color="btn" onClick={goToForm}>
            지원하기
          </StyledButton>
        </Wrapper>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexColumnSet('flex-end', 'flex-start')};
  position: relative;
  padding-top: ${({ theme }) => theme.calcVw(25)};
  padding-left: ${({ theme }) => theme.calcVw(30)};
  background-color: ${({ theme }) => theme.colors.primary_bgc};
  ${({ theme }) => theme.desktop`
     //임시 height
     height: 548px;
     overflow : hidden;
     padding-left: ${({ theme }) => theme.calcVwL(202)};
  `};
`;

const Inner = styled.div`
  height: inherit;
  ${({ theme }) => theme.flexColumnSet('space-between', 'flex-start')};
  ${({ theme }) => theme.desktop`
    flex-direction: row;
    ${({ theme }) => theme.flexSet()};
  `};
`;

const Wrapper = styled.div`
  padding-left: ${({ theme }) => theme.calcVw(8)};
  ${({ theme }) => theme.desktop`
    padding-left: ${({ theme }) => theme.calcVwL(141)};
  `};
`;

const Img = styled.img`
  width: ${({ theme }) => theme.calcVw(178)};
  margin-bottom: ${({ theme }) => theme.calcVw(32)};
  ${({ theme }) => theme.desktop`
     width: ${({ theme }) => theme.calcVwL(677)};
     margin: 0;
  `};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.calcVw(24)};
  font-weight: 700;
  line-height: ${({ theme }) => theme.calcVw(32)};
  margin-bottom: ${({ theme }) => theme.calcVw(11)};
  ${({ theme }) => theme.desktop`
    font-size: ${({ theme }) => theme.calcVwL(40)};
    font-weight: 700;
    line-height: ${({ theme }) => theme.calcVwL(60)};
    letter-spacing: ${({ theme }) => theme.calcVwL(-1)};
    margin-bottom: ${({ theme }) => theme.calcVwL(21)};
  `};
`;

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.calcVw(14)};
  line-height: ${({ theme }) => theme.calcVw(21)};
  margin-bottom: ${({ theme }) => theme.calcVw(35)};
  ${({ theme }) => theme.desktop`
    font-size: ${({ theme }) => theme.calcVwL(24)};
    line-height: ${({ theme }) => theme.calcVwL(34)};
    margin-bottom: ${({ theme }) => theme.calcVwL(73)};
  `};
`;

const StyledButton = styled(Button)`
  width: ${({ theme }) => theme.calcVw(119)};
  height: ${({ theme }) => theme.calcVw(39)};
  margin-bottom: ${({ theme }) => theme.calcVw(38)};
  font-size: ${({ theme }) => theme.calcVw(14)};
  font-weight: 500;
  ${({ theme }) => theme.desktop`
    width: ${({ theme }) => theme.calcVwL(212)};
    height: ${({ theme }) => theme.calcVwL(67)};
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.calcVwL(24)};
  `};
`;

export default Apply;
