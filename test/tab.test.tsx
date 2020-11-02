import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  ThemeProvider,
  defaultTheme,
} from '../src';

const ExampleTabs = () => {
  const selectedStyled = {
    bg: '#e0e0e0',
    borderColor: '#e0e0e0',
    borderRadius: '5px',
  };
  return (
    <Tabs>
      <TabList data-testid="TabList" bg="#f5f6fa" mb="20px">
        <Tab
          data-testid="active-tab"
          _selected={{ ...selectedStyled }}
          mr="15px"
        >
          My Account
        </Tab>
        <Tab _selected={{ ...selectedStyled }} mr="15px">
          Favorites
        </Tab>
        <Tab _selected={{ ...selectedStyled }} mr="15px">
          Orders
        </Tab>
        <Tab _selected={{ ...selectedStyled }}>Billing</Tab>
      </TabList>
      <TabPanels data-testid="TabPanels">
        <TabPanel data-testid="TabPanel">
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
};

describe('<Tabs />', () => {
  it('should change TabList background color', () => {
    const { container, getByTestId } = render(
      <ThemeProvider>
        <ExampleTabs />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    const tabList = getByTestId('TabList');
    expect(tabList).toHaveStyleRule('background-color', '#f5f6fa');
  });

  it('should change active tab styles', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ExampleTabs />
      </ThemeProvider>
    );
    const activeTab = getByTestId('active-tab');
    expect(activeTab).toHaveStyleRule('background-color', '#e0e0e0', {
      modifier: '[aria-selected=true]',
    });
  });
});

['TabList', 'TabPanels', 'TabPanel'].forEach(componentName => {
  describe(`<${componentName} />`, () => {
    it('should be theme-able', () => {
      const backgroundColor = '#e9e9e9';
      const customTheme = {
        ...defaultTheme,
        [componentName]: {
          backgroundColor,
        },
      };
      const { container, getByTestId } = render(
        <ThemeProvider theme={customTheme}>
          <ExampleTabs />
        </ThemeProvider>
      );
      expect(container).toMatchSnapshot();
      const tabList = getByTestId(componentName);
      expect(tabList).toHaveStyleRule('background-color', backgroundColor);
    });
  });
});

// describe('<TabList />', () => {
//   it('should be theme-able', () => {
//     const backgroundColor = '#e9e9e9';
//     const customTheme = {
//       ...defaultTheme,
//       TabList: {
//         backgroundColor,
//       },
//     };
//     const { container, getByTestId } = render(
//       <ThemeProvider theme={customTheme}>
//         <ExampleTabs />
//       </ThemeProvider>
//     );
//     expect(container).toMatchSnapshot();
//     const tabList = getByTestId('TabList');
//     expect(tabList).toHaveStyleRule('background-color', backgroundColor);
//   });
// });

// describe('<TabPanels />', () => {
//   it('should be theme-able', () => {
//     const backgroundColor = '#e9e9e9';
//     const customTheme = {
//       ...defaultTheme,
//       TabList: {
//         backgroundColor,
//       },
//     };
//     const { container, getByTestId } = render(
//       <ThemeProvider theme={customTheme}>
//         <ExampleTabs />
//       </ThemeProvider>
//     );
//     expect(container).toMatchSnapshot();
//     const tabList = getByTestId('TabList');
//     expect(tabList).toHaveStyleRule('background-color', backgroundColor);
//   });
// });
