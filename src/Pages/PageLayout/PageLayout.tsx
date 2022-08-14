import { Outlet } from "react-router-dom";

import useMediaQuery from "../../Hooks/useMediaQuery";
// Components
import MobileLayout from "../../Layouts/MobileLayout";
import Header from "../../Layouts/Header";
// Types

const PageLayout = () => {
  // Media query
  const matches = useMediaQuery("(min-width: 1207px)");

  return (
    <>
      {matches ? (
        // Desk nav
        <>
          <Header />
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
