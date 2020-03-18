import React from 'react';
import { Text, Block } from '..';
import defaultTheme from '../theme';

const { fontSizes } = defaultTheme;

export default {
  title: 'Utilities|FontSizes',
};

export const FontSizes = () => {
  return (
    <>
      {Object.keys(fontSizes).map(key => (
        <Block>
          <Text fontSize={fontSizes[key]}>Heading ({key})</Text>
        </Block>
      ))}
    </>
  );
};
