import React, { useContext } from 'react';

const AppStateContext = React.createContext();

export function useAppState() {
  return useContext(AppStateContext);
}

export function AppStateProvider({ children }) {
  const data = {
    prefix: 'git-panel-',
  };
  return (
    <AppStateContext.Provider value={data}>{children}</AppStateContext.Provider>
  );
}
