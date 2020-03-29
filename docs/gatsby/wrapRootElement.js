import React from 'react';
import { ThemeProvider, defaultTheme, GlobalStyles } from 'minerva-ui';

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider
      theme={{
        ...defaultTheme,
        Text: {
          ...defaultTheme.Text,
          margin: 0,
        },
        Input: {
          ...defaultTheme.Input,
          '-webkit-appearance': 'none',
          fontSize: '16px',
          borderStyle: 'solid',
          borderColor: '#d2d6dc',
        },
        Link: {
          ...defaultTheme.Link,
          fontWeight: 400,
          textDecoration: 'none',
        },
      }}
    >
      <GlobalStyles />
      {element}
    </ThemeProvider>
  );
}
