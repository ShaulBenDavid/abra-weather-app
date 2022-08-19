// Styles
import {
  StyledSearchItemWrapper,
  StyledSearchCityName,
  StyledSearchCountryName,
} from "./style";

const ss = () => console.log(1)

const SearchResultItem = () => {
  return (
    <StyledSearchItemWrapper href="#asdfaf" onMouseDown={ss}>
      <StyledSearchCityName>new york,</StyledSearchCityName>
      <StyledSearchCountryName>united state</StyledSearchCountryName>
    </StyledSearchItemWrapper>
  );
};

export default SearchResultItem;
