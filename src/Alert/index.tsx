import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps, Flex } from '../layout';

const StyledAlert = styled(Flex)(
  props => ({
    ...props.theme.Alert,
    padding: '16px 8px',
    backgroundColor: props.statusColor,
  }),
  systemProps
);

const StyledAlertTitle = styled('p')(
  {
    fontWeight: 'bold',
    margin: '0 5px',
  },
  systemProps
);

const StyledAlertDescription = styled.p``;

export interface AlertProps extends MinervaProps {
  children?: React.ReactNode;
  status?: string;
  title?: string;
  description?: string;
  props?: any;
}

export const Alert = forwardRef(function Alert(
  { title, description, status, ...props }: AlertProps,
  ref
) {
  var statusColor;
  switch (status) {
    case 'error':
      statusColor = '#f8b4b4';
      break;
    case 'success':
      statusColor = '#bcf0da';
      break;
    case 'warning':
      statusColor = '#fdf6b2';
      break;
    case 'info':
      statusColor = '#c3ddfd';
      break;
    default:
      statusColor = '#e5e7eb';
  }
  return (
    <StyledAlert ref={ref} {...props} statusColor={statusColor}>
      <StyledAlertTitle>{title}</StyledAlertTitle>
      <StyledAlertDescription>{description}</StyledAlertDescription>
    </StyledAlert>
  );
});

Alert.defaultProps = {};

export default Alert;
