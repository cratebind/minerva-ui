import React from 'react';
import {
  addDecorator,
  addParameters
} from '@storybook/react';
import CodeBlock from '../src/CodeBlock';
// import ThemeProvider from '../src/ThemeProvider';
// import GlobalStyles from '../src/GlobalStyles';

addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>);

addParameters({
  docs: {
    components: {
      code: CodeBlock,
    },
  },
});


// addDecorator(storyFn => {
//   console.log(storyFn);
//   console.log('DECORATOR!')

//   return (
//     <ThemeProvider>
//       <GlobalStyles />
//       {storyFn()}
//     </ThemeProvider>
//   )
// });