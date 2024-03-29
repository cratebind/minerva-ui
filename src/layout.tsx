import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
// import PropTypes from 'prop-types';
import StyledSystem, {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
  system,
} from 'styled-system';
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop';
// import systemPropTypes from '@styled-system/prop-types';

import extraConfig from './utils';
import { PseudoBoxProps } from '.';

const customProps = system({
  textDecoration: true,
  lineHeight: true,
  transition: true,
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  content: true,
  resize: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  shadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  radiusLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
  radiusRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  radiusTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  radiusBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
});

// export const minervaPropTypes = {
//   ...systemPropTypes.space,
//   ...systemPropTypes.color,
//   ...systemPropTypes.layout,
//   ...systemPropTypes.typography,
//   ...systemPropTypes.flexbox,
//   ...systemPropTypes.border,
//   ...systemPropTypes.background,
//   ...systemPropTypes.position,
//   ...systemPropTypes.grid,
//   textDecoration: PropTypes.any,
//   textTransform: PropTypes.any,
//   transform: PropTypes.any,
//   lineHeight: PropTypes.any,
//   transition: PropTypes.any,
//   radiusLeft: PropTypes.any,
//   radiusRight: PropTypes.any,
//   radiusTop: PropTypes.any,
//   radiusBottom: PropTypes.any,
// };

export const systemProps = compose(
  // customProps,
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox,
  customProps,
  extraConfig
);

type CSS = React.CSSProperties;

type borderRadius = StyledSystem.BorderRadiusProps['borderRadius'];
type borderColor = StyledSystem.BorderColorProps['borderColor'];

export interface ICustomConfig {
  // Custom borderRadius alias
  rounded?: borderRadius;
  roundedTop?: borderRadius;
  roundedBottom?: borderRadius;
  roundedLeft?: borderRadius;
  roundedRight?: borderRadius;
  roundedTopRight?: borderRadius;
  roundedTopLeft?: borderRadius;
  roundedBottomRight?: borderRadius;
  roundedBottomLeft?: borderRadius;
  radiusLeft?: borderRadius;
  radiusTop?: borderRadius;
  radiusRight?: borderRadius;
  radiusBottom?: borderRadius;

  // Custom borderColor alias
  borderBottomColor?: borderColor;
  borderTopColor?: borderColor;
  borderRightColor?: borderColor;
  borderLeftColor?: borderColor;

  // Custom width alias
  w?: StyledSystem.WidthProps['width'];
  minW?: StyledSystem.MinWidthProps['minWidth'];
  maxW?: StyledSystem.MaxWidthProps['maxWidth'];

  // Custom height alias
  h?: StyledSystem.HeightProps['height'];
  minH?: StyledSystem.MinHeightProps['minHeight'];
  maxH?: StyledSystem.MaxHeightProps['maxHeight'];

  // Custom display alias
  d?: StyledSystem.DisplayProps['display'];

  // Custom background alias
  backgroundAttachment?: StyledSystem.ResponsiveValue<
    CSS['backgroundAttachment']
  >;
  bgImg?: StyledSystem.BackgroundImageProps['backgroundImage'];
  bgImage?: StyledSystem.BackgroundImageProps['backgroundImage'];
  bgSize?: StyledSystem.BackgroundSizeProps['backgroundSize'];
  bgPos?: StyledSystem.BackgroundPositionProps['backgroundPosition'];
  pos?: StyledSystem.PositionProps['position'];
  flexDir?: StyledSystem.FlexDirectionProps['flexDirection'];

  // CSS properties
  textDecoration?: StyledSystem.ResponsiveValue<CSS['textDecoration']>;
  textDecor?: StyledSystem.ResponsiveValue<CSS['textDecoration']>;
  textTransform?: StyledSystem.ResponsiveValue<CSS['textTransform']>;
  overflowX?: StyledSystem.OverflowProps['overflow'];
  overflowY?: StyledSystem.OverflowProps['overflow'];
  appearance?: StyledSystem.ResponsiveValue<CSS['appearance']>;
  transform?: StyledSystem.ResponsiveValue<CSS['transform']>;
  transformOrigin?: StyledSystem.ResponsiveValue<CSS['transformOrigin']>;
  animation?: StyledSystem.ResponsiveValue<CSS['animation']> | any;
  userSelect?: StyledSystem.ResponsiveValue<CSS['userSelect']>;
  pointerEvents?: StyledSystem.ResponsiveValue<CSS['pointerEvents']>;
  boxSizing?: StyledSystem.ResponsiveValue<CSS['boxSizing']>;
  cursor?: StyledSystem.ResponsiveValue<CSS['cursor']>;
  resize?: StyledSystem.ResponsiveValue<CSS['resize']>;
  transition?: StyledSystem.ResponsiveValue<CSS['transition']>;
  objectFit?: StyledSystem.ResponsiveValue<CSS['objectFit']>;
  objectPosition?: StyledSystem.ResponsiveValue<CSS['objectPosition']>;
  visibility?: StyledSystem.ResponsiveValue<CSS['visibility']>;

