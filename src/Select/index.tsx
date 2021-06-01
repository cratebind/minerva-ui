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

import { Block, MinervaProps } from '../layout';
import { forwardRefWithAs } from '../type-utilities';

const StyledSelect = styled('select')(
  (props): any => ({
    '-webkit-appearance': 'none',
    '-webkit-box-align': 'center',
    '-webkit-writing-mode': 'horizontal-tb',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '5px',
    borderWidth: '1px',
    borderColor: '#E0E0E0',
    color: '#374151',
    display: 'inline-flex',
    appearance: 'none',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    fontSize: '14px',
    lineHeight: '20px',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '15px',
    paddingRight: '15px',
    transition: 'all 150ms ease 0s',
    outline: 'none',
    cursor: 'pointer',
    ':focus': {
      borderColor: '#CBBEE7',
      boxShadow: '0 0 0 2px #CBBEE7',
      outline: 0,
    },
    ':disabled': {
      backgroundColor: '#E0E0E0',
      color: 'rgba(30, 6, 84, 0.5)',
      borderColor: '#E0E0E0',
      cursor: 'not-allowed',
    },
    ...props.theme.Select,
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

const IconContainer = styled('div')(
  {
    position: 'absolute',
    display: 'inline-flex',
    width: '1.5rem',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    right: '15px',
    top: '50%',
    pointerEvents: 'none',
    zIndex: 2,
    transform: 'translateY(-50%)',
  },
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

const SelectIcon = ({ disabled }: any) => (
  <IconContainer>
    <svg
      style={{
        width: 20,
        height: 20,
        color: disabled ? 'rgba(30, 6, 84, 0.5)' : 'rgba(0, 0, 0, 1)',
      }}
      fill="none"
      height="24"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Down Arrow</title>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </IconContainer>
);

interface ObjectTypeOption {
  title: string | number;
  value: string | number;
}

type PrimitiveTypeOption = number | string;

type CustomSelectOption = ObjectTypeOption | PrimitiveTypeOption;

export interface CustomSelectProps {
  children?: React.ReactNode;
  /** Toggles disabled pseudo class */
  disabled?: boolean;
  options: Array<CustomSelectOption>;
}

export type SelectProps = CustomSelectProps &
  MinervaProps &
  React.InputHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRefWithAs<SelectProps, 'select'>(function Select(
  { children, disabled = false, options = [], ...props }: SelectProps,
  ref
) {
  return (
    <Block position="relative">
      <StyledSelect ref={ref} disabled={disabled} {...props}>
        {options.map((option: CustomSelectOption, index: number) => {
          if (typeof option === 'object') {
            return (
              <option
                key={index}
                value={option.value}
                children={option.title}
              />
            );
          }
          return <option key={index} value={option} children={option} />;
        })}
      </StyledSelect>
      <SelectIcon disabled={disabled} />
    </Block>
  );
});

export default Select;

// if (__DEV__) {
//   Select.propTypes = {
//     children: PropTypes.node,
//     disabled: PropTypes.bool,
//   };
// }
