import React, { forwardRef } from 'react';
import { MinervaProps, Box } from '../layout';
// import PseudoBox, { PseudoBoxProps } from '../PseudoBox';

// type BaseProps = MinervaProps &
//   React.ImgHTMLAttributes<HTMLImageElement> ;

export interface IconProps extends MinervaProps {
  /**
   * Path or URL to image source
   */
  // src?: string;
}

export const Icon = forwardRef(function Icon({ ...props }: IconProps, ref) {
  return <Box as="svg" ref={ref} {...props} />;
});

export default Icon;
