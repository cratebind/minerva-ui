import React, { createRef } from 'react';
import styled from 'styled-components';
import Input, { InputProps } from '../Input';
import Tag from '../Tag';

const StyledTagsInput = styled.ul`
  background: white;
  box-sizing: border-box;
  border: 1px solid #d2d6dc;
  padding: 5px 32px 5px 12px;
  border-width: 1px;
  border-radius: 4px;
  transition: all 250ms ease 0s;
  outline: none;
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;

  li {
    margin: 0 2px;
  }
`;

const StyledInput = styled(Input)`
  border: none;

  &:focus {
    box-shadow: none;
  }
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
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  return (
    <StyledTagsInput onClick={() => inputRef.current.focus()}>
      {tags &&
        tags.map((tag, i) => (
          <li key={tag + i}>
            <Tag
              data-testid="tag"
              showIcon={true}
              onClickIcon={e => {
                e.preventDefault();
                onClickIcon(i);
              }}
            >
              {tag}
            </Tag>
          </li>
        ))}
      <li>
        <StyledInput ref={inputRef} data-testid="input" {...props} />
      </li>
    </StyledTagsInput>
  );
};

export default TagsInput;
