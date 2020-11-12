import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import * as ReactDOM from 'react-dom';
import { Checkbox, ThemeProvider, defaultTheme } from '../src';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Checkbox />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shows white background when not checked', () => {
    const labelText = 'Checked Checkbox';
    const { getByLabelText } = render(
      <ThemeProvider>
        <Checkbox>{labelText}</Checkbox>
      </ThemeProvider>
    );
    const checkbox = getByLabelText(labelText);

    expect(checkbox).toHaveStyleRule('background-color', '#fff');
  });

  it('shows checkbox when checked', () => {
    const labelText = 'Checked Checkbox';
    const { getByLabelText } = render(
      <ThemeProvider>
        <Checkbox>{labelText}</Checkbox>
      </ThemeProvider>
    );
    const checkbox = getByLabelText(labelText);

    expect(checkbox).toMatchSnapshot('Unchecked Checkbox');

    expect(checkbox).toHaveStyleRule('background-color', '#fff');

    fireEvent.click(checkbox);

    expect(checkbox).toMatchSnapshot('Checked Checkbox');

    expect(checkbox).toHaveStyleRule('background-color', '#5850ec', {
      modifier: '[aria-checked=true]',
    });
  });

  it('can have checked state changed by theme', () => {
    const labelText = 'Checked Checkbox';

    const backgroundColor = '#333';
    const checkedColor = '#c33333';

    const customTheme = {
      ...defaultTheme,
      Checkbox: {
        backgroundColor: backgroundColor,
        _checked: {
          backgroundColor: checkedColor,
        },
      },
    };

    const { getByLabelText } = render(
      <ThemeProvider theme={customTheme}>
        <Checkbox>{labelText}</Checkbox>
      </ThemeProvider>
    );

    const checkbox = getByLabelText(labelText);

    expect(checkbox).toMatchSnapshot('Unchecked Checkbox');

    expect(checkbox).toHaveStyleRule('background-color', backgroundColor);

    fireEvent.click(checkbox);

    expect(checkbox).toMatchSnapshot('Checked Checkbox');

    expect(checkbox).toHaveStyleRule('background-color', checkedColor, {
      modifier: '[aria-checked=true]',
    });
  });
});
