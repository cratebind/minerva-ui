import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '.';
import { filteredArgs } from '../utils';

const meta: Meta = {
  title: 'Combobox',
  component: Combobox,
  subcomponents: {
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  },
  argTypes: {
    ...filteredArgs,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = () => {
  return (
    <Combobox aria-label="choose a fruit">
      <ComboboxInput />
      <ComboboxPopover>
        <ComboboxList>
          <ComboboxOption value="Apple" />
          <ComboboxOption value="Banana" />
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const NoPortal = () => {
  return (
    <Combobox aria-label="choose a fruit">
      <ComboboxInput />
      <ComboboxPopover portal={false}>
        <ComboboxList>
          <ComboboxOption value="Apple" />
          <ComboboxOption value="Banana" />
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
