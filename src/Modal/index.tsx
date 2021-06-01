import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DialogContent, DialogOverlay, DialogProps } from '@reach/dialog';
import { MinervaProps, systemProps, Box } from '../layout';
import Text from '../Text';
import { useComponentStyles } from '../theme';

type OverlayProps = DialogProps & MinervaProps;
export const ModalOverlay = styled(DialogOverlay)<OverlayProps>(
  {
    backgroundColor: 'hsla(0, 0%, 0%, 0.33)',
    zIndex: 200,
  },
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
  const componentStyles = useComponentStyles('ModalHeader');
  return (
    <Box
      ref={ref}
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      padding="1.375rem"
      pb={0}
      {...componentStyles}
      {...props}
    >
      <Text fontSize="1.25rem">{children}</Text>
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
      color="#374151"
      ref={ref}
      px="1.375rem"
      pt="0.5625rem"
      pb="1.25rem"
      fontSize="14px"
      lineHeight="125%"
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
  const componentStyles = useComponentStyles('ModalFooter');
  return (
    <Box ref={ref} py=".8125rem" px="1.375rem" {...componentStyles} {...props}>
      {children}
    </Box>
  );
});

export const ModalContent = forwardRef(function ModalContent(
  { ...props }: MinervaProps,
  ref
) {
  // const theme = useTheme();
  const componentStyles = useComponentStyles('ModalContent');
  return (
    <Box
      as={DialogContent}
      ref={ref}
      aria-label="modal"
      padding={0}
      borderRadius="10px"
      alignItems="center"
      width="100%"
      backgroundColor="white"
      maxWidth="30rem"
      zIndex={3}
      margin="10vh auto"
      boxShadow="10px 10px 20px rgba(0, 0, 0, 0.12)"
      {...componentStyles}
      {...props}
    />
  );
});

export const Modal = forwardRef(function Modal(
  { children, isOpen, onClose, ...props }: ModalProps,
  ref
) {
  return (
    <ModalOverlay isOpen={isOpen} onDismiss={onClose}>
      <ModalContent ref={ref} {...props}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
});

export default Modal;

// if (__DEV__) {
//   Modal.propTypes = {
//     children: PropTypes.node,
//     isOpen: PropTypes.bool.isRequired,
//     onClose: PropTypes.func,
//   };
//   ModalHeader.propTypes = {
//     children: PropTypes.node,
//     onClose: PropTypes.func,
//   };
//   ModalBody.propTypes = {
//     children: PropTypes.node,
//   };
//   ModalFooter.propTypes = {
//     children: PropTypes.node,
//   };
// }
