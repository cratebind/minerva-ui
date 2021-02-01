import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';
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
   * size of spinner
   */
  size?: string;
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
   * For accessibility, it's important to add a fallback loading text.
   * This text will be visible to screen readers.
   */
  label?: string;
}

const StyledSpinner = styled(Block)(
  {
    display: 'inline-block',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'currentColor',
    borderTopColor: 'currentColor',
    borderRadius: '9999px',
    color: 'currentColor',
    borderStyle: 'solid',
    height: '20px',
    width: '20px',
    borderWidth: '2px',
    margin: '2px',
  },
  css`
    animation: ${spin} 0.45s linear infinite;
  `
);

/* const animation = css`
  ${spin} 0.45s linear infinite
`; */

export type SpinnerRef = HTMLDivElement;

export const Spinner = forwardRef<SpinnerRef, SpinnerProps>(
  ({ color = '#777', size = '20px', thickness = '2px', ...rest }, ref) => {
    return (
      <StyledSpinner
        ref={ref}
        height={size}
        borderWidth={thickness}
        width={size}
        color={color}
        {...rest}
      />
    );
  }
);

Spinner.displayName = 'Spinner';

export default Spinner;

// if (__DEV__) {
//   Spinner.propTypes = {
//     size: PropTypes.string,
//     emptyColor: PropTypes.string,
//     color: PropTypes.string,
//     thickness: PropTypes.string,
//     label: PropTypes.string,
//   };
// }
