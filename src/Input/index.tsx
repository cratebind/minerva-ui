import React, { forwardRef } from 'react';
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

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends BaseProps {
  /** Toggles disabled pseudo class */
  disabled?: boolean;
}

export const Input = forwardRef(function Input({ ...props }: InputProps, ref) {
  // return <StyledInput ref={ref} {...props} />;
  const componentStyles = useComponentStyles('Input');
  return <PseudoBox as="input" ref={ref} {...componentStyles} {...props} />;
});

export default Input;
