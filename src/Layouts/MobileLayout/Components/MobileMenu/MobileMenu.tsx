import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import { selectTheme, toggleMode, selectTempMode, toggleTempMode } from "../../../../Redux/ToggleSwitch/ToggleSwitch.redux";

// Components
import Button from "../../../../Components/Ui/Button";
import { ReactComponent as IconLogoutDark } from "./Assets/log-out.svg";
import ToggleSwitch from "../../../../Components/Ui/ToggleSwitch";
import { useLogoutHandler } from "../../../../Services/LogoutHandler";
// Styles
import * as S from "./style";

const MobileMenu = () => {
  const [handleUserLogout] = useLogoutHandler();

  // HandleLogout
  const handleLogout = () => handleUserLogout();

  // Selector
  const tempMode = useAppSelector(selectTempMode);
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  // ------ Toggle buttons ---------
  // Handle toggle theme
  const handleToggleTheme = () => dispatch(toggleMode());
  // Handle toggle temp mode
  const handleToggleTempMode = () => dispatch(toggleTempMode());

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
            onChange={handleToggleTheme}
          />
        </S.SwitchBoxContainer>
        <S.SwitchBoxContainer>
          <p>Change degrees</p>
          <ToggleSwitch
            switchType="temp"
            id="temp"
            checked={tempMode}
            onChange={handleToggleTempMode}
          />
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
