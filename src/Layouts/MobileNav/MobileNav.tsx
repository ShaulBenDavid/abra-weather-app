import { useContext } from "react";

import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";
// Styles
import {
  IconFavOutline,
  IconHomeOutline,
  IconSearchWhite,
  IconSearchDrak,
  IconFavDark,
  IconHomeDark,
} from "../../Components/Ui/IconsComponent";
import * as S from "./style";

const MobileNav = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <S.MobileNavbar>
      {/* Links */}
      <S.MobileNavLink to="favorites">
        {theme === "light" ? <IconFavOutline /> : <IconFavDark />}
        <p>Favorites</p>
      </S.MobileNavLink>
      <S.Divider />
      <S.MobileNavLink to="/">
        {theme === "light" ? <IconSearchWhite /> : <IconSearchDrak />}
        <p>Search</p>
      </S.MobileNavLink>
      <S.Divider />
      <S.MobileNavLink to="/">
        {theme === "light" ? <IconHomeOutline /> : <IconHomeDark />}
        <p>Home</p>
      </S.MobileNavLink>
    </S.MobileNavbar>
  );
};

export default MobileNav;
