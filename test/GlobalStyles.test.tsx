import React from 'react';
import { render } from '@testing-library/react';
import styled from 'styled-components';
import 'jest-styled-components';
import { ThemeProvider, GlobalStyles } from '../src';

const PlainButton = styled.button``;

describe('<GlobalStyles />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <GlobalStyles />
        <PlainButton>Test</PlainButton>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
