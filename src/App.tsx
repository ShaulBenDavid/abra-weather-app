import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useAppDispatch, useAppSelector } from "./Redux/hooks";
import { selectTheme } from "./Redux/ThemeMode/ThemeMode";
// Components
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
//Styles
import { darkMode, lightMode } from "./GlobalStyle/theme";
import { AppWrapper } from "./style";
import { selectUser } from "./Redux/User/User";
import { PostFetchApi } from "./Services/FetchApi";
import ProtectedRoutes from "./Utils/ProtectedRoutes";

const themes: any = {
  light: lightMode,
  dark: darkMode,
};

const App: React.FC = () => {
  // Theme mode
  const theme = useAppSelector(selectTheme);
  // User
  const currentUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  // User on refresh
  useEffect(() => {
    const userRefresh = async () => {
      const payload = {
        refresh: currentUser?.refresh_token,
      };
      const newUser = await PostFetchApi("/auth/refresh-token/", payload);
      console.log(newUser);
    };

    if (currentUser) {
      userRefresh();
    }
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
