import React from 'react';
import { Meta, Story } from '@storybook/react';
import { filteredArgs } from '../utils';
import { Input, InputProps } from '.';

const meta: Meta = {
  title: 'Input',
  component: Input,
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

const Template: Story<InputProps> = args => {
  const [name, setName] = React.useState('');

  return (
    <Input
      value={name}
      onChange={e => setName(e.target.value)}
      placeholder="Basic Input"
      {...args}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Textarea = Template.bind({});
Textarea.args = {
  as: 'textarea',
};
