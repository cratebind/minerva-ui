import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import PseudoBox, { PseudoBoxProps } from '../PseudoBox';
import { MinervaProps } from '../layout';
import { useTheme } from '../theme';
// import { variant } from 'styled-system';
// import styled from 'styled-components';

export const buttonVariants = {
  primary: {
    bg: 'indigo.800',
    borderColor: 'indigo.800',
    color: 'white',
    _hover: {
      bg: 'indigo.900',
      borderColor: 'indigo.900',
    },
  },
  secondary: {
    bg: 'white',
    borderColor: 'indigo.800',
    color: 'indigo.800',
    _hover: {
      bg: 'indigo.800',
      color: 'white',
    },
  },
  tertiary: {
    bg: 'white',
    borderColor: 'transparent',
    color: 'indigo.800',
    _hover: {
      textDecoration: 'underline',
    },
  },
};

// const StyledButton = styled(PseudoBox)(
//   variant({
//     scale: 'buttons',
//     variants: buttonVariants
//   })
// )

export interface ButtonProps extends MinervaProps, PseudoBoxProps {
  children?: React.ReactNode;
  /** Toggles disabled pseudo class */
  disabled?: boolean;
  /** If `true`, button will show a spinner. */
  isLoading?: boolean;
  variant?: string;
  /** HTML Button Type (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) */
  type?: 'button' | 'reset' | 'submit';
}

export const Button = forwardRef(function Button(
  {
    children,
    disabled = false,
    as: Comp = 'button',
    isLoading = false,
    variant,
    ...props
  }: ButtonProps,
  ref
) {
  const theme = useTheme();

  // if a variant is provided and it doesn't exist in the current theme, warn in development
  if (__DEV__) {
    if (variant && !Object.keys(theme.variants.Button).includes(variant)) {
      console.error(
        `Variant "${variant}" not found in theme variants for <Button />:\n\nExpected one of:\n[${Object.keys(
          theme.variants.Button
        ).join(', ')}]`
      );
    }
  }

  const variantStyles = variant ? theme.variants.Button[variant] : {};

  return (
    <PseudoBox
      ref={ref}
      as={Comp}
      disabled={disabled || isLoading}
      role="button"
      transition="all 150ms ease 0s"
      outline="none"
      cursor="pointer"
      _hover={{
        backgroundColor: '#f9fafb',
        cursor: 'pointer',
      }}
      _focus={{
        borderColor: '#a4cafe',
        boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
        outline: 0,
      }}
      _active={{
        borderColor: '#a4cafe',
        boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
        outline: 0,
      }}
      _disabled={{
        opacity: 0.4,
        cursor: 'not-allowed',
      }}
      {...theme.Button}
      {...variantStyles}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </PseudoBox>
  );
});

export default Button;

if (__DEV__) {
  Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    variant: PropTypes.string,
  };
}
