import React, { useState } from 'react';
import { InputField, Input } from '../src';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from '../src';

const ExampleInputField = props => {
  const [state, setState] = useState('');
  const [error, setError] = useState('');
  return (
    <ThemeProvider>
      <InputField
        label="Placeholder"
        htmlFor="example-input"
        errorMsg={error || props.errorMsg}
      >
        <Input
          id="example-input"
          placeholder="Basic Input"
          value={state}
          onBlur={
            !state ? () => setError('This field cannot be empty') : () => {}
          }
          onChange={e => {
            setError('');
            setState(e.target.value);
          }}
          {...props}
        />
      </InputField>
    </ThemeProvider>
  );
};

describe('<InputField>', () => {
  it('should render', () => {
    const { container } = render(<ExampleInputField />);
    expect(container).toMatchSnapshot();
  });

  it('should show error message if error exists', () => {
    const { getByTestId } = render(
      <ExampleInputField errorMsg="This field cannot be empty" />
    );
    const elem = getByTestId('error');
    expect(elem.innerHTML).toBe('This field cannot be empty');
  });

  it('should show label', () => {
    const { getByTestId } = render(<ExampleInputField />);
    const elem = getByTestId('label');
    expect(elem.innerHTML).toBe('Placeholder');
  });
});
