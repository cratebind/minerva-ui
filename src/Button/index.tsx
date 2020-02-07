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
    backgroundColor: '#525252',
    fontWeight: '500',
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
    fontSize: '15px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '30px',
    paddingRight: '30px',
    color: 'rgb(255, 255, 255)',
    borderRadius: '5px',
    transition: 'all 250ms ease 0s',
    outline: 'none',
    borderWidth: '0',
    ':disabled': {
      backgroundColor: '#EAEAEA',
      color: '#8F8F8F',
      cursor: 'not-allowed',
    },
    // backgroundColor: props.theme.colors.primary || 'rgb(56, 161, 105)',
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
  variant,
  ...props
}: ButtonProps) {
  return (
    <StyledButton disabled={disabled} role="button" bg={variant} {...props}>
      {children}
    </StyledButton>
  );
}
