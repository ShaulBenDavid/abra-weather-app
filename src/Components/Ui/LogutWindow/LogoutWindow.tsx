import { useAppDispatch } from "../../../Redux/hooks";
import { logOut, manegeLogout } from "../../../Redux/User/User";
// Components
import Drawer from "../Drawer";
import Button from "../Button";
// Styles
import {
  StyledLogoutWrapper,
  StyledLogoutP,
  StyledLogoutButtonWrapper,
} from "./style";

const LogoutWindow = () => {
  const dispatch = useAppDispatch();

  // Handle Logout
  const handleLogout = () => dispatch(logOut());
  // cancel logout
  const cancelLogout = () => dispatch(manegeLogout());
  return (
    <Drawer onClick={cancelLogout}>
      <StyledLogoutWrapper>
        <h2>Log out</h2>
        <StyledLogoutP>
          You about to log out from WeatherApp. Are you sure you want to log
          out?
        </StyledLogoutP>
        <StyledLogoutButtonWrapper>
          <Button variant="link" onClick={cancelLogout}>
            I want to stay
          </Button>
          <Button
            variant="primary"
            style={{ width: "145px" }}
            onClick={handleLogout}
          >
            Yes, log out
          </Button>
        </StyledLogoutButtonWrapper>
      </StyledLogoutWrapper>
    </Drawer>
  );
};

export default LogoutWindow;
