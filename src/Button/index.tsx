import React, { forwardRef } from 'react';
import warning from 'tiny-warning';
import Spinner from '../Spinner';
import PseudoBox, { PseudoBoxProps } from '../PseudoBox';
import { useComponentStyles, useTheme } from '../theme';
import { MinervaProps } from '../layout';

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

export const Button = forwardRef(function Button(
  {
    children,
    disabled = false,
    as: Comp = 'button',
    isLoading = false,
    name,
    variant,
    ...props
  }: ButtonProps,
  ref
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
      ref={ref}
      as={Comp}
      disabled={disabled || isLoading}
      role="button"
      cursor="pointer"
      _disabled={{
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
