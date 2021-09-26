const toggleTheme = (theme) => {
  const style = document.documentElement.style;
  style.setProperty('--bg-color', theme.bgColor);
  style.setProperty('--font-color', theme.fontColor);
  style.setProperty('--primary', theme.primary);
  style.setProperty('--primary-contrast', theme.primaryContrast);
};

export default toggleTheme;
