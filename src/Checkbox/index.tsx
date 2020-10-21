import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import { MinervaProps, Box, systemProps } from '../layout';
import VisuallyHidden from '../VisuallyHidden';
// import Icon from '../Icon';
import PseudoBox from '../PseudoBox';
import { Check } from 'react-feather';

/**
 * TODO:
 * - Add sizes
 */

const CheckboxContainer = styled(Box)(
  props => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    ...props.theme.Checkbox,
  }),
  systemProps
);

export type ControlBoxProps = {
  checked?: boolean;
  theme?: any;
};

const ControlBox = ({ checked, ...props }) => (
  <PseudoBox
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderStyle="solid"
    borderWidth="1px"
    borderRadius="4px"
    width="18px"
    height="18px"
    marginRight="8px"
    padding="2px"
    transition="background-color 120ms ease 0s, box-shadow 250ms ease 0s"
    borderColor={checked ? '#fff' : '#ecebed'}
    color={checked ? '#fff' : 'transparent'}
    backgroundColor={checked ? '#5850ec' : '#fff'}
    _checked={{
      backgroundColor: '#000',
      // borderColor: '#a4cafe',
      // boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
      // outline: 0,
    }}
    _focus={{
      borderColor: '#a4cafe',
      boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
      outline: 0,
    }}
    {...props}
  />
);

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

// extend the native HTML attributes for nicer autocompletion
export interface CheckboxProps extends BaseProps {
  // define the custom props we're going to be using
  children?: React.ReactNode;
  // add a question mark to make it an optional prop
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => any;
  style?: any;
}

export const Checkbox = forwardRef(function Checkbox(
  props: CheckboxProps,
  ref: any
) {
  const { children, checked = false, onChange, onKeyDown, ...rest } = props;

  // Allow checkbox to be keyboard accessible
  const handleKeyDown: CheckboxProps['onKeyDown'] = e => {
    if (e.key === ' ' && !onKeyDown) {
      e.preventDefault();
      if (onChange) {
        onChange();
      }
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <CheckboxContainer as="label" ref={ref} {...rest}>
      <CustomCheckboxContainer
        data-testid="checkbox-container"
        checked={checked}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      >
        <VisuallyHidden as={CustomCheckboxInput} />
        <ControlBox data-testid="control-box" tabIndex={0} checked={checked}>
          <Check stroke="currentColor" color="currentColor" />
        </ControlBox>
      </CustomCheckboxContainer>
      {children}
    </CheckboxContainer>
  );
});

export default Checkbox;
