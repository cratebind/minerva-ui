import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import { MinervaProps, Box, systemProps } from '../layout';
import VisuallyHidden from '../VisuallyHidden';

const SwitchContainer = styled(Box)<SwitchProps>`
  position: relative;
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
  ':focus-within': {
    borderColor: '#a4cafe',
    boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
    outline: 0,
  },
}));

const SwitchInner = styled.div<CustomSwitchProps>`
  display: block;
  background-color: ${props => (props.checked ? props.switchColor : '#ccc')};
  height: ${props => props.switchSize}px;
  /* So if the switch is 14px wide then the inner colored part will be 28px wide */
  width: ${props => props.switchSize * 2}px;
  padding: 3px;
  box-sizing: content-box;
`;

const StyledSwitch = styled.div<CustomSwitchProps>`
  display: block;
  background: #fff;
  border: 0 solid #ccc;
  border-radius: 50%;
  transition: transform 0.2s ease-in;
  transform: ${props =>
    /*Determine how much to translate based on the factor being used to scale the SwitchInner's width. See SwitchInner.
  For example, if SwitchInner was 3x as wide as StyledSwitch (aka switchSize), then we would need to translate StyledSwitch, 2 * switchSize
  in order to move it to the other end. So in that case, if props.checked exist, then translateX(${props.switchSize * 2}px)*/
    props.checked ? `translateX(${props.switchSize}px)` : 'translateX(0)'};
  width: ${props => props.switchSize}px;
  height: ${props => props.switchSize}px;
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
  switchSize: number;
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

  const sizePresets = {
    sm: 10,
    md: 14,
    lg: 20,
  };

  const activeSize = sizePresets[switchSize];

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
            switchSize={activeSize}
            data-testid="switch-inner"
          >
            <StyledSwitch
              checked={checked}
              switchSize={activeSize}
              data-testid="switch"
            />
          </SwitchInner>
        </ControlBox>
      </CustomCheckboxContainer>
    </SwitchContainer>
  );
});

export default Switch;
