import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";
// Components
import Button from "../../Components/Ui/Button";
import {
  IconFavFull,
  IconFavOutline,
  IconHomeFull,
  IconHomeOutline,
  IconLogout,
  IconMap,
} from "../../Components/Ui/IconsComponent";
import SearchBox from "../../Components/Ui/SearchBox";
import ToggleSwitch from "../../Components/Ui/ToggleSwitch";
// Styles
import * as S from "./style";

const Navigation = () => {
  // Context Theme mode
  const { toggleTheme, theme } = useContext(ThemeContext);
  // Get current path
  const location = useLocation();
  const { pathname } = location;
  const currentPath = pathname.split("/")[1];

  return (
    <>
      {/* Navbar */}
      <S.NavigationWrapper>
        <S.NavBarLogo />
        {/* Nav link */}
        <S.LinksWrapper>
          <S.NavLink
            to="/"
            active={currentPath === "" ? true.toString() : false.toString()}
          >
            {currentPath === "" ? <IconHomeFull /> : <IconHomeOutline />}
            <p>Home</p>
          </S.NavLink>
          <S.NavLink
            to="/favorites"
            active={
              currentPath === "favorites" ? true.toString() : false.toString()
            }
          >
            {currentPath === "favorites" ? <IconFavFull /> : <IconFavOutline />}
            <p>Favorites</p>
          </S.NavLink>
        </S.LinksWrapper>
        {/* Search */}
        <S.SearchWrapper>
          <SearchBox placeholder="Try “Tel Aviv - Jaffa”..." />
        </S.SearchWrapper>
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
      </S.NavigationWrapper>
    </>
  );
};

export default Navigation;
