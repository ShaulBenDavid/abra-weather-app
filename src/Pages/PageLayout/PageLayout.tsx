import { Outlet } from "react-router-dom";

import useMediaQuery from "../../Hooks/useMediaQuery";
import { USE_MEDIA_QUERY } from "../../Utils/Constants";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  selectChosenFav,
  selectFavValidation,
  setChoosingFav,
  setFavValidation,
} from "../../Redux/Favorites/Favorites.redux";
import {
  logOut,
  manegeLogout,
  selectLogoutProccess,
} from "../../Redux/User/User";
import { LOGOUT_VALIDATION } from "../../Utils/Constants";
// Components
import MobileLayout from "../../Layouts/MobileLayout";
import Header from "../../Layouts/Header";
import ValidationWindow from "../../Components/Ui/ValidationWindow";
import UseFavorites from "../../Services/Favorites/UseFavorites";
// Styles
import { StyledFvoriteAlert } from "./style";

const PageLayout = () => {
  // Media query
  const matches = useMediaQuery(USE_MEDIA_QUERY);
  // Selectors
  const favValidation = useAppSelector(selectFavValidation);
  const toLogout = useAppSelector(selectLogoutProccess);
  const chosenFav = useAppSelector(selectChosenFav);
  const dispatch = useAppDispatch();

  // ---------===== Logout modal =====-------
  // Handle Logout
  const handleLogout = () => dispatch(logOut());
  // cancel logout
  const cancelLogout = () => dispatch(manegeLogout());

  // ---------===== Fav modal =====-----------
  // Fav
  const { UseHandleFav, favAlert } = UseFavorites();
  // cancel fav delete
  const cancelFavDelete = () => {
    dispatch(setFavValidation(null));
    dispatch(setChoosingFav(null));
  };
  // handle fav delete
  const handleFavDelete = () => {
    chosenFav && UseHandleFav(chosenFav);
    cancelFavDelete();
  };

  console.log(favAlert)

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
      {/* Remove from fav */}
      {favValidation && (
        <ValidationWindow
          {...favValidation}
          onClick={handleFavDelete}
          onClose={cancelFavDelete}
        />
      )}
      {/* Fav alert */}
      { favAlert && <StyledFvoriteAlert severity="success">{favAlert}</StyledFvoriteAlert>}
      <Outlet />
    </>
  );
};

export default PageLayout;
