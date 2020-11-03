import React, { useState, useContext, useMemo } from 'react';
import { defaultTheme } from 'minerva-ui';

const initialState = {
  activeComponent: 'Button',
  modalOpen: false,
  ...defaultTheme,
  Button: {
    ...defaultTheme.Button,
    customProps: {
      children: 'Button',
      isLoading: false,
    },
  },
  Input: {
    ...defaultTheme.Input,
    customProps: {
      disabled: false,
    },
  },
  ModalHeader: {
    ...defaultTheme.ModalHeader,
    customProps: {
      children: 'Modal Header',
    },
  },
  ModalBody: {
    ...defaultTheme.ModalBody,
    customProps: {
      children: 'Modal Body',
    },
  },
  ModalFooter: {
    ...defaultTheme.ModalFooter,
    customProps: {
      children: 'Modal Footer',
    },
  },
  DrawerHeader: {
    // ...defaultTheme.DrawerHeader,
    customProps: {
      children: 'Drawer Header',
    },
  },
  DrawerBody: {
    // ...defaultTheme.DrawerBody,
    customProps: {
      children: 'Drawer Body',
    },
  },
  DrawerFooter: {
    // ...defaultTheme.DrawerFooter,
    customProps: {
      children: 'Drawer Footer',
    },
  },
  Checkbox: { customProps: { children: 'Checkbox', checked: false } },
  Link: { customProps: { children: 'Link' } },
  Select: { customProps: {} },
  Radio: { customProps: {} },
  Table: { customProps: {} },
  Tab: {
    customProps: {
      children: 'Tab',
      disabled: false,
    },
  },
  TabPanel: { customProps: {} },
  TabList: { customProps: {} },
  TabPanels: { customProps: {} },
  Text: { customProps: { children: 'Text' } },
  Heading: { customProps: { children: 'Heading' } },
  Cards: { customProps: {} },
  Forms: { customProps: {} },
} as any;

const AppContext = React.createContext({
  ...initialState,
});

const useMergeState = initialMergeState => {
  const [state, setState] = useState(initialMergeState);

  function mergeState(changes) {
    setState({ ...state, ...changes });
  }

  return [state, mergeState];
};

export interface AppContextValue {
  state: any;
  setContext: React.SetStateAction<any>;
  resetTheme: () => void;
  // setContext: React.
}

const AppProvider = ({ children }) => {
  const [state, setState] = useMergeState(initialState);

  function resetTheme() {
    setState({ ...initialState });
  }

  const memoState = useMemo(() => state, [state]);

  return (
    <AppContext.Provider
      value={{ state: memoState, setContext: setState, resetTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

// const AppConsumer = AppContext.Consumer;
const useAppContext = () => useContext<AppContextValue>(AppContext);

export { AppProvider, useAppContext };
// export default AppContext;
