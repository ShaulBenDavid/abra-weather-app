import { useState } from "react";
// Components
import MobileNav from "../../Layouts/MobileNav";
import Drawer from "../Drawer";
import MobileMenu from "./Components/MobileMenu";
import BurgerButton from "./Components/BurgerButton";
import MobileSearch from "./Components/MobileSearch";
// Styles

const MobileLayOut = () => {
  // Is menu open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Handle menu state
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);
  // Handle search state
  const handleSearch = () => setIsSearchOpen(!isSearchOpen);
  return (
    <>
      {/* Mobile nav */}
      <BurgerButton onClick={handleMenu} />
      <MobileNav onClick={handleSearch} />
      {/* Menu drawer */}
      {isMenuOpen && (
        <Drawer onClick={handleMenu}>
          <MobileMenu />
        </Drawer>
      )}
      {/* Mobile Search */}
      {isSearchOpen && (
        <Drawer onClick={handleSearch} >
          <MobileSearch onClick={handleSearch} />
        </Drawer>
      )}
    </>
  );
};

export default MobileLayOut;
