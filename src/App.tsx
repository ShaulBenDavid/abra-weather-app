import React from "react";
// Components
import Login from "./Pages/Login";
//Styles
import { AppWrapper } from './style';

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Login />
    </AppWrapper>
  );
};

export default App;
