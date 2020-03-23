import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps, Box } from '../layout';
import { Text, Icon } from '..';

const IconContainer = styled('div')`
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledTag = styled(Box)<MinervaProps>(
  props => ({
    display: 'inline-block',
    backgroundColor: '#EDF2F7',
    borderRadius: '5px',
    padding: '8px 10px',
    ...props.theme.Tag,
  }),
  systemProps
);

const TagContent = styled('div')`
  display: flex;
  align-items: center;
`;

const TagLabel = styled(Text)``;

export interface TagProps extends MinervaProps {
  children?: React.ReactNode;
  showIcon?: boolean;
  icon?: string;
  onClickIcon?: (event: any) => void;
}

export const Tag = forwardRef(function Tag(
  { children, showIcon, icon, onClickIcon, ...props }: TagProps,
  ref
) {
  return (
    <StyledTag ref={ref} {...props}>
      <TagContent>
        <TagLabel>{children}</TagLabel>
        {showIcon && (
          <IconContainer data-testid="input-tag-icon" onClick={onClickIcon}>
            <Icon name={icon || 'x'} size="14px" />
          </IconContainer>
        )}
      </TagContent>
    </StyledTag>
  );
});

export default Tag;
