import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import Text from '../Text';
import Button from '../Button';
import { forwardRefWithAs } from '../type-utilities';
import { MinervaProps, systemProps, Flex } from '../layout';

const CloseIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1.002L7.19429 0.196289L4 3.39057L0.805714 0.196289L0 1.002L3.19429 4.19629L0 7.39058L0.805714 8.19629L4 5.002L7.19429 8.19629L8 7.39058L4.80571 4.19629L8 1.002Z"
      fill="black"
    />
  </svg>
);

export const StyledAlert = styled(Flex)(
  {
    padding: '20px',
    borderRadius: '5px',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  systemProps
);

export const StyledAlertTitleContainer = styled(Flex)`
  margin-bottom: 12px;
`;

export const StyledAlertTitle = styled(Text)(
  {
    fontWeight: '700',
    lineHeight: '17.5px',
  },
  systemProps
);

export const StyledAlertDescriptionContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: 'flex-start';
  margin-bottom: 12px;
`;

export const StyledAlertButtonsContainer = styled(Flex)`
  display: flex;
  flex-direction: row;
  justify-content: 'flex-start';
  margin: 0 -20px;
`;

export const StyledAlertButton = styled(Flex)`
  margin: 0 20px;
`;

export const StyledAlertDescription = styled(Text)`
  font-weigth: 400;
  font-size: 10px;
  line-height: 12.5px;
`;

export const StyledCloseText = styled(Text)`
  text-decoration: underline;
`;

export const StyledAlertInner = styled(Flex)`
  display: flex;
  flex-direction: column;
`;

export const StyledAlertIconSection = styled(Flex)`
  justify-content: flex-start;
`;

type Status = 'error' | 'success' | 'warning' | 'info';

export interface AlertButton {
  buttonAction?: Function;
  buttonText?: string;
  children?: React.ReactNode;
}

export interface StatusInfo {
  statusColor: string;
  statusIcon: string | null;
}

export interface AlertProps extends MinervaProps, AlertButton {
  children?: React.ReactNode;
  status?: Status;
  title?: string;
  description?: string;
  actions?: Array<AlertButton>;
  close?: boolean;
  bg?: string;
  icon?: string;
  // isOpen?: boolean;
  // onClose?: any;
  // canBeClosed?: boolean;
  // hasCloseIcon?: boolean;
  // closeText?: string;
  props?: any;
}
// @TODO: Move these to the theme so they can be customized

const alertTypes: Record<Status, StatusInfo> = {
  error: {
    statusColor: 'rgba(255, 205, 210, 0.25)',
    statusIcon: null,
  },
  success: {
    statusColor: 'rgba(200, 230, 201, 0.25)',
    statusIcon: null,
  },
  warning: {
    statusColor: 'rgba(255, 236, 179, 0.25)',
    statusIcon: null,
  },
  info: {
    statusColor: 'rgba(187, 222, 251, 0.25)',
    statusIcon: null,
  },
};

const AlertButtonComponent = ({
  buttonAction = () => null,
  buttonText,
  children,
}: AlertButton) => {
  const onClickButton = useCallback((event: any) => buttonAction(event), [
    buttonAction,
  ]);

  return useMemo(
    () => (
      <Button
        bg="transparent"
        border={0}
        padding={0}
        name={buttonText || 'Close Alert'}
        onClick={onClickButton}
      >
        <StyledAlertTitle>{buttonText || children}</StyledAlertTitle>
      </Button>
    ),
    [buttonText, onClickButton, children]
  );
};

export const Alert = forwardRefWithAs<AlertProps, 'div'>(function Alert(
  {
    title,
    description,
    children,
    actions,
    buttonText,
    buttonAction,
    close = false,
    status,
    icon,
    ...props
  }: AlertProps,
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
      role="alert"
      bg={statusColor}
      lineHeight={1}
      aria-label={`${title}`}
      aria-live="polite"
      fontFamily="body"
      {...props}
    >
      {alertIcon && <Icon name={alertIcon} size="8px" mr={2} />}
      <StyledAlertInner>
        {title && (
          <StyledAlertTitleContainer>
            <StyledAlertTitle>{title}</StyledAlertTitle>
          </StyledAlertTitleContainer>
        )}
        <StyledAlertDescriptionContainer>
          {description && (
            <StyledAlertDescription>{description}</StyledAlertDescription>
          )}
          {children && (
            <StyledAlertDescription>{children}</StyledAlertDescription>
          )}
        </StyledAlertDescriptionContainer>
        {actions && (
          <StyledAlertButtonsContainer>
            {actions.map(
              ({ buttonAction, buttonText }: AlertButton, index: number) => (
                <StyledAlertButton key={index}>
                  <AlertButtonComponent {...{ buttonAction, buttonText }} />
                </StyledAlertButton>
              )
            )}
          </StyledAlertButtonsContainer>
        )}
      </StyledAlertInner>
      {close && (
        <AlertButtonComponent
          buttonAction={buttonAction}
          buttonText={buttonText}
        >
          <CloseIcon />
        </AlertButtonComponent>
      )}
    </StyledAlert>
  );
});

export default Alert;
