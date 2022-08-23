//Types
import { SearchItemProps } from "./types";
// Styles
import {
  StyledSearchItemWrapper,
  StyledSearchCityName,
  StyledSearchCountryName,
} from "./style";

const ss = () => console.log(1)

const SearchResultItem: React.FC<SearchItemProps> = ({ value, city, country }) => {
  return (
    <StyledSearchItemWrapper href={`#${value}`} onMouseDown={ss}>
      <StyledSearchCityName>{city},</StyledSearchCityName>
      <StyledSearchCountryName>{country}</StyledSearchCountryName>
    </StyledSearchItemWrapper>
  );
};

export default SearchResultItem;