  // Ellipsis alias
  wordBreak?: StyledSystem.ResponsiveValue<CSS['wordBreak']>;
  overflowWrap?: StyledSystem.ResponsiveValue<CSS['overflowWrap']>;
  whiteSpace?: StyledSystem.ResponsiveValue<CSS['whiteSpace']>;

  // SVG color properties
  fill?: StyledSystem.ColorProps['color'];
  stroke?: StyledSystem.ColorProps['color'];

  bgAttachment?: StyledSystem.ResponsiveValue<CSS['backgroundAttachment']>;
  shadow?: StyledSystem.BoxShadowProps['boxShadow'];

  // List properties
  listStyleType?: StyledSystem.ResponsiveValue<CSS['listStyleType']>;
  listStylePosition?: StyledSystem.ResponsiveValue<CSS['listStylePosition']>;
  listStyleImage?: StyledSystem.ResponsiveValue<CSS['listStyleImage']>;
  listStyleImg?: StyledSystem.ResponsiveValue<CSS['listStyleImage']>;
  listStylePos?: StyledSystem.ResponsiveValue<CSS['listStylePosition']>;

  // Outline prop
  outline?: StyledSystem.ResponsiveValue<CSS['outline']>;
  float?: StyledSystem.ResponsiveValue<CSS['float']>;
  willChange?: StyledSystem.ResponsiveValue<CSS['willChange']>;

  // Border Width props
  borderTopWidth?: StyledSystem.ResponsiveValue<CSS['borderTopWidth']>;
  borderBottomWidth?: StyledSystem.ResponsiveValue<CSS['borderBottomWidth']>;
  borderLeftWidth?: StyledSystem.ResponsiveValue<CSS['borderLeftWidth']>;
  borderRightWidth?: StyledSystem.ResponsiveValue<CSS['borderRightWidth']>;

  css?: any;
}

type FontSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

export interface IFontSize {
  fontSize?:
    | StyledSystem.ResponsiveValue<FontSize>
    | StyledSystem.FontSizeProps['fontSize'];
}

type FontWeight =
  | 'hairline'
  | 'thin'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export interface IFontWeight {
  fontWeight?:
    | StyledSystem.ResponsiveValue<FontWeight>
    | StyledSystem.FontWeightProps['fontWeight'];
}

type LineHeight = 'none' | 'shorter' | 'short' | 'normal' | 'tall' | 'taller';

export interface ILineHeight {
  lineHeight?:
    | StyledSystem.ResponsiveValue<LineHeight>
    | StyledSystem.LineHeightProps['lineHeight'];
}

export type LetterSpacing =
  | 'tighter'
  | 'tight'
  | 'normal'
  | 'wide'
  | 'wider'
  | 'widest';

export interface ILetterSpacing {
  letterSpacing?:
    | StyledSystem.ResponsiveValue<LetterSpacing>
    | StyledSystem.LetterSpacingProps['letterSpacing'];
}

export interface As {
  as?: React.ElementType;
}

type TypographyProps = Omit<
  StyledSystem.TypographyProps,
  'fontWeight' | 'lineHeight' | 'fontSize' | 'letterSpacing'
>;

type StyledSystemProps = StyledSystem.LayoutProps &
  StyledSystem.ColorProps &
  StyledSystem.SpaceProps &
  StyledSystem.BordersProps &
  StyledSystem.BackgroundProps &
  StyledSystem.PositionProps &
  StyledSystem.FlexboxProps &
  StyledSystem.ShadowProps &
  StyledSystem.GridProps &
  StyledSystem.OpacityProps &
  StyledSystem.OverflowProps;

