import React from 'react';
/** @jsx jsx */
import styled from "@emotion/styled";

// import ThemeProvider from '../ThemeProvider';

const StyledButton = styled.button({
  borderRadius: 4,
  fontWeight: 500,
  // fontWeight: "semibold",
  display: "inline-flex",
  appearance: "none",
  border: 0,
  alignItems: "center",
  justifyContent: "center",
  transition: "all 250ms",
  userSelect: "none",
  position: "relative",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  lineHeight: "1.2",
  outline: "none",
  minWidth: 10,
  fontSize: 16,
  color: "white",
  height: 40,
  padding: '0 16px',
  backgroundColor: 'rgb(56, 161, 105)',
  cursor: 'pointer',
  ':disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none'
  }
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  disabled?: boolean
}

export default function Button({ children, disabled, ...props }) {
  return (
    <StyledButton disabled={disabled} {...props}>{children}</StyledButton>
  )
}