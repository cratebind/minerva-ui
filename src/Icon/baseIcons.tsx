import React from 'react';
// import { Box } from '../layout';

type BaseIconProps = {
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
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <polyline
      points="208 96 128 176 48 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);

// basic UI icons used throughout the component library
const baseIcons = {
  Close,
  ChevronDown,
};

export default baseIcons;
