import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Stack, Box, ThemeProvider } from '../src';

describe('<Stack />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Stack>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
        </Stack>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should change flex-direction with horizontal prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Stack horizontal>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
        </Stack>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row');
  });

  // @TODO: Figure out a better way to test this since nested selectors can't be tested with jest-styled-components
  it('should change margin with gap prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Stack gap="30px">
          <Box>Item 1</Box>
          <Box data-testid="second-item">Item 2</Box>
        </Stack>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
