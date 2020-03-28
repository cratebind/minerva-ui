import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  Text,
  ThemeProvider,
  defaultTheme,
  GlobalStyles,
  Heading,
  Box,
} from 'minerva-ui';

import Code from '../src/@rocketseat/gatsby-theme-docs/components/Code';

const components = {
  code: Code,
  inlineCode: props => <code className="inline-code" {...props} />,
  p: props => (
    <Text m={0} mt="16px" lineHeight="28px" color="#737380" {...props} />
  ),
  ol: props => <Box as="ol" listStyleType="decimal" {...props} />,
  ul: props => (
    <Text m={0} as="ul" lineHeight="28px" color="#737380" {...props} />
  ),
  li: props => (
    <Text m={0} as="li" lineHeight="28px" color="#737380" {...props} />
  ),
  h1: props => <Heading fontSize="xl" {...props} />,
  h2: props => <Heading as="h2" fontSize="md" my="24px" {...props} />,
  h3: props => (
    <Heading
      as="h3"
      mb="24px"
      fontSize="sm"
      style={{ fontSize: '20px' }}
      {...props}
    />
  ),
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
      <GlobalStyles />
      <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeProvider>
  );
}
