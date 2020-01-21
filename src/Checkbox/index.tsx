import React from 'react';
// import ThemeProvider from '../ThemeProvider';

import styled from 'styled-components';
// import { color } from 'styled-system';

/**
 * TODO:
 * - Add `loading` prop that shows a spinner?
 * - Add sizes
 */

const CheckboxContainer = styled.label({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export type ControlBoxProps = {
  checked?: boolean;
};

const ControlBox = styled.div<ControlBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  width: 24px;
  height: 24px;
  margin-right: 5px;
  transition: all 200ms ease;
  border-color: ${props => (props.checked ? '#fff' : '#ecebed')};
  box-shadow: ${props =>
    props.checked
      ? '0px 7px 20px rgba(0, 0, 0, 0.07)'
      : '0px 7px 20px rgba(0, 0, 0, 0.00)'};
`;

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

const CheckboxIcon = ({ checked = false, fill = '#6979F8' }) => {
  return (
    <svg
      width="16"
      height="16"
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

export default function Checkbox(props: CheckboxProps) {
  const { children, checked = false, onChange, ...rest } = props;

  return (
    <CheckboxContainer>
      <ControlBox checked={checked}>
        <CheckboxIcon checked={checked} />
      </ControlBox>
      <div data-ui-control-box data-ui-checked={checked} tabIndex={0} />
      <VisuallyHidden>
        <input
          type="checkbox"
          onChange={onChange}
          data-ui-visually-hidden
          {...rest}
        />
      </VisuallyHidden>
      {children}
    </CheckboxContainer>
  );
}
