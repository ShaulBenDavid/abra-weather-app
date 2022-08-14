import React from "react";
// Styles
import { StyledButton } from "./style";
// types
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, variant, disabled, style, className, ...otherprops}) => {
  return (
    <StyledButton disabled={disabled} variant={variant} style={style} className={className} {...otherprops}>
      {children}
    </StyledButton>
  );
};

export default Button;
