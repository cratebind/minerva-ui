import React, { forwardRef } from 'react';
import { MinervaProps } from '../layout';
import PseudoBox from '../PseudoBox';

type BaseProps = MinervaProps & React.ImgHTMLAttributes<HTMLImageElement>;

export interface ImageProps extends BaseProps {
  src: string;
  alt: string;
}

export const Image = forwardRef(function Image(
  { src, alt, ...props }: ImageProps,
  ref
) {
  return <PseudoBox as="img" ref={ref} src={src} alt={alt} {...props} />;
});

export default Image;
