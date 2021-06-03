import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';

import { MinervaProps, Box } from '../layout';
import PseudoBox from '../PseudoBox';
import { useComponentStyles } from '../theme';

export const StyledBox = styled(Box)`
  font-weight: 400;
  font-size: 14px;
`;

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
  ref
) {
  const componentStyles = useComponentStyles('Checkbox');
  return (
    <label>
      <StyledBox
        as={CustomCheckboxContainer}
        display="flex"
        alignItems="center"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        defaultChecked={defaultChecked}
      >
        <PseudoBox
          ref={ref}
          as={CustomCheckboxInput}
          backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23000000' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='${checkColor.replace(
            '#',
            '%23'
          )}' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E");`}
          backgroundSize="100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          type="checkbox"
          {...componentStyles}
          {...props}
        />
        {children}
      </StyledBox>
    </label>
  );
});

export default Checkbox;
