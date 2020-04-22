import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Box, PseudoBox } from '../src';
import { ThemeProvider } from '../src';

describe('<Box />', () => {
  it('should render', () => {
    const testId = `box`;
    const { getByTestId } = render(
      <ThemeProvider>
        <Box data-testid={testId} />
      </ThemeProvider>
    );
    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('should not forward style props', () => {
    const testId = `box`;
    const { getByTestId } = render(
      <ThemeProvider>
        <Box width="100px" data-testid={testId} />
      </ThemeProvider>
    );

    const element = getByTestId(testId);
    expect(element.getAttribute('width')).toBeNull();
  });

  it('should allow wrapped components to pass styles', () => {
    const testId = `box`;
    const WrappedComponent = styled(Box)`
      width: 50px;
    `;

    const { getByTestId } = render(
      <ThemeProvider>
        <WrappedComponent data-testid={testId} width="50px" />
      </ThemeProvider>
    );

    const element = getByTestId(testId);

    expect(element).toHaveStyleRule('width', '50px');
    expect(element.getAttribute('width')).toBeNull();
  });

  it('should allow pseudobox to pass styles', () => {
    const testId = `box`;

    const { getByTestId } = render(
      <ThemeProvider>
        <PseudoBox as="button" data-testid={testId} width="50px" />
      </ThemeProvider>
    );

    const element = getByTestId(testId);

    expect(element).toHaveStyleRule('width', '50px');
    expect(element.getAttribute('width')).toBeNull();
    expect(element).toMatchInlineSnapshot(`
      .c0 {
        box-sizing: border-box;
        min-width: 0;
        color: #374151;
        width: 50px;
      }

      <button
        class="sc-AxjAm c0"
        data-testid="box"
      />
    `);
  });
});
