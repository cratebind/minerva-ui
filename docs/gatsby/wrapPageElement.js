/* eslint-disable */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Code from '../src/@rocketseat/gatsby-theme-docs/components/Code/index.js';
import { Text, ThemeProvider, defaultTheme, } from 'minerva-ui'

const components = {
  code: Code,
  inlineCode: props => <code className="inline-code" {...props} />,
  p: (props) => <Text m={0} mb="16px" lineHeight="28px" color="#737380" {...props} />,
};

export function wrapPageElement({ element }) {
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
      <MDXProvider components={components}>{element}</MDXProvider>=
    </ThemeProvider>
  );
}
