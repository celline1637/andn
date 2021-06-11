import React from 'react';
import styled from 'styled-components';

function Input({ label, ...rest }) {
  return (
    <Label>
      <p>{label}</p>
      <StyledInput {...rest} />
    </Label>
  );
}

const Label = styled.label`
  margin-bottom: ${({ theme }) => theme.calcVw(750, 12)};
  font-size: ${({ theme }) => theme.calcVw(750, 24)};
  font-weight: 700;
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.2)};

  & > p {
    padding-left: ${({ theme }) => theme.calcVw(750, 6.1)};
    margin-bottom: ${({ theme }) => theme.calcVw(750, 12)};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.calcVw(750, 90)};
  outline: none;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 4px;
  color: black;
  cursor: pointer;
  padding: ${({ theme }) => theme.calcVw(750, 29)}
    ${({ theme }) => theme.calcVw(750, 22.2)};
  font-size: ${({ theme }) => theme.calcVw(750, 26)};
  font-weight: 500;
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.3)};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary_btn};
    font-size: ${({ theme }) => theme.calcVw(750, 26)};
    line-height: ${({ theme }) => theme.calcVw(750, 29)};
    letter-spacing: ${({ theme }) => theme.calcVw(750, -1.3)};
  }

  &:disabled {
    background-color: white;
  }
`;

export default Input;
