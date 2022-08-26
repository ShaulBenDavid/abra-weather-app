import styled, { keyframes, css } from "styled-components";
import getMediaQuery from "../../../Utils/GetMediaQuery";

// Types
import { DrawerStyledProps } from "./types";

// Animation
const linearUp = keyframes`
  0% { bottom: -60%; }
  100% { bottom: 0; }
`;
const showIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
// Drawer background
export const StyledDrawerBackground = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  animation: ${showIn} 0.3s ease-in-out;
  cursor: pointer;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(140, 140, 140, 0.2);
  overflow: hidden;
  z-index: 4;
  /* Search Drawer */
  ${(props: DrawerStyledProps) =>
    props.useCase === "search" &&
    css`
      top: auto;
      bottom: 0;
      height: calc(100vh - 94px);
      overflow: visible;
      z-index: 10;
    `}
`;
/* // Drawer wrapper */
export const StyledDrawerWrapper = styled.div`
  position: fixed;
  width: 100%;
  animation: ${linearUp} 0.3s linear;
  bottom: 0;
  padding: 40px 30px;
  box-shadow: 0 -7px 30px 0 rgba(0, 0, 0, 0.16);
  background-color: #fcfcfc;
  border-radius: 30px 30px 0 0;
  cursor: default;

  /* Mobile */
  @media (min-width: 1207px) {
    width: auto;
    height: fit-content;
    padding: 48px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    box-shadow: 0 4px 80px 0 rgba(0, 0, 0, 0.16);

    /* Search Drawer */
    ${(props: DrawerStyledProps) =>
      props.useCase === "search" &&
      css`
        top: 86px;
        margin-top: 86px;
        padding: 0;
        width: 476px;
        height: 372px;
      `}
  }
`;
/* // x button only for desktop */
export const StyledXButton = styled.button`
  all: unset;
  position: absolute;
  top: 32px;
  right: 32px;
  cursor: pointer;
  display: none;
  @media (min-width: 1207px) {
    display: block;
    /* Search Drawer */
    ${(props: DrawerStyledProps) =>
      props.useCase === "search" &&
      css`
        display: none;
      `}
  }
`;
