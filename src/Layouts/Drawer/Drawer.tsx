import * as ReactDOM from "react-dom";
// Components
import { ReactComponent as XImage } from "./Assets/drawerX.svg";
// Types
import { DrawerProps } from "./types";
// Styles
import {
  StyledDrawerWrapper,
  StyledDrawerBackground,
  StyledXButton,
} from "./style";

const Drawer = ({ children, onClick }: DrawerProps) => {
  // Cancel the Wrapper onclick
  const handleClick = (event: React.SyntheticEvent): void => {
    event.stopPropagation();
  };
  return ReactDOM.createPortal(
    <StyledDrawerBackground onClick={onClick}>
      <StyledDrawerWrapper onClick={handleClick}>
        {children}
        <StyledXButton>
          <XImage onClick={onClick} />
        </StyledXButton>
      </StyledDrawerWrapper>
    </StyledDrawerBackground>,
    document.body
  );
};

export default Drawer;
