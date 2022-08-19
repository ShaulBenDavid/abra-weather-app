// Styles
import {
  StyledSearchItemWrapper,
  StyledSearchCityName,
  StyledSearchCountryName,
} from "./style";

const SearchResultItem = () => {
  return (
    <StyledSearchItemWrapper href="#">
      <StyledSearchCityName>new york,</StyledSearchCityName>
      <StyledSearchCountryName>united state</StyledSearchCountryName>
    </StyledSearchItemWrapper>
  );
};

export default SearchResultItem;
