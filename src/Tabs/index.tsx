import React from 'react';
import {
  Tabs as ReachTabs,
  TabList as ReachTabList,
  Tab as ReachTab,
  TabPanels as ReachTabPanels,
  TabPanel as ReachTabPanel,
  useTabsContext,
} from '@reach/tabs';
import '@reach/tabs/styles.css';
import { MinervaProps, Box, Flex } from '../layout';
import { useTheme } from '../theme';
import PseudoBox, { PseudoBoxProps } from '../PseudoBox';

export interface TabsProps extends MinervaProps {
  children?: React.ReactNode;
}

export interface TabProps extends TabsProps, PseudoBoxProps {}

export const Tabs = ({ children, ...rest }: TabsProps) => {
  const theme = useTheme();
  return (
    <Box as={ReachTabs} {...rest} {...theme.Tabs}>
      {children}
    </Box>
  );
};

export const TabList = ({ children, ...rest }: TabsProps) => (
  <Flex bg="#fff" alignItems="center" as={ReachTabList} {...rest}>
    {children}
  </Flex>
);

export const Tab = ({ children, ...rest }: TabProps) => (
  <PseudoBox
    as={ReachTab}
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    py={3}
    px={2}
    fontWeight={500}
    borderWidth="2px"
    borderColor="transparent"
    borderStyle="solid"
    marginBottom="-2px"
    _focus={{
      color: 'blue.700',
      outline: 0,
      borderWidth: '2px',
    }}
    _selected={{
      color: 'blue.700',
      outline: 0,
      borderWidth: '2px',
    }}
    {...rest}
  >
    {children}
  </PseudoBox>
);

export const TabPanels = ({ children, ...rest }: TabsProps) => (
  <Box as={ReachTabPanels} {...rest}>
    {children}
  </Box>
);

export const TabPanel = ({ children }: TabsProps) => (
  <Box as={ReachTabPanel}>{children}</Box>
);

export { useTabsContext };
