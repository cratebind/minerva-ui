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
} from 'styled-system';

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
  As;

export type MinervaProps = StyledSystemProps &
  ModifiedStyledSystemProps &
  React.HTMLAttributes<any> &
  React.RefAttributes<any>;

export const Block = styled('div')<MinervaProps>(
  () => ({
    display: 'block',
  }),
  color,
  space,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  background,
  border,
  typography
);

export const Flex = styled('div')<MinervaProps>(
  () => ({
    display: 'flex',
  }),
  color,
  space,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  background,
  border,
  typography
);
