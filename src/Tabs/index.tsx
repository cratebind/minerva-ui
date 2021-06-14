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
import { useComponentStyles } from '../theme';
import PseudoBox, { PseudoBoxProps } from '../PseudoBox';
import { forwardRefWithAs } from '../type-utilities';

// export interface TabsProps extends MinervaProps, PseudoBoxProps, ReachTabsProps { }

export type TabsProps = MinervaProps & ReachTabsProps & PseudoBoxProps;

export const Tabs = ({ children, ...props }: TabsProps) => {
  const componentStyles = useComponentStyles('Tabs');
  return (
    <Box as={ReachTabs} {...props} {...componentStyles}>
      {children}
    </Box>
  );
};

export const TabList = ({ children, ...props }: TabsProps) => {
  const componentStyles = useComponentStyles('TabList');

  return (
    <Flex
      bg="#fff"
      alignItems="center"
      as={ReachTabList}
      {...componentStyles}
      {...props}
    >
      {children}
    </Flex>
  );
};

export const Tab = forwardRefWithAs<TabsProps, 'div'>(function Tab(
  { children, ...props }: TabsProps,
  ref
) {
  const componentStyles = useComponentStyles('Tab');
  return (
    <PseudoBox
      as={ReachTab}
      ref={ref}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py={3}
      px={2}
      color="#616161"
      fontSize="12px"
      fontWeight={400}
      borderWidth="2px"
      // borderColor="transparent"
      marginBottom="-2px"
      border={0}
      bg="transparent"
      borderBottom="2px solid transparent"
      {...componentStyles}
      {...props}
    >
      {children}
    </PseudoBox>
  );
});

export const TabPanels = (props: TabsProps) => {
  const componentStyles = useComponentStyles('TabPanels');
  return <Box as={ReachTabPanels} {...componentStyles} {...props} />;
};

export const TabPanel = (props: TabsProps) => {
  const componentStyles = useComponentStyles('TabPanel');
  return <Box as={ReachTabPanel} {...componentStyles} {...props} />;
};

export { useTabsContext };
