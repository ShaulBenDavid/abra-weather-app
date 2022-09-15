import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useAppSelector } from "./Redux/hooks";
import { selectTheme } from "./Redux/ToggleSwitch/ToggleSwitch.redux";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import { useAuthentication } from "./Services/Authentication";
// Components
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
//Styles
import { darkMode, lightMode } from "./GlobalStyle/theme";
import { AppWrapper } from "./style";
import Clouds from "./Components/Ui/Clouds";
// Types
export type PayloadAuthCheckProps = {
  token: string | undefined;
};

const themes: any = {
  light: lightMode,
  dark: darkMode,
};

const App: React.FC = () => {
  // Auth function
  const { checkUserAuth } = useAuthentication();
  // Theme mode
  const theme = useAppSelector(selectTheme);

  // User on refresh
  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <AppWrapper>
          <Clouds numberOfClouds={9} />
          <Routes>
            {/* Protected routes */}
            <Route path="/" element={<ProtectedRoutes />}>
              <Route index element={<Home />} />
              <Route path="favorites" element={<Favorites />} />
            </Route>
            {/* Login */}
            <Route path="login" element={<Login />} />
          </Routes>
        </AppWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
