import React from 'react';
import { ThemeProvider } from 'minerva-ui';
import { createGlobalStyle } from 'styled-components';
import { AppProvider } from '../components/theme-builder/AppContext';
import ThemeBuilder from '../components/theme-builder/ThemeBuilder';

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
        <ThemeBuilderStyles />
        <ThemeBuilder />
      </AppProvider>
    </ThemeProvider>
  );
}

export default ThemeBuilderPage;
