import React, { useContext } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps } from '../layout';
import Input from '../Input';
import { Box } from '../layout';

const RadioGroupContainer = styled(Box)({}, systemProps);

const Container = styled.div`
  display: flex;
`;

const StyledRadio = styled(Input)`
  width: max-content;
`;

export interface RadioGroupProps {
  children?: React.ReactNode;
  selectedValue?: string;
}

const SelectedValueContext = React.createContext<string | undefined>(undefined);
export const RadioGroup = ({
  children,
  selectedValue,
  ...props
}: RadioGroupProps) => {
  return (
    <SelectedValueContext.Provider value={selectedValue}>
      <RadioGroupContainer {...props}>{children}</RadioGroupContainer>
    </SelectedValueContext.Provider>
  );
};

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

export interface RadioProps extends BaseProps {
  children?: React.ReactNode;
  value?: string;
  isDisabled?: boolean;
  defaultChecked?: boolean;
}

export const Radio = ({
  value,
  isDisabled,
  defaultChecked, // @TODO: add defaultValue logic
  children,
  ...props
}: RadioProps) => {
  const selectedValue = useContext(SelectedValueContext);
  return (
    <Container>
      <StyledRadio
        mr="10px"
        mb="10px"
        type="radio"
        id={value}
        value={value}
        checked={value === selectedValue}
        disabled={isDisabled}
        {...props}
      />
      <label>{children}</label>
    </Container>
  );
};

export default Radio;
