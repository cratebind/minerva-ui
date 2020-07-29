import React from 'react';
// import warning from 'tiny-warning';
// import PropTypes from 'prop-types';
import {
  Combobox as ReachCombobox,
  ComboboxInput as ReachComboboxInput,
  ComboboxPopover as ReachComboboxPopover,
  ComboboxList as ReachComboboxList,
  ComboboxOption as ReachComboboxOption,
  ComboboxOptionText as ReachComboboxOptionText,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
// import { MinervaProps } from '../layout';
// import PseudoBox from '../PseudoBox';
// import { useComponentStyles } from '../theme';
import styled from 'styled-components';
import Input from '../Input';
import { OverlayBox } from '../Menu';

export const Combobox = ReachCombobox;

export const ComboboxInput = props => (
  <Input as={ReachComboboxInput} {...props} />
);

export const ComboboxPopover = props => (
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

export const ComboboxList = styled(ReachComboboxList)``;

export const ComboboxOption = styled(ReachComboboxOption)`
  padding: 0.5rem 1rem;
  font-size: 14px;
  cursor: pointer;

  &[data-selected],
  &:hover {
    background-color: #f4f5f7;
    color: #161e2e;
  }
`;
export const ComboboxOptionText = styled(ReachComboboxOptionText)``;
