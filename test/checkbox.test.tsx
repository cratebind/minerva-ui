import * as React from 'react';
import { render } from '@testing-library/react';
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
    const { container } = render(
      <ThemeProvider>
        <Checkbox checked />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
