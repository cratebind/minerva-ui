import React, { forwardRef } from 'react';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import { MinervaProps, Box } from '../layout';
import PseudoBox from '../PseudoBox';
import { useComponentStyles } from '../theme';

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

export interface CustomCheckboxProps {
  children?: React.ReactNode;
  checkColor?: string;
}

export type CheckboxProps = CustomCheckboxProps & BaseProps;

export const Checkbox = forwardRef(function Checkbox(
  {
    children,
    onChange,
    disabled,
    checked,
    defaultChecked,
    checkColor = '#fff',
    ...props
  }: CheckboxProps,
  ref: any
) {
  const componentStyles = useComponentStyles('Checkbox');
  return (
    <label>
      <Box
        as={CustomCheckboxContainer}
        display="flex"
        alignItems="center"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        defaultChecked={defaultChecked}
      >
        <PseudoBox
          as={CustomCheckboxInput}
          backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23000000' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='${checkColor.replace(
            '#',
            '%23'
          )}' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/polyline%3E%3C/svg%3E");`}
          backgroundSize="100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          type="checkbox"
          ref={ref}
          appearance="none"
          width="18px"
          height="18px"
          marginRight="8px"
          borderRadius="4px"
          borderWidth="1px"
          borderStyle="solid"
          padding="2px"
          backgroundColor="#fff"
          transition="background-color, border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)"
          _checked={{
            backgroundColor: '#5850ec',
            borderColor: '#5850ec',
          }}
          _focus={{
            borderColor: '#a4cafe',
            boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
            outline: 0,
          }}
          {...componentStyles}
          {...props}
        />
        {children}
      </Box>
    </label>
  );
});

export default Checkbox;
