import React, { useState, useEffect } from 'react';
import Button from './Button';
import styled from 'styled-components/macro';

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  return (
    <Wrapper>
      <StyledButton
        color="black"
        outline
        onClick={scrollTop}
        showScroll={showScroll}
      >
        <i className="fas fa-chevron-up"></i>
      </StyledButton>
      <StyledButton
        className="bottom"
        color="black"
        outline
        onClick={scrollBottom}
        showScroll={showScroll}
      >
        <i className="fas fa-chevron-down"></i>
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  height: 100px;
  ${({ theme }) => theme.flexColumnSet()};
  flex-wrap: wrap;

  & > .bottom {
    bottom: ${({ theme }) => theme.calcVw(750, 148)};
  }
`;

const StyledButton = styled(Button)`
  display: ${({ showScroll }) => (showScroll ? 'flex' : 'none')};
  width: ${({ theme }) => theme.calcVw(750, 46)};
  height: ${({ theme }) => theme.calcVw(750, 46)};
  position: fixed;
  right: 20px;
  bottom: ${({ theme }) => theme.calcVw(750, 200)};
  z-index: 999;
  border-radius: 0;
  /* border: none; */
  font-size: ${({ theme }) => theme.calcVw(750, 30)};
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  &:hover {
    opacity: 0.7;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export default ScrollTopArrow;
