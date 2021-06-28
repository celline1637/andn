import React from 'react';
import { ReactComponent as Logo } from '../assets/logo_circle.svg';
import styled from 'styled-components/macro';

function Loader() {
  return (
    <Wrapper>
      <Logo className="loader action" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.posCenter()};

  .loader {
    width: 30vw;
  }

  .loader,
  .loader:before,
  .loader:after {
    animation: 1.5s infinite ease-in-out;
  }
  .loader:before,
  .loader:after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .action {
    animation-name: loading;
  }

  @keyframes loading {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export default Loader;
