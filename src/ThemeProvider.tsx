import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const exportedTheme = {
  Button: {
    container: {
      // backgroundColor: 'rgb(49, 151, 149)',
      // borderRadius: 4,
      // height: 33,
      // paddingTop: 7,
      // paddingBottom: 7,
      // paddingLeft: 14,
      // paddingRight: 14,
    },
    text: {
      // fontSize: 16,
      // letterSpacing: {
      //   unit: 'PERCENT',
      //   value: 0,
      // },
      // lineHeight: {
      //   unit: 'AUTO',
      // },
      // fontWeight: 'regular',
    },
  },
  Text: {
    // fontSize: 16,
    // lineHeight: '19px',
    // opacity: 1,
    // color: 'rgb(148, 148, 148)',
  },
  colors: {
    primary: '#6979F8',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
};

export interface ProviderProps {
  /** theme config object to style components */
  theme?: object;
  /** array of a type! */
  children?: React.ReactNode;
}

function ThemeProvider({ theme = exportedTheme, children }: ProviderProps) {
  // console.log({ theme });
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

// const useTheme = () => {
//   const theme = useContext(ThemeContext);
//   if (theme === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return theme;
// };

export default ThemeProvider;
// export { useTheme };
