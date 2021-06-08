import React from 'react';
import styled from 'styled-components/macro';
import Button from '../../../components/Button';

function Apply2nd() {
  const goToForm = () => {
    window.open('https://5fkdinm7z85.typeform.com/to/TaX72LGe');
  };

  return (
    <Container>
      <Inner>
        <Img alt="main_image" src="/images/group.png" />
        <Wrapper>
          <Title>지금 바로 지원해보세요</Title>
          <SubTitle>
            더 나은 내일에 닿을 <br /> 여러분의 영향력을 펼쳐주세요.
          </SubTitle>
          <StyledButton color="btn" onClick={goToForm}>
            호스트 지원하기
          </StyledButton>
        </Wrapper>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  padding: ${({ theme }) => theme.calcVw(54)} 0;
  background-color: ${({ theme }) => theme.colors.primary_bgc};
  overflow: hidden;
  ${({ theme }) => theme.desktop`
    padding: ${({ theme }) => theme.calcVwL(105)} ${({ theme }) =>
    theme.calcVwL(63)};
  `};
`;

const Inner = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  height: inherit;
  ${({ theme }) => theme.desktop`
   flex-direction: row;
   justify-content: flex-start;
  `};
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  ${({ theme }) => theme.desktop`
    align-items: flex-start;
  `};
`;

const Img = styled.img`
  display: inline-block;
  width: 120vw;
  margin-bottom: ${({ theme }) => theme.calcVw(32)};
  ${({ theme }) => theme.desktop`
     width: ${({ theme }) => theme.calcVwL(996)};
     margin-right: ${({ theme }) => theme.calcVwL(117)};
     margin-bottom: 0;
  `};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.calcVw(24)};
  font-weight: 700;
  /* line-height: ${({ theme }) => theme.calcVw(32)}; */
  letter-spacing: ${({ theme }) => theme.calcVw(-0.6)};
  margin-bottom: ${({ theme }) => theme.calcVw(11)};
  ${({ theme }) => theme.desktop`
    font-size: ${({ theme }) => theme.calcVwL(40)};
    margin-bottom: ${({ theme }) => theme.calcVwL(21)};
  `};
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.calcVw(14)};
  line-height: ${({ theme }) => theme.calcVw(21)};
  letter-spacing: ${({ theme }) => theme.calcVw(-0.35)};
  margin-bottom: ${({ theme }) => theme.calcVw(18)};
  ${({ theme }) => theme.desktop`
    text-align: left;
    font-size: ${({ theme }) => theme.calcVwL(24)};
    line-height: ${({ theme }) => theme.calcVwL(34)};
    margin-bottom: ${({ theme }) => theme.calcVwL(18)};
    
  `};
`;

const StyledButton = styled(Button)`
  width: ${({ theme }) => theme.calcVw(131)};
  height: ${({ theme }) => theme.calcVw(39)};
  border-radius: 0;
  font-size: ${({ theme }) => theme.calcVw(14)};
  font-weight: 500;
  ${({ theme }) => theme.desktop`
    width: ${({ theme }) => theme.calcVwL(232)};
    height: ${({ theme }) => theme.calcVwL(67)};
    font-size: ${({ theme }) => theme.calcVwL(24)};
  `};
`;

export default Apply2nd;
