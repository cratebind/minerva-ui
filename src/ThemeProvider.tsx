import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import baseTheme from './theme';

// const defaultTheme = {};

export interface ProviderProps {
  /** theme config object to style components */
  theme?: object;
  /** array of a type! */
  children?: React.ReactNode;
}

function ThemeProvider({ theme = baseTheme, children }: ProviderProps) {
  return (
    <StyledThemeProvider theme={{ ...baseTheme, ...theme }}>
      {children}
    </StyledThemeProvider>
  );
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
