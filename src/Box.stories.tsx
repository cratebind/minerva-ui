import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, BoxProps, Stack } from '.';

const meta: Meta = {
  title: 'Box',
  component: Box,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<BoxProps> = (args: Omit<BoxProps, 'as'>) => (
  <Box {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Basic Box',
};

export const PseudoProps = () => (
  <Stack horizontal>
    <Box _hover={{ bg: 'red.500' }}>Hover Box</Box>
    <Box as="button" _focus={{ bg: 'red.500' }}>
      Focus Button
    </Box>
  </Stack>
);

// export const Variants = () => (
//   <Stack horizontal>
//     <Button variant="primary">Primary Button</Button>
//     <Button variant="secondary">Secondary Button</Button>
//     <Button variant="tertiary">Tertiary Button</Button>
//   </Stack>
// );

// export const LoadingButton = Template.bind({});
// LoadingButton.args = {
//   children: 'Basic Button',
//   isLoading: true,
// };

// export const DisabledButton = Template.bind({});
// DisabledButton.args = {
//   children: 'Basic Button',
//   disabled: true,
// };
