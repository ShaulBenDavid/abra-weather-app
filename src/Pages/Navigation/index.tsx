import { Outlet } from "react-router-dom";
import Button from "../../Components/Button";
// Components
import {
  IconFavOutline,
  IconHomeFull,
  IconLogout,
  IconMap,
} from "../../Components/IconsComponent";
import SearchBox from "../../Components/SearchBox";
import ToggleSwitch from "../../Components/ToggleSwitch";

// Styles
import * as S from "./style";

const Navigation = () => {
  return (
    <>
      {/* Navbar */}
      <S.NavigationWrapper>
        <S.NavBarLogo />
        {/* Nav link */}
        <S.LinksWrapper>
          <S.NavLink to="/">
            <IconHomeFull />
            <p>Home</p>
          </S.NavLink>
          <S.NavLink to="/">
            <IconFavOutline />
            <p>Favorites</p>
          </S.NavLink>
        </S.LinksWrapper>
        {/* Search */}
        <S.SearchWrapper>
          <SearchBox placeholder="Try “Tel Aviv - Jaffa”..." />
        </S.SearchWrapper>
        {/* Switch to map button */}
        <S.SwitchButtonWrapper>
          <Button variant="link" style={{ color: "#fff" }}>
            <IconMap />
            <S.NavLinkButtonP>Switch to map</S.NavLinkButtonP>
          </Button>
        </S.SwitchButtonWrapper>
        {/* Type Switch box */}
        <S.SwitchBoxWrapper>
          <ToggleSwitch switchType="temp" id="temp" />
          <ToggleSwitch switchType="mode" id="mode" />
        </S.SwitchBoxWrapper>
        {/* Logout button */}
        <S.LogoutButtonWrapper>
          <Button variant="link" style={{ color: "#fff" }}>
            <IconLogout />
            <S.NavLinkButtonP>Log out</S.NavLinkButtonP>
          </Button>
        </S.LogoutButtonWrapper>
      </S.NavigationWrapper>
      {/* Outlet render */}
      <Outlet />
    </>
  );
};

export default Navigation;
