import { Outlet, useLocation } from "react-router-dom";
import Button from "../../Components/Ui/Button";
// Components
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
// Types
import { NavigationProps } from "./types";
// Styles
import * as S from "./style";

const Navigation = ({ toggleTheme }: NavigationProps) => {
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
          <S.NavLink to="/" active={currentPath === '' ? true.toString() : false.toString()}>
          {currentPath === ''? <IconHomeFull /> : <IconHomeOutline /> }
            <p>Home</p>
          </S.NavLink>
          <S.NavLink to="/favorites" active={currentPath === 'favorites'? true.toString() : false.toString()}>
            {currentPath === 'favorites'? <IconFavFull /> : <IconFavOutline /> }
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
          <ToggleSwitch switchType="mode" id="mode" onChange={() => toggleTheme()} defaultChecked={true}  />
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
