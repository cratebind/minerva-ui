import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import 'jest-styled-components';
import { LEAVE_TIMEOUT, MOUSE_REST_TIMEOUT } from '@reach/tooltip';
import { Tooltip, ThemeProvider } from '../src';

function leaveTooltip(element: HTMLElement) {
  fireEvent.mouseLeave(element);
  jest.advanceTimersByTime(LEAVE_TIMEOUT);
}

type Positions = 'top' | 'left' | 'bottom' | 'right' | 'default';

describe('<Tooltip />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  describe('rendering', () => {
    const POSITIONS: Array<Positions> = [
      'top',
      'left',
      'bottom',
      'right',
      'default',
    ];

    POSITIONS.forEach(position => {
      it('renders all positions on hover', async () => {
        let tooltipText = 'Look at me';
        let { getByText, debug } = render(
          <ThemeProvider>
            <p>
              <Tooltip
                placement={position}
                style={{ display: 'block' }}
                label={tooltipText}
              >
                <span>Trigger</span>
              </Tooltip>
            </p>
          </ThemeProvider>
        );

        let trigger = getByText('Trigger');
        debug(trigger);
        act(() => {
          fireEvent.mouseOver(trigger);
          jest.advanceTimersByTime(MOUSE_REST_TIMEOUT);
        });

        let tooltip = getByText(tooltipText);
        expect(tooltip.tagName).toBe('DIV');

        act(() => void leaveTooltip(trigger));
      });
    });
  });

  // describe('rendering', () => {
  //   it('renders as any HTML element', () => {
  //     let tooltipText = 'Look at me';
  //     let { getByText } = render(
  //       <p>
  //         <Tooltip as="span" style={{ display: 'block' }} label={tooltipText}>
  //           <span>Trigger</span>
  //         </Tooltip>
  //       </p>
  //     );

  //     let trigger = getByText('Trigger');
  //     act(() => {
  //       fireEvent.mouseOver(trigger);
  //       jest.advanceTimersByTime(MOUSE_REST_TIMEOUT);
  //     });

  //     let tooltip = getByText(tooltipText);
  //     expect(tooltip.tagName).toBe('SPAN');

  //     act(() => void leaveTooltip(trigger));
  //   });
  // });

  // it('should render', () => {
  //   const { container, debug } = render(
  //     <ThemeProvider>
  //       <Tooltip label="Tooltip Text">
  //         <Button>Button Text</Button>
  //       </Tooltip>
  //     </ThemeProvider>
  //   );

  //   fireEvent.mouseOver(container?.firstElementChild);
  //   debug(container);
  //   expect(container).toMatchSnapshot();
  // });

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
