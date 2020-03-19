import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider, TagsInput } from '../src';

const ExampleTagInput = props => {
  const initialState: string[] = [];
  const [tags, setTags] = useState(initialState);
  const [inputVal, setInputVal] = React.useState('');

  const addTag = e => {
    setTags([...tags, inputVal]);
    setInputVal('');
  };

  const removeTag = index => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
  };

  return (
    <ThemeProvider>
      <TagsInput
        value={inputVal}
        tags={tags}
        onKeyDown={e => {
          if (e.key === 'Enter' && inputVal) {
            addTag(e);
          }
          if (e.key === 'Backspace') {
            removeTag(tags.length - 1);
          }
        }}
        onChange={e => setInputVal(e.target.value)}
        onClickIcon={removeTag}
      />
    </ThemeProvider>
  );
};

describe('<TagsInput />', () => {
  it('should show value in input', () => {
    const content = 'test';
    const { getByTestId } = render(<ExampleTagInput />);
    const input = getByTestId('input');

    fireEvent.change(input, {
      target: {
        value: content,
      },
    });
    expect(input).toHaveValue(content);
  });
  it('should contain a value tag and a cleared input upon pressing Enter key', () => {
    const content = 'test';
    const { getByTestId } = render(<ExampleTagInput />);
    const input = getByTestId('input');
    const container = getByTestId('container');
    fireEvent.change(input, {
      target: {
        value: content,
      },
    });
    expect(input).toHaveValue(content);

    fireEvent.keyDown(container, {
      key: 'Enter',
    });
    expect(input).toHaveValue('');
    const tag = getByTestId('tag');
    expect(tag).toBeInTheDocument();
  });

  it('should remove the value tag upon pressing Backspace key', () => {
    const content = 'test';
    const { getByTestId } = render(<ExampleTagInput />);
    const input = getByTestId('input');
    const container = getByTestId('container');

    fireEvent.change(input, {
      target: {
        value: content,
      },
    });

    fireEvent.keyDown(container, {
      key: 'Enter',
    });

    const tag = getByTestId('tag');
    expect(tag).toBeInTheDocument();

    fireEvent.keyDown(container, {
      key: 'Backspace',
    });
    expect(tag).not.toBeInTheDocument();
  });
});
