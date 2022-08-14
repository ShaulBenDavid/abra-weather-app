import { useContext } from "react";

import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";
// Components
import Button from "../../Components/Ui/Button";
import { IconLogout, IconMap } from "../../Components/Ui/IconsComponent";
import ToggleSwitch from "../../Components/Ui/ToggleSwitch";
// Styles
import * as S from "./style";
import NavBar from "./Components/NavBar";

const Header = () => {
  // Context Theme mode
  const { toggleTheme, theme } = useContext(ThemeContext);

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
              onChange={() => toggleTheme()}
            />
          </S.SwitchBoxWrapper>
          {/* Logout button */}
          <S.LogoutButtonWrapper>
            <Button
              variant="link"
              style={{ color: "#fff", position: "relative" }}
            >
              <IconLogout />
              <S.NavLinkButtonP>Log out</S.NavLinkButtonP>
              <S.HoverEffect>Log out</S.HoverEffect>
            </Button>
          </S.LogoutButtonWrapper>
        </S.LeftSection>
      </S.NavigationWrapper>
    </>
  );
};

export default Header;
