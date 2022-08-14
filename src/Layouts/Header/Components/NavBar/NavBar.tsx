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

const NavBar = () => {
      // Get current path
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  return (
    <S.NavBarWrapper>
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
    </S.NavBarWrapper>
  );
};

export default NavBar;
