import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
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

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Basic = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
      Stay Logged In
    </Checkbox>
  );
};

// export const Default = Template.bind({});
// Default.args = {
//   children: 'Basic Checkbox',
// };

// export const Variants = () => (
//   <Stack horizontal>
//     <Checkbox variant="primary">Primary Checkbox</Checkbox>
//     <Checkbox variant="secondary">Secondary Checkbox</Checkbox>
//     <Checkbox variant="tertiary">Tertiary Checkbox</Checkbox>
//   </Stack>
// );

// export const LoadingButton = Template.bind({});
// LoadingButton.args = {
//   children: 'Basic Checkbox',
//   isLoading: true,
// };

// export const DisabledButton = Template.bind({});
// DisabledButton.args = {
//   children: 'Basic Checkbox',
//   disabled: true,
// };
