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
import { Block } from '../layout';

const StyledSelect = styled('select')(
  props => ({
    '-webkit-appearance': 'none',
    '-webkit-box-align': 'center',
    '-webkit-writing-mode': 'horizontal-tb',
    position: 'relative',
    height: '40px',
    paddingLeft: '12px',
    paddingRight: '20px',
    borderWidth: '1px',
    borderColor: '#d3d3d3',
    fontSize: '16px',
    borderRadius: '6px',
    transition: 'all 250ms ease 0s',
    backgroundColor: '#fff',
    outline: 'none',
    width: '100%',
    ':focus': {
      // borderColor: '#3FA2F7',
      boxShadow: '#3FA2F7 0px 0px 0px 1px',
    },
    ':disabled': {
      backgroundColor: '#EAEAEA',
      color: '#8F8F8F',
      cursor: 'not-allowed',
    },
    ...props.theme.Input,
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

const SVG = styled('svg')(
  () => ({
    height: '1.25rem',
    width: '1.25rem',
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
    <SVG viewBox="0 0 24 24" focusable="false" role="presentation">
      <path
        fill="currentColor"
        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
      ></path>
    </SVG>
  </IconContainer>
);

export interface CustomSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
  /** Toggles disabled pseudo class */
  disabled?: boolean;
  bg?: string;
}

export type SelectProps = CustomSelectProps;

export default function Select({
  children,
  disabled = false,
  ...props
}: SelectProps) {
  return (
    <Block position="relative">
      <StyledSelect disabled={disabled} {...props}>
        {children}
      </StyledSelect>
      <SelectIcon />
    </Block>
  );
}
