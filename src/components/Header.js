import React from 'react';
import { ReactComponent as Arrow } from '../../../assets/arrow.svg';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

function Header({ text }) {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <StyledHeader>
      <ExitArrow width="2.4vw" height="4.8vw" stroke="black" onClick={goBack} />
      <Text>{text}</Text>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;
  height: ${({ theme }) => theme.calcVw(750, 95)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ExitArrow = styled(Arrow)`
  ${({ theme }) => theme.posCenterY()};
  left: ${({ theme }) => theme.calcVw(750, 43)};
`;

const Text = styled.span`
  ${({ theme }) => theme.posCenter()};
  font-size: ${({ theme }) => theme.calcVw(750, 34)};
  line-height: ${({ theme }) => theme.calcVw(750, 55)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -0.85)};
  font-weight: 500;
`;

export default Header;
