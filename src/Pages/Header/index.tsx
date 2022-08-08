import { Outlet } from "react-router-dom";

import useMediaQuery from "../../Hooks/useMediaQuery";
// Components
import MobileNav from "../../Layouts/MobileNav";
import Navigation from "../../Layouts/Navigation";
import BurgerButton from "./Components/BurgerButton";
import Drawer from "../../Layouts/Drawer";
import MobileMenu from "./Components/MobileMenu";
// Types
import { HeaderProps } from "./types";

const Header = ({ toggleTheme }: HeaderProps) => {
  const matches = useMediaQuery("(min-width: 1100px)");
  console.log(matches);
  return (
    <>
      {matches ? (
        <Navigation toggleTheme={toggleTheme} />
      ) : (
        <>
          <BurgerButton />
          <MobileNav />
        </>
      )}
      <Drawer><MobileMenu /></Drawer>
      <Outlet />
    </>
  );
};

export default Header;
