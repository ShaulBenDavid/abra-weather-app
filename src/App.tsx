import React from "react";
import { Routes, Route } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
// Components
import Login from "./Pages/Login";
import Navigation from "./Pages/Navigation";
//Styles
import { AppWrapper } from './style';

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;
