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

  // it('should show new background color if provided in theme', () => {
  //   const newColor = 'green';
  //   const theme = {
  //     Link: {
  //       container: {
  //         backgroundColor: newColor,
  //       },
  //     },
  //   };

  //   const { getByText } = render(
  //     <ThemeProvider theme={theme}>
  //       <Link>Test</Link>
  //     </ThemeProvider>
  //   );

  //   const button = getByText('Test');

  //   expect(button).toHaveStyleRule('background-color', newColor);
  // });
});
