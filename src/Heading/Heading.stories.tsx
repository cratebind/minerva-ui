import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading, HeadingProps } from '.';
import { filteredArgs } from '../utils';

const meta: Meta = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    ...filteredArgs,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HeadingProps> = args => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Basic Heading',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'H2 Heading',
  as: 'h2',
};
