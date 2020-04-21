import React from 'react';
import {
  Tabs as ReachUITabs,
  TabList as ReachUITabList,
  Tab as ReachUITab,
  TabPanels as ReachUITabPanels,
  TabPanel as ReachUITabPanel,
  useTabsContext,
} from '@reach/tabs';
import '@reach/tabs/styles.css';
import styled from 'styled-components';
import { MinervaProps, systemProps } from '../layout';

export const CustomTabs = styled(ReachUITabs)({}, systemProps);

export interface TabsProps extends MinervaProps {
  children?: React.ReactNode;
}

export const Tabs = ({ children }: TabsProps) => (
  <CustomTabs>{children}</CustomTabs>
);

export interface TabListProps extends TabsProps {
  children?: React.ReactNode;
}

export const CustomTabList = styled(ReachUITabList)({}, systemProps);

export const TabList = ({ children }: TabListProps) => (
  <CustomTabList>{children}</CustomTabList>
);

export interface TabProps extends TabListProps {
  children?: React.ReactNode;
}

export const CustomTab = styled(ReachUITab)({}, systemProps);

export const Tab = ({ children }: TabProps) => (
  <CustomTab>{children}</CustomTab>
);

export interface TabPanelsProps extends TabsProps {
  children?: React.ReactNode;
}

export const CustomTabPanels = styled(ReachUITabPanels)({}, systemProps);

export const TabPanels = ({ children }: TabPanelsProps) => (
  <CustomTabPanels>{children}</CustomTabPanels>
);

export interface TabPanelProps extends TabPanelsProps {
  children?: React.ReactNode;
}

export const CustomTabPanel = styled(ReachUITabPanel)({}, systemProps);

export const TabPanel = ({ children }: TabPanelProps) => (
  <CustomTabPanel>{children}</CustomTabPanel>
);

export { useTabsContext };
