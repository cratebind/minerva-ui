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
  const onCheckboxChange = () => setChecked(!checked);

  return <Checkbox checked={checked} onChange={onCheckboxChange} {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'Option 1',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Option 1',
  disabled: true,
};
