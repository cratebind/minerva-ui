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

const StyledInput = styled('input')(
  props => ({
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '14px',
    paddingRight: '14px',
    borderWidth: '1px',
    borderRadius: '4px',
    transition: 'all 250ms ease 0s',
    outline: 'none',
    width: '100%',
    ':focus': {
      // borderColor: '#3FA2F7',
      boxShadow: '#3FA2F7 0px 0px 0px 1px',
    },
    ':disabled': {
      backgroundColor: '#EAEAEA',
      color: '#8F8F8F',
      cursor: 'not-allowed',
    },
    // backgroundColor: props.theme.colors.primary || 'rgb(56, 161, 105)',
    ...props.theme.Input,
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

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  /** Toggles disabled pseudo class */
  disabled?: boolean;
  bg?: string;
}

export default function Input({ children, ...props }: InputProps) {
  return <StyledInput {...props}>{children}</StyledInput>;
}
