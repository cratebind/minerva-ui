import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import { MinervaProps, Box, systemProps } from '../layout';
import VisuallyHidden from '../VisuallyHidden';

const switchSizes = {
  lg: {
    width: '55px',
    height: '25px',
  },
  md: {
    width: '40px',
    height: '18px',
  },
  sm: {
    width: '33px',
    height: '14.5px',
  },
};

const SwitchContainer = styled(Box)<SwitchProps>`
  position: relative;
  width: ${props =>
    props.switchSize
      ? switchSizes[props.switchSize].width
      : switchSizes['md'].width};
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  ${systemProps}
`;

const ControlBox = styled(Box)<SwitchProps>((props: SwitchProps) => ({
  display: 'block',
  overflow: 'hidden',
  cursor: 'pointer',
  border: '0 solid #ccc',
  borderRadius: '20px',
  margin: '0',
  height: props.switchSize
    ? switchSizes[props.switchSize].height
    : switchSizes['md'].height,

  ':focus': {
    borderColor: '#a4cafe',
    boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
    outline: 0,
  },
}));

const SwitchInner = styled.span<CustomSwitchProps>`
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
    content: '';
    padding-left: 10px;
    background-color: ${props =>
      props.switchColor ? props.switchColor : '#5850ec'};
    color: #fff;
  }

  &::after {
    content: '';
    padding-right: 10px;
    background-color: #ccc;
    color: #fff;
    text-align: right;
  }
`;

const StyledSwitch = styled.span<CustomSwitchProps>`
  display: block;
  width: 24px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  border: 0 solid #ccc;
  border-radius: 50%;
  transition: right 0.2s ease-in 0s;
  right: ${props => (props.checked ? '0%' : '56%')};
  margin: 5.3%;
  width: 34%;
  height: 76%;
`;

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;
export interface SwitchProps extends BaseProps {
  // add a question mark to make it an optional prop
  disabled?: boolean;
  switchSize?: string;
  switchColor?: string;
  checked?: boolean;
  htmlFor: string;
  onChange?: () => any;
  style?: any;
}

export interface CustomSwitchProps {
  checked?: boolean;
  switchColor?: string;
}

export const Switch = forwardRef(function Checkbox(
  props: SwitchProps,
  ref: any
) {
  const {
    checked = false,
    switchSize,
    switchColor,
    onChange,
    htmlFor,
    ...rest
  } = props;

  return (
    <SwitchContainer switchSize={switchSize} as="div" ref={ref} {...rest}>
      <CustomCheckboxContainer checked={checked} onChange={onChange}>
        <VisuallyHidden>
          <CustomCheckboxInput id={htmlFor} />
        </VisuallyHidden>
        <ControlBox
          tabIndex={0}
          switchSize={switchSize}
          as="label"
          aria-label={htmlFor}
          htmlFor={htmlFor}
        >
          <SwitchInner
            checked={checked}
            switchColor={switchColor}
            data-testid="switch-inner"
          />
          <StyledSwitch checked={checked} data-testid="switch" />
        </ControlBox>
      </CustomCheckboxContainer>
    </SwitchContainer>
  );
});

export default Switch;
