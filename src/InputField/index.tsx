import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import { systemProps, Box } from '../layout';

export const InputFieldGroup = styled('div')(
  props => ({
    ...props.theme.InputField,
  }),
  systemProps
);

export interface InputFieldProps {
  children?: React.ReactNode;
  label?: string;
  errorText?: string;
  isRequired?: boolean;
  // requiredMarkerColor?: string;
}

// export const StyledRequiredMarker = styled(Text)(() => {
//   return {
//     display: 'inline-block',
//     marginLeft: '3px',
//   };
// });

// export const RequiredMarker = ({ color }) => {
//   return (
//     <StyledRequiredMarker aria-hidden="true" color={color}>
//       *
//     </StyledRequiredMarker>
//   );
// };

export const RequiredMarker = props => (
  <Text
    display="inline-block"
    marginLeft="2px"
    aria-hidden="true"
    color="#FF6347"
    {...props}
  >
    *
  </Text>
);

export const FieldErrorMessage = styled(Box)`
  font-size: 12px;
  font-weight: 400;
  color: #ff0000;
`;

export const FieldLabel = styled.label`
  display: block;
  position: relative;
  margin-bottom: 8px;
  line-height: 1.5;
`;

const InputField = ({
  children,
  label,
  errorText,
  isRequired,
  ...props
}: InputFieldProps) => {
  return (
    <InputFieldGroup role="group" {...props}>
      <FieldLabel data-testid="label">
        <Box pb={2}>
          {label}{' '}
          {isRequired && <RequiredMarker data-testid="required-marker" />}
        </Box>
        {children}
      </FieldLabel>

      {errorText && (
        <FieldErrorMessage data-testid="error">{errorText}</FieldErrorMessage>
      )}
    </InputFieldGroup>
  );
};

export default InputField;
