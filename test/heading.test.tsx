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

  it('should display text at default size', () => {
    const content = 'Heading';
    const { container } = render(
      <ThemeProvider>
        <Heading>{content}</Heading>
      </ThemeProvider>
    );

    expect(container).toHaveTextContent(content);
  });

  it('should display text with style prop preset', () => {
    const content = 'Heading';
    const { container } = render(
      <ThemeProvider>
        <Heading fontSize="lg">{content}</Heading>
      </ThemeProvider>
    );

    expect(container).toHaveTextContent(content);
    expect(container.firstChild).toHaveStyleRule('font-size', '1.125rem');
  });

  it('should display text with style prop custom value', () => {
    const content = 'Heading';
    const { container } = render(
      <ThemeProvider>
        <Heading fontSize="16px">{content}</Heading>
      </ThemeProvider>
    );

    expect(container).toHaveTextContent(content);
    expect(container.firstChild).toHaveStyleRule('font-size', '16px');
  });
});
