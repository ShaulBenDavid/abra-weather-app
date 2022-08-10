import styled, { keyframes } from "styled-components";

// Animation
const linearUp = keyframes`
  0% { bottom: -60%; }
  100% { bottom: 0; }
`
const showIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`
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
`;
// Drawer wrapper
export const StyledDrawerWrapper = styled.div`
  position: absolute;
  width: 100%;
  animation: ${linearUp} 0.3s linear;
  bottom: 0;
  padding: 40px 30px;
  box-shadow: 0 -7px 30px 0 rgba(0, 0, 0, 0.16);
  background-color: #fcfcfc;
  border-radius: 30px 30px 0 0;
  cursor: default;
`;
