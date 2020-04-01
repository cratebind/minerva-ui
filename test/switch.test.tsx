import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import * as ReactDOM from 'react-dom';
import { Switch, ThemeProvider } from '../src';

describe('Switch', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Switch htmlFor="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shows gray background when unchecked', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Switch htmlFor="test" />
      </ThemeProvider>
    );
    const switchInner = getByTestId('switch-inner');

    expect(switchInner).toHaveStyleRule('background-color', '#ccc');
  });

  it('shows purple background when checked', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Switch checked={true} htmlFor="test" />
      </ThemeProvider>
    );
    const switchInner = getByTestId('switch-inner');

    expect(switchInner).toHaveStyleRule('background-color', '#5850ec');
  });

  it('shows custom background color when switchColor prop exists and when checked', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Switch htmlFor="test" checked={true} switchColor="#FF00FF" />
      </ThemeProvider>
    );
    const switchInner = getByTestId('switch-inner');

    expect(switchInner).toHaveStyleRule('background-color', '#FF00FF');
  });

  it('shows switch on the right when checked', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Switch htmlFor="test" checked />
      </ThemeProvider>
    );
    const switchBtn = getByTestId('switch');

    expect(switchBtn).toHaveStyleRule('transform', 'translateX(14px)');
  });
});
