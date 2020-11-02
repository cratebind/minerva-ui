import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { Box, MinervaProps, systemProps } from '../layout';
import { X } from 'react-feather';

// import { useComponentStyles } from '../theme';
import { ModalFooterProps, ModalBodyProps, ModalHeaderProps } from '../Modal';
import { useComponentStyles } from '../theme';
import { Button, Text } from '..';

const OVERLAY_ZINDEX = 500;

export const DrawerOverlay = styled(DialogOverlay)(
  {
    zIndex: OVERLAY_ZINDEX,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  systemProps
);

export const DrawerContent = styled(DialogContent)(
  props => ({
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '20rem',
    width: '100%',
    position: 'fixed',
    height: '100vh',
    margin: 0,
    backgroundColor: '#fff',
    zIndex: OVERLAY_ZINDEX + 1,
    willChange: 'opacity, transform',
    ...props.theme.Drawer,
  }),
  systemProps
);

export interface DrawerProps extends MinervaProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose?: (event?: React.SyntheticEvent) => void;
  props?: any;
  placement?: 'left' | 'right';
}

export const DrawerHeader = forwardRef(function DrawerHeader(
  { children, onClose, ...props }: ModalHeaderProps,
  ref
) {
  const componentStyles = useComponentStyles('DrawerHeader');
  return (
    <Box
      ref={ref}
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      padding="1.5rem"
      {...componentStyles}
      {...props}
    >
      <Text fontWeight="bold" fontSize="1.25rem">
        {children}
      </Text>
      <Button
        border={0}
        padding="0.25rem"
        bg="transparent"
        type="button"
        aria-label="Close Modal"
        onClick={onClose}
      >
        <X size="26px" />
      </Button>
    </Box>
  );
});

export const DrawerBody = forwardRef(function ModalBody(
  { children, ...props }: ModalBodyProps,
  ref
) {
  const componentStyles = useComponentStyles('DrawerBody');
  return (
    <Box
      flex="1 1 0%"
      color="#374151"
      ref={ref}
      px="1.5rem"
      pt="0.5rem"
      pb="1rem"
      {...componentStyles}
      {...props}
    >
      {children}
    </Box>
  );
});
export const DrawerFooter = forwardRef(function ModalFooter(
  { children, ...props }: ModalFooterProps,
  ref
) {
  const componentStyles = useComponentStyles('DrawerFooter');
  return (
    <Box ref={ref} px={6} py={3} {...componentStyles} {...props}>
      {children}
    </Box>
  );
});

export const Drawer = forwardRef(function Drawer(
  { children, isOpen, onClose, placement = 'right', ...props }: DrawerProps,
  ref
) {
  const placementStyles =
    placement === 'right' ? { right: '0px' } : { left: '0px' };
  return (
    <DrawerOverlay isOpen={isOpen} onDismiss={onClose}>
      <DrawerContent
        data-minerva-drawer={placement}
        aria-label="drawer"
        ref={ref}
        {...placementStyles}
        {...props}
      >
        {children}
      </DrawerContent>
    </DrawerOverlay>
  );
});

export default Drawer;
