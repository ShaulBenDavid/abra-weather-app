import styled from "styled-components";
// components
import LoadingSpinner from "../Ui/LoadingSpinner";

// Page lodaer wrapper
export const StyledPageLoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: -webkit-fill-available;
  max-height: -webkit-fill-available;
  min-height: -moz-available;
  max-height: -moz-available;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoadingSpinner = styled(LoadingSpinner)`
  width: 80px;
  height: 80px;
  &::after {
    width: 70px;
    height: 70px;
  }
`;
