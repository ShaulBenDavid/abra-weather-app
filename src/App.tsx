import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ThemeContext } from "./Context/ThemeContext/ThemeContext";
// Components
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PageLayout from "./Pages/PageLayout";
//Styles
import { darkMode, lightMode } from "./GlobalStyle/theme";
import { AppWrapper } from "./style";

const themes: any = {
  light: lightMode,
  dark: darkMode,
};

const App: React.FC = () => {
  // Theme mode
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <AppWrapper>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<PageLayout />}>
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
