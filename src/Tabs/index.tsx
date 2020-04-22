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
import styled from 'styled-components';
import { MinervaProps, systemProps, Box, Flex } from '../layout';
import { useTheme } from '../theme';
import PseudoBox from '../PseudoBox';

export interface TabsProps extends MinervaProps {
  children?: React.ReactNode;
}

const CustomTabs = styled(ReachTabs)<TabsProps>`
  [data-reach-tab] {
    outline: 0;
  }

  ${systemProps}
`;

export const Tabs = ({ children, ...rest }: TabsProps) => {
  const theme = useTheme();
  return (
    <CustomTabs {...rest} {...theme.Tabs}>
      {children}
    </CustomTabs>
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
