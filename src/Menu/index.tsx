import React from 'react';
import {
  Menu as ReachMenuContainer,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
  MenuLink as ReachMenuLink,
  MenuPopover as ReachMenuPopover,
  MenuItems as ReachMenuItems,
  MenuProps,
  MenuButtonProps,
  MenuItemsProps,
} from '@reach/menu-button';
import { positionDefault, positionRight } from '@reach/popover';
import styled from 'styled-components';
import Button from '../Button';
import { Box, MinervaProps } from '../layout';
// import { useTheme } from '../theme';

// import '@reach/menu-button/styles.css';
import PseudoBox from '../PseudoBox';

export type MenuContainerProps = MenuProps;

// this is a context provider, so we don't need to allow styling
export const MenuContainer = (props: MenuContainerProps) => (
  <ReachMenuContainer {...props} />
);

export const MenuButton = (props: MenuButtonProps & MinervaProps) => (
  <Button as={ReachMenuButton} {...props} />
);

export interface MenuListProps extends MinervaProps {
  children?: React.ReactNode;
  menuPosition?: 'left' | 'right';
}

export const OverlayBox = props => (
  <PseudoBox
    py={1}
    mt="8px"
    bg="white"
    position="relative"
    borderRadius="6px"
    boxShadow="0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)"
    _after={{
      content: `''`,
      boxShadow: '0 0 0 1px rgba(0,0,0,.05)',
      borderRadius: '6px',
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
    }}
    _focus={{
      outline: 0,
    }}
    border={0}
    minWidth="220px"
    {...props}
  />
);

export const MenuList = ({
  menuPosition = 'left',
  ...props
}: MenuListProps & MenuItemsProps) => (
  <ReachMenuPopover
    position={menuPosition === 'right' ? positionRight : positionDefault}
  >
    <OverlayBox
      className="menu-list"
      minWidth="220px"
      zIndex={500}
      as={ReachMenuItems}
      {...props}
    />
  </ReachMenuPopover>
);

export const MenuItem = styled(ReachMenuItem)`
  color: #374151;
  padding: 0.5rem 1rem;
  font-size: 14px;
  cursor: pointer;

  &[data-selected],
  &:hover {
    background-color: #f4f5f7;
    color: #161e2e;
  }
`;

export const MenuLink = styled(ReachMenuLink)`
  color: #374151;
  padding: 0.5rem 1rem;
  font-size: 14px;
  display: block;
  cursor: pointer;

  &[data-selected],
  &:hover {
    background-color: #f4f5f7;
    color: #161e2e;
    text-decoration: none;
  }
`;

export const MenuDivider = props => (
  <Box
    as="hr"
    aria-orientation="horizontal"
    my={2}
    borderColor="#d2d6dc"
    {...props}
  />
);

export { useMenuButtonContext } from '@reach/menu-button';
