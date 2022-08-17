import styled, { keyframes } from "styled-components";

// Animation
const ldsDualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const StyledSpinner = styled.span`
    display: inline-block;
  width: 30px;
  height: 30px;

  &::after {
    content: " ";
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: ${ldsDualRing} 1.2s linear infinite;
  }
`