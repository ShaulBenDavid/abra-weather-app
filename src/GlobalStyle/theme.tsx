const baseTheme = {
  // Colors
  black: "#222222",
  white: "#FFFFFF",
  primary: "#48BAE4",
  secondary: "#444E72",
  fadeText: "#838BAA",
  gray: "#BEBEBE",
  grayBg: "#F2F2F2",
  errorRed: "#F0274B",
  yellow: "#FFD130",
  // Fonts
  buttonDefaultSize: "18px",
};

const lightModeTheme = {
  primary: "#48BAE4",
};

const darkModeTheme = {
  primary: "#48BAE4",
};

const lightMode = { ...baseTheme, ...lightModeTheme };
const darkMode = { ...baseTheme, ...darkModeTheme };
export default lightMode;
