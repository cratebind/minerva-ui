import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js and *.stories.mdx
configure([
  require.context('../stories', true, /\.stories\.js$/),
  require.context('../stories', true, /\.stories\.mdx$/),
], module);

