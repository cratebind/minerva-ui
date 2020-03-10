import React, { forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Block } from '../layout';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export interface SpinnerProps {
  /**
   * The size of the spinner
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
  /**
   * The color of the empty area in the spinner
   */
  emptyColor?: string;
  /**
   * The color of the spinner
   */
  color?: string;
  /**
   * The thickness of the spinner
   * @example
   * ```jsx
   * <Spinner thickness="4px"/>
   * ```
   */
  thickness?: string;
  /**
   * The speed of the spinner.
   * @example
   * ```jsx
   * <Spinner speed="0.2s"/>
   * ```
   */
  speed?: string;
  /**
   * For accessibility, it's important to add a fallback loading text.
   * This text will be visible to screen readers.
   */
  label?: string;
}

const StyledSpinner = styled(Block)(
  (props): any => ({
    display: 'inline-block',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'currentColor',
    borderTopColor: 'currentColor',
    borderRadius: '9999px',
    color: props.color,
    borderStyle: 'solid',
    height: '20px',
    width: '20px',
    borderWidth: '2px',
    margin: '2px',
  }),
  css`
    animation: ${spin} 0.45s linear infinite;
  `
);

/* const animation = css`
  ${spin} 0.45s linear infinite
`; */

export type Ref = HTMLDivElement;

const Spinner = forwardRef<Ref, SpinnerProps>((
  { color = '#777', ...rest },
  /* thickness = '2px', */
  /* label, */
  /* size = '20px' */
  ref
) => {
  return <StyledSpinner ref={ref} color={color} {...rest} />;
});

Spinner.displayName = 'Spinner';

export default Spinner;
