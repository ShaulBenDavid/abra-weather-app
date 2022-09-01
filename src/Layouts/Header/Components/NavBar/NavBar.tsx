import { useLocation } from "react-router-dom";
// Components
import {
  IconFavFull,
  IconFavOutline,
  IconHomeFull,
  IconHomeOutline,
} from "../../../../Components/Ui/IconsComponent";
// Styles
import * as S from "./style";

const NAV_LINKS = [
  {
    name: "Home",
    to: "/",
    activeIcon: <IconHomeFull />,
    defaultIcon: <IconHomeOutline />,
  },
  {
    name: "Favorites",
    to: "/favorites",
    activeIcon: <IconFavFull />,
    defaultIcon: <IconFavOutline />,
  },
];

const NavBar = () => {
  // Get current path
  const { pathname } = useLocation();
  return (
    <S.NavBarWrapper>
      {/* Links */}
      {NAV_LINKS.map((link, idx) => (
        <S.NavLink
          key={idx}
          to={link.to}
          active={pathname === link.to ? true.toString() : false.toString()}
        >
          {pathname === link.to ? link.activeIcon : link.defaultIcon}
          <p>{link.name}</p>
        </S.NavLink>
      ))}
    </S.NavBarWrapper>
  );
};

export default NavBar;
