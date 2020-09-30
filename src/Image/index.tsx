import React, { forwardRef } from 'react';
import warning from 'tiny-warning';
import PropTypes from 'prop-types';
import { MinervaProps, Box } from '../layout';
import { useTheme } from '../theme';
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
  const theme = useTheme();

  warning(Boolean(alt), 'Images require an `alt` attribute to be accessible.');

  return (
    <Box as="img" ref={ref} src={src} alt={alt} {...theme.Image} {...props} />
  );
});

export default Image;

if (__DEV__) {
  Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
  };
}
