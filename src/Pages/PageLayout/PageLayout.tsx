import { Outlet } from "react-router-dom";

import useMediaQuery from "../../Hooks/useMediaQuery";
// Components
import MobileLayout from "../../Layouts/MobileLayout";
import Navigation from "../../Layouts/Navigation";
// Types

const PageLayout = () => {
  // Media query
  const matches = useMediaQuery("(min-width: 1100px)");

  return (
    <>
      {matches ? (
        // Desk nav
        <>
          <Navigation />
        </>
      ) : (
        <>
          {/* Mobile Layout */}
          <MobileLayout />
        </>
      )}
      <Outlet />
    </>
  );
};

export default PageLayout;
