import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import { MinervaProps, Box, systemProps } from '../layout';
import VisuallyHidden from '../VisuallyHidden';
// import { useTheme } from '../theme';

const SwitchContainer = styled(Box)(
  {
    position: 'relative',
    width: '75px',
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'left',
  },
  systemProps
);

export type ControlBoxProps = {
  checked?: boolean;
  theme?: any;
};

const ControlBox = styled(Box)<ControlBoxProps>(
  (props: ControlBoxProps) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '4px',
    width: '16px',
    height: '16px',
    bg: 'primary',
    marginRight: '8px',
    transition: 'background-color 120ms ease 0s, box-shadow 250ms ease 0s',
    borderColor: props.checked ? '#fff' : '#ecebed',
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E")`,
    backgroundColor: props.checked ? '#5850ec' : '#fff',
    ':focus': {
      borderColor: '#a4cafe',
      boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
      outline: 0,
    },
  }),
  systemProps
);

const SwitchLabel = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #ccc;
  border-radius: 20px;
  margin: 0;
`;

const SwitchInner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;

  &::before,
  &::after {
    display: block;
    float: left;
    width: 50%;
    height: 34px;
    padding: 0;
    line-height: 34px;
    font-size: 14px;
    color: white;
    font-weight: bold;
    box-sizing: border-box;
  }

  &::before {
    content: 'Yes';
    text-transform: uppercase;
    padding-left: 10px;
    background-color: #f90;
    color: #fff;
  }

  &::after {
    content: 'No';
    text-transform: uppercase;
    padding-right: 10px;
    background-color: #ccc;
    color: #fff;
    text-align: right;
  }
`;

const StyledSwitch = styled.span`
  display: block;
  width: 24px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #ccc;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
`;

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

export interface SwitchProps extends BaseProps {
  // define the custom props we're going to be using
  children?: React.ReactNode;
  // add a question mark to make it an optional prop
  disabled?: boolean;
  switchSize?: string;
  switchColor?: string;
  checked?: boolean;
  options?: string[];
  onChange?: () => any;
  style?: any;
}

// const switchSizes = {
//   sm: {
//     width: '1.375rem',
//     height: '0.75rem',
//   },
//   md: {
//     width: '1.875rem',
//     height: '1rem',
//   },
//   lg: {
//     width: '2.875rem',
//     height: '1.5rem',
//   },
// };

export const Switch = forwardRef(function Checkbox(
  props: SwitchProps,
  ref: any
) {
  const { children, checked = false, onChange, ...rest } = props;

  return (
    <SwitchContainer as="div" ref={ref} {...rest}>
      <CustomCheckboxContainer checked={checked} onChange={onChange}>
        <VisuallyHidden>
          <CustomCheckboxInput />
        </VisuallyHidden>
        <ControlBox data-testid="control-box" tabIndex={0} checked={checked} />
        <SwitchLabel as="label">
          <SwitchInner className="toggle-switch-inner" />
          <StyledSwitch className="toggle-switch-switch" />
        </SwitchLabel>
      </CustomCheckboxContainer>
      {children}
    </SwitchContainer>
  );
});

export default Switch;
