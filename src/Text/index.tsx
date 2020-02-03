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

const StyledText = styled('p')<any>(
  {
    fontSize: 16,
  },
  props => ({
    ...props.theme.Text,
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

export interface TextProps {
  children?: React.ReactNode;
  lineHeight?: string;
  props?: any;
}

const Text = ({ children, lineHeight = 'normal', ...props }: TextProps) => {
  return (
    <StyledText lineHeight={lineHeight} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
