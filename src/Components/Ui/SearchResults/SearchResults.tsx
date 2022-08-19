import { useState } from "react";
import { useAppSelector } from "../../../Redux/hooks";
import { selectSearchValue } from "../../../Redux/Search/Search";
// Components
import SearchFailed from "../SearchFailed";
import SearchResultItem from "../SearchResultItem";
// Styles
import {
  StyledSearchResultsContainer,
  StyledNoResultContainer
} from "./style";

const SearchResults = () => {
  const [isExist, setIsExist] = useState<boolean>(true);

  const searchValue = useAppSelector(selectSearchValue);

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
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
        </>
      ) : (
          <StyledNoResultContainer>
            <SearchFailed searchValue={searchValue} />
        </StyledNoResultContainer>
      )}
    </StyledSearchResultsContainer>
  );
};

export default SearchResults;
