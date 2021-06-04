import React from 'react';
import warning from 'tiny-warning';
import Spinner from '../Spinner';
import PseudoBox, { PseudoBoxProps } from '../PseudoBox';
import { useComponentStyles, useTheme } from '../theme';
import { MinervaProps } from '../layout';
import { forwardRefWithAs } from '../type-utilities';

export const buttonVariants = {
  primary: {
    bg: '#651FFF',
    borderColor: '#651FFF',
    color: 'white',
    _active: {
      bg: '#331080',
      borderColor: 'white',
    },
    _focus: {
      borderColor: '#331080',
      outline: 0,
    },
    _hover: {
      bg: '#4C17BF',
      borderColor: '#4C17BF',
    },
  },
  secondary: {
    bg: 'black',
    borderColor: 'black',
    color: 'white',
    _active: {
      bg: '#8E82A9',
      borderColor: 'white',
    },
    _focus: {
      borderColor: '#8E82A9',
      outline: 0,
    },
    _hover: {
      bg: '#56447F',
      borderColor: '#56447F',
    },
  },
  tertiary: {
    bg: 'white',
    borderColor: '#BDBDBD',
    color: '#651FFF',
    _hover: {
      color: 'white',
      bg: '#651FFF',
      borderColor: '#651FFF',
    },
    _focus: {
      bg: '#651FFF',
      color: 'white',
      borderColor: '#331080',
      borderWidth: '3px',
      outline: 0,
    },
    _active: {
      borderColor: 'white',
      bg: '#4C17BF',
    },
    _disabled: {
      color: '#BDBDBD',
      cursor: 'not-allowed',
    },
  },
  danger: {
    bg: '#F34335',
    borderColor: '#F34335',
    color: 'white',
    _hover: {
      bg: '#B63228',
      borderColor: '#B63228',
    },
    _focus: {
      borderColor: '#7A221B',
      borderWidth: '3px',
      outline: 0,
    },
    _active: {
      borderColor: 'white',
      bg: '#7A221B',
    },
  },
};

export interface ButtonProps extends MinervaProps, PseudoBoxProps {
  children?: React.ReactNode;
  /** Toggles disabled pseudo class */
  disabled?: boolean;
  /** If `true`, button will show a spinner. */
  isLoading?: boolean;
  /** Accessibility label for buttons without text content */
  name?: string;
  /** Button variant styles inherited from theme */
  variant?: string;
  /** HTML Button Type (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) */
  type?: 'button' | 'reset' | 'submit';
}

// export const Button = forwardRefWithAs<ButtonProps, 'button'>(function Button(
//   {
//     children,
//     disabled = false,
//     as: Comp = 'button',
//     isLoading = false,
//     name,
//     variant,
//     ...props
//   },
//   forwardedRef
// ) {

// export const Button = forwardRef(function Button(
//   {
//     children,
//     disabled = false,
//     as: Comp = 'button',
//     isLoading = false,
//     name,
//     variant,
//     ...props
//   }: ButtonProps,
//   forwardedRef
// ) {
export const Button = forwardRefWithAs<ButtonProps, 'button'>(function Button(
  {
    children,
    disabled = false,
    as: Comp = 'button',
    isLoading = false,
    name,
    variant,
    ...props
  },
  forwardedRef
) {
  const theme = useTheme();

  // if a variant is provided and it doesn't exist in the current theme, warn in development
  warning(
    !variant ||
      (variant &&
        theme?.variants?.Button &&
        Object.keys(theme?.variants?.Button).includes(variant)),
    `Variant "${variant}" not found in theme variants for <Button />:\n\n${theme
      ?.variants?.Button &&
      `Expected one of:\n[${Object.keys(theme.variants.Button).join(', ')}]`}`
  );

  warning(
    children || (!children && name),
    'Buttons without children require a `name` attribute to be accessible.'
  );

  const variantStyles =
    variant && theme?.variants?.Button ? theme.variants.Button[variant] : {};

  const componentStyles = useComponentStyles('Button');

  return (
    <PseudoBox
      ref={forwardedRef}
      as={Comp}
      disabled={disabled || isLoading}
      role="button"
      transition="all 150ms ease 0s"
      outline="none"
      cursor="pointer"
      fontFamily="body"
      _hover={{
        backgroundColor: '#f9fafb',
      }}
      _active={{
        borderColor: '#a4cafe',
        boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
        outline: 0,
      }}
      _focus={{
        borderColor: '#a4cafe',
        boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
        outline: 0,
      }}
      _focusVisible={{
        boxShadow: '0 0 0 2px #fff, 0 0 0 6px rgba(118,169,250,1)',
        borderColor: variantStyles.borderColor,
        outline: 0,
      }}
      _disabled={{
        bg: '#BDBDBD',
        borderColor: '#BDBDBD',
        color: 'white',
        cursor: 'not-allowed',
      }}
      aria-busy={isLoading}
      name={name}
      {...componentStyles}
      {...variantStyles}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </PseudoBox>
  );
});

export default Button;

// if (__DEV__) {
//   Button.propTypes = exact({
//     ...minervaPropTypes,
//     children: PropTypes.node,
//     disabled: PropTypes.bool,
//     isLoading: PropTypes.bool,
//     onClick: PropTypes.func,
//   });
// }
