import React from 'react';
import { Text, Block } from '..';
import defaultTheme from '../theme';

const { fontSizes }: any = defaultTheme;

export default {
  title: 'FontSizes',
};

export const FontSizes = () => {
  return Object.keys(fontSizes).map(key => (
    <Block>
      <Text fontSize={fontSizes[key]}>Heading ({key})</Text>
    </Block>
  ));
};
