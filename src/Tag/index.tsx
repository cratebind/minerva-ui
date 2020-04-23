import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps, Box } from '../layout';
import { Icon } from '../Icon';
import { useComponentStyles } from '../theme';
import Button from '../Button';

export const TagIcon = styled(Button)`
  margin-left: 5px;
  margin-top: 1px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledTag = styled(Box)<MinervaProps>(
  props => ({
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#EDF2F7',
    borderRadius: '5px',
    padding: '8px 10px',
    fontSize: '16px',
    ...props.theme.Tag,
  }),
  systemProps
);

export interface TagProps extends MinervaProps {
  children?: React.ReactNode;
}

export interface TagButtonProps extends MinervaProps {
  iconName?: string;
}

export const TagButton = forwardRef(function TagButton(
  { iconName, ...props }: TagButtonProps,
  ref
) {
  return (
    <Button
      ref={ref}
      data-testid="input-tag-icon"
      marginLeft="5px"
      marginTop="1px"
      p={0}
      bg="transparent"
      border={0}
      borderRadius="full"
      _hover={{ cursor: 'pointer' }}
      {...props}
    >
      <Icon name={iconName || 'x'} size="14px" />
    </Button>
  );
});

export const Tag = forwardRef(function Tag(
  { children, ...props }: TagProps,
  ref
) {
  const componentStyles = useComponentStyles('Tag');
  return (
    <StyledTag ref={ref} {...componentStyles} {...props}>
      {children}
    </StyledTag>
  );
});

export default Tag;
