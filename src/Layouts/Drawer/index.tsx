import * as ReactDOM from 'react-dom';
// Types
import { DrawerProps } from './types';
// Styles
import { StyledDrawerWrapper, StyledDrawerBackground } from './style';

const Drawer = ({ children, onClick }: DrawerProps) => {
  const handleClick = (event: React.SyntheticEvent): void => {
    event.stopPropagation();
  }
  return ReactDOM.createPortal(
      <StyledDrawerBackground onClick={onClick}>
        <StyledDrawerWrapper onClick={handleClick}>{children}</StyledDrawerWrapper>
      </StyledDrawerBackground>, document.body
  )
}

export default Drawer;