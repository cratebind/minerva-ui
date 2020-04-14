import React, { forwardRef } from 'react';
import Spinner from '../Spinner';
import PseudoBox, { PseudoBoxProps } from '../PseudoBox';
import { MinervaProps } from '../layout';
import { useTheme } from '../theme';

// const buttonVariants = {
//   primary: {
//     backgroundColor: 'blue.800',
//     borderColor: '#5850ec',
//     color: 'white',
//     _hover: {
//       backgroundColor: 'blue.900',
//       borderColor: 'blue.900'
//     }
//   },
//   secondary: {
//     backgroundColor: 'white',
//     borderColor: 'blue.800',
//     color: 'blue.800',
//     _hover: {
//       backgroundColor: 'blue.800',
//       color: 'white'
//     }
//   },
//   tertiary: {
//     backgroundColor: 'white',
//     borderColor: 'transparent',
//     color: 'blue.800',
//     _hover: {
//       textDecoration: 'underline'
//     }
//   },
// }

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
    // variant,
    ...props
  }: ButtonProps,
  ref
) {
  const theme = useTheme();

  // const variantStyles = variant ? buttonVariants[variant] : {};

  return (
    <PseudoBox
      ref={ref}
      as={Comp}
      disabled={disabled || isLoading}
      role="button"
      transition="all 180ms ease 0s"
      outline="none"
      _hover={{
        backgroundColor: '#f9fafb',
        cursor: 'pointer',
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
      // {...variantStyles}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </PseudoBox>
  );
});

export default Button;
