export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const AUTH_MODES = {
  LOCAL: 'local',
  API: 'api',
};

export const themes = {
  light: {
    fontColor: '#24292f',
    bgColor: '#ffffff',
    primary: '#24292f',
    primaryContrast: '#ffffff',
  },
  dark: {
    fontColor: '#ffffff',
    bgColor: '#0D1117',
    primary: '#13233A',
    primaryContrast: '#C9D1D9',
  },
};

export const appPrefix = 'git-panel-';

export const localStorageKeys = {
  prefixedUsers: `${appPrefix}users`,
  prefixedAuth: `${appPrefix}auth`,
  prefixedGitAuth: `${appPrefix}git-auth`,
  users: 'users',
  auth: 'auth',
  gitAuth: 'git-auth',
};
