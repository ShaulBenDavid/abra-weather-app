import styled, { css } from "styled-components";
import { MarkerProps } from "./types";
// Wrapper
export const StyledMarkerWrapper = styled.span`
  position: absolute;
  bottom: -200%;
  left: 50%;
  transform: translateX(-50%);

  /* Map */
  ${(props: MarkerProps) =>
    props.variant === "map" &&
    css`
      bottom: 20px;
      right: 50%;
      left: auto;
      transform: rotate(180deg) translateX(-50%);
    `}
`;

// Arrow
export const StyledWindowArrow = styled.span`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 50%;
  top: -30%;
  transform: translateX(-50%) rotate(45deg);
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px 5px 90px 5px;
`;

// Window
export const StyledWindow = styled.div`
  position: relative;
  padding: 12px;

  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.secondary};
  box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
    inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1), 0 2px 60px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  p {
    white-space: nowrap;
    font-weight: bold;
    font-size: 1.125rem;
    text-align: center;
  }

  /* Map */
  ${(props: MarkerProps) =>
    props.variant === "map" &&
    css`
      padding: 8px;
      max-height: 94px;
      ${StyledWindowArrow} {
        top: -15%;
      }
      p {
        rotate: 180deg;
      }
    `}
`;
