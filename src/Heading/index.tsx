import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps } from '../layout';

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
  systemProps
);

export interface HeadingProps extends MinervaProps {
  children?: React.ReactNode;
  size?: string;
  lineHeight?: string;
  props?: any;
}

export const Heading = forwardRef(function Heading(
  { children, ...props }: HeadingProps,
  ref
) {
  return (
    <StyledHeading ref={ref} {...props}>
      {children}
    </StyledHeading>
  );
});

Heading.defaultProps = {
  size: 'xl',
  lineHeight: 'normal',
};

export default Heading;
