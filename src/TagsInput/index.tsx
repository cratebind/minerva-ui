import React from 'react';
import styled from 'styled-components';
import Input, { InputProps } from '../Input';
import Tag, { TagButton } from '../Tag';
import { Box } from '../layout';

const StyledTagsInput = styled.ul`
  background: white;
  box-sizing: border-box;
  border: 1px solid #d2d6dc;
  padding: 3px 12px 3px 12px;
  border-width: 1px;
  border-radius: 4px;
  transition: all 250ms ease 0s;
  outline: none;
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  flex: 1 1 0%;

  li {
    margin: 0 2px;
  }
`;

const StyledInput = styled(Input)`
  display: inline-block;
  width: 100%;
  border: none;
  padding: 0;
  padding-left: 10px;
  line-height: 44px;
  height: 100%;
  min-height: 44px;

  &:focus {
    box-shadow: none;
  }
`;

export const ListItem = styled(Box)`
  list-style-type: none;
  margin-right: 5px;
`;

export interface TagsInput extends InputProps {
  tags: string[];
  onClickIcon: (index: number) => void;
}

export const TagsInput = function TagsInput({
  tags,
  onClickIcon,
  ...props
}: TagsInput) {
  const inputRef = React.createRef<HTMLInputElement>();
  return (
    <StyledTagsInput
      onClick={() => inputRef && inputRef.current && inputRef.current.focus()}
    >
      {tags &&
        tags.map((tag, i) => (
          <ListItem key={tag + i}>
            <Tag data-testid="tag" my="2px">
              {tag}
              <TagButton onClick={() => onClickIcon(i)} />
            </Tag>
          </ListItem>
        ))}
      <ListItem flexGrow={1}>
        <StyledInput ref={inputRef} data-testid="input" {...props} />
      </ListItem>
    </StyledTagsInput>
  );
};

export default TagsInput;
