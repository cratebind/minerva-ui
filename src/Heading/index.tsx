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
    margin: 0,
    fontWeight: 'bold',
    ...props.theme.Heading,
  }),
  systemProps
);

export interface HeadingProps extends MinervaProps {
  children?: React.ReactNode;
  fontSize?: string;
  props?: any;
}

export const Heading = forwardRef(function Heading(
  { children, fontSize = 'xl', ...props }: HeadingProps,
  ref
) {
  return (
    <StyledHeading ref={ref} fontSize={fontSize && sizes[fontSize]} {...props}>
      {children}
    </StyledHeading>
  );
});

Heading.defaultProps = {
  fontSize: 'xl',
};

export default Heading;
