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

const customVariants = {
  colors: {
    ...defaultTheme.colors,
    primary: '#000',
    secondary: '#8E82A9',
    tertiary: '#fff',
  },
  Button: {
    ...defaultTheme.Button,
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: '16px',
    lineHeight: '24px',
  },
  Text: {
    ...defaultTheme.Text,
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: '14px',
    lineHeight: '24px',
  },
  Tag: {
    ...defaultTheme.Tag,
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: '14px',
    lineHeight: '24px',
  },
  variants: {
    Button: {
      ...defaultTheme.variants.Button,
      tertiary: {
        bg: '#2E2A36',
        color: '#fff',
        borderRadius: '5px',
        borderColor: '#2E2A36',
        _hover: {
          // "bg": "indigo.900",
        },
      },
    },
  },
};

export const CustomThemeProvider = props => {
  return (
    <ThemeProvider
      theme={{
        ...defaultTheme,
        icons: {
          ...defaultIcons,
          ...customIcons,
        },
        ...customVariants,
      }}
      {...props}
    />
  );
};

export default function CustomApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <ReachGlobalStyles />
      <AnimationStyles />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js" />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}
