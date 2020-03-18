import React from 'react';
import styled from 'styled-components';
import { systemProps } from '../layout';
import Input, { InputProps } from '../Input';
import Tag from '../Tag';

const StyledTagsInput = styled(Input)(
  props => ({
    ...props.theme.TagsInput,
  }),
  systemProps
);

export interface TagsInput extends InputProps {
  tags: string[];
}

export const TagsInput = function TagsInput({ tags, ...props }: TagsInput) {
  return (
    <div>
      {tags && tags.map(tag => <Tag>{tag}</Tag>)}
      <StyledTagsInput {...props} />
    </div>
  );
};

export default TagsInput;
