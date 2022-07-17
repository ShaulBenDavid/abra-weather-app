import React from "react";
// Styles
import { StyledButton } from "./style";
// types
import { ButtonProps } from "./types";

const Button = ({ children, variant, disabled, type }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} variant={variant} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
