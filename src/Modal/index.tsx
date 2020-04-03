import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Dialog, DialogOverlay } from '@reach/dialog';
import { MinervaProps, systemProps, Box } from '../layout';
import Icon from '../Icon';
import Button from '../Button';

import '@reach/dialog/styles.css';
import { useComponentStyles } from '../theme';

const StyledOverlay = styled(DialogOverlay)({}, systemProps);

const StyledModal = styled(Dialog)(
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

const TopContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.5rem',
});

const CloseButton = styled(Button)({
  border: 0,
  padding: '0.25rem',
});

const ModalTitle = styled('p')(
  {
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  systemProps
);

const StyledModalBody = styled(Box)({
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '0.5rem',
  paddingBottom: '1rem',
});

const StyledModalFooter = styled(Box)({});

export interface ModalProps extends MinervaProps {
  children?: React.ReactNode;
  title?: string;
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

export const ModalHeader = ({
  children,
  onClose,
  ...props
}: ModalHeaderProps) => {
  return (
    <TopContainer {...props}>
      <ModalTitle>{children}</ModalTitle>
      <CloseButton onClick={onClose}>
        <Icon name="x" size="26px" />
      </CloseButton>
    </TopContainer>
  );
};

export const ModalBody = ({ children, ...props }: ModalBodyProps) => {
  const componentStyles = useComponentStyles('ModalBody');
  return (
    <StyledModalBody {...componentStyles} {...props}>
      {children}
    </StyledModalBody>
  );
};

export const ModalFooter = ({ children, ...props }: ModalFooterProps) => {
  // const theme = useTheme();
  return <StyledModalFooter {...props}>{children}</StyledModalFooter>;
};

export const Modal = forwardRef(function Modal(
  { title, children, isOpen, onClose, ...props }: ModalProps,
  ref
) {
  return (
    <StyledOverlay isOpen={isOpen}>
      <StyledModal
        aria-label="modal"
        isOpen={isOpen}
        onDismiss={onClose}
        ref={ref}
        {...props}
      >
        {children}
      </StyledModal>
    </StyledOverlay>
    // )
  );
});

export default Modal;
