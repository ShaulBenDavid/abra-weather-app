import React from "react";
// import Button from "./Components/Button/style";
// Components
import FromInput from "./Components/FromInput";
import ToggleSwitch from "./Components/ToggleSwitch";

const App: React.FC = () => {
  return (
    <>
      <div style={{ width: "350px", padding: "20px" }}>
        {/* <Button variant="primary" disabled>Log in</Button>
        <Button variant="white">Log in</Button>
        <Button variant="inverted">Log in</Button>
        <Button variant="link">Log in with google</Button> */}
        <FromInput label="ff" placeholder="aasdasd" validError={false} />
        <ToggleSwitch switchType="temp" />
      </div>
    </>
  );
};

export default App;
