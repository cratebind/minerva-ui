import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
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
import Input from '../Input';
import Icon from '../Icon';

const StyledSelect = styled(Input)(
  (props): any => ({
    '-webkit-appearance': 'none',
    '-webkit-box-align': 'center',
    '-webkit-writing-mode': 'horizontal-tb',
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: '1px',
    color: '#374151',
    display: 'inline-flex',
    WebkitAppearance: 'none',
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
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRadius: '5px',
    transition: 'all 150ms ease 0s',
    outline: 'none',
    cursor: 'pointer',
    ':focus': {
      borderColor: '#a4cafe',
      boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
      outline: 0,
    },
    ':disabled': {
      backgroundColor: '#EAEAEA',
      color: '#8F8F8F',
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
  () => ({
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

const SelectIcon = () => (
  <IconContainer>
    <Icon name="chevron-down" size="20px" />
  </IconContainer>
);

export interface CustomSelectProps {
  children?: React.ReactNode;
  /** Toggles disabled pseudo class */
  disabled?: boolean;
}

export type SelectProps = CustomSelectProps &
  MinervaProps &
  React.InputHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef(function Select(
  { children, disabled = false, ...props }: SelectProps,
  ref
) {
  return (
    <Block position="relative">
      <StyledSelect as="select" ref={ref} disabled={disabled} {...props}>
        {children}
      </StyledSelect>
      <SelectIcon />
    </Block>
  );
});

export default Select;

if (__DEV__) {
  Select.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
  };
}
