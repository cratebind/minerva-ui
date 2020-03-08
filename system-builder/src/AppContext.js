import React, { useState, useContext, useMemo } from 'react';

const initialState = {
  activeComponent: 'Button',
  modalOpen: false,
  Button: {
    children: 'Button',
    margin: 0,
    padding: '8px 16px',
    height: 'auto',
    width: 'auto',
  },
  Input: { children: 'Input' },
  Checkbox: { children: 'Checkbox' },
  Link: { children: 'Link' },
  Select: { children: 'Select' },
  Table: { children: 'Table' },
  Text: { children: 'Text' },
};

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

const AppProvider = ({ children }) => {
  const [state, setState] = useMergeState({
    ...initialState,
  });

  const memoState = useMemo(() => ({ state }), [state]);

  return (
    <AppContext.Provider value={{ ...memoState, setContext: setState }}>
      {children}
    </AppContext.Provider>
  );
};

const AppConsumer = AppContext.Consumer;
const useAppContext = () => useContext(AppContext);

export { AppProvider, AppConsumer, useAppContext };
export default AppContext;
