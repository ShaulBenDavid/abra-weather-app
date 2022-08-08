// Types
import { Theme, DarkModeTheme } from './types';


export const lightMode: Theme = {
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

  // bg
  gradientColor1: "#47bfdf", 
  gradientColor2: "#4a91ff",
  gradientDeg: "241deg",
};


export const darkModeTheme: DarkModeTheme = {
  primary: "#1a2b55",
  gradientColor1: "#191634", 
  gradientColor2: "#1e437c",
  gradientDeg: "226deg",
};

export const darkMode = { ...lightMode, ...darkModeTheme };

