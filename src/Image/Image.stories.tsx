import React from 'react';
import { Meta, Story } from '@storybook/react';
import { filteredArgs } from '../utils';
import { Image, ImageProps } from '.';

const meta: Meta = {
  title: 'Image',
  component: Image,
  argTypes: {
    ...filteredArgs,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ImageProps> = args => {
  return <Image {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  src: 'https://source.unsplash.com/random',
  maxWidth: '20rem',
  alt: 'Random image from unsplash',
};
