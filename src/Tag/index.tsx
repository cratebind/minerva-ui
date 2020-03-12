import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps, Box } from '../layout';

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

const TagLabel = styled.p``;

export interface TagProps extends MinervaProps {
  children?: React.ReactNode;
}

export const Tag = forwardRef(function Tag(
  { children, ...props }: TagProps,
  ref
) {
  return (
    <StyledTag ref={ref} {...props}>
      <TagLabel>{children}</TagLabel>
    </StyledTag>
  );
});

export default Tag;
