import { configure, addParameters } from '@storybook/react';
import CodeBlock from '../src/CodeBlock';

addParameters({
  docs: {
    components: {
      code: CodeBlock,
    },
  },
});


// automatically import all files ending in *.stories.js and *.stories.mdx
configure([
  require.context('../stories', true, /\.stories\.js$/),
  require.context('../stories', true, /\.stories\.mdx$/),
], module);

