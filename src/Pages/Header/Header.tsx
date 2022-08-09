import { useState } from "react";
import { Outlet } from "react-router-dom";

import useMediaQuery from "../../Hooks/useMediaQuery";
// Components
import MobileNav from "../../Layouts/MobileNav";
import Navigation from "../../Layouts/Navigation";
import BurgerButton from "./Components/BurgerButton";
import Drawer from "../../Layouts/Drawer";
import MobileMenu from "./Components/MobileMenu";
// Types

const Header = () => {
  // Is menu open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Media query
  const matches = useMediaQuery("(min-width: 1100px)");
  // Handle menu state
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {matches ? (
        // Desk nav
        <Navigation />
      ) : (
        <>
          {/* Mobile nav */}
          <BurgerButton onClick={handleMenu} />
          <MobileNav />
        </>
      )}
      {/* Drawer menu */}
      {!matches && (
        isMenuOpen &&
        <Drawer onClick={handleMenu}>
          <MobileMenu />
        </Drawer>
      )}
      <Outlet />
    </>
  );
};

export default Header;
