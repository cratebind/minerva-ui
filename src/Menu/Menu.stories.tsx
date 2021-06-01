import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  MenuContainer,
  MenuContainerProps,
  MenuButton,
  MenuList,
  MenuItem,
  MenuLink,
  MenuDivider,
  MenuIcon,
} from '.';
import { filteredArgs } from '../utils';
import { Flex, Box } from '../layout';

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
          <Box>Actions</Box>
          <MenuIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
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

export const PositionedRight = () => (
  <Flex justifyContent="flex-end">
    <MenuContainer>
      <MenuButton>
        <Box>Actions</Box>
        <MenuIcon />
      </MenuButton>
      <MenuList menuPosition="right">
        <MenuItem onSelect={() => alert('Edit Profile')}>Edit Profile</MenuItem>
        <MenuItem onSelect={() => alert('Settings')}>Settings</MenuItem>
      </MenuList>
    </MenuContainer>
  </Flex>
);

export const DisabledItems = () => (
  <MenuContainer>
    <MenuButton>
      <Box>Actions</Box>
      <MenuIcon />
    </MenuButton>
    <MenuList>
      <MenuItem onSelect={() => alert('Edit Profile')}>Edit Profile</MenuItem>
      <MenuItem disabled onSelect={() => alert('Settings')}>
        Settings
      </MenuItem>
      <MenuDivider />
      <MenuLink href="https://minerva-ui-docs.vercel.app">Sign Out</MenuLink>
    </MenuList>
  </MenuContainer>
);
