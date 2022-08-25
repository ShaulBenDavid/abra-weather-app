import { useAppDispatch } from "../Redux/hooks";
import { logOut, manegeLogout } from "../Redux/User/User";
import useMediaQuery from "../Hooks/useMediaQuery";

export const useLogoutHandler = () => {
  // State
  const dispatch = useAppDispatch();
  // Media query
  const matches = useMediaQuery("(min-width: 1920px)");
  // call the state to logout
  const makeLogout = () => dispatch(logOut());

  // Check function - this function check if the user make logout that is not on desktop design
  // so the user get a window to do logout
  const handleUserLogout = (): void => {
    // logout if user on desktop
    if (matches) {
      makeLogout();
      return;
    }
    // open window
      dispatch(manegeLogout());
    return;
  };

  return [handleUserLogout] as const;
};

