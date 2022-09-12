import { useAppDispatch } from "../Redux/hooks";
import { logOut } from "../Redux/User/User.redux";
import useMediaQuery from "../Hooks/useMediaQuery";
import { DESKTOP_SIZE, LOGOUT_VALIDATION } from "../Utils/Constants";
import { setValidationField } from "../Redux/ActionValidation/ActionValidation.redux";

export const useLogoutHandler = () => {
  // State
  const dispatch = useAppDispatch();
  // Media query
  const matches = useMediaQuery(`(min-width: ${DESKTOP_SIZE})`);
  // call the state to logout
  const makeLogout = () => dispatch(logOut());

  // Check function - this function check if the user make logout that is not on desktop design
  // so the user get a window to do logout
  const handleUserLogout = (force: boolean = false): void => {
    // Force = force logout
    // logout if user on desktop
    if (matches || force) {
      makeLogout();
      return;
    }
    // open window
    dispatch(setValidationField(LOGOUT_VALIDATION));
    return;
  };

  return [handleUserLogout] as const;
};

