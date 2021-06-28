import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Container({ title, children }) {
  return (
    <StyledContainer>
      <Title>{title}</Title>
      {children}
    </StyledContainer>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const StyledContainer = styled.main`
  text-align: center;
  padding: 32px 16px 0px 16px;
  margin: 0px 0px 34px;

  ${({ theme }) => theme.tablet` 
    width: 400px;
    padding: 2rem;
    margin: 130px auto 12px;
    border-radius: 5px;
    border: 1px solid rgb(228, 228, 228);
  `};

  a {
    color: rgb(39, 163, 255);
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  margin: 0px 0px 32px;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.025em;
  text-align: left;
`;

export default Container;
