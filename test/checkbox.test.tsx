import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import * as ReactDOM from 'react-dom';
import { Checkbox, ThemeProvider } from '../src';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shows white background when not checked', () => {
    const labelText = 'Checked Checkbox';
    const { getByTestId } = render(
      <ThemeProvider>
        <Checkbox>{labelText}</Checkbox>
      </ThemeProvider>
    );
    const checkbox = getByTestId('control-box');

    expect(checkbox).toHaveStyleRule('background-color', '#fff');
  });

  it('shows checkbox when checked', () => {
    const labelText = 'Checked Checkbox';
    const { getByTestId } = render(
      <ThemeProvider>
        <Checkbox checked>{labelText}</Checkbox>
      </ThemeProvider>
    );
    const checkbox = getByTestId('control-box');

    expect(checkbox).toHaveStyleRule('background-color', '#5850ec');
  });

  it('changes styles when checked', () => {
    const labelText = 'Checked Checkbox';
    const { getByTestId } = render(
      <ThemeProvider>
        <Checkbox>{labelText}</Checkbox>
      </ThemeProvider>
    );
    const checkbox = getByTestId('control-box');
    expect(checkbox).toHaveStyleRule('background-color', '#fff');

    fireEvent.click(checkbox);

    expect(checkbox).toHaveStyleRule('background-color', '#5850ec');
  });
});
