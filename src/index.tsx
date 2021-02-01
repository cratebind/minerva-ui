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
export * from './Text';
export * from './Link';
export * from './Heading';
export * from './Tag';
export * from './Alert';
export * from './Tooltip';
export * from './Accordion';

/**
 * Layout
 */
export * from './layout';
export { default as PseudoBox } from './PseudoBox';
export * from './PseudoBox';
export * from './Stack';

/**
 * Inputs
 */
export * from './Button';
export * from './Checkbox';
export * from './Switch';
export * from './Input';
export * from './Input';
export * from './Combobox';
export * from './Menu';
export * from './Radio';
export * from './InputField';
export { default as InputField } from './InputField';
export * from './Select';
export * from './TagsInput';
export * from './Tabs';

/**
 * Elements
 */
export * from './Image';
export * from './Table';
export * from './Icon';
export * from './Table';
export * from './Modal';
export * from './Drawer';
export * from './Skeleton';
export * from './Skeleton';

/**
 * Helpers
 */
export * from './Spinner';

/**
 * Utilities
 */

export * from './useClipboard';
export { default as useClipboard } from './useClipboard';
export * from './useDisclosure';
export { default as useDisclosure } from './useDisclosure';
export * from './useMedia';
export { default as useMedia } from './useMedia';
export * from './useNetwork';
export { default as useNetwork } from './useNetwork';
export * from './useLocalStorage';
export { default as useLocalStorage } from './useLocalStorage';
