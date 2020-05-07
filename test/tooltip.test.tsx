import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { Button, Tooltip, ThemeProvider } from '../src';

describe('<Tooltip />', () => {
  it('should render', () => {
    const { container, debug } = render(
      <ThemeProvider>
        <Tooltip label="Tooltip Text">
          <Button>Button Text</Button>
        </Tooltip>
      </ThemeProvider>
    );

    fireEvent.mouseOver(container?.firstElementChild);
    debug(container);
    expect(container).toMatchSnapshot();
  });

  // it('should pass basic style props ', () => {
  //   const color = '#e3e3e3';
  //   const { getByRole } = render(
  //     <ThemeProvider>
  //       <Tooltip color={color}>Grey Text Tooltip</Tooltip>
  //     </ThemeProvider>
  //   );

  //   expect(getByRole('button')).toHaveStyleRule('color', color);
  // });

  // it('should pass shorthand props', () => {
  //   const backgroundColor = '#e3e3e3';
  //   const { getByRole } = render(
  //     <ThemeProvider>
  //       <Tooltip bg={backgroundColor}>Disabled Tooltip</Tooltip>
  //     </ThemeProvider>
  //   );

  //   const button = getByRole('button');

  //   expect(button).toHaveStyleRule('background-color', backgroundColor);
  // });

  // it('should allow custom props', () => {
  //   const { getByRole } = render(
  //     <ThemeProvider>
  //       <Tooltip radiusLeft="4px" textTransform="capitalize" shadow="md">
  //         Disabled Tooltip
  //       </Tooltip>
  //     </ThemeProvider>
  //   );

  //   const button = getByRole('button');

  //   expect(button).toHaveStyleRule('border-top-left-radius', '4px');
  //   expect(button).toHaveStyleRule('border-bottom-left-radius', '4px');
  //   expect(button).toHaveStyleRule('text-transform', 'capitalize');
  //   expect(button).toHaveStyleRule(
  //     'box-shadow',
  //     '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)'
  //   );
  // });
});
