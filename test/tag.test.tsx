import React from 'react';
import { render } from '@testing-library/react';
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
    const { getByTestId } = render(
      <ThemeProvider>
        <Tag color={color} data-testid="tag">
          Magenta
        </Tag>
      </ThemeProvider>
    );
    const tag = getByTestId('tag');
    expect(tag).toHaveStyleRule('color', color);
  });

  it('should pass shorthand props', () => {
    const backgroundColor = '#008080';
    const { getByTestId } = render(
      <ThemeProvider>
        <Tag bg={backgroundColor} data-testid="tag">
          Teal Tag
        </Tag>
      </ThemeProvider>
    );
    const tag = getByTestId('tag');
    expect(tag).toHaveStyleRule('background-color', backgroundColor);
  });

  it('should display text', () => {
    const content = 'I AM A TAG';
    const { getByTestId } = render(
      <ThemeProvider>
        <Tag data-testid="tag">{content}</Tag>
      </ThemeProvider>
    );
    const tag = getByTestId('tag');
    expect(tag).toHaveTextContent(content);
  });

  it('should show default background color', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Tag data-testid="tag">Test</Tag>
      </ThemeProvider>
    );
    const tag = getByTestId('tag');
    expect(tag).toHaveStyle('background-color: #EDF2F7');
  });

  it('should show new background color if provided in theme', () => {
    const newColor = 'green';
    const theme = {
      Tag: {
        backgroundColor: newColor,
      },
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Tag data-testid="tag">Test</Tag>
      </ThemeProvider>
    );
    const tag = getByTestId('tag');
    expect(tag).toHaveStyle(`background-color: ${newColor}`);
  });
});
