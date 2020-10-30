import React from 'react';
import { Meta, Story } from '@storybook/react';
import { filteredArgs } from '../utils';
import { Link, LinkProps } from '.';

const meta: Meta = {
  title: 'Link',
  component: Link,
  argTypes: {
    ...filteredArgs,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LinkProps> = args => {
  return <Link {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic Link',
  href: 'https://github.com',
};

export const External = Template.bind({});
External.args = {
  children: 'External Link',
  href: 'https://github.com',
  isExternal: true,
};
