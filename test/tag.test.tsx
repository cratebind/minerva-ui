import React from 'react';
import { render } from '@testing-library/react';
import { getByText } from '@testing-library/dom';
import 'jest-styled-components';
import { Tag } from '../src';
import { ThemeProvider } from '../src';

describe('<Tag />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag>Test</Tag>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should pass basic style props ', () => {
    const color = '#8B008B';
    const { container } = render(
      <ThemeProvider>
        <Tag color={color}>Magenta</Tag>
      </ThemeProvider>
    );
    const tag = getByText(container, /magenta/i).closest('div');
    expect(tag).toHaveStyleRule('color', color);
  });

  it('should pass shorthand props', () => {
    const backgroundColor = '#008080';
    const { container } = render(
      <ThemeProvider>
        <Tag bg={backgroundColor}>Teal Tag</Tag>
      </ThemeProvider>
    );
    const tag = getByText(container, /teal tag/i).closest('div');
    expect(tag).toHaveStyleRule('background-color', backgroundColor);
  });

  it('should display text', () => {
    const content = 'I AM A TAG';
    const { container } = render(
      <ThemeProvider>
        <Tag>{content}</Tag>
      </ThemeProvider>
    );
    const tag = getByText(container, /i am a tag/i);
    expect(tag).toHaveTextContent(content);
  });

  it('should show default background color', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag>Test</Tag>
      </ThemeProvider>
    );
    const tag = getByText(container, /test/i).closest('div');
    expect(tag).toHaveStyle('background-color: #EDF2F7');
  });

  it('should show new background color if provided in theme', () => {
    const newColor = 'green';
    const theme = {
      Tag: {
        backgroundColor: newColor,
      },
    };

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Tag>Test</Tag>
      </ThemeProvider>
    );
    const tag = getByText(container, /test/i).closest('div');
    expect(tag).toHaveStyle(`background-color: ${newColor}`);
  });
});
