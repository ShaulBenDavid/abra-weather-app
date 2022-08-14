import { useAppSelector } from "../../Redux/hooks";
import { selectTheme } from "../../Redux/ThemeMode/ThemeMode";

// Types
import { MobileNavProps } from "./types";
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

const MobileNav: React.FC<MobileNavProps> = ({ onClick }) => {
  const theme = useAppSelector(selectTheme);

  return (
    <S.MobileNavbar>
      {/* Links */}
      <S.MobileNavLink to="favorites">
        {theme === "light" ? <IconFavOutline /> : <IconFavDark />}
        <p>Favorites</p>
      </S.MobileNavLink>
      <S.Divider />
      <S.MobileNavLinkB onClick={onClick}>
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
