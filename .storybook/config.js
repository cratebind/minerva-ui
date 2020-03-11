import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { addDecorator } from '@storybook/react';

const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`;

addDecorator(story => (
   <JssProvider generateClassName={generateClassName}>
      {story()}
   </JssProvider>
));