import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Block, Flex } from '../src';
import { ThemeProvider } from '../src';

const ThemedBlock = ({ children = 'Default Text', ...props }) => (
  <ThemeProvider>
    <Block data-testid="block" {...props}>
      {children}
    </Block>
  </ThemeProvider>
);

describe('Layout Components', () => {
  it('should render <Flex />', () => {
    const text = 'Flex component text';
    const { getByTestId } = render(<Flex data-testid="flex">{text}</Flex>);

    const element = getByTestId('flex');
    expect(element).toHaveTextContent(text);
    expect(element).toHaveStyleRule('display', 'flex');
  });

  it('should render <Block />', () => {
    const text = 'Block component text';
    const { getByTestId } = render(<Block data-testid="block">{text}</Block>);

    const element = getByTestId('block');
    expect(element).toHaveTextContent(text);
    expect(element).toHaveStyleRule('display', 'block');
  });
});

describe('Border Radius', () => {
  it('should render', () => {
    const { container } = render(<ThemedBlock borderRadius="sm" />);
    expect(container).toMatchSnapshot();
  });

  it('should display text', () => {
    const content = 'Content Text';
    const { container } = render(
      <ThemedBlock borderRadius="sm">{content}</ThemedBlock>
    );

    expect(container).toHaveTextContent(content);
  });

  it('should allow border radius aliases', () => {
    const { getByTestId } = render(<ThemedBlock borderRadius="sm" />);

    const block = getByTestId('block');

    expect(block).toHaveStyleRule('border-radius', '0.125rem');
  });

  it('should allow custom aliases', () => {
    const borderRadiusValue = '10rem';
    const theme = {
      radii: {
        ultra: borderRadiusValue,
      },
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Block data-testid="block" borderRadius="ultra">
          Test
        </Block>
      </ThemeProvider>
    );

    const block = getByTestId('block');

    expect(block).toHaveStyleRule('border-radius', borderRadiusValue);
  });
});

describe('Colors', () => {
  it('should render', () => {
    const { container } = render(<ThemedBlock bg="teal.500" />);
    expect(container).toMatchSnapshot();
  });

  it('should display correct default hex color', () => {
    const { getByTestId } = render(<ThemedBlock bg="teal.500" />);

    const block = getByTestId('block');

    expect(block).toHaveStyleRule('background-color', '#38b2ac');
  });

  it('should allow custom theme colors', () => {
    const colorValue = '#6495ed';
    const theme = {
      colors: {
        cornflowerBlue: {
          500: colorValue,
        },
      },
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Block data-testid="block" bg="cornflowerBlue.500">
          Test
        </Block>
      </ThemeProvider>
    );

    const block = getByTestId('block');

    expect(block).toHaveStyleRule('background-color', colorValue);
  });
});
