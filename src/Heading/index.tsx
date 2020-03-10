import React from 'react';
import styled from 'styled-components';
import {
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

const sizes = {
  xl: '40px',
  lg: '32px',
  md: '24px',
  sm: '16px',
  xs: '8px',
};

const StyledHeading = styled('h1')<any>(
  props => ({
    ...props.theme.Heading,
    fontSize: sizes[props.size],
    lineHeight: props.lineHeight,
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

export interface HeadingProps {
  children?: React.ReactNode;
  size?: string;
  lineHeight?: string;
  props?: any;
}

const Heading = ({ children, ...props }: HeadingProps) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
};

Heading.defaultProps = {
  size: 'xl',
  lineHeight: 'normal',
};

export default Heading;
