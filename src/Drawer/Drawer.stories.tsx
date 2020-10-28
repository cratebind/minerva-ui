import React from 'react';
import { Meta, Story } from '@storybook/react';
import Drawer, {
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerProps,
} from '../Drawer';
import Button from '../Button';
import { Flex } from '..';
import { filteredArgs } from '../utils';

const meta: Meta = {
  title: 'Drawer',
  component: Drawer,
  subcomponents: {
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
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

const Template: Story<DrawerProps> = ({
  placement = 'right',
  isOpen = false,
}) => {
  const [open, setOpen] = React.useState(isOpen);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer
        placement={placement}
        isOpen={open}
        onClose={() => setOpen(false)}
        overflow="hidden"
      >
        <DrawerHeader onClose={() => setOpen(false)}>Hello World!</DrawerHeader>
        <DrawerBody>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
        </DrawerBody>
        <DrawerFooter bg="gray.50">
          <Flex
            px={6}
            py={3}
            flexDirection={['column', 'row-reverse']}
            bg="gray.50"
            radiusBottom="5px"
          >
            <Button
              onClick={() => setOpen(false)}
              boxShadow="base"
              width={['100%', 'auto']}
            >
              Submit
            </Button>
          </Flex>
        </DrawerFooter>
      </Drawer>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
