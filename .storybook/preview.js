import { addDecorator } from '@storybook/react';
import Center from './center';
import ThemeProvider from '../src/ThemeProvider';
import { GlobalStyles } from '../src/GlobalStyles';

addDecorator(storyFn => (
  <ThemeProvider>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
));