import React, { useContext } from 'react';
import styled from 'styled-components';

import { MinervaProps } from '../layout';
import { Box } from '../layout';
import { useComponentStyles } from '../theme';
import { PseudoBox } from '..';
import { forwardRefWithAs } from '../type-utilities';

export const StyledBox = styled(Box)`
  font-weight: 400;
  font-size: 14px;
`;

export interface RadioGroupProps {
  children?: React.ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ControlBoxProps = {
  checked?: boolean;
  theme?: any;
};

export interface RadioProps extends BaseProps {
  children?: React.ReactNode;
  value?: string;
}

interface ContextValue extends RadioGroupProps {
  selected: string | Array<string> | undefined;
}

const SelectedContext = React.createContext<ContextValue>({
  selected: undefined,
});

export const RadioGroup = ({
  children,
  value: selected,
  onChange,
  ...props
}: RadioGroupProps) => (
  <SelectedContext.Provider value={{ selected, onChange }}>
    <Box data-testid="radio-group" role="radiogroup" {...props}>
      {children}
    </Box>
  </SelectedContext.Provider>
);

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = forwardRefWithAs(function Radio(
  { value, children, disabled = false, ...props }: RadioProps,
  ref
) {
  const { selected, onChange, multiple } = useContext(SelectedContext);
  const componentStyles = useComponentStyles('Radio');

  const checked = value === selected;

  return (
    <StyledBox as="label" display="flex" alignItems="center">
      <PseudoBox
        ref={ref}
        as="input"
        type="radio"
        onChange={onChange}
        value={value}
        checked={checked}
        disabled={disabled}
        appearance="none"
        height="15px"
        width="15px"
        borderRadius="100%"
        borderWidth="1.5px"
        position="relative"
        transition="all 120ms ease"
        borderColor="#000"
        bg={checked ? '#fff' : 'transparent'}
        cursor="pointer"
        _focus={{
          outline: 'none',
          boxShadow: '0 0 0 1.5px #651FFF',
        }}
        _after={{
          content: `""`,
          transition: 'transform 180ms ease',
          height: '7.31px',
          width: '7.31px',
          backgroundColor: '#000',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) ${
            checked ? 'scale(1)' : 'scale(0)'
          }`,
          borderRadius: '100%',
          display: disabled ? 'none' : 'inherit',
        }}
        _disabled={{
          backgroundColor: '#BDBDBD',
          cursor: 'not-allowed',
          borderColor: '#BDBDBD',
        }}
        {...componentStyles}
        {...props}
      />
      <Box pl={2}>{children}</Box>
    </StyledBox>
  );
});

export default Radio;

// if (__DEV__) {
//   Radio.propTypes = {
//     children: PropTypes.node,
//     value: PropTypes.string,
//   };

//   RadioGroup.propTypes = {
//     children: PropTypes.node,
//     value: PropTypes.string,
//     onChange: PropTypes.func,
//   };
// }
