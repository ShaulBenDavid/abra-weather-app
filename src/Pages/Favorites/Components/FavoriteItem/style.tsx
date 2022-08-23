import styled, { css } from "styled-components";
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

  ${(props:FavItemStyleProps) => props.hr && css`
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);  
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
  `;

// Fav country
export const StyleFavCountry = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.25;
  opacity: 0.8;
`;

// Add av icon button
export const StyledAddFavButton = styled.button`
  all: unset;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }
`;
