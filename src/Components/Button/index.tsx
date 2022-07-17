import React from "react";
// Styles
import { StyledButton } from "./style";
// types
import { ButtonProps } from "./types";

const Button = ({ children, variant, disabled }: ButtonProps) => {
  return <StyledButton disabled={disabled} variant={variant} >{children}</StyledButton>;
};

export default Button;
