import { forwardRef } from 'react';
import { system } from 'styled-system';
import {
  As,
  ForwardRefExoticComponentWithAs,
  ForwardRefWithAsRenderFunction,
} from './types';

// const isNumber = n => typeof n === 'number' && !isNaN(n);
// const getWidth = (n, scale) =>
//   get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');

export const config: any = {
  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii',
  },
  d: {
    property: 'display',
  },
  w: {
    property: 'width',
    scale: 'sizes',
    // transform: getWidth,
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  bgImg: {
    property: 'backgroundImage',
  },
  bgImage: {
    property: 'backgroundImage',
  },
  bgSize: {
    property: 'backgroundSize',
  },
  bgPos: {
    property: 'backgroundPosition',
  },
  bgRepeat: {
    property: 'backgroundRepeat',
  },
  pos: {
    property: 'position',
  },
  flexDir: {
    property: 'flexDirection',
  },
  shadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  textDecoration: { property: 'textDecoration' },
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: {
    property: 'backgroundAttachment',
  },
  outline: true,
  float: true,
  willChange: true,
};

config.bgAttachment = config.backgroundAttachment;
config.textDecor = config.textDecoration;
config.listStylePos = config.listStylePosition;
config.listStyleImg = config.listStyleImage;

const extraConfig = system(config);

export default extraConfig;

// Create an issue on @styled-system/css to allow custom alias to be passed to the `css` function

// Transform the custom alias to a format that styled-system CSS supports
// const transformAlias = (prop, propValue) => {
//   const configKeys = Object.keys(config);
//   let result = {};

//   if (configKeys.includes(prop)) {
//     const { properties, property } = config[prop];
//     if (properties) {
//       properties.forEach(_cssProp => (result[_cssProp] = propValue));
//     }
//     if (property) {
//       result[property] = propValue;
//     }
//     if (config[prop] === true) {
//       result[prop] = propValue;
//     }
//   } else {
//     result[prop] = propValue;
//   }
//   return result;
// };

// export const transformAliasProps = props => {
//   console.log({ props });
//   let result = {};
//   for (let prop in props) {
//     if (typeof props[prop] === 'object' && !Array.isArray(props[prop])) {
//       result = { ...result, [prop]: transformAliasProps(props[prop]) };
//     } else {
//       result = { ...result, ...transformAlias(prop, props[prop]) };
//     }
//   }
//   return result;
// };

const filterProps = [
  'fontWeight',
  'lineHeight',
  'fontSize',
  'letterSpacing',
  'fill',
  'hiddenLabel',
  'rounded',
  'roundedTop',
  'roundedLeft',
  'roundedBottom',
  'roundedRight',
  'roundedTopRight',
  'w',
  'h',
  'minH',
  'maxH',
  'minW',
  'maxW',
  'roundedTopLeft',
  'roundedBottomLeft',
  'roundedBottomRight',
  'radiusLeft',
  'radiusTop',
  'radiusRight',
  'radiusBottom',
  'd',
  'backgroundAttachment',
  'bgImg',
  'bgImage',
  'bgSize',
  'bgPos',
  'pos',
  'flexDir',
  'textDecoration',
  'textDecor',
  'textTransform',
  'overflowX',
  'overflowY',
  'appearance',
  'transform',
  'transformOrigin',
  'animation',
  'userSelect',
  'pointerEvents',
  'boxSizing',
  'cursor',
  'resize',
  'transition',
  'objectFit',
  'objectPosition',
  'visibility',
  'wordBreak',
  'overflowWrap',
  'whiteSpace',
  'fill',
  'stroke',
  'bgAttachment',
  'shadow',
  'listStyleType',
  'listStylePosition',
  'listStyleImage',
  'listStyleImg',
  'listStylePos',
  'outline',
  'float',
  'willChange',
  'borderTopWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
];

// used to filter out unneccessary props from storybook
export const filteredArgs = filterProps.reduce((result, propName) => {
  result[propName] = { table: { disable: true } };
  return result;
}, {});

/**
 * From: https://github.com/reach/reach-ui/blob/97b32791ce33f822f6bc9f07f6cebfb343d8032d/packages/utils/src/index.tsx#L195
 * This is a hack for sure. The thing is, getting a component to intelligently
 * infer props based on a component or JSX string passed into an `as` prop is
 * kind of a huge pain. Getting it to work and satisfy the constraints of
 * `forwardRef` seems dang near impossible. To avoid needing to do this awkward
 * type song-and-dance every time we want to forward a ref into a component
 * that accepts an `as` prop, we abstract all of that mess to this function for
 * the time time being.
 */
export function forwardRefWithAs<
  Props,
  DefaultComponentType extends As = 'div'
>(render: ForwardRefWithAsRenderFunction<DefaultComponentType, Props>) {
  return forwardRef(render) as ForwardRefExoticComponentWithAs<
    DefaultComponentType,
    Props
  >;
}
