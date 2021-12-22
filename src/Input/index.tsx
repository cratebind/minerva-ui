import React from 'react';
import warning from 'tiny-warning';
// import { forwardRefWithAs } from '../type-utilities';
// import PropTypes from 'prop-types';
import { MinervaProps } from '../layout';
import PseudoBox from '../PseudoBox';
import { useComponentStyles } from '../theme';

type BaseProps = React.InputHTMLAttributes<HTMLInputElement> & MinervaProps;

export interface InputProps extends BaseProps {
  /** Toggles disabled pseudo class */
  disabled?: boolean;
  /** allows input to be labeled for accessibility */
  hiddenLabel?: string;
}

export const Input = React.forwardRef(function Input(
  { hiddenLabel, ...props }: InputProps,
  ref
) {
  // return <StyledInput ref={ref} {...props} />;
  const componentStyles = useComponentStyles('Input');

  warning(
    !hiddenLabel,
    'Inputs without associated labels require a `hiddenLabel` attribute to be accessible.'
  );

  return (
    <PseudoBox
      as="input"
      ref={ref}
      {...componentStyles}
      {...props}
      aria-label={hiddenLabel}
    />
  );
});

export default Input;
