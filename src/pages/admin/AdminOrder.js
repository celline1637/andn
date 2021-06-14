import React from 'react';
import Header from '../../components/Header';

import styled from 'styled-components/macro';

function AdminOrder() {
  return (
    <>
      <Header text="결제 승인 내역" />
      <Box>
        <Title>캠페인 참여 정보</Title>
        {/* <Button />
        <LogoutBtn color="secondary_btn" outline onClick={handleLogout}>
          엑셀 다운로드
        </LogoutBtn> */}
      </Box>
    </>
  );
}

const Box = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  padding: ${({ theme }) => theme.calcVw(750, 30)}
    ${({ theme }) => theme.calcVw(750, 42)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  & > a {
    width: 100%;
    ${({ theme }) => theme.flexSet('space-between')};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.calcVw(750, 36)};
  font-weight: 700;
  line-height: ${({ theme }) => theme.calcVw(750, 38)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.8)};
`;

export default AdminOrder;
