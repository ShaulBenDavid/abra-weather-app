import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectTheme } from "../../Redux/ThemeMode/ThemeMode.redux";

import { setIsMobileSearchOpen } from "../../Redux/Search/Search";
// Types
import { MobileNavProps } from "./types";
// Components
import {
  IconFavOutline,
  IconHomeOutline,
  IconSearchWhite,
  IconSearchDrak,
  IconFavDark,
  IconHomeDark,
} from "../../Components/Ui/IconsComponent";
// Styles
import * as S from "./style";

const MobileNav: React.FC<MobileNavProps> = () => {
  // Selectors
  const theme = useAppSelector(selectTheme);

  const dispatch = useAppDispatch();

  // handle mobile search
  const handleMobileSearch = () => dispatch(setIsMobileSearchOpen());
  

  return (
    <S.MobileNavbar>
      {/* Links */}
      <S.MobileNavLink to="favorites">
        {theme === "light" ? <IconFavOutline /> : <IconFavDark />}
        <p>Favorites</p>
      </S.MobileNavLink>
      <S.Divider />
      <S.MobileNavLinkB onClick={handleMobileSearch}>
        {theme === "light" ? <IconSearchWhite /> : <IconSearchDrak />}
        <p>Search</p>
      </S.MobileNavLinkB>
      <S.Divider />
      <S.MobileNavLink to="/">
        {theme === "light" ? <IconHomeOutline /> : <IconHomeDark />}
        <p>Home</p>
      </S.MobileNavLink>
    </S.MobileNavbar>
  );
};

export default MobileNav;
