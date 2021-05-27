import React from 'react';
// import { Box } from '../layout';

export type BaseIconProps = {
  color?: string;
  size?: number | string;
};

export const Close = ({
  color = 'currentColor',
  size = 24,
  ...props
}: BaseIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    color={color}
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <line
      x1="200"
      y1="56"
      x2="56"
      y2="200"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="200"
      x2="56"
      y2="56"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);

export const ChevronDown = ({
  color = 'currentColor',
  size = 24,
  ...props
}: BaseIconProps) => (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.95174 6.54518L0.70874 2.30218L2.12374 0.888184L4.95174 3.71718L7.77974 0.888184L9.19474 2.30218L4.95174 6.54518Z"
      fill="black"
    />
  </svg>
);

// basic UI icons used throughout the component library
const baseIcons = {
  Close,
  ChevronDown,
};

export default baseIcons;
