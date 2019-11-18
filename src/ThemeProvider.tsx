/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { useContext } from 'react';
// import theme from "../theme";
// const defaultTheme = {};

const defaultTheme = {
  Button: {
    container: {},
    text: {},
  },
  Text: {
    // fontSize: 16,
    lineHeight: '19px',
  },
};

const exportedTheme = {
  // Button: {
  //   container: {
  //     backgroundColor: 'rgb(49, 151, 149)',
  //     borderRadius: 4,
  //     height: 34,
  //   },
  //   text: {
  //     fontSize: 16,
  //     letterSpacing: {
  //       unit: 'PERCENT',
  //       value: 0,
  //     },
  //     lineHeight: {
  //       unit: 'AUTO',
  //     },
  //     fontFamily: 'Roboto',
  //     fontWeight: 'regular',
  //   },
  // },
  // Text: {
  //   fontSize: 16,
  //   lineHeight: '19px',
  //   // opacity: 1,
  //   color: 'rgb(148, 148, 148)',
  // },
};

const ThemeProvider = ({ theme = exportedTheme, children }) => {
  return (
    <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>
      {children}
    </EmotionThemeProvider>
  );
};

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};

export default ThemeProvider;
export { useTheme };
