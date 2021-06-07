import React from 'react';
import styled from 'styled-components';

function Contents({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.article``;

export default Contents;
