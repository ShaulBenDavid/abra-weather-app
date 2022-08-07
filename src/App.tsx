import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Login from "./Pages/Login";
//Styles
import { AppWrapper } from './style';

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
