import React from 'react';
import { GlobalStyles } from 'minerva-ui';
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
    <AppProvider>
      <GlobalStyles />
      <ThemeBuilderStyles />
      <ThemeBuilder />
    </AppProvider>
  );
}

export default ThemeBuilderPage;
