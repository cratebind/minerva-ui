import * as React from 'react';
/** @jsx jsx */
import styled from "@emotion/styled";
import ThemeProvider from '../ThemeProvider';

/**
 * TODO:
 * - Add `loading` prop that shows a spinner?
 * - Add sizes
 */

const CheckboxContainer = styled.label({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer'
})

export type ControlBoxProps = {
  checked: boolean
}

const ControlBox = styled('div')<ControlBoxProps>({
  "border": "2px solid rgb(226, 232, 240)",
  "borderRadius": "2px",
  "height": "12px",
  "width": "12px",
  "transition": "all 120ms ease",
  "marginRight": "5px"
},
  (props) => ({
      backgroundColor: props.checked ? 'rgb(49, 130, 206)' : 'transparent'
  })
);

const VisuallyHidden = styled.div`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  padding: 0px;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
`


// extend the native HTML attributes for nicer autocompletion
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // define the custom props we're going to be using
  children?: React.ReactNode
  // add a question mark to make it an optional prop
  disabled?: boolean
  checked?: boolean
  onChange?: () => any
  style?: any
}

export default function Checkbox(props: CheckboxProps) {
  const { children, checked = false, onChange, ...rest } = props;

  return (
    <ThemeProvider>
      <CheckboxContainer>
        <ControlBox checked={checked} />
        <div data-ui-control-box data-ui-checked={checked} tabIndex={0} />
        <VisuallyHidden>
          <input role="checkbox" type="checkbox" onChange={onChange} data-ui-visually-hidden {...rest} />
        </VisuallyHidden>
        {children}
      </CheckboxContainer>
    </ThemeProvider>
  )
}
