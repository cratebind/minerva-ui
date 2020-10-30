import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, TabsProps } from '../Tabs';
import { Icon } from '..';
import { filteredArgs } from '../utils';

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
  subcomponents: {
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  argTypes: {
    ...filteredArgs,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TabsProps> = ({}) => {
  return (
    <>
      <Tabs>
        <TabList mb="20px" borderBottom="2px solid #d2d6dc">
          <Tab>My Account</Tab>
          <Tab>Favorites</Tab>
          <Tab>Orders</Tab>
          <Tab>Billing</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>My Account!</p>
          </TabPanel>
          <TabPanel>
            <p>Favorites!</p>
          </TabPanel>
          <TabPanel>
            <p>Orders!</p>
          </TabPanel>
          <TabPanel>
            <p>Billing!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
