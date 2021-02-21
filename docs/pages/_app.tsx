import React from 'react';
import {
  AnimationStyles,
  defaultIcons,
  defaultTheme,
  ReachGlobalStyles,
  ThemeProvider,
} from 'minerva-ui';
import {
  Activity,
  CaretLeft,
  CaretRight,
  Envelope,
  FloppyDisk,
  List,
  Plus,
} from 'phosphor-react';
import 'nextra-theme-docs/style.css';
import '../global.css';
import { Lock } from 'react-feather';

export const customIcons = {
  mail: Envelope,
  activity: Activity,
  plus: Plus,
  save: FloppyDisk,
  'chevron-left': CaretLeft,
  'chevron-right': CaretRight,
  lock: Lock,
  menu: List,
};

export const CustomThemeProvider = props => (
  <ThemeProvider
    theme={{
      ...defaultTheme,
      icons: {
        ...defaultIcons,
        ...customIcons,
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
