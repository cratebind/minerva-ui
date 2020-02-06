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
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';

/**
 * TODO:
 * - Add sizes
 */

const CheckboxContainer = styled.label({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export type ControlBoxProps = {
  checked?: boolean;
  theme?: any;
};

const ControlBox = styled('div')<ControlBoxProps>(
  (props: ControlBoxProps) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '6px',
    width: '24px',
    height: '24px',
    bg: 'primary',
    marginRight: '8px',
    transition: 'all 200ms ease',
    borderColor: props.checked ? '#fff' : '#ecebed',
    backgroundColor: props.checked
      ? props.theme.colors.primary
      : '0px 7px 20px rgba(0, 0, 0, 0.00)',
    boxShadow: props.checked
      ? '0px 7px 20px rgba(0, 0, 0, 0.07)'
      : '0px 7px 20px rgba(0, 0, 0, 0.00)',
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

const CheckboxIcon = ({ checked = false, fill = '#fff' }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4937 4.75844C11.8383 4.41385 12.397 4.41385 12.7416 4.75844C13.0861 5.10302 13.0861 5.66169 12.7416 6.00627L7.44745 11.3004C7.10287 11.645 6.54419 11.645 6.19961 11.3004L3.25844 8.35921C2.91385 8.01463 2.91385 7.45596 3.25844 7.11138C3.60302 6.7668 4.16169 6.7668 4.50627 7.11138L6.82353 9.42863L11.4937 4.75844Z"
        fill={checked ? fill : 'transparent'}
      />
    </svg>
  );
};

const VisuallyHidden = styled.div`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  padding: 0px;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
`;

// extend the native HTML attributes for nicer autocompletion
export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // define the custom props we're going to be using
  children?: React.ReactNode;
  // add a question mark to make it an optional prop
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => any;
  style?: any;
}

export default function Checkbox(props: CheckboxProps) {
  const { children, checked = false, onChange } = props;

  return (
    <CheckboxContainer>
      <CustomCheckboxContainer checked={checked} onChange={onChange}>
        <VisuallyHidden>
          <CustomCheckboxInput />
        </VisuallyHidden>
        <ControlBox checked={checked}>
          <CheckboxIcon checked={checked} />
        </ControlBox>
      </CustomCheckboxContainer>
      {children}
    </CheckboxContainer>
  );
}
