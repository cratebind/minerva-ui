import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import { systemProps } from '../layout';

const StyledInputField = styled('div')(
  props => ({
    ...props.theme.InputField,
  }),
  systemProps
);

type ErrorStyles = {
  size?: string;
  weight?: string;
  color?: string;
};

export interface InputFieldProps {
  children?: React.ReactNode;
  label?: string;
  htmlFor?: string;
  errorMsg?: string;
  errorStyles?: ErrorStyles;
  isRequired?: boolean;
  requiredMarkerColor?: string;
}

export const StyledRequiredMarker = styled(Text)(() => {
  return {
    display: 'inline-block',
    marginLeft: '3px',
  };
});

export const RequiredMarker = ({ color }) => {
  return (
    <StyledRequiredMarker aria-hidden="true" color={color}>
      *
    </StyledRequiredMarker>
  );
};

const Label = styled.label`
  display: inline-block;
  position: relative;
  margin-bottom: 8px;
  line-height: 1.5;
`;

const InputField = ({
  children,
  label,
  errorMsg,
  errorStyles,
  isRequired,
  requiredMarkerColor,
  htmlFor,
  ...props
}: InputFieldProps) => {
  return (
    <StyledInputField {...props}>
      <Label htmlFor={htmlFor} data-testid="label">
        {label}
      </Label>
      {isRequired && <RequiredMarker color={requiredMarkerColor} />}
      {children}
      {errorMsg && (
        <Text
          fontSize={errorStyles ? errorStyles.size : '12px'}
          fontWeight={errorStyles ? errorStyles.weight : '400'}
          color={errorStyles ? errorStyles.color : '#ff0000'}
          data-testid="error"
        >
          {errorMsg}
        </Text>
      )}
    </StyledInputField>
  );
};

export default InputField;
