import React from 'react';
import { Block } from '../src';

const ColorTag = ({ number, code, ...props }) => (
  <Block
    padding="4px 8px"
    borderRadius="4px"
    color={number > 500 ? '#fff' : '#000'}
    margin="4px"
    backgroundColor={code}
    {...props}
  />
);

export default ColorTag;
