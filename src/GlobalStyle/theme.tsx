// Types
import { Theme, LightModeTheme } from './types';


const baseTheme: Theme = {
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
  buttonDefaultSize: "1.125rem",
  // Line Height
  buttonLineHeight: "1.2",
};

export const lightModeTheme: LightModeTheme = {
  primary: "#48BAE4",
};

export const darkModeTheme = {
  primary: "#48BAE4",
};

export const lightMode = { ...baseTheme, ...lightModeTheme };
export const darkMode = { ...baseTheme, ...darkModeTheme };
export default lightMode;
