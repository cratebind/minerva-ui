import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { Stack } from '..';

const meta: Meta = {
  title: 'Button',
  component: Button,
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

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Basic Button',
};

export const Variants = () => (
  <Stack horizontal>
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="tertiary">Tertiary Button</Button>
  </Stack>
);

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  children: 'Basic Button',
  isLoading: true,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  children: 'Basic Button',
  disabled: true,
};
