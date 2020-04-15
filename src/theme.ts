import { Theme } from 'styled-system';
import * as Icon from 'react-feather';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { buttonVariants } from './Button';

const logoColor = '#551A8B';

// https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149
function toKebabCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

export interface MinervaTheme extends Theme {
  Button?: React.CSSProperties;
  Text?: React.CSSProperties;
  Input?: React.CSSProperties;
  Image?: React.CSSProperties;
  InputField?: React.CSSProperties;
  Link?: React.CSSProperties;
  Checkbox?: React.CSSProperties;
  Switch?: React.CSSProperties;
  Select?: React.CSSProperties;
  Tag?: React.CSSProperties;
  Skeleton?: React.CSSProperties;
  icons: any;
  defaultBorderColor?: string;
  variants?: any;
}

const breakpoints: any = ['640px', '768px', '1024px', '1280px'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const defaultTheme: MinervaTheme = {
  Button: {
    backgroundColor: '#fff',
    borderWidth: '1px',
    color: '#374151',
    fontWeight: 500,
    display: 'inline-flex',
    WebkitAppearance: 'none',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    fontSize: '14px',
    lineHeight: '20px',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRadius: '5px',
  },
  Checkbox: {},
  Image: {},
  Input: {
    WebkitAppearance: 'none',
    fontSize: '16px',
    borderStyle: 'solid',
    borderColor: '#d2d6dc',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '12px',
    paddingRight: '32px',
    borderWidth: '1px',
    borderRadius: '4px',
    transition: 'all 250ms ease 0s',
    outline: 'none',
    width: '100%',
    // ':focus': {
    //   borderColor: '#a4cafe',
    //   boxShadow: '0 0 0 3px rgba(164,202,254,.45)',
    // },
    // ':disabled': {
    //   backgroundColor: '#EAEAEA',
    //   color: '#8F8F8F',
    //   cursor: 'not-allowed',
    // },
  },
  InputField: {},
  Link: {},
  Tag: {},
  Text: {},
  Select: {},
  Skeleton: {},
  Switch: {},
  defaultBorderColor: '#d2d6dc',
  icons: Object.keys(Icon).reduce((result, iconName) => {
    result[toKebabCase(iconName)] = Icon[iconName];
    return result;
  }, {}),
  colors: {
    // custom colors
    // primary: '#6979F8',
    primary: '#525252',
    logoColor,

    // Tailwind default colors
    transparent: 'transparent',

    black: '#000',
    white: '#fff',
    gray: {
      '50': '#f9fafb',
      '100': '#f4f5f7',
      '200': '#e5e7eb',
      '300': '#d2d6dc',
      '400': '#9fa6b2',
      '500': '#6b7280',
      '600': '#4b5563',
      '700': '#374151',
      '800': '#252f3f',
      '900': '#161e2e',
    },
    'cool-gray': {
      '50': '#fbfdfe',
      '100': '#f1f5f9',
      '200': '#e2e8f0',
      '300': '#cfd8e3',
      '400': '#97a6ba',
      '500': '#64748b',
      '600': '#475569',
      '700': '#364152',
      '800': '#27303f',
      '900': '#1a202e',
    },
    red: {
      '50': '#fdf2f2',
      '100': '#fde8e8',
      '200': '#fbd5d5',
      '300': '#f8b4b4',
      '400': '#f98080',
      '500': '#f05252',
      '600': '#e02424',
      '700': '#c81e1e',
      '800': '#9b1c1c',
      '900': '#771d1d',
    },
    orange: {
      '50': '#fff8f1',
      '100': '#feecdc',
      '200': '#fcd9bd',
      '300': '#fdba8c',
      '400': '#ff8a4c',
      '500': '#ff5a1f',
      '600': '#d03801',
      '700': '#b43403',
      '800': '#8a2c0d',
      '900': '#771d1d',
    },
    yellow: {
      '50': '#fdfdea',
      '100': '#fdf6b2',
      '200': '#fce96a',
      '300': '#faca15',
      '400': '#e3a008',
      '500': '#c27803',
      '600': '#9f580a',
      '700': '#8e4b10',
      '800': '#723b13',
      '900': '#633112',
    },
    green: {
      '50': '#f3faf7',
      '100': '#def7ec',
      '200': '#bcf0da',
      '300': '#84e1bc',
      '400': '#31c48d',
      '500': '#0e9f6e',
      '600': '#057a55',
      '700': '#046c4e',
      '800': '#03543f',
      '900': '#014737',
    },
    teal: {
      '50': '#edfafa',
      '100': '#d5f5f6',
      '200': '#afecef',
      '300': '#7edce2',
      '400': '#16bdca',
      '500': '#0694a2',
      '600': '#047481',
      '700': '#036672',
      '800': '#05505c',
      '900': '#014451',
    },
    blue: {
      '50': '#ebf5ff',
      '100': '#e1effe',
      '200': '#c3ddfd',
      '300': '#a4cafe',
      '400': '#76a9fa',
      '500': '#3f83f8',
      '600': '#1c64f2',
      '700': '#1a56db',
      '800': '#1e429f',
      '900': '#233876',
    },
    indigo: {
      '50': '#f0f5ff',
      '100': '#e5edff',
      '200': '#cddbfe',
      '300': '#b4c6fc',
      '400': '#8da2fb',
      '500': '#6875f5',
      '600': '#5850ec',
      '700': '#5145cd',
      '800': '#42389d',
      '900': '#362f78',
    },
    purple: {
      '50': '#f6f5ff',
      '100': '#edebfe',
      '200': '#dcd7fe',
      '300': '#cabffd',
      '400': '#ac94fa',
      '500': '#9061f9',
      '600': '#7e3af2',
      '700': '#6c2bd9',
      '800': '#5521b5',
      '900': '#4a1d96',
    },
    pink: {
      '50': '#fdf2f8',
      '100': '#fce8f3',
      '200': '#fad1e8',
      '300': '#f8b4d9',
      '400': '#f17eb8',
      '500': '#e74694',
      '600': '#d61f69',
      '700': '#bf125d',
      '800': '#99154b',
      '900': '#751a3d',
    },
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
  breakpoints,
  fonts: {
    sans:
      'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    serif: 'Georgia,Cambria,"Times New Roman",Times,serif',
    mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    body:
      'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    heading: 'inherit',
    monospace:
      'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
  shadows: {
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    sm: '0 1px 2px 0 rgba(0,0,0,.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
  space: {
    px: '1px',
    '0': '0',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '13': '3.25rem',
    '14': '3.5rem',
    '15': '3.75rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '36': '9rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
  },
  sizes: {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
  },
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  // variants
  variants: {
    Button: buttonVariants,
  },
};

export function useTheme(): MinervaTheme {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    console.warn(
      `useTheme cannot be used outside a <ThemeProvider />\n See: minerva-ui.netlify.com/docs/theming`
    );
  }

  return context;
}

// use this to avoid spreading properties for a component that doesn't have theme styles
export function useComponentStyles(componentName: string): React.CSSProperties {
  const theme = useTheme();

  return theme ? theme[componentName] : {};
}

export default defaultTheme;
