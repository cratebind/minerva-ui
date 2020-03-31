import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import { MinervaProps, Box, systemProps } from '../layout';
import VisuallyHidden from '../VisuallyHidden';

const switchSizes = {
  lg: {
    width: '75px',
    height: '34px',
  },
  md: {
    width: '50px',
    height: '20px',
  },
  sm: {
    width: '40px',
    height: '16px',
  },
};

const SwitchContainer = styled(Box)<SwitchProps>((props: SwitchProps) => ({
  position: 'relative',
  width: props.switchSize ? switchSizes[props.switchSize].width : '50px',
  display: 'inline-block',
  verticalAlign: 'middle',
  textAlign: 'left',
}), 
systemProps
);

const SwitchLabel = styled('label')<SwitchProps>((props: SwitchProps) => ({
  display: 'block',
  overflow: 'hidden',
  cursor: 'pointer',
  border: '0 solid #ccc',
  borderRadius: '20px',
  margin: '0',
  height: props.switchSize ? switchSizes[props.switchSize].height : '20px',
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
    content: attr(data-yes);
    text-transform: uppercase;
    padding-left: 10px;
    background-color: ${props => props.switchColor ? props.switchColor : '#5850ec'};
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
  width: 32%;
  height: 76%;
`;

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;
export interface SwitchProps extends BaseProps {
  // add a question mark to make it an optional prop
  disabled?: boolean;
  switchSize?: string;
  switchColor?: string;
  checked?: boolean;
  yesLabel?: string;
  noLabel?: string;
  onChange?: () => any;
  style?: any;
  htmlFor: string;
}

export interface CustomSwitchProps {
  'data-yes'?: string;
  'data-no'?: string;
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
    yesLabel,
    noLabel,
    htmlFor,
    ...rest
  } = props;

  return (
    <SwitchContainer switchSize={switchSize} as="div" ref={ref} {...rest}>
      <CustomCheckboxContainer checked={checked} onChange={onChange}>
        <VisuallyHidden>
          <CustomCheckboxInput id={htmlFor} />
        </VisuallyHidden>
        <SwitchLabel switchSize={switchSize} as="label" htmlFor={htmlFor}>
          <SwitchInner
            checked={checked}
            data-yes={yesLabel}
            data-no={noLabel}
            switchColor={switchColor}
          />
          <StyledSwitch checked={checked} />
        </SwitchLabel>
      </CustomCheckboxContainer>
    </SwitchContainer>
  );
});

export default Switch;
