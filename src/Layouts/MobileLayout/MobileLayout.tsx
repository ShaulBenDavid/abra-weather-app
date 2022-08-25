import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectLogoutProccess } from "../../Redux/User/User";
// Components
import MobileNav from "../../Layouts/MobileNav";
import Drawer from "../Drawer";
import MobileMenu from "./Components/MobileMenu";
import BurgerButton from "./Components/BurgerButton";
import MobileSearch from "./Components/MobileSearch";
import { selectIsMobileSearchOpen, setIsMobileSearchOpen } from "../../Redux/Search/Search";
// Styles

const MobileLayOut = () => {
  // Selectors
  const isLogoutOpen = useAppSelector(selectLogoutProccess);
  const isMobileSearchOpen = useAppSelector(selectIsMobileSearchOpen);
  const dispatch = useAppDispatch();
  // States
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle menu state
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);
  // Handle search state
  const handleSearch = () => dispatch(setIsMobileSearchOpen());


  useEffect(() => {
    if (isMenuOpen) {
      if (isLogoutOpen) handleMenu();
    }
  }, [isLogoutOpen, isMenuOpen])
  
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
      {/* Mobile Search */}
      {isMobileSearchOpen && (
        <Drawer onClick={handleSearch} >
          <MobileSearch onClick={handleSearch} />
        </Drawer>
      )}
    </>
  );
};

export default MobileLayOut;
