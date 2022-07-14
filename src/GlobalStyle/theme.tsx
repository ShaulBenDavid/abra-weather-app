// Types
export type Theme = {
    // Colors
    black: string,
    white: string,
    primary: string,
    secondary: string,
    fadeText: string,
    gray: string,
    grayBg: string,
    errorRed: string,
    yellow: string,
    // Fonts
    buttonDefaultSize: string,
    // Line Height
    buttonLineHeight: string,
}

type LightModeTheme = {
  primary: string;
}


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

const lightModeTheme: LightModeTheme = {
  primary: "#48BAE4",
};

// const darkModeTheme = {
//   primary: "#48BAE4",
// };

const lightMode = { ...baseTheme, ...lightModeTheme };
// const darkMode = { ...baseTheme, ...darkModeTheme };
export default lightMode;
