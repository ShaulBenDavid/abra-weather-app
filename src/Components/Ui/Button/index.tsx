import React from "react";
// Styles
import { StyledButton } from "./style";
// types
import { ButtonProps } from "./types";

const Button = ({ children, variant, disabled, type, style }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} variant={variant} type={type} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
