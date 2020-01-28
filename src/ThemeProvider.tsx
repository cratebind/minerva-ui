/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { useContext } from 'react';
// import theme from "../theme";
// const defaultTheme = {};

const defaultTheme = {
  Button: {},
  Text: {
    // fontSize: 16,
    lineHeight: '19px',
  },
};

const exportedTheme = {
  Button: {
    container: {
      backgroundColor: 'rgb(49, 151, 149)',
      borderRadius: 4,
      height: 33,
      paddingTop: 7,
      paddingBottom: 7,
      paddingLeft: 14,
      paddingRight: 14,
    },
    text: {
      fontSize: 16,
      letterSpacing: {
        unit: 'PERCENT',
        value: 0,
      },
      lineHeight: {
        unit: 'AUTO',
      },
      // fontFamily: 'Roboto',
      fontWeight: 'regular',
    },
  },
  Text: {
    fontSize: 16,
    lineHeight: '19px',
    opacity: 1,
    color: 'rgb(148, 148, 148)',
  },
};

// const exportedTheme = {
//   // Button: {
//   //   container: {
//   //     backgroundColor: 'rgb(49, 151, 149)',
//   //     borderRadius: 4,
//   //     height: 34,
//   //   },
//   //   text: {
//   //     fontSize: 16,
//   //     letterSpacing: {
//   //       unit: 'PERCENT',
//   //       value: 0,
//   //     },
//   //     lineHeight: {
//   //       unit: 'AUTO',
//   //     },
//   //     fontFamily: 'Roboto',
//   //     fontWeight: 'regular',
//   //   },
//   // },
//   // Text: {
//   //   fontSize: 16,
//   //   lineHeight: '19px',
//   //   // opacity: 1,
//   //   color: 'rgb(148, 148, 148)',
//   // },
//   colors: {
//     primary: '#6979F8',
//   },
// };

export interface ProviderProps {
  /** theme config object to style components */
  theme?: object;
  /** array of a type! */
  children?: React.ReactNode;
}

function ThemeProvider({ theme = exportedTheme, children }: ProviderProps) {
  console.log({ theme });
  return (
    <StyledThemeProvider theme={theme}>
      <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>
        {children}
      </EmotionThemeProvider>
    </StyledThemeProvider>
  );
}

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};

export default ThemeProvider;
export { useTheme };
