import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  Accordion as ReachAccordion,
  AccordionItem as ReachAccordionItem,
  AccordionButton as ReachAccordionButton,
  AccordionPanel as ReachAccordionPanel,
  AccordionProps as ReachAccordionProps,
} from '@reach/accordion';
import { MinervaProps, Box, systemProps } from '../layout';
import Icon from '../Icon';
import Button from '../Button';

export interface AccordionProps extends MinervaProps {
  children?: React.ReactNode;
  props?: any;
}

export interface AccordionItemProps extends MinervaProps {
  children?: React.ReactNode;
  props?: any;
}

export interface AccordionButtonProps extends MinervaProps {
  children?: React.ReactNode;
  props?: any;
}

export interface AccordionPanelProps extends MinervaProps {
  children?: React.ReactNode;
  props?: any;
}

type AllAccordionProps = ReachAccordionProps & MinervaProps;
export const Accordion = styled(ReachAccordion)<AllAccordionProps>(
  {
    borderBottomColor: 'gray.200',
    borderBottomWidth: '1px',
  },
  systemProps
);

export const AccordionItem = forwardRef(function AccordionItem(
  { ...props }: AccordionItemProps,
  ref
) {
  return <Box as={ReachAccordionItem} ref={ref} {...props} />;
});

export const AccordionButton = forwardRef(function AccordionButton(
  { children, ...props }: AccordionButtonProps,
  ref
) {
  return (
    <Button
      as={ReachAccordionButton}
      borderColor="transparent"
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-start"
      bg="white"
      py="12px"
      fontSize="18px"
      fontWeight="400"
      borderTopColor="gray.200"
      borderTopWidth="1px"
      ref={ref}
      {...props}
    >
      {children}
      {/* TODO Need to figure out how to determine if Item is expanded and rotate icon */}
      {/* <Icon name="chevron-down" ml={2} size="14px" /> */}
    </Button>
  );
});

export const AccordionPanel = forwardRef(function AccordionPanel(
  { ...props }: AccordionPanelProps,
  ref
) {
  return (
    <Box
      as={ReachAccordionPanel}
      px="14px"
      py="14px"
      width="95%"
      ref={ref}
      {...props}
    />
  );
});

export const MainAccordion = forwardRef(function Alert(
  { children, ...props }: AccordionProps,
  ref
) {
  return (
    <Accordion {...props} ref={ref}>
      {children}
    </Accordion>
  );
});

export default MainAccordion;
