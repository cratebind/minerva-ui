import React from 'react';
import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';

import Text from '../Text';

const StyledInputField = styled('div')(
  props => ({
    ...props.theme.InputField,
  }),
  color,
  space,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  background,
  border,
  typography
);

type ErrorStyles = {
  size?: string;
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
  position: relative;
  bottom: 5px;
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
          fontSize={errorStyles ? errorStyles.size : '14px'}
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
