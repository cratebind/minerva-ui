import React, { useContext } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps } from '../layout';
import { Box } from '../layout';
import VisuallyHidden from '../VisuallyHidden';

const RadioGroupContainer = styled(Box)({}, systemProps);

const RadioContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 10px 10px 0;

  input[type='radio']:focus + [role='radio'] {
    box-shadow: 0 0 0 3px rgba(118, 169, 250, 0.45);
  }
  ${systemProps}
`;

const ControlBox = styled(Box)<ControlBoxProps>((props: ControlBoxProps) => ({
  display: 'inline-block',
  width: props.radioSize,
  height: props.radioSize,
  padding: '0.1em',
  marginRight: '8px',
  backgroundClip: 'content-box',
  border: props.checked
    ? `${parseInt(props.radioSize) / 3}px solid ${props.radioColor}`
    : '2px solid #ecebed',
  borderRadius: '50%',
}));

export interface RadioGroupProps {
  children?: React.ReactNode;
  selectedValue?: string;
  radioColor?: string;
  radioSize?: string;
}

export type ControlBoxProps = {
  checked?: boolean;
  theme?: any;
  radioColor?: string;
  radioSize?: any;
};

export interface RadioProps extends BaseProps {
  children?: React.ReactNode;
  value?: string;
  isDisabled?: boolean;
}

type ContextValue = {
  selectedValue: string | undefined;
  radioSize: string | undefined;
  radioColor: string | undefined;
};

const SelectedValueContext = React.createContext<ContextValue>({
  selectedValue: undefined,
  radioSize: undefined,
  radioColor: undefined,
});

export const RadioGroup = ({
  children,
  selectedValue,
  radioSize,
  radioColor,
  ...props
}: RadioGroupProps) => {
  return (
    <SelectedValueContext.Provider
      value={{ selectedValue, radioColor, radioSize }}
    >
      <RadioGroupContainer role="radiogroup" {...props}>
        {children}
      </RadioGroupContainer>
    </SelectedValueContext.Provider>
  );
};

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = ({
  value,
  isDisabled,
  children,
  ...props
}: RadioProps) => {
  const { selectedValue, radioColor, radioSize } = useContext(
    SelectedValueContext
  );
  return (
    <RadioContainer htmlFor={value} as="label" {...props}>
      <Box display="inline-flex">
        <VisuallyHidden
          as="input"
          type="radio"
          aria-label={value}
          id={value}
          value={value}
          checked={value === selectedValue}
          aria-checked={value === selectedValue}
          disabled={isDisabled}
        ></VisuallyHidden>

        <ControlBox
          as="span"
          role="radio"
          checked={value === selectedValue}
          radioColor={radioColor || '#5850ec'}
          radioSize={radioSize || '16px'}
        ></ControlBox>
      </Box>
      {children && <Box>{children}</Box>}
    </RadioContainer>
  );
};

export default Radio;
