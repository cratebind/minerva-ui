import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import { MinervaProps, Box, systemProps } from '../layout';
import VisuallyHidden from '../VisuallyHidden';

const SwitchContainer = styled(Box)<SwitchProps>(
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

const SwitchLabel = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #ccc;
  border-radius: 20px;
  margin: 0;
`;

const SwitchInner = styled.span<SwitchProps>`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: transform 250ms ease 2s;
  margin-left: ${props => (props.checked ? '0px' : null)};

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
    content: attr(data-yes);
    text-transform: uppercase;
    padding-left: 10px;
    background-color: #5850ec;
    color: #fff;
  }

  &::after {
    content: attr(data-no);
    text-transform: uppercase;
    padding-right: 10px;
    background-color: #ccc;
    color: #fff;
    text-align: right;
  }
`;

const StyledSwitch = styled.span<SwitchProps>`
  display: block;
  width: 24px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #ccc;
  border-radius: 50%;
  transition: all 0.2s ease-in 0s;
  right: ${props => (props.checked ? '0px' : null)};
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

export const Switch = forwardRef(function Checkbox(
  props: SwitchProps,
  ref: any
) {
  const { children, checked = false, onChange, options = [], ...rest } = props;

  return (
    <SwitchContainer as="div" ref={ref} {...rest}>
      <CustomCheckboxContainer checked={checked} onChange={onChange}>
        <VisuallyHidden>
          <CustomCheckboxInput id="test" />
        </VisuallyHidden>
        <SwitchLabel as="label" htmlFor="test">
          <SwitchInner
            checked={checked}
            data-yes={options[1]}
            data-no={options[0]}
          />
          <StyledSwitch checked={checked} />
        </SwitchLabel>
      </CustomCheckboxContainer>
      {children}
    </SwitchContainer>
  );
});

export default Switch;
