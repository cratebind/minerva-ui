import React, { forwardRef } from 'react';
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
import { MinervaProps } from '../layout';

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

export interface TextProps extends MinervaProps {
  children?: React.ReactNode;
  lineHeight?: string;
  props?: any;
}

const Text = forwardRef(({ children, ...props }: TextProps, ref) => {
  return (
    <StyledText ref={ref} {...props}>
      {children}
    </StyledText>
  );
});

Text.displayName = 'Text';

Text.defaultProps = {
  lineHeight: 'normal',
};

export default Text;