type ModifiedStyledSystemProps = TypographyProps &
  IFontSize &
  ILetterSpacing &
  IFontWeight &
  ILineHeight &
  As &
  ICustomConfig;

export type MinervaProps = StyledSystemProps &
  ModifiedStyledSystemProps &
  React.HTMLAttributes<any> &
  React.RefAttributes<any>;

export const shouldForwardProp = createShouldForwardProp([
  ...props,
  'd',
  'textDecoration',
  'visibility',
  'transform',
  'cursor',
  'minWidth',
  'maxWidth',
  'width',
  'height',
  'isOpen',
  'onDismiss',
  'onClose',
  'portal',
  // 'value',
  // 'data-testid',
  // 'testid',
  // 'test-id',
  // 'id',
]);

export const BaseBox = styled('div').withConfig({
  shouldForwardProp,
})<MinervaProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  systemProps
);

const hover = '&:hover';
const active = '&:active, &[data-active=true]';
const focus = '&:focus';
const visited = '&:visited';
const even = '&:nth-of-type(even)';
const odd = '&:nth-of-type(odd)';
const disabled =
  '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover';
const checked = '&[aria-checked=true],&[data-state="checked"]';
const mixed = '&[aria-checked=mixed]';
const selected =
  '&[aria-selected=true], &[data-selected=true], &[data-selected]';
const invalid = '&[aria-invalid=true]';
const pressed = '&[aria-pressed=true]';
const readOnly = '&[aria-readonly=true], &[readonly]';
const first = '&:first-of-type';
const last = '&:last-of-type';
const expanded = '&[aria-expanded=true]';
const grabbed = '&[aria-grabbed=true]';
const notFirst = '&:not(:first-of-type)';
const notLast = '&:not(:last-of-type)';
const groupHover = '[role=group]:hover &';

export type BoxProps = MinervaProps & PseudoBoxProps;

export const Box = styled(BaseBox).withConfig({
  shouldForwardProp,
})<BoxProps>(
  ({
    _after,
    _focus,
    _selected,
    _focusWithin,
    _hover,
    _invalid,
    _active,
    _disabled,
    _grabbed,
    _pressed,
    _expanded,
    _visited,
    _before,
    _readOnly,
    _first,
    _notFirst,
    _notLast,
    _last,
    _placeholder,
    _checked,
    _groupHover,
    _mixed,
    _odd,
    _even,
  }: PseudoBoxProps) => {
    return css({
      [hover]: _hover,
      [focus]: _focus,
      [active]: _active,
      [visited]: _visited,
      [disabled]: _disabled,
      [selected]: _selected,
      [invalid]: _invalid,
      [expanded]: _expanded,
      [grabbed]: _grabbed,
      [readOnly]: _readOnly,
      [first]: _first,
      [notFirst]: _notFirst,
      [notLast]: _notLast,
      [last]: _last,
      [odd]: _odd,
      [even]: _even,
      [mixed]: _mixed,
      [checked]: _checked,
      [pressed]: _pressed,
      [groupHover]: _groupHover,
      '&:before': _before,
      '&:after': _after,
      '&:focus-within': _focusWithin,
      '&::placeholder': _placeholder,
    });
  }
);

// export const Box = styled('div')<MinervaProps>(
//   {
//     boxSizing: 'border-box',
//     minWidth: 0,
//     // @TODO: Change when light / dark themes are added
//     color: '#374151',
//     // fontFamily:
//     //   '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
//   },
//   systemProps
// );

// function styledComponentWithProps<T, U extends HTMLElement = HTMLElement>(
//   styledFunction: StyledFunction<React.HTMLProps<U>>
// ): StyledFunction<T & React.HTMLProps<U>> {
//   return styledFunction;
// }

// const minerva =

// export const Box = styledComponentWithProps<MinervaProps, HTMLDivElement>(
//   styled.div
// );

// const div = styledComponentWithProps<MyProps, HTMLDivElement>(styled.div)

// export const Box = styled.div<MinervaProps>(
//   {
//     boxSizing: 'border-box',
//     minWidth: 0,
//   },
//   systemProps
// );

// export const Box = styled<MinervaProps>('div')(
//   {
//     boxSizing: 'border-box',
//     minWidth: 0,
//   },
//   systemProps
// );

export const Block = styled(Box)(
  {
    display: 'block',
  },
  systemProps
);

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  systemProps
);

// export const Flex = props => <Box display="flex" {...props} />;
