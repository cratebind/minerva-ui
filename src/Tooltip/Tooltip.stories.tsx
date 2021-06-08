import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, TooltipProps } from '.';
import { filteredArgs } from '../utils';
import Button from '../Button';

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      defaultValue: 'default',
      options: ['top', 'left', 'bottom', 'right', 'default'],
      type: 'select',
    },
    label: {
      defaultValue: 'Tooltip text',
      type: 'input',
    },
    ...filteredArgs,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TooltipProps> = args => (
  <div style={{ width: '100%' }}>
    <Tooltip {...args}>
      <Button backgroundColor="#651FFF" color="white">
        Button
      </Button>
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
