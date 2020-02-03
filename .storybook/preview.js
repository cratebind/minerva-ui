import {
  addParameters
} from '@storybook/react';
import CodeBlock from '../src/CodeBlock';
// import ThemeProvider from '../src/ThemeProvider';
// import GlobalStyles from '../src/GlobalStyles';

addParameters({
  docs: {
    components: {
      code: CodeBlock,
    },
  },
});


// addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>);
