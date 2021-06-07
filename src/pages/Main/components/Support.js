import React from 'react';
import styled from 'styled-components/macro';
import Button from '../../../components/Button';

function Support() {
  const goToForm = () => {
    window.open('https://5fkdinm7z85.typeform.com/to/TaX72LGe');
  };

  return (
    <Container>
      <Img alt="main_image" src="/images/main_circle.png" />
      <Wrapper>
        <Title>
          선한 영향력을 펼치는 <br />
          가장 쉬운 방법
        </Title>
        <SubTitle>가치소비 경험을 이끄는 호스트가 되어보세요</SubTitle>
        <StyledButton color="btn" onClick={goToForm}>
          지원하기
        </StyledButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexColumnSet('flex-end', 'flex-start')};
  position: relative;
  height: ${({ theme }) => theme.calcVh(812, 480)};
  padding-left: 30px;
  background-color: ${({ theme }) => theme.colors.primary_bgc};
`;

const Wrapper = styled.div`
  padding-left: 8px;
`;

const Img = styled.img`
  width: ${({ theme }) => theme.calcRem(178)};
  position: absolute;
  top: ${({ theme }) => theme.calcRem(25)};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.calcRem('24')};
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.calcVh(812, 11)};
`;

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.calcRem('14')};
  margin-bottom: ${({ theme }) => theme.calcVh(812, 35)};
`;

const StyledButton = styled(Button)`
  width: ${({ theme }) => theme.calcVw(375, 119)};
  height: ${({ theme }) => theme.calcVh(812, 39)};
  margin-bottom: ${({ theme }) => theme.calcVh(812, 38)};
  border-radius: 0;
  font-size: ${({ theme }) => theme.calcRem(14)};
  font-weight: 500;
`;

export default Support;
