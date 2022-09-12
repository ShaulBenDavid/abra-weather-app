import { Outlet } from "react-router-dom";

import useMediaQuery from "../../Hooks/useMediaQuery";
import { USE_MEDIA_QUERY } from "../../Utils/Constants";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  selectChosenFav,
  setChoosingFav,
} from "../../Redux/Favorites/Favorites.redux";
import {
  selectValidationField,
  setValidationField,
} from "../../Redux/ActionValidation/ActionValidation.redux";
import { useLogoutHandler } from "../../Services/LogoutHandler";
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
  const chosenFav = useAppSelector(selectChosenFav);
  const dispatch = useAppDispatch();

  const validationField = useAppSelector(selectValidationField);

  // -----=== Validation box ===-----
  // cancel validation
  const cancelValidation = () => {
    dispatch(setValidationField(null));
    // If its fav validation, to cancel the chosen fav
    validationField?.title !== "Log out" && dispatch(setChoosingFav(null));
  };
  // ------ Logout modal -------
  const [handleUserLogout] = useLogoutHandler();
  // Handle Logout
  const handleLogout = () => handleUserLogout(true);
  // ------ Fav modal --------
  // Handle Fav
  const { UseHandleFav, favAlert } = UseFavorites();
  // handle fav delete
  const handleFavDelete = () => {
    chosenFav && UseHandleFav(chosenFav);
    cancelValidation();
  };

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
      {/* Validation box */}
      {validationField && (
        <ValidationWindow
          {...validationField}
          onClick={
            validationField.title === "Log out" ? handleLogout : handleFavDelete
          }
          onClose={cancelValidation}
        />
      )}
      {/* Fav alert */}
      {favAlert && (
        <StyledFvoriteAlert severity="success">{favAlert}</StyledFvoriteAlert>
      )}
      <Outlet />
    </>
  );
};

export default PageLayout;
