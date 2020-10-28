import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  MenuContainer,
  MenuContainerProps,
  MenuButton,
  MenuList,
  MenuItem,
  MenuLink,
} from '.';
import { Icon } from '..';
import { filteredArgs } from '../utils';

const meta: Meta = {
  title: 'Menu',
  component: MenuContainer,
  subcomponents: {
    MenuButton,
    MenuList,
    MenuItem,
    MenuLink,
  },
  argTypes: {
    ...filteredArgs,
    placement: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<MenuContainerProps> = ({}) => {
  return (
    <>
      <MenuContainer>
        <MenuButton>
          Actions <Icon name="chevron-down" ml={2} size="14px" />
        </MenuButton>
        <MenuList>
          <MenuItem onSelect={() => alert('Download')}>Download</MenuItem>
          <MenuItem onSelect={() => alert('Copy')}>Create a Copy</MenuItem>
          <MenuItem onSelect={() => alert('Mark as Draft')}>
            Mark as Draft
          </MenuItem>
          <MenuItem onSelect={() => alert('Delete')}>Delete</MenuItem>
          <MenuLink href="https://minerva-ui-docs.vercel.app">
            Open Documentation
          </MenuLink>
        </MenuList>
      </MenuContainer>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
