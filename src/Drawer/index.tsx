import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { MinervaProps, systemProps } from '../layout';

// import { useComponentStyles } from '../theme';
import { ModalBody, ModalHeader, ModalFooter } from '../Modal';

const OVERLAY_ZINDEX = 5;

export const DrawerOverlay = styled(DialogOverlay)(
  {
    zIndex: OVERLAY_ZINDEX,
  },
  systemProps
);

export const StyledDrawer = styled(DialogContent)(
  props => ({
    padding: 0,
    // borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // width: '100%',
    maxWidth: '20rem',
    width: '100%',
    position: 'fixed',
    height: '100vh',
    margin: 0,
    zIndex: OVERLAY_ZINDEX + 1,
    willChange: 'opacity, transform',
    ...props.theme.Modal,
  }),
  systemProps
);

export interface ModalProps extends MinervaProps {
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
  { children, isOpen, onClose, placement = 'left', ...props }: ModalProps,
  ref
) {
  const placementStyles =
    placement === 'right' ? { right: '0px' } : { left: '0px' };
  return (
    <DrawerOverlay isOpen={isOpen} onDismiss={onClose}>
      <StyledDrawer
        data-minerva-drawer={placement}
        aria-label="modal"
        isOpen={isOpen}
        onDismiss={onClose}
        ref={ref}
        {...placementStyles}
        {...props}
      >
        {children}
      </StyledDrawer>
    </DrawerOverlay>
  );
});

export default Drawer;
