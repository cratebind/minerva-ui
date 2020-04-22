import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Tabs, TabList, Tab, TabPanels, TabPanel, ThemeProvider } from '../src';

const ExampleTabs = () => (
  <Tabs pills tabListBgColor="#f5f6fa">
    <TabList data-testid="tab-list" mb="20px" height="80px">
      <Tab ml="10px" mr="15px" height="40px">
        My Account
      </Tab>
      <Tab mr="15px" height="40px">
        Favorites
      </Tab>
      <Tab mr="15px" height="40px">
        Orders
      </Tab>
      <Tab height="40px">Billing</Tab>
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
);

describe('Tabs', () => {
  it('should change TabList background color', () => {
    const { container, getByTestId, debug } = render(
      <ThemeProvider>
        <ExampleTabs />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
    debug();
    const tabList = getByTestId('tab-list');
    // console.log(tabList);
    expect(tabList).toHaveStyleRule('background-color', '#f5f6fa');
  });
});
