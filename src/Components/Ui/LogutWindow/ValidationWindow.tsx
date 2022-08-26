
// Components
import Drawer from "../Drawer";
import Button from "../Button";
// Types
import { ValidationWindowProps } from "./types";
// Styles
import {
  StyledLogoutWrapper,
  StyledLogoutP,
  StyledLogoutButtonWrapper,
} from "./style";

// onClick to make the action
// onClose to cancel and close the drawer
const ValidationWindow: React.FC<ValidationWindowProps> = ({
  title,
  p,
  primaryButton,
  secondaryButton,
  onClick,
  onClose,
}) => {
  return (
    <Drawer onClick={onClose}>
      <StyledLogoutWrapper>
        <h2>{title}</h2>
        <StyledLogoutP>{p}</StyledLogoutP>
        <StyledLogoutButtonWrapper>
          <Button variant="link" onClick={onClose}>
            {secondaryButton}
          </Button>
          <Button
            variant="primary"
            style={{ width: "145px" }}
            onClick={onClick}
          >
            {primaryButton}
          </Button>
        </StyledLogoutButtonWrapper>
      </StyledLogoutWrapper>
    </Drawer>
  );
};

export default ValidationWindow;
