import React, { forwardRef } from 'react';
import styled from 'styled-components';
// import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { MinervaProps, systemProps, Block } from '../layout';

const StyledModal = styled(Block)(
  {
    padding: '16px',
    borderRadius: '5px',
    alignItems: 'center',
  },
  systemProps
);

const StyledModalTitle = styled('p')(
  {
    fontWeight: 'bold',
  },
  systemProps
);

export interface ModalProps extends MinervaProps {
  children?: React.ReactNode;
  title?: string;
  props?: any;
}

export const Modal = forwardRef(function Modal(
  { title, children, ...props }: ModalProps,
  ref
) {
  return (
    <StyledModal ref={ref} {...props}>
      {title && <StyledModalTitle>{title}</StyledModalTitle>}
      {children}
    </StyledModal>
  );
});

export default Modal;
