import { Outlet } from "react-router-dom";

import useMediaQuery from "../../Hooks/useMediaQuery";
import { USE_MEDIA_QUERY } from "../../Utils/Constants";
import { useAppSelector } from "../../Redux/hooks";
import { selectLogoutProccess } from "../../Redux/User/User";
// Components
import MobileLayout from "../../Layouts/MobileLayout";
import Header from "../../Layouts/Header";
import LogoutWindow from "../../Components/Ui/LogutWindow";


const PageLayout = () => {
  // Media query
  const matches = useMediaQuery(USE_MEDIA_QUERY);
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
