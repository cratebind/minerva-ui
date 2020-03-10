import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Heading } from '../src';
import { ThemeProvider } from '../src';

describe('<Text />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Heading>Test</Heading>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should display text', () => {
    const content = 'Heading';
    const { container } = render(
      <ThemeProvider>
        <Heading>{content}</Heading>
      </ThemeProvider>
    );

    expect(container).toHaveTextContent(content);
  });
});
