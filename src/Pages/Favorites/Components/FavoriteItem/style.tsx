import styled, { css } from "styled-components";
import getMediaQuery from "../../../../Utils/GetMediaQuery";
// Types
import { FavItemStyleProps } from "./types";

// Fav container
export const StyledFavContainer = styled.li`
  all: unset;
  height: 87px;
  width: 100%;
  color: ${({ theme }) => theme.white};
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  position: relative;

  ${(props: FavItemStyleProps) =>
    props.hr &&
    css`
      /* border-bottom: 1px solid rgba(255, 255, 255, 0.3); */
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.3);
        bottom: 0;
      }
      /* Mobile */
      ${getMediaQuery.lessThan("changePoint")`
      &::after {
        background-color: rgba(255, 255, 255, 0.6);
        width: 120%;
        left: -35px;
      }
  `}
    `}
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    height: 76px;
    padding: 0 5px;
  `}
`;

// Fav place
export const StyledFavPlace = styled.a`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

// Fav city
export const StyleFavCity = styled.h2`
  color: ${({ theme }) => theme.white};
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    font-size: 1.5rem;
    font-weight: 500;
  `}
`;

// Fav country
export const StyleFavCountry = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.25;
  opacity: 0.8;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    font-size: 1.125rem;
    font-weight: normal;
    line-height: 1.5;
  `}
`;

// Add av icon button
export const StyledAddFavButton = styled.button`
  all: unset;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }

  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
     svg {
    width: 30px;
    height: 30px;
  }
  `}
`;
