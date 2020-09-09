import React from 'react';
import { GlobalStyles, ThemeProvider, Link } from 'minerva-ui';
import { createGlobalStyle } from 'styled-components';
import { AppProvider } from '../components/AppContext';
import ThemeBuilder from '../components/ThemeBuilder';

const ThemeBuilderStyles = createGlobalStyle`
  html, body {
    background-color: #fff;
    color: #333;
  }
`;

function ThemeBuilderPage() {
  return (
    <ThemeProvider>
      <AppProvider>
        <GlobalStyles />
        <ThemeBuilderStyles />
        <ThemeBuilder />
      </AppProvider>
    </ThemeProvider>
  );
}

export default ThemeBuilderPage;
