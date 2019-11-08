import * as React from 'react';
// import './styles.css';

/**
 * TODO:
 * - Add `loading` prop that shows a spinner?
 * - Add sizes
 */

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

export const Checkbox = (props: CheckboxProps) => {
  const { children, checked = false, onChange, ...rest } = props;

  return (
    <label data-ui-label>
      <div data-ui-control-box data-ui-checked={checked} tabIndex={0} />
      <input role="checkbox" type="checkbox" onChange={onChange} data-ui-visually-hidden {...rest} />
      {children}
    </label>
  )
}
