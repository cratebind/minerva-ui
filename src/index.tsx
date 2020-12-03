// import * as Icon from 'react-feather';

import { ChevronDown, Close } from './Icon/baseIcons';

// // https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149
// function toKebabCase(string) {
//   return string
//     .replace(/([a-z])([A-Z])/g, '$1-$2')
//     .replace(/\s+/g, '-')
//     .toLowerCase();
// }

// export const defaultIcons: { [key: string]: any } = Object.keys(Icon).reduce(
//   (result, iconName) => {
//     result[toKebabCase(iconName)] = Icon[iconName];
//     return result;
//   },
//   {}
// );

// export const defaultIcons = baseIcons;
export const defaultIcons = {
  'chevron-down': ChevronDown,
  close: Close,
};

/**
 * Utilities
 */

export { default as ThemeProvider } from './ThemeProvider';
export { default as VisuallyHidden } from './VisuallyHidden';
export {
  default as GlobalStyles,
  AnimationStyles,
  ReachGlobalStyles,
  CSSReset,
} from './GlobalStyles';
// export { useTheme, useComponentStyles } from './theme';
export { default as baseTheme } from './theme';
export { default as defaultTheme } from './theme';
export * from './theme';
export { default as styled } from 'styled-components';

/**
 * Display
 */
export { default as Text } from './Text';
export { default as Link } from './Link';
export { default as Heading } from './Heading';
export { default as Tag } from './Tag';
export * from './Tag';
export { default as Alert } from './Alert';
export { default as Tooltip } from './Tooltip';
export {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from './Accordion';

/**
 * Layout
 */
export { Box, Block, Flex } from './layout';
export { default as PseudoBox } from './PseudoBox';
export { default as Stack } from './Stack';

/**
 * Inputs
 */
export { default as Button } from './Button';
export { default as Checkbox } from './Checkbox';
export { default as Switch } from './Switch';
export { default as Input } from './Input';
export * from './Input';
export * from './Combobox';
export * from './Menu';
export { RadioGroup, Radio } from './Radio';
export { default as InputField } from './InputField';
export { default as Select } from './Select';
export { default as TagsInput } from './TagsInput';
export * from './Tabs';

/**
 * Elements
 */
export { default as Image } from './Image';
export { default as Table } from './Table';
export { default as Icon } from './Icon';
export * from './Table';
export {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
} from './Modal';
export { Drawer, DrawerHeader, DrawerBody, DrawerFooter } from './Drawer';
export { default as Skeleton } from './Skeleton';
export * from './Skeleton';

/**
 * Helpers
 */
export { default as Spinner } from './Spinner';

/**
 * Utilities
 */

export { default as useClipboard } from './useClipboard';
export { default as useDisclosure } from './useDisclosure';
export { default as useMedia } from './useMedia';
export { default as useNetwork } from './useNetwork';
export { default as useLocalStorage } from './useLocalStorage';
