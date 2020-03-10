import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Spinner from '../Spinner';
import PseudoBox, { PseudoBoxProps } from '../PseudoBox';
import { MinervaProps, systemProps } from '../layout';

const StyledButton = styled(PseudoBox)(
  props => ({
    transition: 'all 150ms ease 0s',
    outline: 'none',
    ':hover': {
      backgroundColor: '#f9fafb',
    },
    ':focus': {
      borderColor: '#a4cafe',
      boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
      outline: 0,
    },
    ':disabled': {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    ...props.theme.Button,
  }),
  systemProps
);

export interface ButtonProps extends MinervaProps, PseudoBoxProps {
  children?: React.ReactNode;
  /** Toggles disabled pseudo class */
  disabled?: boolean;
  /** If `true`, button will show a spinner. */
  isLoading?: boolean;
}

export const Button = forwardRef(function Button(
  {
    children,
    disabled = false,
    as: Comp = 'button',
    isLoading = false,
    ...props
  }: ButtonProps,
  ref
) {
  return (
    <StyledButton
      ref={ref}
      as={Comp}
      disabled={disabled || isLoading}
      role="button"
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </StyledButton>
  );
});

export default Button;
