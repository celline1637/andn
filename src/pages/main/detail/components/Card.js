import React, { useEffect } from 'react';
import Button from '../../../../components/Button';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

function Card({ info, plus, minus, index, showBtn }) {
  useEffect(() => {
    showBtn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info.quantity]);

  return (
    <Wrapper>
      <Name>
        <p className="title">{info.title}</p>
        <p className="price">{`${Math.floor(
          info.price
        ).toLocaleString()}원`}</p>
      </Name>
      <Count>
        <Button id={index} onClick={minus} color="black" outline>
          -
        </Button>
        <Quantity>{info.quantity}</Quantity>
        <Button id={index} onClick={plus} color="black" outline>
          +
        </Button>
      </Count>
    </Wrapper>
  );
}

Card.propTypes = {
  info: PropTypes.shape({ title: PropTypes.string, price: PropTypes.number }),
  plus: PropTypes.func,
  minus: PropTypes.func,
  index: PropTypes.number,
  showBtn: PropTypes.func,
};

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'flex-end')};
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Name = styled.div`
  font-weight: 600;

  & .title {
    margin-bottom: ${({ theme }) => theme.calcVw(750, 16)};
    font-size: ${({ theme }) => theme.calcVw(750, 20)};
  }

  & .price {
    font-size: ${({ theme }) => theme.calcVw(750, 36)};
  }
`;

const Count = styled.div`
  ${({ theme }) => theme.flexSet()};

  button {
    width: 6.667vw;
    height: 6.667vw;
    border: 1px solid rgb(219, 219, 219);
    background-color: rgb(255, 255, 255);
    border-radius: 0;
    font-size: 3.333vw;
    font-weight: bold;
    line-height: 6.667vw;
    letter-spacing: -0.084vw;
    text-align: center;
    color: rgb(37, 37, 37);
  }
`;

const Quantity = styled.div`
  width: 7.867vw;
  height: 6.667vw;
  font-size: 3.333vw;
  font-weight: bold;
  line-height: 6.667vw;
  letter-spacing: -0.084vw;
  text-align: center;
  color: rgb(37, 37, 37);
  border: 1px solid rgb(219, 219, 219);
  border-right: none;
  border-left: none;
`;

export default Card;
