import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { systemProps, Flex, MinervaProps } from '../layout';
import { ForwardRefComponent } from '../utilities/polymorphic';

export interface StackProps extends MinervaProps {
  children?: React.ReactNode;
  /**
   * Space between items in stack
   * @default 10px
   */
  gap?: string;
  /**
   * change stack direction to horizontal
   * @default false
   */
  horizontal?: boolean;
}
const StyledStack = styled(Flex)`
  flex-direction: ${(p: any) => (p.horizontal ? 'row' : 'column')};

  > * + * {
    ${(p: any) =>
      p.horizontal ? `margin-left: ${p.gap}` : `margin-top: ${p.gap}`};
  }

  ${systemProps}
`;

export const Stack = React.forwardRef(function Stack(
  { children, gap = '10px', horizontal = false, ...props }: StackProps,
  ref
) {
  return (
    <StyledStack ref={ref} gap={gap} horizontal={horizontal} {...props}>
      {children}
    </StyledStack>
  );
}) as ForwardRefComponent<'div', StackProps>;

export default Stack;

// if (__DEV__) {
//   Stack.propTypes = {
//     children: PropTypes.node,
//     gap: PropTypes.string,
//     horizontal: PropTypes.bool,
//   };
// }
