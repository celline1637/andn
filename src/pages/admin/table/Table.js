import React, { useState, useEffect } from 'react';
import Row from './Row';
import { useParams } from 'react-router';
import { API } from '../../../config';
import { useHistory } from 'react-router';
import styled from 'styled-components';

function Table() {
  const [orderData, setOrderData] = useState();
  const history = useHistory();
  const params = useParams();

  const getOrderData = () => {
    fetch(`${API.ADMIN_DETAIL}/${params.id}`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'EXPIRED_TOKEN') {
          alert('로그인 권한이 만료되었습니다. 다시 로그인해주세요.');
          localStorage.clear();
          history.push('/');
        } else if (res.status === 'SUCCESS') {
          setOrderData(res.data.campaign);
        }
      });
  };

  useEffect(() => {
    getOrderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container id="table-to-xls">
      <thead>
        <tr>
          {HEADER.map(title => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orderData?.map((info, i) => (
          <Row key={info.id} order={i + 1} info={info.info} />
        ))}
      </tbody>
    </Container>
  );
}

const Container = styled.table`
  width: max-content;
  & th {
    padding: ${({ theme }) => theme.calcVw(750, 9)}
      ${({ theme }) => theme.calcVw(750, 48)}
      ${({ theme }) => theme.calcVw(750, 12.5)}
      ${({ theme }) => theme.calcVw(750, 30)};
    color: ${({ theme }) => theme.colors.th};
    font-size: ${({ theme }) => theme.calcVw(750, 26)};
    line-height: ${({ theme }) => theme.calcVw(750, 29)};
    letter-spacing: ${({ theme }) => theme.calcVw(750, -1.3)};
    font-weight: 700;
    text-align: left;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-top: none;

    &:first-of-type {
      border-left: none;
    }
  }
`;

export default Table;

const HEADER = ['순서', '결제 정보', '옵션', '결제', '결제 시각', '결제 상태'];
