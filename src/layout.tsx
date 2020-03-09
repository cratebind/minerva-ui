import React from 'react';
import styled from 'styled-components';
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
} from 'styled-system';

export const systemProps = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox
);

type CSS = React.CSSProperties;

type borderRadius = StyledSystem.BorderRadiusProps['borderRadius'];
type borderColor = StyledSystem.BorderColorProps['borderColor'];

interface ICustomConfig {
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

interface IFontSize {
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

interface IFontWeight {
  fontWeight?:
    | StyledSystem.ResponsiveValue<FontWeight>
    | StyledSystem.FontWeightProps['fontWeight'];
}

type LineHeight = 'none' | 'shorter' | 'short' | 'normal' | 'tall' | 'taller';

interface ILineHeight {
  lineHeight?:
    | StyledSystem.ResponsiveValue<LineHeight>
    | StyledSystem.LineHeightProps['lineHeight'];
}

type LetterSpacing =
  | 'tighter'
  | 'tight'
  | 'normal'
  | 'wide'
  | 'wider'
  | 'widest';

interface ILetterSpacing {
  letterSpacing?:
    | StyledSystem.ResponsiveValue<LetterSpacing>
    | StyledSystem.LetterSpacingProps['letterSpacing'];
}

interface As {
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

// export const Box = styled('div')<MinervaProps>(() => ({}), systemProps);

export const BaseBox = styled.div(
  {},
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox
);

export function Box(props) {
  return <BaseBox {...props} />;
}

// export const PseudoBox = styled(Box)(
//   ({
//     _after,
//     _focus,
//     _selected,
//     _focusWithin,
//     _hover,
//     _invalid,
//     _active,
//     _disabled,
//     _grabbed,
//     _pressed,
//     _expanded,
//     _visited,
//     _before,
//     _readOnly,
//     _first,
//     _notFirst,
//     _notLast,
//     _last,
//     _placeholder,
//     _checked,
//     _groupHover,
//     _mixed,
//     _odd,
//     _even,
//   }: PseudoBoxProps) => ({
//     [hover]: _hover,
//     [focus]: _focus,
//     [active]: _active,
//     [visited]: _visited,
//     [disabled]: _disabled,
//     [selected]: _selected,
//     [invalid]: _invalid,
//     [expanded]: _expanded,
//     [grabbed]: _grabbed,
//     [readOnly]: _readOnly,
//     [first]: _first,
//     [notFirst]: _notFirst,
//     [notLast]: _notLast,
//     [last]: _last,
//     [odd]: _odd,
//     [even]: _even,
//     [mixed]: _mixed,
//     [checked]: _checked,
//     [pressed]: _pressed,
//     [groupHover]: _groupHover,
//     '&:before': _before,
//     '&:after': _after,
//     '&:focus-within': _focusWithin,
//     '&::placeholder': _placeholder,
//   })
// );

export const Block = styled(Box)(() => ({
  display: 'block',
}));

export const Flex = styled(Box)(() => ({
  display: 'flex',
}));
