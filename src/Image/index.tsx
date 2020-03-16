import React, { forwardRef } from 'react';
import { MinervaProps, Box } from '../layout';
// import PseudoBox, { PseudoBoxProps } from '../PseudoBox';

// type BaseProps = MinervaProps &
//   React.ImgHTMLAttributes<HTMLImageElement> ;

export interface ImageProps extends MinervaProps {
  /**
   * Path or URL to image source
   */
  src?: string;
  /**
   * Alternate text that describes image for screen reader users
   */
  alt?: string;
}

export const Image = forwardRef(function Image(
  { src, alt, ...props }: ImageProps,
  ref
) {
  return <Box as="img" ref={ref} src={src} alt={alt} {...props} />;
});

export default Image;
