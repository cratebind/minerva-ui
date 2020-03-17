import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from '../src';
import { ThemeProvider } from '../src';

describe('<Button />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Button>Test</Button>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should pass basic style props ', () => {
    const color = '#e3e3e3';
    const { getByRole } = render(
      <ThemeProvider>
        <Button color={color}>Grey Text Button</Button>
      </ThemeProvider>
    );

    expect(getByRole('button')).toHaveStyleRule('color', color);
  });

  it('should pass shorthand props', () => {
    const backgroundColor = '#e3e3e3';
    const { getByRole } = render(
      <ThemeProvider>
        <Button bg={backgroundColor}>Disabled Button</Button>
      </ThemeProvider>
    );

    const button = getByRole('button');

    expect(button).toHaveStyleRule('background-color', backgroundColor);
  });

  it('should pass shorthand pseudo props', () => {
    const backgroundColor = '#e3e3e3';
    const { getByRole } = render(
      <ThemeProvider>
        <Button _disabled={{ backgroundColor }} disabled>
          Disabled Button
        </Button>
      </ThemeProvider>
    );

    const button = getByRole('button');

    expect(button).toHaveStyleRule('background-color', backgroundColor, {
      modifier: ':disabled',
    });
  });

  it('should allow theme variables to be used in pseudo props', () => {
    const backgroundColor = 'purple.500';
    const { getByRole } = render(
      <ThemeProvider>
        <Button _disabled={{ backgroundColor }} disabled>
          Disabled Button
        </Button>
      </ThemeProvider>
    );

    const button = getByRole('button');

    expect(button).toHaveStyleRule('background-color', '#9061f9', {
      modifier: ':disabled',
    });
  });

  it('should handle "as" prop', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Button as="a">"As" Button</Button>
      </ThemeProvider>
    );

    const button = getByRole('button');

    expect(button.tagName).toEqual('A');
  });

  it('should change style if disabled', () => {
    const { container, getByRole } = render(
      <ThemeProvider>
        <Button disabled>Disabled Button</Button>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
    expect(getByRole('button')).toHaveStyleRule('opacity', '0.4', {
      modifier: ':disabled',
    });
    expect(getByRole('button')).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    });
  });

  // @TODO: Figure out how to test media queries more consistently
  // it('should change style for media queries', () => {
  //   const mobileColor = '#fff';
  //   const desktopColor = '#000';
  //   const { container, getByRole } = render(
  //     <ThemeProvider>
  //       <Button backgroundColor={[mobileColor, desktopColor]}>
  //         Responsive Button
  //       </Button>
  //     </ThemeProvider>
  //   );

  //   expect(container).toMatchSnapshot();

  //   const button = getByRole('button');

  //   // expect(button).toHaveStyleRule('backgroundColor', mobileColor, {
  //   //   media: 'screen and (min-width:60em)',
  //   // });
  //   expect(button).toHaveStyleRule('backgroundColor', desktopColor, {
  //     media: '(min-width:40em)',
  //   });
  // });

  // @TODO: Figure out how to simulate hover styles?
  // it('should change style if hovered', () => {
  //   const { getByRole } = render(
  //     <ThemeProvider>
  //       <Button>Hover Button</Button>
  //     </ThemeProvider>
  //   );

  //   const button = getByRole('button');

  //   // fireEvent.mouseOver(button);

  //   expect(button).toHaveStyleRule('backgroundColor', '#f9fafb', {
  //     modifier: ':hover',
  //   });
  // });

  it('should contain spinner with `isLoading` prop', () => {
    const { container, getByRole } = render(
      <ThemeProvider>
        <Button isLoading>Loading Button</Button>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
    expect(getByRole('button')).not.toHaveTextContent('Loading Button');
  });

  it('should display text', () => {
    const content = 'Hello';
    const { container } = render(
      <ThemeProvider>
        <Button>{content}</Button>
      </ThemeProvider>
    );

    expect(container).toHaveTextContent(content);
  });

  it('should show default background color', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Button>Test</Button>
      </ThemeProvider>
    );

    const button = getByRole('button');

    expect(button).toHaveStyleRule('background-color', '#fff');
  });

  it('should show new background color if provided in theme', () => {
    const newColor = 'green';
    const theme = {
      Button: {
        backgroundColor: newColor,
      },
    };

    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button>Test</Button>
      </ThemeProvider>
    );

    const button = getByRole('button');

    expect(button).toHaveStyleRule('background-color', newColor);
  });
});
