import React, { useContext, useState, useEffect } from 'react';
import { THEME_MODES, AUTH_MODES, themes, appPrefix } from '../utils/Consts';

const AppStateContext = React.createContext();

export function useAppState() {
  return useContext(AppStateContext);
}

export function AppStateProvider({ children }) {
  const [mode, setMode] = useState(AUTH_MODES.LOCAL);
  const [theme, setTheme] = useState(THEME_MODES.LIGHT);

  useEffect(() => {
    const style = document.documentElement.style;
    const current = themes[theme];
    style.setProperty('--bg-color', current.bgColor);
    style.setProperty('--font-color', current.fontColor);
    style.setProperty('--primary', current.primary);
    style.setProperty('--primary-contrast', current.primaryContrast);
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
