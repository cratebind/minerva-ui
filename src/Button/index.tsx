import React from 'react';
// import styled from '@emotion/styled';

import styled from 'styled-components';
import { color } from 'styled-system';

// console.log({ color });

// const StyledButton = styled('button')<any>(
//   {
//     borderRadius: 4,
//     fontWeight: 500,
//     // fontWeight: "semibold",
//     display: 'inline-flex',
//     appearance: 'none',
//     border: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'all 250ms',
//     userSelect: 'none',
//     position: 'relative',
//     whiteSpace: 'nowrap',
//     verticalAlign: 'middle',
//     lineHeight: '1.2',
//     outline: 'none',
//     minWidth: 10,
//     fontSize: 16,
//     color: 'white',
//     height: 40,
//     padding: '0 16px',
//     backgroundColor: 'rgb(56, 161, 105)',
//     cursor: 'pointer',
//     ':hover': {
//       boxShadow: 'inset 0 0 0 9999px rgba(0, 0, 0, 0.2)',
//     },
//     ':disabled': {
//       opacity: 0.4,
//       cursor: 'not-allowed',
//       boxShadow: 'none',
//     },
//   },
//   props => {
//     console.log({ props });
//     return props.theme && props.theme.Button
//       ? {
//           ...props.theme.Button,
//           // ...props.theme.Button.container,
//           // ...props.theme.Button.text,
//         }
//       : {};
//   }
// );

const StyledButton = styled.button`
  background-color: rgb(56, 161, 105);
  ${color}
  font-weight: 600;
  display: inline-flex;
  -webkit-appearance: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1.2;
  height: 3rem;
  min-width: 3rem;
  font-size: 17px;
  padding-left: 1rem;
  padding-right: 1rem;
  color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  transition: all 250ms ease 0s;
  outline: none;
  border-width: 0;
`;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** Toggles disabled pseudo class */
  disabled?: boolean;
  /** One of several defined button styles (primary by default) */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** If `true`, button will show a spinner. */
  isLoading?: boolean;
  bg?: string;
}

export default function Button({
  children,
  disabled = false,
  variant = 'primary',
  ...props
}: ButtonProps) {
  console.log(props);
  return (
    <StyledButton disabled={disabled} role="button" bg={variant} {...props}>
      {children}
    </StyledButton>
  );
}
