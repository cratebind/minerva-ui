import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src';
import { ThemeProvider } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Button />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
