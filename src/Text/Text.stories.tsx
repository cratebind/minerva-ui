import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from '.';
import { filteredArgs } from '../utils';

const meta: Meta = {
  title: 'Text',
  component: Text,
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

const Template: Story<TextProps> = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Basic Text',
};

export const Heading1 = () => (
  <Text as="h1" fontSize={32}>
    Heading 1
  </Text>
);

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'H2 Text',
  as: 'h2',
};
