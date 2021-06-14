import React from 'react';
import { darken } from 'polished';
import styled, { css } from 'styled-components';

function Button({
  children,
  color = 'white',
  fontWeight = '400',
  fullWidth,
  outline,
  ...rest
}) {
  return (
    <StyledButton
      color={color}
      outline={outline}
      fullWidth={fullWidth}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.colors[color];
    return css`
      background: ${selected};
      color: ${selected === '#FFF' ? 'black' : 'white'};
      &:hover {
        background: ${darken(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      &:focus {
        background: ${darken(0.1, selected)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: white;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const fontWeightStyles = css`
  ${({ fontWeight }) => {
    const selected = fontWeight;
    return css`
      font-weight: ${selected};
    `;
  }}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

const StyledButton = styled.button`
  ${({ theme }) => theme.flexSet()};
  outline: none;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 4px;
  color: black;

  ${fontWeightStyles}

  ${colorStyles}

  ${fullWidthStyle}
`;

export default Button;
