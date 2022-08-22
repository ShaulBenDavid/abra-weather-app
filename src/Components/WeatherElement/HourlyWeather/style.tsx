import styled from "styled-components";
import getMediaQuery from "../../../Utils/GetMediaQuery";

// Wrapper
export const StyledHourlyWeatherWrapper = styled.div`
  display: flex;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  column-gap: 118px;
  ::-webkit-scrollbar {
    display: none;
  }
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
        column-gap: 8px;
    `}
`;

// Arrow button wrapper
export const StyledArrowButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  column-gap: 24px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
        display: none;
    `}
`;

// Arrow Button
export const StyledArrowButton = styled.button`
  all: unset;
  cursor: pointer;
  :last-child {
    svg {
      transform: rotate(-180deg);
    }
  }
`;
