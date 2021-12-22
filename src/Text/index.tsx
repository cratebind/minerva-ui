import React from 'react';
// import PropTypes from 'prop-types';
import { MinervaProps, Box } from '../layout';
import { useComponentStyles } from '../theme';
// import { ForwardRefComponent } from '../utilities/polymorphic';

export interface TextProps extends MinervaProps {
  children?: React.ReactNode;
}

export const Text = React.forwardRef(function Text(
  { children, as = 'p', ...props }: TextProps,
  ref
) {
  const componentStyles = useComponentStyles('Text');

  return (
    <Box
      as={as}
      ref={ref}
      margin={0}
      fontSize="16px"
      fontFamily="body"
      {...componentStyles}
      {...props}
    >
      {children}
    </Box>
  );
});

Text.displayName = 'Text';

// export default Text;

// if (__DEV__) {
//   Text.propTypes = {
//     children: PropTypes.node,
//   };
// }
