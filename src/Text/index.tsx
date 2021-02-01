import React, { HTMLAttributes } from 'react';
import { forwardRefWithAs } from 'type-utilities';
// import PropTypes from 'prop-types';
import { MinervaProps, Box } from '../layout';
import { useComponentStyles } from '../theme';

export interface TextProps extends MinervaProps {
  children?: React.ReactNode;
}

export const Text = forwardRefWithAs<TextProps, 'p'>(
  ({ children, ...props }: TextProps & HTMLAttributes<HTMLElement>, ref) => {
    const componentStyles = useComponentStyles('Text');

    return (
      <Box
        as="p"
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
  }
);

Text.displayName = 'Text';

export default Text;

// if (__DEV__) {
//   Text.propTypes = {
//     children: PropTypes.node,
//   };
// }
