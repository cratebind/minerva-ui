import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Text } from '../src';
import { ThemeProvider } from '../src';

describe('<Text />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Text>Test</Text>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should display text', () => {
    const content = 'Hello';
    const { container } = render(
      <ThemeProvider>
        <Text>{content}</Text>
      </ThemeProvider>
    );

    expect(container).toHaveTextContent(content);
  });
});
