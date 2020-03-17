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

  // it('shows checkbox when checked', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Checkbox checked />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('shows checkbox when checked', () => {
    const labelText = 'Checked Checkbox';
    const { container, getByLabelText } = render(
      <ThemeProvider>
        <Checkbox checked>{labelText}</Checkbox>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();

    const checkbox = getByLabelText(labelText);

    expect(checkbox).toHaveStyleRule('backgroundColor', '#5850ec');
  });

  it('shows checkbox when checked', () => {
    const labelText = 'Checked Checkbox';
    const { getByTestId } = render(
      <ThemeProvider>
        <Checkbox>{labelText}</Checkbox>
      </ThemeProvider>
    );
    const checkbox = getByTestId('control-box');
    expect(checkbox).toHaveStyleRule('backgroundColor', '#fff');

    fireEvent.click(checkbox);

    expect(checkbox).toHaveStyleRule('backgroundColor', '#5850ec');
  });
});
