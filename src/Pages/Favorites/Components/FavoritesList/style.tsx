import styled from "styled-components";
import getMediaQuery from "../../../../Utils/GetMediaQuery";

// Fav list container
export const StyledFavListContainer = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
      row-gap: 15px;
      padding-bottom: 50px;
  `}
`;
