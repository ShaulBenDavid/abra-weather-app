import React from "react";
// Types
import { HoverWindowProps } from "./types";
// Styles
import {
  StyledWindowHoverWrapper,
  StyledWindow,
  StyledWindowArrow,
} from "./style";

const WindowHover = ({ children, className }: HoverWindowProps) => {
  return (
    <StyledWindowHoverWrapper className={className}>
      <StyledWindow>
        <StyledWindowArrow />
        {children}
      </StyledWindow>
    </StyledWindowHoverWrapper>
  );
};

export default WindowHover;
