import React from 'react';
import { Meta } from '@storybook/react';
import PseudoBox from '.';

const meta: Meta = {
  title: 'PseudoBox',
  component: PseudoBox,
};

export default meta;

export const Basic = () => {
  return (
    <PseudoBox _hover={{ background: '#000' }}>
      Pseudo Box with Hover Styles
    </PseudoBox>
  );
};
