import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps, Flex } from '../layout';
import Icon from '../Icon';

const StyledAlert = styled(Flex)(
  props => ({
    padding: '16px',
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
  status?: string;
  title?: string;
  description?: string;
  color?: string;
  icon?: string;
  props?: any;
}

export const Alert = forwardRef(function Alert(
  { title, description, status, color, icon, ...props }: AlertProps,
  ref
) {
  var statusColor;
  var iconName;
  switch (status) {
    case 'error':
      statusColor = '#f8b4b4';
      iconName = 'alert-circle';
      break;
    case 'success':
      statusColor = '#bcf0da';
      iconName = 'check-circle';
      break;
    case 'warning':
      statusColor = '#fdf6b2';
      iconName = 'alert-triangle';
      break;
    case 'info':
      statusColor = '#c3ddfd';
      iconName = 'info';
      break;
    default:
      statusColor = '#e5e7eb';
  }
  return (
    <StyledAlert
      ref={ref}
      {...props}
      backgroundColor={color ? color : statusColor}
    >
      <Icon name={icon ? icon : iconName} size="20px" />
      <StyledAlertTitle>{title}</StyledAlertTitle>
      <StyledAlertDescription>{description}</StyledAlertDescription>
    </StyledAlert>
  );
});

Alert.defaultProps = {};

export default Alert;
