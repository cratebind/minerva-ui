import React, { forwardRef } from 'react';
import { MinervaProps, Box } from '../layout';
import { useTheme } from '../theme';

export interface IconProps extends MinervaProps {
  /**
   * Name of icon
   */
  name: string;
  /**
   * Height and width of icon (in pixels)
   */
  size?: number | string;
  /**
   * Icon color
   */
  color?: string;
}

export const Icon = forwardRef(function Icon(
  { size = '32px', name, color = '#000', ...props }: IconProps,
  ref
) {
  const { icons } = useTheme();

  if (!icons[name]) {
    console.warn(`Could not find icon in theme with name of ${name}`);
    return null;
  }

  const IconComponent = icons[name] || null;

  return (
    <Box
      as={IconComponent}
      width={size}
      height={size}
      role="presentation"
      stroke="currentColor"
      title={name.replace('-', ' ')}
      color={color}
      ref={ref}
      {...props}
    />
  );
});

export default Icon;
