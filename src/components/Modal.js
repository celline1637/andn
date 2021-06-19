import React from 'react';
import styled from 'styled-components/macro';

function Modal() {
  return <StyledModal>안녕</StyledModal>;
}

const StyledModal = styled.div`
  ${({ theme }) => theme.flexSet()};
  display: ${props => (props.isShow ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99999;
  font-size: 1.5rem;
`;

export default Modal;
