import { useState } from "react";
// Components
import MobileNav from "../../Layouts/MobileNav";
import Drawer from "../Drawer";
import MobileMenu from "./Components/MobileMenu";
import BurgerButton from "./Components/BurgerButton";
// Styles

const MobileLayOut = () => {
  // Is menu open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Handle menu state
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      {/* Mobile nav */}
      <BurgerButton onClick={handleMenu} />
      <MobileNav />
      {/* Menu drawer */}
      {isMenuOpen && (
        <Drawer onClick={handleMenu}>
          <MobileMenu />
        </Drawer>
      )}
    </>
  );
};

export default MobileLayOut;
