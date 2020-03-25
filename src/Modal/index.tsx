import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { MinervaProps, systemProps, Box } from '../layout';
import Icon from '../Icon';

const StyledModal = styled(Dialog)(
  {
    padding: '1.25rem',
    borderRadius: '5px',
    alignItems: 'center',
  },
  systemProps
);

const TopContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
});

const CloseButton = styled('button')({});

const ModalTitle = styled('p')(
  {
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  systemProps
);

const StyledModalBody = styled(Box)({});

const StyledModalFooter = styled(Box)({});

export interface ModalProps extends MinervaProps {
  children?: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onClose: any;
  props?: any;
}

export interface ModalHeaderProps extends MinervaProps {
  children?: React.ReactNode;
  onClose: any;
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
  return <StyledModalBody {...props}>{children}</StyledModalBody>;
};

export const ModalFooter = ({ children, ...props }: ModalFooterProps) => {
  return <StyledModalFooter {...props}>{children}</StyledModalFooter>;
};

export const Modal = forwardRef(function Modal(
  { title, children, isOpen, onClose, ...props }: ModalProps,
  ref
) {
  return (
    <StyledModal isOpen={isOpen} onDismiss={onClose} ref={ref} {...props}>
      {children}
    </StyledModal>
  );
});

export default Modal;
