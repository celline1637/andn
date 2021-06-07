import React from 'react';
import styled from 'styled-components/macro';
import Button from '../../../components/Button';

function Support() {
  const goToForm = () => {
    window.open('https://5fkdinm7z85.typeform.com/to/TaX72LGe');
  };

  return (
    <Container>
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
  display: block;
  width: 100%;
  background-image: url('/images/main.png');
  /* width: 100vw; */
  height: ${({ theme }) => theme.calcVh(812, 480)};
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet('flex-end', 'flex-start')};
  height: inherit;
  padding-left: 38px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.calcRem('24')};
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.calcVh(812, 11)};
`;

const SubTitle = styled.span`
  font-size: ${({ theme }) => theme.calcRem('14')};
  margin-bottom: ${({ theme }) => theme.calcVh(812, 38)};
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
