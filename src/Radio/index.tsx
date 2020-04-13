import React, { useContext, forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps } from '../layout';
import { Box } from '../layout';
import VisuallyHidden from '../VisuallyHidden';

const RadioGroupContainer = styled(Box)({}, systemProps);

const RadioContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 10px 10px 0;
  cursor: pointer;

  input[type='radio']:focus + [data-minerva='control-box'] {
    box-shadow: 0 0 0 3px rgba(118, 169, 250, 0.45);
  }
  ${systemProps}
`;

const ControlBox = styled(Box)<ControlBoxProps>((props: ControlBoxProps) => ({
  display: 'inline-block',
  width: props.radioSize,
  height: props.radioSize,
  padding: '2px',
  marginRight: '8px',
  backgroundClip: 'content-box',
  transition: 'all 120ms ease',
  // backgroundColor: props.checked ? props.radioColor : '#fff',
  border: '2px solid #ecebed',
  // border: props.checked
  //   ? `${(parseInt(props.radioSize) / 3).toFixed(2)}px solid ${
  //       props.radioColor
  //     }`
  //   : '2px solid #ecebed',
  borderRadius: '50%',
}));

export interface RadioGroupProps {
  children?: React.ReactNode;
  value?: string;
  radioColor?: string;
  radioSize?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SelectedValueContext = React.createContext<ContextValue>({
  selectedValue: undefined,
  radioSize: undefined,
  radioColor: undefined,
});

export const RadioGroup = ({
  children,
  value: selectedValue,
  radioSize = '16px',
  radioColor = '#5850ec',
  onChange,
  ...props
}: RadioGroupProps) => {
  return (
    <SelectedValueContext.Provider
      value={{ selectedValue, radioColor, radioSize, onChange }}
    >
      <RadioGroupContainer
        data-testid="radio-group"
        role="radiogroup"
        {...props}
      >
        {children}
      </RadioGroupContainer>
    </SelectedValueContext.Provider>
  );
};

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = forwardRef(function Radio(
  { value, isDisabled, children, ...props }: RadioProps,
  ref
) {
  const { selectedValue, radioColor, radioSize, onChange } = useContext(
    SelectedValueContext
  );

  const checked = value === selectedValue;

  // only accept defaultChecked if no onChange handler is passed
  const checkedProps = !onChange ? { defaultChecked: checked } : { checked };

  return (
    <RadioContainer
      data-testid="radio"
      htmlFor={value}
      as="label"
      aria-label={value}
      ref={ref}
      {...props}
    >
      <Box display="inline-flex">
        <VisuallyHidden
          as="input"
          type="radio"
          aria-label={value}
          id={value}
          value={value}
          onChange={onChange}
          aria-checked={checked}
          disabled={isDisabled}
          {...checkedProps}
        />

        <ControlBox
          data-testid="control-box"
          as="span"
          aria-hidden
          data-minerva="control-box"
          checked={checked}
          radioColor={radioColor}
          radioSize={radioSize}
        >
          <Box
            borderRadius="50%"
            width="100%"
            height="100%"
            backgroundColor={radioColor}
            transition="all 180ms ease"
            transform={checked ? 'scale(1)' : 'scale(0)'}
          />
        </ControlBox>
      </Box>
      {children && <Box data-testid="label">{children}</Box>}
    </RadioContainer>
  );
});

export default Radio;
