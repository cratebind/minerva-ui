import React from 'react';
import {
  Menu as ReachMenuContainer,
  MenuList as ReachMenuList,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
  // MenuItems as ReachMenuItems,
  // MenuPopover,
  MenuLink as ReachMenuLink,
} from '@reach/menu-button';
import styled from 'styled-components';
import Button from '../Button';
import { Box } from '../layout';
// import { useTheme } from '../theme';

import '@reach/menu-button/styles.css';

export const MenuContainer = ReachMenuContainer;

export const MenuButton = props => <Button as={ReachMenuButton} {...props} />;

export const MenuList = props => (
  <Box
    as={ReachMenuList}
    p={0}
    mt="8px"
    borderRadius="6px"
    boxShadow="0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)"
    border={0}
    className="menu-list"
  >
    <Box
      borderRadius="6px"
      boxShadow="0 0 0 1px rgba(0,0,0,.05)"
      py={1}
      {...props}
    />
  </Box>
);

export const MenuItem = styled(ReachMenuItem)`
  color: #374151;
  padding: 0.5rem 1rem;
  font-size: 14px;

  &[data-selected],
  &:hover {
    background-color: #f4f5f7;
    color: #161e2e;
  }
`;

export const MenuLink = styled(ReachMenuLink)`
  /* display: block; */
  color: #374151;
  padding: 0.5rem 1rem;
  font-size: 14px;

  &[data-selected],
  &:hover {
    background-color: #f4f5f7;
    color: #161e2e;
  }
`;
