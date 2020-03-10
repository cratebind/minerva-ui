import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { Select } from '../src';
import { ThemeProvider } from '../src';

const inputLabel = 'Name';

const ExampleSelect = props => {
  const [state, setState] = useState('');
  return (
    <ThemeProvider>
      <label htmlFor="select-input">{inputLabel}</label>
      <Select
        // onChange={({ target }: { target: HTMLSelectElement }) =>
        //   setState(target.value)
        // }
        onChange={e => setState(e.target.value)}
        value={state}
        id="select-input"
        {...props}
      >
        <option value="">Default</option>
        <option value="second">Second</option>
      </Select>
    </ThemeProvider>
  );
};

describe('<Select />', () => {
  it('should render', () => {
    const { container } = render(<ExampleSelect />);
    expect(container).toMatchSnapshot();
  });

  it('should change style if disabled', () => {
    const { container, getByDisplayValue } = render(
      <ThemeProvider>
        <ExampleSelect disabled />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
    expect(getByDisplayValue('Default')).toHaveStyleRule(
      'background-color',
      '#EAEAEA',
      {
        modifier: ':disabled',
      }
    );
  });

  it('should show value', () => {
    const { getByDisplayValue } = render(<ExampleSelect />);

    const select = getByDisplayValue('Default');

    expect(select).toBeInTheDocument();
  });

  it('should show updated value', () => {
    const { getByLabelText } = render(<ExampleSelect />);

    const input = getByLabelText(inputLabel);

    expect(input).toHaveValue('');

    const updatedValue = 'second';

    fireEvent.change(input, {
      target: {
        value: updatedValue,
      },
    });

    expect(input).toHaveValue(updatedValue);
  });
});
