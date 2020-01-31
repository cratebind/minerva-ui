import React from 'react';
import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';

const StyledButton = styled('button')(
  props => ({
    backgroundColor: 'rgb(56, 161, 105)',
    fontWeight: '600',
    display: 'inline-flex',
    WebkitAppearance: 'none',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    lineHeight: '1.2',
    height: '3rem',
    minWidth: '3rem',
    fontSize: '17px',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    color: 'rgb(255, 255, 255)',
    borderRadius: '0.25rem',
    transition: 'all 250ms ease 0s',
    outline: 'none',
    borderWidth: '0',
    ...props.theme.Button.container,
    ...props.theme.Button.text,
  }),
  color,
  space,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  background,
  border,
  typography
);

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
  return (
    <StyledButton disabled={disabled} role="button" bg={variant} {...props}>
      {children}
    </StyledButton>
  );
}
