import React from 'react';
import { Block } from 'minerva-ui';

const ColorTag = ({ number, code, ...props }) => (
  <Block
    borderRadius="9999px"
    height="48px"
    width="48px"
    boxShadow="0 10px 15px -3px rgba(195,218,254,0.3), 0 4px 6px -2px rgba(195,218,254,0.15)"
    // color={number > 500 ? '#fff' : '#000'}
    backgroundColor={code}
    {...props}
  />
);

export default ColorTag;
