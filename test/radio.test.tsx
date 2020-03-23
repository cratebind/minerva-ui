import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import * as ReactDOM from 'react-dom';
import { RadioGroup, Radio, ThemeProvider } from '../src';

describe('RadioGroup', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RadioGroup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shows white background when not checked', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioGroup>
          <Radio></Radio>
        </RadioGroup>
      </ThemeProvider>
    );
    const radio = getByTestId('control-box');

    expect(radio).toHaveStyleRule('border', '2px solid #ecebed');
  });
});
