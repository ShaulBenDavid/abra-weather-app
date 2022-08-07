import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Login from "./Pages/Login";
import Navigation from "./Pages/Navigation";
//Styles
import { AppWrapper } from './style';

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigation />}>
          
        </Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;
