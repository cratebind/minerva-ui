import React from 'react';
import { Meta, Story } from '@storybook/react';
import { filteredArgs } from '../utils';
import { Select, SelectProps } from '.';

const options = [
  'Parrot',
  'Snake',
  ['Chicken'],
  { title: 'Cat', value: 'cat' },
  { title: 'Dog', value: 'dog' },
  { title: 'Other', value: 'other' },
];

const meta: Meta = {
  title: 'Select',
  component: Select,
  argTypes: {
    options: {
      defaultValue: options,
      control: 'array',
    },
    disabled: {
      control: 'boolean',
    },
    ...filteredArgs,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SelectProps> = args => <Select {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
