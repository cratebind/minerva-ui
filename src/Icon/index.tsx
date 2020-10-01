import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { MinervaProps, Box } from '../layout';
import { useTheme } from '../theme';
import { ResponsiveValue } from 'styled-system';

export interface IconProps {
  /**
   * Name of icon
   */
  name: string;
  /**
   * Height and width of icon (in pixels)
   */
  // size?: number | string;
  size?: ResponsiveValue<React.CSSProperties['height']>;
  /**
   * Icon color
   */
  color?: string;
}

export const Icon = forwardRef(function Icon(
  { size = '32px', name, color = '#000', ...props }: MinervaProps & IconProps,
  ref
) {
  const theme = useTheme();

  if (!theme || !theme.icons || !theme.icons[name]) {
    if (process.env.NODE_ENV === 'development') {
      throw new Error(`Could not find icon in theme with name of ${name}`);
    } else {
      console.warn(`Could not find icon in theme with name of ${name}`);
      return null;
    }
  }

  const IconComponent = theme.icons[name] || null;

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

if (__DEV__) {
  Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
  };
}
