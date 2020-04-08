import React, { forwardRef } from 'react';
import { MinervaProps, Box } from '../layout';
import { useComponentStyles } from '../theme';

export interface HeadingProps extends MinervaProps {
  children?: React.ReactNode;
  fontSize?: string;
}

export const Heading = forwardRef(function Heading(
  { children, fontSize = '2xl', ...props }: HeadingProps,
  ref
) {
  const componentStyles = useComponentStyles('Heading');

  return (
    <Box
      as="h2"
      ref={ref}
      margin={0}
      fontWeight="bold"
      fontFamily="heading"
      fontSize={fontSize}
      {...componentStyles}
      {...props}
    >
      {children}
    </Box>
  );
});

export default Heading;
