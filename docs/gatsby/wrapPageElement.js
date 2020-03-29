import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Text, Heading, Box } from 'minerva-ui';

import Code from '../src/@rocketseat/gatsby-theme-docs/components/Code';

export const Title = props => (
  <Heading fontSize="xl" fontWeight={700} {...props} />
);

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
  h1: props => <Title {...props} />,
  h2: props => <Heading as="h2" fontSize="md" my="24px" {...props} />,
  h3: props => (
    <Heading
      as="h3"
      my="20px"
      fontSize="sm"
      style={{ fontSize: '20px' }}
      {...props}
    />
  ),
};

export function wrapPageElement({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>;
}
