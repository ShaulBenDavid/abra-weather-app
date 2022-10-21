import styled, { css } from "styled-components";
// Component
import EmptyPage from "../../Components/Ui/EmptyPage";
import LoadingSpinner from "../../Components/Ui/LoadingSpinner";
import SearchBox from "../../Components/Ui/SearchBox";
import SearchResults from "../../Components/SearchElements/SearchResults";
import getMediaQuery from "../../Utils/GetMediaQuery";

// Search Wrapper
export const StyledSearch = styled(SearchBox)`
  ${({ variant }) => variant === "mainSearch" && css`
    margin: 0 auto;
  `}
  /* Fav search */
  ${({ variant }) => variant === "favSearch" && css`
    margin-bottom: 65px;
    /* Tablet */
    ${getMediaQuery.between("changePoint", "desktop")`
      margin-bottom: 61px;
    `}
      /* Mobile */
    ${getMediaQuery.lessThan("changePoint")`
      margin-bottom: 40px;
    `}
  `}
`;

// Styled search results
export const StyledSearchResults = styled(SearchResults)``;

// Custom loader
export const StyledLoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledLoader = styled(LoadingSpinner)`
  display: inline-block;
  width: 60px;
  height: 60px;

  &::after {
    width: 40px;
    height: 40px;
    border: 6px solid ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary} transparent
      ${({ theme }) => theme.primary} transparent;
  }
`;

// Styled empty search
export const StyledEmptySearch = styled(EmptyPage)`
/* Autocomplete desgin */
  width: 100%;
  height: 100%;
  padding: 64px 30px;
  img {
    opacity: ${({ customStyle }) => !customStyle && 0.4};
  }
  p {
    color: ${({ theme }) => theme.secondary};
    line-height: 1.5;
  }

  /* Favorite design */
  ${({ customStyle }) => customStyle && css`
    padding: 0;
    margin-top: 110px;
    width: 364px;
    height: 266px;
    p {
      color: ${({ theme }) => theme.white};

    }
    /* Tablet */
    ${getMediaQuery.between("changePoint", "desktop")`
      margin-top: 66px;
      `}
    /* changePoint */
    ${getMediaQuery.lessThan("changePoint")`
      margin-top: 145px;
      p {
        line-height: 1.25;
        font-size: 0.875rem;
        font-weight: normal;
      }
      `}
    /* mobile */
    ${getMediaQuery.lessThan("mobile")`
      margin-top: 145px;
      width: 100%;
      `}
  `}
`;
