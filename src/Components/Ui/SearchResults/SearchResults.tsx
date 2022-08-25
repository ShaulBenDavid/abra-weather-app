// Components
import SearchResultItem from "../SearchResultItem";
// Types
import { SearchResultsProps } from "./type";
// Styles
import { StyledSearchResultsContainer } from "./style";

const SearchResults: React.FC<SearchResultsProps> = ({ searchOptions }) => {
  return (
    <StyledSearchResultsContainer>
      {searchOptions.map((option) => (
        <SearchResultItem key={option.key} city={option.city} country={option.country} placeKey={Number(option.key)} />
      ))}
    </StyledSearchResultsContainer>
  );
};

export default SearchResults;
