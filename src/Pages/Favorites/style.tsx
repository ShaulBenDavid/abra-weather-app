import styled from "styled-components";
import EmptyPage from "../../Components/Ui/EmptyPage";
import LoadingSpinner from "../../Components/Ui/LoadingSpinner";
import getMediaQuery from "../../Utils/GetMediaQuery";

// Page wrapper
export const StyledFavoritesWrapper = styled.div`
overflow-y: auto;
  height: 100vh;
  padding: 0 370px;
  /* Tablet */
  ${getMediaQuery.between("changePoint", "desktop")`
    padding: 0 50px;
  `}
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    padding: 0 30px;
  `}
`;

export const SearchAndTitleContainer = styled.div`
    margin-top: 80px;
    margin-bottom: 65px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    ${getMediaQuery.between("changePoint", "desktop")`
      margin-top: 64px;
      margin-bottom: 61px;
    `}
`

// Loader
export const StyledFavLoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledFavLoader = styled(LoadingSpinner)`
      display: inline-block;
  width: 100px;
  height: 100px;

  &::after {
  width: 80px;
  height: 80px;
  }
`;

// Empty Fav pag
export const StyledEmptyFavPage = styled(EmptyPage)`
  margin-top: 110px;
  width: 364px;
  /* Tablet */
  ${getMediaQuery.between("changePoint", "desktop")`
    margin-top: 66px;
  `}
`

