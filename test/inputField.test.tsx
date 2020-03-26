import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, InputField, Input } from '../src';
import 'jest-styled-components';

const ExampleInputField = ({ errorText, ...props }: any) => {
  const [state, setState] = useState('');
  const [error, setError] = useState('');
  return (
    <ThemeProvider>
      <InputField label="Placeholder" errorText={error || errorText} {...props}>
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
    const { container } = render(
      <ExampleInputField errorText="This field cannot be empty" />
    );

    expect(container.lastChild).toHaveTextContent('This field cannot be empty');
  });

  it('should show label', () => {
    const { container } = render(<ExampleInputField />);
    const elem = container.firstChild;
    expect(elem).toHaveTextContent('Placeholder');
  });

  it('should show required marker', () => {
    const { getByTestId } = render(<ExampleInputField isRequired />);
    expect(getByTestId('required-marker')).toBeInTheDocument();
  });
});
