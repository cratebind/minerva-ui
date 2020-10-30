import React, { InputHTMLAttributes, ReactNode } from 'react';
import {
  Combobox as ReachCombobox,
  ComboboxInput as ReachComboboxInput,
  ComboboxPopover as ReachComboboxPopover,
  ComboboxList as ReachComboboxList,
  ComboboxOption as ReachComboboxOption,
  ComboboxOptionText as ReachComboboxOptionText,
  ComboboxProps,
  ComboboxInputProps,
  ComboboxPopoverProps,
  ComboboxListProps,
  ComboboxOptionProps,
} from '@reach/combobox';
// import css from '@styled-system/css';

import Input from '../Input';
import { OverlayBox } from '../Menu';
import { Box, MinervaProps } from '../layout';
// import { Box } from 'react-feather';

export const Combobox = (props: ComboboxProps) => <ReachCombobox {...props} />;

export const ComboboxInput = (
  props: ComboboxInputProps & InputHTMLAttributes<HTMLInputElement>
) => <Input as={ReachComboboxInput} {...props} />;

export const ComboboxPopover = (props: ComboboxPopoverProps & MinervaProps) => (
  <OverlayBox
    mt="8px"
    borderRadius="6px"
    border={0}
    overflow="hidden"
    zIndex="50"
    as={ReachComboboxPopover}
    data-testid="combobox-popover"
    {...props}
  />
);

export const ComboboxList = (
  props: ComboboxListProps & { children?: ReactNode }
) => <ReachComboboxList {...props} />;

export const ComboboxOption = (props: ComboboxOptionProps & MinervaProps) => (
  <Box
    as={ReachComboboxOption}
    cursor="pointer"
    padding="0.5rem 1rem"
    css={{
      '&:hover,&[aria-selected="true"]': {
        backgroundColor: '#f4f5f7',
        color: '#161e2e',
      },
    }}
    {...props}
  />
);

export const ComboboxOptionText = (props: MinervaProps) => (
  <ReachComboboxOptionText {...props} />
);
