import { createContext, useState } from "react";
// Types
import { ThemeContextProps } from "./types";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

export const ThemeToggleProvider = ({ children }: ThemeContextProps) => {
  // Theme mode
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

    const value = { toggleTheme, theme };
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}