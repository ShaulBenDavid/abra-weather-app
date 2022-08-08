import * as ReactDOM from 'react-dom';
// Types
import { DrawerProps } from './types';
// Styles
import { StyledDrawerWrapper } from './style';

const Drawer = ({ children }: DrawerProps) => {
  return ReactDOM.createPortal(
      <StyledDrawerWrapper>{children}</StyledDrawerWrapper>, document.body
  )
}

export default Drawer;