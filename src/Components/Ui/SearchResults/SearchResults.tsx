import { useState } from "react";
// Components
import SearchFailed from "../SearchFailed";
import SearchResultItem from "../SearchResultItem";
// Styles
import {
  StyledSearchResultsContainer,
  StyledNoResultContainer
} from "./style";

const SearchResults = () => {
  const [isExist, setIsExist] = useState<boolean>(false);
  return (
    <StyledSearchResultsContainer>
      {isExist ? (
        <>
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
        </>
      ) : (
          <StyledNoResultContainer>
            <SearchFailed />
        </StyledNoResultContainer>
      )}
    </StyledSearchResultsContainer>
  );
};

export default SearchResults;
