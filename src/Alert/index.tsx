import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps, Box } from '../layout';

const StyledAlert = styled(Box)<MinervaProps>(
  props => ({
    ...props.theme.Alert,
    display: 'flex',
    padding: '16px 8px',
    backgroundColor: '#f8b4b4',
    // TODO change background color based on status
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

// TODO add icon and change based on status

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
  return (
    <StyledAlert ref={ref} {...props} status={status}>
      <StyledAlertTitle>{title}</StyledAlertTitle>
      <StyledAlertDescription>{description}</StyledAlertDescription>
    </StyledAlert>
  );
});

Alert.defaultProps = {};

export default Alert;
