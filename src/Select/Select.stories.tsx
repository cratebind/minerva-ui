import React from 'react';
import { Meta, Story } from '@storybook/react';
import { filteredArgs } from '../utils';
import { Select, SelectProps } from '.';

const meta: Meta = {
  title: 'Select',
  component: Select,
  argTypes: {
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

const Template: Story<SelectProps> = args => {
  return (
    <Select {...args}>
      <option value="cat">Cat</option>
      <option value="dog">Dog</option>
      <option value="other">Other</option>
    </Select>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
