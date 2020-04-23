import React, { useState, useContext } from 'react';
import { defaultTheme } from 'minerva-ui';

const initialState = {
  activeComponent: 'Button',
  modalOpen: false,
  ...defaultTheme,
  Button: {
    customProps: {
      children: 'Button',
      isLoading: false,
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
  Input: {
    customProps: {},
  },
  Checkbox: { customProps: { children: 'Checkbox' } },
  Link: { customProps: { children: 'Link' } },
  Select: { customProps: {} },
  Table: { customProps: {} },
  Text: { customProps: { children: 'Text' } },
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
  const [state, setState] = useMergeState(initialState);

  // const memoState = useMemo(() => ({ state }), [state]);

  return (
    <AppContext.Provider value={{ state: state, setContext: setState }}>
      {children}
    </AppContext.Provider>
  );
};

// const AppConsumer = AppContext.Consumer;
const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
// export default AppContext;
