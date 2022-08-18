import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import { selectTheme, toggleMode } from "../../../../Redux/ThemeMode/ThemeMode";

// Components
import Button from "../../../../Components/Ui/Button";
import { ReactComponent as IconLogoutDark } from "./Assets/log-out.svg";
import ToggleSwitch from "../../../../Components/Ui/ToggleSwitch";
import { useLogoutHandler } from "../../../../Services/LogoutHandler";
// Styles
import * as S from "./style";

const MobileMenu = () => {
  const [handleUserLogout] = useLogoutHandler()

  // Redux theme mode
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  // Handle toggle
  const handleToggle = () => dispatch(toggleMode());
  // HandleLogout
  const handleLogout = () => handleUserLogout();

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
            onChange={handleToggle}
          />
        </S.SwitchBoxContainer>
        <S.SwitchBoxContainer>
          <p>Change degrees</p>
          <ToggleSwitch switchType="temp" id="temp" />
        </S.SwitchBoxContainer>
      </S.SwitchWrapper>
      {/* Log out */}
      <Button
        variant="link"
        style={{ color: "#444e72", margin: "0 auto" }}
        onClick={() => handleLogout()}
      >
        <IconLogoutDark />
        Log out
      </Button>
    </div>
  );
};

export default MobileMenu;
