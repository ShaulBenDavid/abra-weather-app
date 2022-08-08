import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Components
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Header from "./Pages/Header";
//Styles
import { darkMode, lightMode } from "./GlobalStyle/theme";
import { AppWrapper } from "./style";

const themes: any = {
  light: lightMode,
  dark: darkMode,
};

const App: React.FC = () => {
  // Theme mode
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <AppWrapper>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Header toggleTheme={toggleTheme} />}>
              <Route index element={<Home />} />
              <Route path="favorites" element={<Favorites />} />
            </Route>
          </Routes>
        </AppWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
