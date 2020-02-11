import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { Input } from '../src';
import { ThemeProvider } from '../src';

const inputLabel = 'Name';

const ExampleInput = props => {
  const [state, setState] = useState('');
  return (
    <ThemeProvider>
      <label htmlFor="input-field">
        {inputLabel}
        <Input
          onChange={e => setState(e.target.value)}
          value={state}
          id="input-field"
          {...props}
        />
      </label>
    </ThemeProvider>
  );
};

describe('<Input />', () => {
  it('should render', () => {
    const { container } = render(<ExampleInput />);
    expect(container).toMatchSnapshot();
  });

  it('should show value', () => {
    const content = 'Hello';
    const { getByLabelText } = render(<ExampleInput value={content} />);

    const input = getByLabelText(inputLabel);

    expect(input).toHaveValue(content);
  });

  it('should show updated value', () => {
    const { getByLabelText } = render(<ExampleInput />);

    const input = getByLabelText(inputLabel);

    expect(input).toHaveValue('');

    const updatedValue = 'Input updated!';
    fireEvent.change(input, {
      target: {
        value: updatedValue,
      },
    });

    expect(input).toHaveValue(updatedValue);
  });

  // it('should show new background color if provided in theme', () => {
  //   const newColor = 'green';
  //   const theme = {
  //     Input: {
  //       container: {
  //         backgroundColor: newColor,
  //       },
  //     },
  //   };

  //   const { getByRole } = render(
  //     <ThemeProvider theme={theme}>
  //       <Input value="test" />
  //     </ThemeProvider>
  //   );

  //   const input = getByRole('input');

  //   expect(input).toHaveStyleRule('background-color', newColor);
  // });
});
