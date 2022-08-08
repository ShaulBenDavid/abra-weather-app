import { Outlet } from "react-router-dom";

import useMediaQuery from "../../Hooks/useMediaQuery";
// Components
import MobileNav from "../../Layouts/MobileNav";
import Navigation from "../../Layouts/Navigation";
// Types
import { HeaderProps } from "./types";

const Header = ({ toggleTheme }: HeaderProps) => {
    const matches = useMediaQuery('(min-width: 768px)')
    console.log(matches)
  return (
      <>
          {matches
              ? <Navigation toggleTheme={toggleTheme} />
              : <MobileNav />
          }
      <Outlet />
    </>
  );
};

export default Header;
