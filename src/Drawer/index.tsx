import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { MinervaProps, systemProps } from '../layout';

// import { useComponentStyles } from '../theme';
import { ModalBody, ModalHeader, ModalFooter } from '../Modal';

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

export const DrawerHeader = ModalHeader;
export const DrawerBody = props => <ModalBody flex="1 1 0%" {...props} />;
export const DrawerFooter = ModalFooter;

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
