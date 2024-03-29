import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectIsMobileSearchOpen, setIsMobileSearchOpen } from "../../Redux/Search/Search";
import { selectValidationField } from "../../Redux/ActionValidation/ActionValidation.redux";
// Components
import MobileNav from "../../Layouts/MobileNav";
import Drawer from "../../Components/Ui/Drawer";
import MobileMenu from "./Components/MobileMenu";
import BurgerButton from "./Components/BurgerButton";
import MobileSearch from "./Components/MobileSearch";
// Styles
import { StyledMobileSearchDrawer } from './style';

const MobileLayOut = () => {
  // Selectors
  const isValidationOpen = useAppSelector(selectValidationField);
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
      if (isValidationOpen) handleMenu();
    }
  }, [isValidationOpen, isMenuOpen])
  
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
        <StyledMobileSearchDrawer onClick={handleSearch} >
          <MobileSearch onClick={handleSearch} />
        </StyledMobileSearchDrawer>
      )}
    </>
  );
};

export default MobileLayOut;
