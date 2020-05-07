import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { MinervaProps, Box } from '../layout';
import { useComponentStyles } from '../theme';

export interface TextProps extends MinervaProps {
  children?: React.ReactNode;
  lineHeight?: string;
  props?: any;
}

export const Text = forwardRef(({ children, ...props }: TextProps, ref) => {
  const componentStyles = useComponentStyles('Text');

  return (
    <Box
      as="p"
      ref={ref}
      margin={0}
      fontSize="16px"
      {...componentStyles}
      {...props}
    >
      {children}
    </Box>
  );
});

Text.displayName = 'Text';

Text.defaultProps = {
  lineHeight: 'normal',
};

export default Text;

if (__DEV__) {
  Text.propTypes = {
    children: PropTypes.node,
    lineHeight: PropTypes.string,
    props: PropTypes.any,
  };
}
