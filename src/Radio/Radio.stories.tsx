import React from 'react';
import { Meta, Story } from '@storybook/react';
import { filteredArgs } from '../utils';
import { Radio, RadioGroup, RadioProps } from '.';

const meta: Meta = {
  title: 'Radio',
  component: RadioGroup,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    ...filteredArgs,
  },
  subcomponents: {
    Radio,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RadioProps> = args => {
  const [value, setValue] = React.useState('test');
  return (
    <RadioGroup onChange={e => setValue(e.target.value)} value={value}>
      <Radio value="test" {...args}>
        Meat
      </Radio>
      <Radio value="test1">Vegetarian</Radio>
      <Radio value="test2">Supreme</Radio>
    </RadioGroup>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
