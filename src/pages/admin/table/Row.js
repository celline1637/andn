import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

function Row({ info, order }) {
  return (
    <Wrapper>
      <tr>
        <td className="order" rowspan="5">
          {order}
        </td>
        <td>주문자</td>
        <td>{info.orderer}</td>
        <td>옵션 이름</td>
        <td>수량</td>
        <td>결제수단</td>
        <td>결제금액</td>
        <td rowspan="5">{info.date}</td>
        <td rowspan="5">{info.status}</td>
      </tr>
      <tr>
        <td>주문자 연락처</td>
        <td>{info.orderer_contact}</td>
        {info.option.map(
          option =>
            option.quantity > 0 && (
              <Fragment key={option.id}>
                <td rowspan="4">{option.title}</td>
                <td rowspan="4">{option.quantity}</td>
              </Fragment>
            )
        )}
        <td rowspan="4">{info.payment}</td>
        <td rowspan="4">{`${info.price.toLocaleString()}원`}</td>
      </tr>
      <tr>
        <td>받는 사람</td>
        <td>{info.recipient}</td>
      </tr>
      <tr>
        <td>받는 사람 연락처</td>
        <td>{info.recipient_contact}</td>
      </tr>
      <tr>
        <td>주소</td>
        <td>
          {info.address.split('(')[0]}
          <br />
          {info.address.split('(')[1]}
        </td>
      </tr>
    </Wrapper>
  );
}

Row.propTypes = {
  info: PropTypes.shape({
    orderer: PropTypes.string.isRequired,
    orderer_contact: PropTypes.string.isRequired,
    recipient: PropTypes.string.isRequired,
    recipient_contact: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    option: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    ).isRequired,
  }),
  order: PropTypes.number.isRequired,
};

const Wrapper = styled.tbody`
  .row {
    ${({ theme }) => theme.flexSet()};
  }
  td {
    padding: ${({ theme }) => theme.calcVw(750, 17.3)};
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.th};
    font-size: ${({ theme }) => theme.calcVw(750, 25)};
    line-height: ${({ theme }) => theme.calcVw(750, 40)};
    letter-spacing: ${({ theme }) => theme.calcVw(750, -1.25)};
    font-weight: 500;

    &:first-of-type {
      border-left: none;
    }
  }
`;

export default Row;
