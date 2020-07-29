import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '../src';
import { ThemeProvider } from '../src';

const inputLabel = 'Fruit';

const ExampleCombobox = ({ value }) => {
  const [search, setSearch] = useState(value);
  const items = ['apple', 'banana', 'kiwi', 'orange'];
  return (
    <ThemeProvider>
      <label htmlFor="input-field">
        {inputLabel}
        <Combobox aria-label="choose a fruit" openOnFocus>
          <ComboboxInput
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <ComboboxPopover>
            <ComboboxList>
              {items
                .filter(item => item.includes(search))
                .map(item => (
                  <ComboboxOption
                    value={item}
                    data-testid="select-option"
                    key={item}
                  />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </label>
    </ThemeProvider>
  );
};

describe('<Combobox />', () => {
  it('should render', () => {
    const content = 'Hello';
    const { container } = render(<ExampleCombobox value={content} />);

    expect(container).toMatchSnapshot();
  });

  it('should show value', () => {
    const content = 'Hello';
    const { getByLabelText } = render(<ExampleCombobox value={content} />);
    const input = getByLabelText(inputLabel);

    expect(input).toHaveValue(content);
  });

  it('should show updated value', () => {
    const { getByLabelText } = render(<ExampleCombobox value="" />);
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

  it('should show option list when typing if openOnFocus is set to true', () => {
    const { getByTestId, getByLabelText } = render(
      <ExampleCombobox value="" />
    );
    const input = getByLabelText(inputLabel);
    const option = 'apple';
    fireEvent.click(input);

    expect(getByTestId('combobox-popover')).toBeInTheDocument();
    expect(getByTestId('combobox-popover')).toHaveTextContent(option);
  });
});
