import { Outlet } from "react-router-dom";

import useMediaQuery from "../../Hooks/useMediaQuery";
import { USE_MEDIA_QUERY } from "../../Utils/Constants";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  logOut,
  manegeLogout,
  selectLogoutProccess,
} from "../../Redux/User/User";
import { LOGOUT_VALIDATION } from "../../Utils/Constants";
// Components
import MobileLayout from "../../Layouts/MobileLayout";
import Header from "../../Layouts/Header";
import ValidationWindow from "../../Components/Ui/LogutWindow";

const PageLayout = () => {
  // Media query
  const matches = useMediaQuery(USE_MEDIA_QUERY);
  // Logout controller
  const toLogout = useAppSelector(selectLogoutProccess);
  const dispatch = useAppDispatch();

  // Handle Logout
  const handleLogout = () => dispatch(logOut());
  // cancel logout
  const cancelLogout = () => dispatch(manegeLogout());

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
      {toLogout && (
        <ValidationWindow
          {...LOGOUT_VALIDATION}
          onClick={handleLogout}
          onClose={cancelLogout}
        />
      )}
      <Outlet />
    </>
  );
};

export default PageLayout;
