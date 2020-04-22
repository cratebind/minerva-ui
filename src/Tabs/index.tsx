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
import { MinervaProps, systemProps, Box } from '../layout';
import { useTheme } from '../theme';
import PseudoBox from '../PseudoBox';

export interface TabsProps extends MinervaProps {
  children?: React.ReactNode;
  tabListBgColor?: string;
  tabColor?: string;
  activeBg?: string;
  activeColor?: string;
  activeWeight?: string;
  underline?: boolean;
  underlineColor?: string;
  underlineSize?: string;
  pills?: boolean;
}

const CustomTabs = styled(ReachTabs)<TabsProps>`
  [data-reach-tab-list] {
    align-items: center;
  }

  [data-reach-tab] {
    outline: 0;
  }

  [data-reach-tab][data-selected] {
    /* background-color: ${props => props.activeBg}; */
    /* color: ${props => props.activeColor};
    font-weight: ${props => props.activeWeight};
    border-radius: ${props => (props.pills ? '5px' : '0')};
    border-bottom: ${props =>
      props.underline && !props.pills
        ? `${props.underlineSize} solid ${props.underlineColor}`
        : 'none'}; */
  }

  ${systemProps}
`;

export const Tabs = ({
  children,
  tabListBgColor = '#fff',
  pills = false,
  underline = true,
  underlineColor = pills ? '#e0e0e0' : 'currentColor',
  underlineSize = '1px',
  activeBg = pills ? '#e0e0e0' : 'transparent',
  activeColor,
  activeWeight,
  ...rest
}: TabsProps) => {
  const theme = useTheme();
  return (
    <CustomTabs
      tabListBgColor={tabListBgColor}
      activeBg={activeBg}
      activeColor={activeColor}
      activeWeight={activeWeight}
      underline={underline}
      underlineColor={underlineColor}
      underlineSize={underlineSize}
      pills={pills}
      {...rest}
      {...theme.Tabs}
    >
      {children}
    </CustomTabs>
  );
};

export const TabList = ({ children, ...rest }: TabsProps) => (
  <Box data-testid="tab-list" as={ReachTabList} {...rest}>
    {children}
  </Box>
);

export const Tab = ({ children, ...rest }: TabsProps) => (
  <PseudoBox
    as={ReachTab}
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    _selected={{
      bg: '#e0e0e0',
      borderBottom: '1px solid #e0e0e0',
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
