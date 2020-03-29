import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps } from '../layout';

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
  { children, fontSize = '2xl', ...props }: HeadingProps,
  ref
) {
  return (
    <StyledHeading ref={ref} fontSize={fontSize} {...props}>
      {children}
    </StyledHeading>
  );
});

Heading.defaultProps = {
  fontSize: 'xl',
};

export default Heading;
