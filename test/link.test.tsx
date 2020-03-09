import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Link } from '../src';
import { ThemeProvider } from '../src';

describe('<Link />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Link>Test</Link>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should display text', () => {
    const content = 'Hello';
    const { container } = render(
      <ThemeProvider>
        <Link>{content}</Link>
      </ThemeProvider>
    );

    expect(container).toHaveTextContent(content);
  });

  it('should add attributes when `isExternal` prop is passed', () => {
    const content = 'Hello';
    const { getByText } = render(
      <ThemeProvider>
        <Link isExternal>{content}</Link>
      </ThemeProvider>
    );

    const element = getByText(content);

    expect(element.getAttribute('rel')).toEqual('noopener noreferrer');
    expect(element.getAttribute('target')).toEqual('_blank');
  });
});
