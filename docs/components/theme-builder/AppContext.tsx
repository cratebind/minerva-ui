import React, { useState, useContext } from 'react';
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
  Checkbox: { customProps: { children: 'Checkbox', checked: false } },
  Link: { customProps: { children: 'Link' } },
  Select: { customProps: {} },
  Table: { customProps: {} },
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

  // const memoState = useMemo(() => ({ state }), [state]);

  return (
    <AppContext.Provider
      value={{ state: state, setContext: setState, resetTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

// const AppConsumer = AppContext.Consumer;
const useAppContext = () => useContext<AppContextValue>(AppContext);

export { AppProvider, useAppContext };
// export default AppContext;
