import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import { MinervaProps, Box, systemProps } from '../layout';
import VisuallyHidden from '../VisuallyHidden';

const switchSizes = {
  lg: {
    width: '55px',
    height: '25px',
    switchBtn: {
      width: '20px',
      height: '20px',
      // margin: '2.5px 1px 2.5px 1px;',
      margin: '2.5px 4px 2.5px 1px',
    },
  },
  md: {
    width: '40px',
    height: '18px',
    switchBtn: {
      width: '14px',
      height: '14px',
      margin: '1.5px 3px',
    },
  },
  sm: {
    width: '33px',
    height: '14.5px',
    switchBtn: {
      width: '11px',
      height: '11px',
      margin: '1.5px 3px',
    },
  },
};

const SwitchContainer = styled(Box)<SwitchProps>`
  position: relative;
  width: ${props => switchSizes[props.switchSize || 'md'].width};
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
  height: switchSizes[props.switchSize || 'md'].height,

  ':focus-within': {
    borderColor: '#a4cafe',
    boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
    outline: 0,
  },
}));

const SwitchInner = styled.span<CustomSwitchProps>`
  display: block;
  background-color: ${props => (props.checked ? props.switchColor : '#ccc')};
  height: 34px;
`;

const StyledSwitch = styled.span<CustomSwitchProps>`
  display: block;
  background: #fff;
  position: absolute;
  bottom: 0;
  border: 0 solid #ccc;
  border-radius: 50%;
  transition: transform 0.2s ease-in;
  transform: ${props =>
    props.checked ? 'translateX(150%)' : 'translateX(0%)'};
  /* margin: 5%;
  width: 34%;
  height: 76%; */
  margin: ${props => switchSizes[props.switchSize || 'md'].switchBtn.margin};
  width: ${props => switchSizes[props.switchSize || 'md'].switchBtn.width};
  height: ${props => switchSizes[props.switchSize || 'md'].switchBtn.height};
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
  switchSize?: string;
}

export const Switch = forwardRef(function Checkbox(
  props: SwitchProps,
  ref: any
) {
  const {
    checked = false,
    switchSize = 'md',
    switchColor = '#5850ec',
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
          <StyledSwitch checked={checked} switchSize={switchSize} data-testid="switch" />
        </ControlBox>
      </CustomCheckboxContainer>
    </SwitchContainer>
  );
});

export default Switch;
