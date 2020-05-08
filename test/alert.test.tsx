import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Alert, ThemeProvider } from '../src';

describe('<Alert />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Alert title="Test" />
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
        <Alert title={title}>{description}</Alert>}
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
          error
        </Alert>
      </ThemeProvider>
    );
    const alert = getByTestId('alert');
    expect(alert).toHaveStyleRule('background-color', backgroundColor);
  });

  it('should add styles when `bg` prop is passed', () => {
    const backgroundColor = '#fdf6b2';
    const { getByTestId } = render(
      <ThemeProvider>
        <Alert bg={backgroundColor} data-testid="alert">
          Custom Color
        </Alert>
      </ThemeProvider>
    );
    const alert = getByTestId('alert');
    expect(alert).toHaveStyleRule('background-color', backgroundColor);
  });

  it('should not render when `isOpen` is false', () => {
    const testId = 'alert';
    const { queryByTestId } = render(
      <ThemeProvider>
        <Alert ata-testid={testId} title="Test" isOpen={false} />
      </ThemeProvider>
    );

    expect(queryByTestId(testId)).not.toBeInTheDocument();
  });

  it('should add close button text when `closeText` prop is passed', () => {
    const title = 'Hello';
    const description = 'World';
    const closeText = 'Dismiss';
    const { container } = render(
      <ThemeProvider>
        <Alert title={title} canBeClosed closeText={closeText} hasCloseIcon>
          {description}
        </Alert>
      </ThemeProvider>
    );

    expect(container).toHaveTextContent(title);
    expect(container).toHaveTextContent(description);
    expect(container).toHaveTextContent(closeText);
  });
});
