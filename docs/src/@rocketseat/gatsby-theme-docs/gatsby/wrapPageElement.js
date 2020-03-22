/* eslint-disable */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Code from '../components/Code';
import { Text } from 'minerva-ui'

const components = {
  code: Code,
  inlineCode: props => <code className="inline-code" {...props} />,
  p: (props) => <Text m={0} {...props} />,
};

export function wrapPageElement({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>;
}
