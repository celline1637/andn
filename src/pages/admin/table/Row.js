import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

function Row({ info, order }) {
  return (
    <Wrapper>
      <td>{order}</td>
      <td>
        <p>{info.orderer}</p>
        <p>{info.orderer_contact}</p>
        <p>{info.recipient}</p>
        <p>{info.recipient_contact}</p>
        <p>{info.address}</p>
      </td>
      <td>
        {info.option.map(
          option =>
            option.quantity > 0 && (
              <Fragment key={option.id}>
                <div>{option.title}</div>
                <div>{option.quantity}세트</div>
              </Fragment>
            )
        )}
      </td>
      <td>
        <p>{info.payment}</p>
        <p>{`${info.price.toLocaleString()}원`}</p>
      </td>
      <td>{info.date}</td>
      <td>{info.status}</td>
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

const Wrapper = styled.tr`
  & > td {
    padding: ${({ theme }) => theme.calcVw(750, 17.3)}
      ${({ theme }) => theme.calcVw(750, 30)}
      ${({ theme }) => theme.calcVw(750, 50.7)};
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
