import React from 'react';
import Header from '../../components/Header';
import Table from './table/Table';
import ExportBtn from 'react-html-table-to-excel';
import styled, { css } from 'styled-components/macro';
import DetailGraph from './graph/DetailGraph';
import Test from './graph/test';

function AdminOrder() {
  return (
    <>
      <Header text="결제 승인 내역" />
      <DetailGraph />
      <Box direction="row">
        <Title>캠페인 참여 정보</Title>
        <ExportBtn
          id="test-table-xls-button"
          className="download"
          table="table-to-xls"
          filename="order_list"
          sheet="tablexls"
          buttonText="엑셀 다운로드"
        />
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
  ${({ direction }) => {
    if (direction === 'row')
      return css`
        ${({ theme }) => theme.flexSet('space-between')}
      `;
    if (direction === 'column')
      return css`
        ${({ theme }) => theme.flexColumnSet('center', 'flex-start')}
      `;
  }};
  /* ${({ theme }) => theme.flexSet('space-between')}; */
  padding: ${({ theme }) => theme.calcVw(750, 73)}
    ${({ theme }) => theme.calcVw(750, 42)}
    ${({ theme }) => theme.calcVw(750, 26.5)};

  .download {
    height: auto;
    padding: ${({ theme }) => theme.calcVw(750, 10)}
      ${({ theme }) => theme.calcVw(750, 25)};
    color: ${({ theme }) => theme.colors.secondary_btn};
    border: 1px solid ${({ theme }) => theme.colors.secondary_btn};
    border-radius: ${({ theme }) => theme.calcVw(750, 24)};
    margin: 0;
    font-size: ${({ theme }) => theme.calcVw(750, 20)};
    line-height: ${({ theme }) => theme.calcVw(750, 29)};
    letter-spacing: ${({ theme }) => theme.calcVw(750, -1)};
  }
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.calcVw(750, 36)};
  font-weight: 700;
  line-height: ${({ theme }) => theme.calcVw(750, 38)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.8)};
`;

export default AdminOrder;
