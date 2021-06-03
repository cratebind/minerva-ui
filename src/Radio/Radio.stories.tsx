import React from 'react';
import { Meta, Story } from '@storybook/react';
import { filteredArgs } from '../utils';
import { Radio, RadioGroup, RadioProps } from '.';

const RADIO_BUTTONS_EXAMPLE = [
  { title: 'Meat', value: 'test' },
  { title: 'Vegetarian', value: 'test1' },
  { title: 'Supreme', value: 'test2' },
];

const meta: Meta = {
  title: 'Radio',
  component: RadioGroup,
  argTypes: {
    disabled: {
      defaultValue: false,
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
      {RADIO_BUTTONS_EXAMPLE.map(({ value, title }) => (
        <Radio key={value} value={value} {...args}>
          {title}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
