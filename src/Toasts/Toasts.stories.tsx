import React from 'react';
import { Meta, Story } from '@storybook/react';
// import Modal, {
//   ModalBody,
//   ModalHeader,
//   ModalFooter,
//   ModalProps,
// } from '../Modal';
import Button from '../Button';
// import { filteredArgs } from '../utils';
import { ToastContainer, ToastItem, useToastContext, ToastContext } from '.';

const meta: Meta = {
  title: 'Toasts',
  // component: Modal,
  // subcomponents: {
  //   ModalBody,
  //   ModalHeader,
  //   ModalFooter,
  // },
  // argTypes: {
  //   ...filteredArgs,
  //   placement: {},
  // },
  // parameters: {
  //   controls: { expanded: true },
  // },
};

export default meta;

const toastExample = {
  title: 'Successfully Saved!',
  body: 'Changes to your account have been saved.',
};

const ToastTriggerExample = () => {
  const { toasts, toast } = useToastContext();

  return (
    <Button
      onClick={() =>
        toast({
          title: `Successfully Saved! (#${toasts.length + 1})`,
          body: 'Changes to your account have been saved.',
        })
      }
    >
      Create Toast Modal
    </Button>
  );
};

const Template = () => {
  return <ToastContainer>{/* <ToastTriggerExample /> */}</ToastContainer>;
};

export const Basic = Template.bind({});
Basic.args = {};

// export const Basic = () => <div>Test</div>;
