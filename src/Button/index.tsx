/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const StyledButton = styled('button')<any>(
  {
    borderRadius: 4,
    fontWeight: 500,
    // fontWeight: "semibold",
    display: 'inline-flex',
    appearance: 'none',
    border: 0,
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 250ms',
    userSelect: 'none',
    position: 'relative',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    lineHeight: '1.2',
    outline: 'none',
    minWidth: 10,
    fontSize: 16,
    color: 'white',
    height: 40,
    padding: '0 16px',
    backgroundColor: 'rgb(56, 161, 105)',
    cursor: 'pointer',
    ':hover': {
      boxShadow: 'inset 0 0 0 9999px rgba(0, 0, 0, 0.2)',
    },
    ':disabled': {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  },
  props => {
    console.log({ props });
    return props.theme && props.theme.Button
      ? {
          ...props.theme.Button,
          // ...props.theme.Button.container,
          // ...props.theme.Button.text,
        }
      : {};
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  /** If `true`, button will show a spinner. */
  isLoading?: boolean;
}

export default function Button({
  children,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <StyledButton disabled={disabled} role="button" {...props}>
      {children}
    </StyledButton>
  );
}
