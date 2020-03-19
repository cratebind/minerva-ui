import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps, Flex } from '../layout';
import Icon from '../Icon';

const StyledAlert = styled(Flex)(
  props => ({
    padding: '16px',
    borderRadius: '5px',
  }),
  systemProps
);

const StyledAlertTitle = styled('p')(
  {
    fontWeight: 'bold',
    margin: '0 5px 0 8px',
  },
  systemProps
);

const StyledAlertDescription = styled.p``;

export interface AlertProps extends MinervaProps {
  children?: React.ReactNode;
  status?: 'error' | 'success' | 'warning' | 'info';
  title?: string;
  description?: string;
  color?: string;
  icon?: string;
  props?: any;
}

// @TODO: Move these to the theme so they can be customized
const alertTypes = {
  error: {
    statusColor: '#f8b4b4',
    statusIcon: 'alert-circle',
  },
  success: {
    statusColor: '#bcf0da',
    statusIcon: 'check-circle',
  },
  warning: {
    statusColor: '#fdf6b2',
    statusIcon: 'alert-triangle',
  },
  info: {
    statusColor: '#c3ddfd',
    statusIcon: 'info',
  },
};

export const Alert = forwardRef(function Alert(
  { title, description, status, color, icon, ...props }: AlertProps,
  ref
) {
  const { statusColor, statusIcon } =
    // if status is provided and is a provided alertType, return it
    status && Object.keys(alertTypes).includes(status)
      ? alertTypes[status]
      : {
          statusColor: '#e5e7eb',
          statusIcon: null,
        };

  const alertIcon = icon || statusIcon;

  return (
    <StyledAlert
      ref={ref}
      backgroundColor={color ? color : statusColor}
      {...props}
    >
      {alertIcon && <Icon name={alertIcon} size="20px" />}
      <StyledAlertTitle>{title}</StyledAlertTitle>
      <StyledAlertDescription>{description}</StyledAlertDescription>
    </StyledAlert>
  );
});

export default Alert;
