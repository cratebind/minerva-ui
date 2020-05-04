import React from 'react';
import {
  Tabs as ReachTabs,
  TabList as ReachTabList,
  Tab as ReachTab,
  TabPanels as ReachTabPanels,
  TabPanel as ReachTabPanel,
  useTabsContext,
  TabsProps as ReachTabsProps,
} from '@reach/tabs';

import { MinervaProps, Box, Flex } from '../layout';
import { useTheme } from '../theme';
import PseudoBox, { PseudoBoxProps } from '../PseudoBox';

// export interface TabsProps extends MinervaProps, PseudoBoxProps, ReachTabsProps { }

export type TabsProps = MinervaProps & ReachTabsProps & PseudoBoxProps;

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

export const Tab = ({ children, ...rest }: TabsProps) => (
  <PseudoBox
    as={ReachTab}
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    py={3}
    px={2}
    fontWeight={500}
    borderWidth="2px"
    // borderColor="transparent"
    marginBottom="-2px"
    border={0}
    borderBottom="2px solid transparent"
    _focus={{
      color: 'blue.700',
      outline: 0,
      boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
      borderWidth: '2px',
    }}
    _selected={{
      color: 'blue.700',
      outline: 0,
      borderWidth: '2px',
      borderBottom: '2px solid currentColor',
    }}
    {...rest}
  >
    {children}
  </PseudoBox>
);

export const TabPanels = (props: TabsProps) => (
  <Box as={ReachTabPanels} {...props} />
);

export const TabPanel = (props: TabsProps) => (
  <Box as={ReachTabPanel} {...props} />
);

export { useTabsContext };
