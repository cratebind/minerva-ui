import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps } from '../layout';

const StyledInput = styled('input')(
  props => ({
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '12px',
    paddingRight: '32px',
    borderWidth: '1px',
    borderRadius: '4px',
    transition: 'all 250ms ease 0s',
    outline: 'none',
    width: '100%',
    ':focus': {
      borderColor: '#a4cafe',
      boxShadow: '0 0 0 3px rgba(164,202,254,.45)',
    },
    ':disabled': {
      backgroundColor: '#EAEAEA',
      color: '#8F8F8F',
      cursor: 'not-allowed',
    },
    // backgroundColor: props.theme.colors.primary || 'rgb(56, 161, 105)',
    ...props.theme.Input,
  }),
  systemProps
);

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends BaseProps {
  /** Toggles disabled pseudo class */
  disabled?: boolean;
}

export const Input = forwardRef(function Input({ ...props }: InputProps, ref) {
  return <StyledInput ref={ref} {...props} />;
});

export default Input;
