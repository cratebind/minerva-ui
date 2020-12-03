import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { defaultIcons, ThemeProvider } from '../src';

const Close = defaultIcons['close'];
const ChevronDown = defaultIcons['chevron-down'];

describe('Default Icons', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Close />
        <ChevronDown />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
