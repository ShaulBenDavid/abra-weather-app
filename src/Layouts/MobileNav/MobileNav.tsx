// Styles
import {
    IconFavOutline,
    IconHomeOutline,
    IconSearchWhite,
  } from "../../Components/Ui/IconsComponent";
  import * as S from "./style";
  
  const MobileNav = () => {
    return (
      <S.MobileNavbar>
        {/* Links */}
        <S.MobileNavLink to="favorites">
          <IconFavOutline />
          <p>Favorites</p>
        </S.MobileNavLink>
        <S.Divider />
        <S.MobileNavLink to="/">
          <IconSearchWhite />
          <p>Search</p>
        </S.MobileNavLink>
        <S.Divider />
        <S.MobileNavLink to="/">
          <IconHomeOutline />
          <p>Home</p>
        </S.MobileNavLink>
      </S.MobileNavbar>
    );
  };
  
  export default MobileNav;
  