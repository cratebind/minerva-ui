import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Close } from '../Icon/baseIcons';

import { MinervaProps, Box } from '../layout';
// import { Icon } from '../Icon';
import { useComponentStyles } from '../theme';
import Button from '../Button';
import { PseudoBoxProps } from '..';
import { ForwardRefComponent } from '../utilities/polymorphic';
// import { ForwardRefComponent } from '../utilities/polymorphic';

export const TagIcon = styled(Button)`
  margin-left: 5px;
  margin-top: 1px;
  &:hover {
    cursor: pointer;
  }
`;

// const StyledTag = styled(Box)<MinervaProps>(
//   props => ({
//     display: 'inline-flex',
//     alignItems: 'center',
//     backgroundColor: '#EDF2F7',
//     borderRadius: '5px',
//     padding: '8px 10px',
//     fontSize: '16px',
//     ...props.theme.Tag,
//   }),
//   systemProps
// );

export interface TagProps extends MinervaProps, PseudoBoxProps {
  children?: React.ReactNode;
}

// export interface TagButtonProps extends MinervaProps, PseudoBoxProps {
//   iconName?: string;
// }

// export const TagButton = React.forwardRef(function TagButton(
//   { iconName, ...props }: TagButtonProps,
//   ref
// ) {
//   return (
//     <Button
//       ref={ref}
//       data-testid="input-tag-icon"
//       marginLeft="5px"
//       marginTop="1px"
//       p={0}
//       bg="transparent"
//       border={0}
//       borderRadius="full"
//       _hover={{ cursor: 'pointer' }}
//       {...props}
//     >
//       <Close size="14px" />
//     </Button>
//   );
// });

export const Tag = React.forwardRef(function Tag({ children, ...props }, ref) {
  const componentStyles = useComponentStyles('Tag');
  return (
    <Box ref={ref} {...componentStyles} {...props}>
      {children}
    </Box>
  );
}) as ForwardRefComponent<'div', TagProps>;

export default Tag;

// if (__DEV__) {
//   Tag.propTypes = {
//     children: PropTypes.node,
//   };

//   TagButton.propTypes = {
//     iconName: PropTypes.string,
//   };
// }
