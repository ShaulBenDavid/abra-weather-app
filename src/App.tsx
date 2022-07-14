import React from "react";
import "./App.css";
// import Button from "./Components/Button/style";
import FromInput from "./Components/FromInput";

const App: React.FC = () => {
  return (
    <>
      <div style={{ width: "350px", padding: "20px" }}>
        {/* <Button variant="primary">Log in</Button>
        <Button variant="white">Log in</Button>
        <Button variant="inverted">Log in</Button>
        <Button variant="link">Log in with google</Button> */}
        <FromInput label="ff" placeholder="aasdasd" validError={false} />
      </div>
    </>
  );
};

export default App;
