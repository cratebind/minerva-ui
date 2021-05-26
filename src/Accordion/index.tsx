import React, { forwardRef } from 'react';
// import styled from 'styled-components';
import {
  Accordion as ReachAccordion,
  AccordionProps as ReachAccordionProps,
  AccordionItem as ReachAccordionItem,
  AccordionItemProps as ReachAccordionItemProps,
  AccordionButton as ReachAccordionButton,
  AccordionPanel as ReachAccordionPanel,
  AccordionPanelProps as ReachAccordionPanelProps,
} from '@reach/accordion';
import { useComponentStyles } from '../theme';
import { MinervaProps, Box } from '../layout';
import Button from '../Button';

export interface AccordionProps extends MinervaProps {
  children?: React.ReactNode;
}

export interface AccordionButtonProps extends MinervaProps {
  children?: React.ReactNode;
}

export interface AccordionPanelProps extends MinervaProps {
  children?: React.ReactNode;
}

export type AllAccordionItemProps = ReachAccordionItemProps & MinervaProps;

export const AccordionItem = forwardRef(function AccordionItem(
  { ...props }: AllAccordionItemProps,
  ref
) {
  return <Box as={ReachAccordionItem} ref={ref} {...props} />;
});

export const AccordionButton = forwardRef(function AccordionButton(
  { children, ...props }: AccordionButtonProps,
  ref
) {
  const componentStyles = useComponentStyles('AccordionButton');

  return (
    <ReachAccordionButton
      as={Button}
      borderColor="transparent"
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-start"
      bg="white"
      py="12px"
      fontSize="18px"
      fontWeight="400"
      borderTopColor="gray.300"
      borderRadius={0}
      ref={ref}  
      {...componentStyles}
      {...props}
    >
      {children}
      {/* TODO Need to figure out how to determine if Item is expanded and rotate icon */}
      {/* <Icon name="chevron-down" ml={2} size="14px" /> */}
    </ReachAccordionButton>
  );
});

export type ExtendedAccordionPanelProps = ReachAccordionPanelProps &
  AccordionPanelProps;

export const AccordionPanel = forwardRef(function AccordionPanel(
  { ...props }: ExtendedAccordionPanelProps,
  ref
) {
  return (
    <Box
      as={ReachAccordionPanel}
      px="14px"
      pr="23%"
      py="14px"
      width="100%"
      borderTopWidth="1px"
      borderTopColor="gray.300"
      ref={ref}
      {...props}
    />
  );
});

export type AllAccordionProps = ReachAccordionProps & MinervaProps;
export const Accordion = forwardRef(function Alert(
  { children, ...props }: AllAccordionProps,
  ref
) {
  return (
    <Box
      as={ReachAccordion}
      borderBottomColor="gray.300"
      borderBottomWidth="1px"
      {...props}
      ref={ref}
    >
      {children}
    </Box>
  );
});

export default Accordion;
