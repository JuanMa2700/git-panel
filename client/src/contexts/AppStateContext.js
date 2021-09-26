import React, { useContext, useState, useEffect } from 'react';
import { THEME_MODES, AUTH_MODES, themes, appPrefix } from '../utils/Consts';
import toggleTheme from '../utils/ToggleTheme';

const AppStateContext = React.createContext();

export function useAppState() {
  return useContext(AppStateContext);
}

export function AppStateProvider({ children }) {
  const [mode, setMode] = useState(AUTH_MODES.LOCAL);
  const [theme, setTheme] = useState(THEME_MODES.LIGHT);

  useEffect(() => {
    toggleTheme(themes[theme]);
  }, [theme]);

  const data = {
    prefix: appPrefix,
    themeModes: THEME_MODES,
    authModes: AUTH_MODES,
    theme,
    mode,
    setMode,
    setTheme,
  };

  return (
    <AppStateContext.Provider value={data}>{children}</AppStateContext.Provider>
  );
}
