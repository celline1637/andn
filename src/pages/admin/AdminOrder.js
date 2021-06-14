import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Table from './Table.js/Table';
import styled from 'styled-components/macro';

function AdminOrder() {
  return (
    <>
      <Header text="결제 승인 내역" />
      <Box>
        <Title>캠페인 참여 정보</Title>
        <LogoutBtn color="secondary_btn" outline>
          엑셀 다운로드
        </LogoutBtn>
      </Box>
      <ScrollBox>
        <Table />
      </ScrollBox>
    </>
  );
}

const ScrollBox = styled.div`
  margin-left: ${({ theme }) => theme.calcVw(750, 42.5)};
  overflow: scroll;
`;

const Box = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  padding: ${({ theme }) => theme.calcVw(750, 73)}
    ${({ theme }) => theme.calcVw(750, 42)}
    ${({ theme }) => theme.calcVw(750, 26.5)};
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.calcVw(750, 36)};
  font-weight: 700;
  line-height: ${({ theme }) => theme.calcVw(750, 38)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.8)};
`;

const LogoutBtn = styled(Button)`
  height: auto;
  padding: ${({ theme }) => theme.calcVw(750, 10)}
    ${({ theme }) => theme.calcVw(750, 25)};
  border-radius: ${({ theme }) => theme.calcVw(750, 24)};
  margin: 0;
  font-size: ${({ theme }) => theme.calcVw(750, 20)};
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1)};
`;

export default AdminOrder;
