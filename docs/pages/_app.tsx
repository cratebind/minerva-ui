import React from 'react';
import {
  AnimationStyles,
  defaultIcons,
  defaultTheme,
  ReachGlobalStyles,
  ThemeProvider,
} from 'minerva-ui';
import { Activity, Envelope, Plus } from 'phosphor-react';
import 'nextra-theme-docs/style.css';
import '../global.css';

export const CustomThemeProvider = props => (
  <ThemeProvider
    theme={{
      ...defaultTheme,
      icons: {
        ...defaultIcons,
        mail: Envelope,
        activity: Activity,
        plus: Plus,
      },
    }}
    {...props}
  />
);

export default function CustomApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <ReachGlobalStyles />
      <AnimationStyles />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}
