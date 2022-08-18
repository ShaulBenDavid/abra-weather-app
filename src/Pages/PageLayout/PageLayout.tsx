import { Outlet } from "react-router-dom";

import useMediaQuery from "../../Hooks/useMediaQuery";
import { useAppSelector } from "../../Redux/hooks";
import { selectLogoutProccess } from "../../Redux/User/User";
// Components
import MobileLayout from "../../Layouts/MobileLayout";
import Header from "../../Layouts/Header";
import LogoutWindow from "../../Components/Ui/LogutWindow";
// Types

const PageLayout = () => {
  // Media query
  const matches = useMediaQuery("(min-width: 1207px)");
  // Logout controller
  const toLogout = useAppSelector(selectLogoutProccess);

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
      {/* Logout */}
      {toLogout &&
        <LogoutWindow />
      }
      <Outlet />
    </>
  );
};

export default PageLayout;
