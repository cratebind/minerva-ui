import React from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, {
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalProps,
} from '../Modal';
import Button from '../Button';
import { Flex } from '..';
import { filteredArgs } from '../utils';

const meta: Meta = {
  title: 'Modal',
  component: Modal,
  subcomponents: {
    ModalBody,
    ModalHeader,
    ModalFooter,
  },
  argTypes: {
    ...filteredArgs,
    placement: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ModalProps> = ({ isOpen = false }) => {
  const [open, setOpen] = React.useState(isOpen);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} overflow="hidden">
        <ModalHeader onClose={() => setOpen(false)}>Hello World!</ModalHeader>
        <ModalBody>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Sunt ad dolore quis aute consequat.
        </ModalBody>
        <ModalFooter bg="gray.50">
          <Flex
            flexDirection={['column', 'row']}
            bg="gray.50"
            radiusBottom="5px"
          >
            <Button
              onClick={() => setOpen(false)}
              boxShadow="base"
              width={['100%', 'auto']}
              variant="primary"
            >
              Submit
            </Button>
            <Button
              onClick={() => setOpen(false)}
              boxShadow="base"
              width={['100%', 'auto']}
              ml="10px"
            >
              Cancel
            </Button>
          </Flex>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
