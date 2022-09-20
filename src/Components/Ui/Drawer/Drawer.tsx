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
import { useEffect } from "react";

const Drawer = ({ children, onClick, useCase, className }: DrawerProps) => {
  // Cancel the Wrapper onclick
  const handleClick = (event: React.SyntheticEvent): void => {
    event.stopPropagation();
  };

  useEffect((): any => {
    document.body.style.overflow = 'hidden';
    return ()=> document.body.style.overflow = 'unset';
 }, []);
  
  return ReactDOM.createPortal(
    <StyledDrawerBackground onClick={onClick} useCase={useCase} >
      <StyledDrawerWrapper onClick={handleClick} useCase={useCase} className={className}>
        {children}
        <StyledXButton useCase={useCase} onClick={onClick}>
          <XImage />
        </StyledXButton>
      </StyledDrawerWrapper>
    </StyledDrawerBackground>,
    document.body
  );
};

export default Drawer;
