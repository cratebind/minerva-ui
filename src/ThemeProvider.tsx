import { ToastProvider } from './Notification';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import defaultTheme from './theme';

// const defaultTheme = {};

export interface ProviderProps {
  /** theme config object to style components */
  theme?: object;
  /** array of a type! */
  children?: React.ReactNode;
}

function ThemeProvider({ theme = defaultTheme, children }: ProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <ToastProvider>{children}</ToastProvider>
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
