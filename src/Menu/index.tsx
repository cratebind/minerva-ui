import React from 'react';
import {
  Menu as ReachMenuContainer,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
  MenuLink as ReachMenuLink,
  MenuPopover as ReachMenuPopover,
  MenuItems as ReachMenuItems,
  MenuProps,
  MenuButtonProps as ReachMenuButtonProps,
  MenuItemsProps,
  useMenuButtonContext,
} from '@reach/menu-button';
import { positionDefault, positionRight } from '@reach/popover';
import styled from 'styled-components';
import { Box, MinervaProps, shouldForwardProp, systemProps } from '../layout';
import { useComponentStyles } from '../theme';
import { ChevronDown } from '../Icon/baseIcons';
// import { useTheme } from '../theme';

// import '@reach/menu-button/styles.css';
import PseudoBox from '../PseudoBox';

export type MenuContainerProps = MenuProps;

// this is a context provider, so we don't need to allow styling
export const MenuContainer = (props: MenuContainerProps) => (
  <ReachMenuContainer {...props} />
);

type MenuButtonProps = ReachMenuButtonProps & MinervaProps;

export const MenuButton = (props: MenuButtonProps) => {
  const componentStyles = useComponentStyles('MenuButton');
  const { isExpanded } = useMenuButtonContext();

  return (
    <BaseMenuButton
      display="flex"
      alignItems="center"
      border="1px solid #E0E0E0"
      borderRadius="5px"
      minWidth="140px"
      justifyContent="space-between"
      padding="12px 15px"
      boxShadow={isExpanded ? '0 0 0 2px #CBBEE7' : 'none'}
      {...componentStyles}
      {...props}
    />
  );
};

export interface MenuListProps extends MinervaProps {
  children?: React.ReactNode;
  menuPosition?: 'left' | 'right';
}

export const OverlayBox = props => (
  <PseudoBox
    py="10px"
    mt="8px"
    bg="white"
    position="relative"
    borderRadius="5px"
    boxShadow="10px 10px 20px rgba(0, 0, 0, 0.12)"
    _after={{
      content: `''`,
      boxShadow: '0 0 0 1px #E0E0E0',
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

export function MenuIcon() {
  const { isExpanded } = useMenuButtonContext();

  return (
    <Box
      as={ChevronDown}
      transform={isExpanded ? 'rotate(-180deg)' : undefined}
      transition="transform 0.2s"
      transformOrigin="center"
      w="14px"
      h="14px"
      color="#000"
      aria-hidden="true"
    />
  );
}

export const MenuItem = styled(ReachMenuItem)`
  color: #000;
  padding: 0.625rem 0.9375rem;
  font-size: 14px;
  line-height: 112.6%;
  cursor: pointer;

  &[data-selected] {
    background: #f5f5f5;
  }
`;

export const MenuLink = styled(ReachMenuLink)`
  color: #000;
  padding: 0.625rem 0.9375rem;
  font-size: 14px;
  line-height: 112.6%;
  display: block;
  cursor: pointer;

  &[data-selected] {
    background: #f5f5f5;
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

// using our own <Button /> component causes weird TS issues due to the `as` prop
const BaseMenuButton = styled(ReachMenuButton).withConfig({
  shouldForwardProp: shouldForwardProp,
})<MinervaProps & ReachMenuButtonProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  systemProps
);
