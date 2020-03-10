// import {
//   background,
//   border,
//   color,
//   flexbox,
//   grid,
//   layout,
//   position,
//   shadow,
//   space,
//   typography,
// } from 'styled-system';

// export const styledSystemUtilities = [
//   color,
//   space,
//   flexbox,
//   grid,
//   layout,
//   position,
//   shadow,
//   background,
//   border,
//   typography,
// ];

// export function hexToHSL(H) {
//   // Convert hex to RGB first
//   let r = 0;
//   let g = 0;
//   let b = 0;
//   // if (H.length == 4) {
//   //   r = '0x' + H[1] + H[1];
//   //   g = '0x' + H[2] + H[2];
//   //   b = '0x' + H[3] + H[3];
//   // } else if (H.length == 7) {
//   //   r = '0x' + H[1] + H[2];
//   //   g = '0x' + H[3] + H[4];
//   //   b = '0x' + H[5] + H[6];
//   // }
//   // Then to HSL
//   r /= 255;
//   g /= 255;
//   b /= 255;
//   let cmin = Math.min(r, g, b),
//     cmax = Math.max(r, g, b),
//     delta = cmax - cmin,
//     h = 0,
//     s = 0,
//     l = 0;

//   if (delta == 0) h = 0;
//   else if (cmax == r) h = ((g - b) / delta) % 6;
//   else if (cmax == g) h = (b - r) / delta + 2;
//   else h = (r - g) / delta + 4;

//   h = Math.round(h * 60);

//   if (h < 0) h += 360;

//   l = (cmax + cmin) / 2;
//   s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
//   s = +(s * 100).toFixed(1);
//   l = +(l * 100).toFixed(1);

//   return 'hsl(' + h + ',' + s + '%,' + l + '%)';
// }

// export function LightenDarkenColor(col, amt) {
//   var usePound = false;

//   if (col[0] === '#') {
//     col = col.slice(1);
//     usePound = true;
//   }

//   var num = parseInt(col, 16);

//   var r = (num >> 16) + amt;

//   if (r > 255) r = 255;
//   else if (r < 0) r = 0;

//   var b = ((num >> 8) & 0x00ff) + amt;

//   if (b > 255) b = 255;
//   else if (b < 0) b = 0;

//   var g = (num & 0x0000ff) + amt;

//   if (g > 255) g = 255;
//   else if (g < 0) g = 0;

//   return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
// }
