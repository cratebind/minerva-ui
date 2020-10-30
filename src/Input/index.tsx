import React, { forwardRef } from 'react';
import warning from 'tiny-warning';
// import PropTypes from 'prop-types';
import { MinervaProps } from '../layout';
import PseudoBox from '../PseudoBox';
import { useComponentStyles } from '../theme';

// const StyledInput = styled('input')(
//   props => ({
//     paddingTop: '8px',
//     paddingBottom: '8px',
//     paddingLeft: '12px',
//     paddingRight: '32px',
//     borderWidth: '1px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     transition: 'all 250ms ease 0s',
//     outline: 'none',
//     width: '100%',
//     ':focus': {
//       borderColor: '#a4cafe',
//       boxShadow: '0 0 0 3px rgba(164,202,254,.45)',
//     },
//     ':disabled': {
//       backgroundColor: '#EAEAEA',
//       color: '#8F8F8F',
//       cursor: 'not-allowed',
//     },
//     // backgroundColor: props.theme.colors.primary || 'rgb(56, 161, 105)',
//     ...props.theme.Input,
//   }),
//   systemProps
// );

type BaseProps = React.InputHTMLAttributes<HTMLInputElement> & MinervaProps;

export interface InputProps extends BaseProps {
  /** Toggles disabled pseudo class */
  disabled?: boolean;
  /** allows input to be labeled for accessibility */
  hiddenLabel?: string;
}

export const Input = forwardRef(function Input(
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

// if (__DEV__) {
//   Input.propTypes = {
//     disabled: PropTypes.bool,
//   };
// }
