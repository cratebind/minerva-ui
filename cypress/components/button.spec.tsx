/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import {
  Button,
  ThemeProvider,
  GlobalStyles,
  defaultTheme,
} from '../../dist/minerva-ui.esm';
import { createGlobalStyle } from 'styled-components';

const text = 'Button';

// by default, we are using the native font stack
// but this font is different on macOS, Linux and Windows
// to make sure our screenshots are consistent, we force them all to use the same font family
const StandardizeFont = createGlobalStyle`
  html {
    font-family: Helvetica;
  }
`;

const customTheme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    body: 'Helvetica',
    heading: 'Helvetica',
  },
};

const MinervaProvider = ({ children, theme = customTheme }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <StandardizeFont />
    {children}
  </ThemeProvider>
);

describe('<Button />', () => {
  it('renders and shows inner text without a provider', () => {
    mount(
      <>
        <GlobalStyles />
        <StandardizeFont />
        <Button>{text}</Button>
      </>
    );

    cy.contains(text).should('be.visible');

    cy.get('button').toMatchImageSnapshot();
  });

  it('renders with a theme provider', () => {
    mount(
      <MinervaProvider>
        <Button>{text}</Button>
      </MinervaProvider>
    );

    cy.contains(text).should('be.visible');
    cy.get('button').toMatchImageSnapshot();
  });
});
