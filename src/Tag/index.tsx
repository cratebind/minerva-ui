import React from 'react';
import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';
import { MinervaProps } from '../layout';

const StyledTag = styled('div')<any>(
  props => ({
    display: 'inline-block',
    backgroundColor: '#EDF2F7',
    borderRadius: '5px',
    padding: '8px 10px',
    ...props.theme.Tag,
  }),
  color,
  space,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  background,
  border,
  typography
);

const TagLabel = styled.p``;

export interface TagProps extends MinervaProps {
  children?: React.ReactNode;
  props?: any;
}

export const Tag = ({ children, ...props }: TagProps) => {
  return (
    <StyledTag {...props}>
      <TagLabel>{children}</TagLabel>
    </StyledTag>
  );
};

export default Tag;
