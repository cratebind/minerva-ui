import React, { useState, useContext, useMemo } from 'react';

const initialState = {
  activeComponent: 'Button',
  modalOpen: false,
  Button: {
    customProps: {
      children: 'Button',
    },
    backgroundColor: '#fff',
    borderWidth: '1px',
    color: '#374151',
    fontWeight: '500',
    display: 'inline-flex',
    WebkitAppearance: 'none',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    fontSize: '14px',
    lineHeight: '20px',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRadius: '5px',
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
