//Types
import { SearchItemProps } from "./types";
// Styles
import {
  StyledSearchItemWrapper,
  StyledSearchCityName,
  StyledSearchCountryName,
} from "./style";

// Handle click
const handleClick = ({city, country, value}:SearchItemProps) => {
  console.log(city, country, value)
}


const SearchResultItem: React.FC<SearchItemProps> = ({ value, city, country }) => {
  return (
    <StyledSearchItemWrapper href={`#${value}`} onMouseDown={() => handleClick({city, country, value})}>
      <StyledSearchCityName>{city},</StyledSearchCityName>
      <StyledSearchCountryName>{country}</StyledSearchCountryName>
    </StyledSearchItemWrapper>
  );
};

export default SearchResultItem;
