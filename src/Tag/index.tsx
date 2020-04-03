import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps, Box } from '../layout';
import { Icon } from '../Icon';
import { useComponentStyles } from '../theme';

export const TagIcon = styled('div')`
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
    ...props.theme.Tag,
  }),
  systemProps
);

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
  const componentStyles = useComponentStyles('Tag');
  return (
    <StyledTag ref={ref} {...componentStyles} {...props}>
      {children}
      {showIcon && (
        <TagIcon data-testid="input-tag-icon" onClick={onClickIcon}>
          <Icon name={icon || 'x'} size="14px" />
        </TagIcon>
      )}
    </StyledTag>
  );
});

export default Tag;
