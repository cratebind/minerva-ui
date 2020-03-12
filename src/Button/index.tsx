import React, { forwardRef } from 'react';
import Spinner from '../Spinner';
import PseudoBox, { PseudoBoxProps } from '../PseudoBox';
import { MinervaProps } from '../layout';
import { useTheme } from '../theme';

export interface ButtonProps extends MinervaProps, PseudoBoxProps {
  children?: React.ReactNode;
  /** Toggles disabled pseudo class */
  disabled?: boolean;
  /** If `true`, button will show a spinner. */
  isLoading?: boolean;
}

const Button = forwardRef(function Button(
  {
    children,
    disabled = false,
    as: Comp = 'button',
    isLoading = false,
    ...props
  }: ButtonProps,
  ref
) {
  const theme = useTheme();

  return (
    <PseudoBox
      ref={ref}
      as={Comp}
      disabled={disabled || isLoading}
      role="button"
      transition="all 150ms ease 0s"
      outline="none"
      _hover={{
        backgroundColor: '#f9fafb',
      }}
      _focus={{
        borderColor: '#a4cafe',
        boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
        outline: 0,
      }}
      _disabled={{
        opacity: 0.4,
        cursor: 'not-allowed',
      }}
      {...theme.Button}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </PseudoBox>
  );
});

export default Button;
