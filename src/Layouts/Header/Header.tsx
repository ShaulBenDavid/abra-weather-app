import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectTheme, toggleMode } from "../../Redux/ThemeMode/ThemeMode";
import {useLogoutHandler} from "../../Services/LogoutHandler";

// Components
import Button from "../../Components/Ui/Button";
import { IconLogout, IconMap } from "../../Components/Ui/IconsComponent";
import ToggleSwitch from "../../Components/Ui/ToggleSwitch";
import NavBar from "./Components/NavBar";
import SearchResults from "../../Components/Ui/SearchResults";
// Styles
import * as S from "./style";
import Drawer from "../Drawer";

const Header = () => {
  // Log out type handler
  const [handleUserLogout] = useLogoutHandler();
  // Redux theme mode
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  // Handle toggle
  const handleToggle = () => dispatch(toggleMode());
  // HandleLogout
  const handleLogout = () => handleUserLogout();

  // console.log(handleUserLogout)

  return (
    <>
      {/* Header */}
      <S.NavigationWrapper>
        {/* Left section */}
        <S.RightSection>
          <S.NavBarLogo />
          {/* Nav Bar */}
          <NavBar />
        </S.RightSection>
        {/* Search / Middle section */}
        <S.MiddleSection>
          <S.HeaderSearch />
        </S.MiddleSection>
        {/* Right section */}
        <S.LeftSection>
          {/* Switch to map button */}
          <S.SwitchButtonWrapper>
            <Button
              variant="link"
              style={{ color: "#fff", position: "relative" }}
            >
              <IconMap />
              <S.HoverEffect>Switch to map</S.HoverEffect>
              <S.NavLinkButtonP>Switch to map</S.NavLinkButtonP>
            </Button>
          </S.SwitchButtonWrapper>
          {/* Type Switch box */}
          <S.SwitchBoxWrapper>
            <ToggleSwitch switchType="temp" id="temp" />
            <ToggleSwitch
              switchType="mode"
              id="mode"
              checked={theme === "light" && true}
              onChange={handleToggle}
            />
          </S.SwitchBoxWrapper>
          {/* Logout button */}
          <S.LogoutButtonWrapper>
            <Button
              variant="link"
              style={{ color: "#fff", position: "relative" }}
              onClick={() => handleLogout()}
            >
              <IconLogout />
              <S.NavLinkButtonP>Log out</S.NavLinkButtonP>
              <S.HoverEffect>Log out</S.HoverEffect>
            </Button>
          </S.LogoutButtonWrapper>
        </S.LeftSection>
      </S.NavigationWrapper>
      {/* Search results */}
      <Drawer useCase="search">
        <SearchResults />
      </Drawer>
    </>
  );
};

export default Header;
