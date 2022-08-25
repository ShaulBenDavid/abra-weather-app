import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useAppSelector } from "./Redux/hooks";
import { selectTheme } from "./Redux/ThemeMode/ThemeMode";
import { selectUser } from "./Redux/User/User";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import { useAuthentication } from "./Services/Authentication";
// Components
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
//Styles
import { darkMode, lightMode } from "./GlobalStyle/theme";
import { AppWrapper } from "./style";
// Types
export type PayloadAuthCheckProps = {
  token: string | undefined;
};

const themes: any = {
  light: lightMode,
  dark: darkMode,
};

const App: React.FC = () => {
  // Auth fun
  const { checkUserAuth } = useAuthentication();
  // Theme mode
  const theme = useAppSelector(selectTheme);
  // User
  const currentUser = useAppSelector(selectUser);

  // User on refresh
  useEffect(() => {
    const payload = {
      token: currentUser?.access_token,
    };
    checkUserAuth(payload);
  }, []);

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <AppWrapper>
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
