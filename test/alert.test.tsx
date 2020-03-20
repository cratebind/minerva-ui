import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Alert, ThemeProvider } from '../src';

describe('<Alert />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Alert>Test</Alert>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should display content', () => {
    const description = 'Hello World';
    const { container } = render(
      <ThemeProvider>
        <Alert>{description}</Alert>
      </ThemeProvider>
    );

    expect(container).toHaveTextContent(description);
  });

  it('should add title content when `title` prop is passed', () => {
    const title = 'Hello';
    const description = 'World';
    const { container } = render(
      <ThemeProvider>
        <Alert title={title}>{description}</Alert>
      </ThemeProvider>
    );

    expect(container).toHaveTextContent(title);
    expect(container).toHaveTextContent(description);
  });

  it('should add predefined styles when `status` prop is passed', () => {
    const backgroundColor = '#f8b4b4';
    const { getByTestId } = render(
      <ThemeProvider>
        <Alert status="error" data-testid="alert">
          Error
        </Alert>
      </ThemeProvider>
    );
    const alert = getByTestId('alert');
    expect(alert).toHaveStyleRule('background-color', backgroundColor);
  });

  it('should add styles when `alertBackground` prop is passed', () => {
    const backgroundColor = '#fdf6b2';
    const { getByTestId } = render(
      <ThemeProvider>
        <Alert alertBackground={backgroundColor} data-testid="alert">
          Custom Color
        </Alert>
      </ThemeProvider>
    );
    const alert = getByTestId('alert');
    expect(alert).toHaveStyleRule('background-color', backgroundColor);
  });
});
