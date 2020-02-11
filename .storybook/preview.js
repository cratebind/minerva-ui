import React from 'react';
import {
  addParameters,
  addDecorator
} from '@storybook/react';
import CodeBlock from '../src/CodeBlock';
import { ThemeProvider } from '../src';

addParameters({
  docs: {
    components: {
      code: CodeBlock,
    },
  },
});

// const theme = {
//   "Button": {
//     "container": {
//       "backgroundColor": "rgb(232, 48, 48)",
//       "borderRadius": 5,
//       "height": 38,
//       "paddingTop": 10,
//       "paddingBottom": 10,
//       "paddingLeft": 34,
//       "paddingRight": 34
//     },
//     "text": {
//       "fontSize": 15,
//       "letterSpacing": {
//         "unit": "PERCENT",
//         "value": 0
//       },
//       "lineHeight": {
//         "unit": "AUTO"
//       },
//       "fontFamily": "Roboto",
//       "fontWeight": "medium"
//     }
//   },
//   "Text": {}
// }


addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);
