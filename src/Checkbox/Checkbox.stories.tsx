import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CheckboxProps> = args => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      checked={checked}
      onChange={() => setChecked(!checked)}
      {...args}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'Stay Logged In',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Stay Logged In',
  disabled: true,
};
