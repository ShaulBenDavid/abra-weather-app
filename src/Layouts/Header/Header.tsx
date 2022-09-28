import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  selectTheme,
  toggleMode,
  selectTempMode,
  toggleTempMode,
  toggleMapIsOpen,
} from "../../Redux/ToggleSwitch/ToggleSwitch.redux";
import { useLogoutHandler } from "../../Services/LogoutHandler";

// Components
import { IconLogout, IconMap } from "../../Components/Ui/IconsComponent";
import ToggleSwitch from "../../Components/Ui/ToggleSwitch";
import NavBar from "./Components/NavBar";
import Search from "../../Features/Search";
// Styles
import * as S from "./style";

const Header = () => {
  // Log out type handler
  const [handleUserLogout] = useLogoutHandler();
  // HandleLogout
  const handleLogout = () => handleUserLogout();

  // ------ Toggle buttons ---------
  // Selector
  const theme = useAppSelector(selectTheme);
  const tempMode = useAppSelector(selectTempMode);
  const dispatch = useAppDispatch();
  // Handle toggle theme
  const handleToggleTheme = () => dispatch(toggleMode());
  // Handle toggle temp mode
  const handleToggleTempMode = () => dispatch(toggleTempMode());
  // Handle toggle Map
  const handleToggleMap = () => dispatch(toggleMapIsOpen());

  return (
    <>
      {/* Header */}
      <S.NavigationWrapper>
        {/* ------ Left section ------- */}
        <S.RightSection>
          <S.NavBarLogo />
          {/* Nav Bar */}
          <NavBar />
        </S.RightSection>

        {/* ------ Search / Middle section ------- */}
        <S.MiddleSection>
          <Search />
        </S.MiddleSection>

        {/* ------ Right section -------- */}
        <S.LeftSection>
          {/* Switch to map button */}
          <S.SwitchMapButton variant="link" onClick={handleToggleMap}>
            <IconMap />
            <S.HoverEffect variant="header">Switch to map</S.HoverEffect>
            <S.NavLinkButtonP>Switch to map</S.NavLinkButtonP>
          </S.SwitchMapButton>
          {/* ---- Toggle Switch box ---- */}
          <S.SwitchBoxWrapper>
            <ToggleSwitch
              switchType="temp"
              id="temp"
              checked={tempMode}
              onChange={handleToggleTempMode}
            />
            <ToggleSwitch
              switchType="mode"
              id="mode"
              checked={theme === "light" && true}
              onChange={handleToggleTheme}
            />
          </S.SwitchBoxWrapper>
          {/* Logout button */}
          <S.HeaderLogoutButton variant="link" onClick={() => handleLogout()}>
            <IconLogout />
            <S.NavLinkButtonP>Log out</S.NavLinkButtonP>
            <S.HoverEffect variant="header">Log out</S.HoverEffect>
          </S.HeaderLogoutButton>
        </S.LeftSection>
      </S.NavigationWrapper>
    </>
  );
};

export default Header;
