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
  // StylesProps,
} from 'styled-system';

// interface MinervaProps extends StylesProps {
//   bg?: string;
//   'data-testid'?: string;
// }

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

export type MinervaProps = StyledSystemProps &
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

export const Flex = styled('div')(
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
