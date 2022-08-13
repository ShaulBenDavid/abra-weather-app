import { useContext } from "react";

import { ThemeContext } from "../../../../Context/ThemeContext/ThemeContext";
// Components
import Button from "../../../../Components/Ui/Button";
import { ReactComponent as IconLogoutDark } from "./Assets/log-out.svg";
import ToggleSwitch from "../../../../Components/Ui/ToggleSwitch";
// Types

// Styles
import * as S from "./style";

const MobileMenu = () => {
  // Theme context
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div>
      {/* Title */}
      <h2>Menu</h2>
      {/* Switch boxs */}
      <S.SwitchWrapper>
        <S.SwitchBoxContainer>
          <p>Change mode</p>
          <ToggleSwitch
            switchType="mode"
            id="mode"
            checked={theme === "light" && true}
            onChange={() => toggleTheme()}
          />
        </S.SwitchBoxContainer>
        <S.SwitchBoxContainer>
          <p>Change degrees</p>
          <ToggleSwitch switchType="temp" id="temp" />
        </S.SwitchBoxContainer>
      </S.SwitchWrapper>
      {/* Log out */}
      <Button variant="link" style={{ color: "#444e72", margin: "0 auto" }}>
        <IconLogoutDark />
        Log out
      </Button>
    </div>
  );
};

export default MobileMenu;