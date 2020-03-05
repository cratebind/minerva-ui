import React, { forwardRef } from 'react';
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
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '12px',
    paddingRight: '32px',
    borderWidth: '1px',
    borderRadius: '4px',
    transition: 'all 250ms ease 0s',
    outline: 'none',
    width: '100%',
    ':focus': {
      borderColor: '#a4cafe',
      boxShadow: '0 0 0 3px rgba(164,202,254,.45)',
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
}

// export type InputProps = CustomInputProps &
//   React.InputHTMLAttributes<HTMLInputElement> &
//   MinervaProps;

export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>(
  ({ children, ...props }: InputProps, ref) => {
    return <StyledInput ref={ref} {...props} />;
  }
);

Input.displayName = 'Input';

export default Input;
