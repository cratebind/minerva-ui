import React, { forwardRef } from 'react';
import warning from 'tiny-warning';
import PropTypes from 'prop-types';
import {
  Combobox as ReachCombobox,
  ComboboxInput as ReachComboboxInput,
  ComboboxPopover as ReachComboboxPopover,
  ComboboxList as ReachComboboxList,
  ComboboxOption as ReachComboboxOption,
  ComboboxOptionText as ReachComboboxOptionText,
} from '@reach/combobox';
import { MinervaProps } from '../layout';
import PseudoBox from '../PseudoBox';
import { useComponentStyles } from '../theme';
import styled from 'styled-components';

export const Combobox = ReachCombobox;

export const ComboboxInput = styled(ReachComboboxInput)``;

export const ComboboxPopover = styled(ReachComboboxPopover)``;

export const ComboboxList = styled(ReachComboboxList)``;

export const ComboboxOption = styled(ReachComboboxOption)``;
export const ComboboxOptionText = styled(ReachComboboxOptionText)``;

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

// type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

// export interface InputProps extends BaseProps {
//   /** Toggles disabled pseudo class */
//   disabled?: boolean;
// }

// export const Combobox = forwardRef(function Combobox(
//   { hiddenLabel, ...props }: InputProps,
//   ref
// ) {
//   // return <StyledInput ref={ref} {...props} />;
//   const componentStyles = useComponentStyles('Combobox');

//   return (
//     <PseudoBox
//       as="input"
//       ref={ref}
//       {...componentStyles}
//       {...props}
//       aria-label={hiddenLabel}
//     />
//   );
// });

// export default Combobox;

// if (__DEV__) {
//   Combobox.propTypes = {
//     disabled: PropTypes.bool,
//   };
// }
