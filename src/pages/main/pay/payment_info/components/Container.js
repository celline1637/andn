import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../components/Button';

function Container({ title, msg, btn, children }) {
  console.log(btn);
  return (
    <Wrapper>
      <Header>
        <Inner>
          <Title>{title}</Title>
          <GetBtn btn={btn} outline color="btn">
            위와 동일하게 채우기
          </GetBtn>
        </Inner>
        <AlertMsg msg={msg}>* 필수정보 입력란</AlertMsg>
      </Header>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: ${({ theme }) => theme.calcVw(750, 90)}
    ${({ theme }) => theme.calcVw(750, 42)};
  margin-bottom: ${({ theme }) => theme.calcVw(750, 10)};
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.header`
  ${({ theme }) => theme.flexSet('space-between', 'flex-start')};
  margin-bottom: ${({ theme }) => theme.calcVw(750, 38)};
`;

const Inner = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

const GetBtn = styled(Button)`
  display: ${({ btn }) => (btn ? 'inline-block' : 'none')};
  padding: ${({ theme }) => theme.calcVw(750, 10)}
    ${({ theme }) => theme.calcVw(750, 23)};
  margin-left: ${({ theme }) => theme.calcVw(750, 42)};
  border-radius: ${({ theme }) => theme.calcVw(750, 24)};
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.calcVw(750, 36)};
  line-height: ${({ theme }) => theme.calcVw(750, 38)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.8)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const AlertMsg = styled.span`
  display: ${({ msg }) => !msg && 'none'};
  font-size: ${({ theme }) => theme.calcVw(750, 20)};
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.btn};
`;

export default Container;
