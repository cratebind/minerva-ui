import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Dialog, DialogOverlay } from '@reach/dialog';
import { MinervaProps, systemProps, Box } from '../layout';
import Icon from '../Icon';
import Button from '../Button';
import Text from '../Text';

import '@reach/dialog/styles.css';
import { useComponentStyles } from '../theme';

export const ModalOverlay = styled(DialogOverlay)({}, systemProps);

export const StyledModal = styled(Dialog)(
  props => ({
    padding: 0,
    borderRadius: '5px',
    alignItems: 'center',
    width: '100%',
    maxWidth: '30rem',
    zIndex: 3,
    ...props.theme.Modal,
  }),
  systemProps
);

export interface ModalProps extends MinervaProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose?: (event?: React.SyntheticEvent) => void;
  props?: any;
}

export interface ModalHeaderProps extends MinervaProps {
  children?: React.ReactNode;
  onClose?: any;
  props?: any;
}

export interface ModalBodyProps extends MinervaProps {
  children?: React.ReactNode;
  props?: any;
}

export interface ModalFooterProps extends MinervaProps {
  children?: React.ReactNode;
  props?: any;
}

export const ModalHeader = forwardRef(function ModalHeader(
  { children, onClose, ...props }: ModalHeaderProps,
  ref
) {
  return (
    <Box
      ref={ref}
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      padding="1.5rem"
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
        onClick={onClose}
      >
        <Icon name="x" size="26px" />
      </Button>
    </Box>
  );
});

export const ModalBody = forwardRef(function ModalBody(
  { children, ...props }: ModalBodyProps,
  ref
) {
  const componentStyles = useComponentStyles('ModalBody');
  return (
    <Box
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

export const ModalFooter = forwardRef(function ModalFooter(
  { children, ...props }: ModalFooterProps,
  ref
) {
  // const theme = useTheme();
  return (
    <Box ref={ref} {...props}>
      {children}
    </Box>
  );
});

export const Modal = forwardRef(function Modal(
  { children, isOpen, onClose, ...props }: ModalProps,
  ref
) {
  return (
    <ModalOverlay isOpen={isOpen}>
      <StyledModal
        aria-label="modal"
        isOpen={isOpen}
        onDismiss={onClose}
        ref={ref}
        {...props}
      >
        {children}
      </StyledModal>
    </ModalOverlay>
    // )
  );
});

export default Modal;
