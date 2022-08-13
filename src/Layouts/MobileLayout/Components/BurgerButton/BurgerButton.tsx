// Styles
import { StyledBurgerButton } from "./style";
import { BurgerButtonProps } from "./types";

const BurgerButton = ({ onClick }: BurgerButtonProps) => {
  return (
    <StyledBurgerButton onClick={onClick} >
      <span></span>
      <span></span>
      <span></span>
    </StyledBurgerButton>
  );
};

export default BurgerButton;
