//Types
import { SearchItemProps, CurrentPlaceProps } from "./types";
// Styles
import {
  StyledSearchItemWrapper,
  StyledSearchCityName,
  StyledSearchCountryName,
} from "./style";
import SetNewPlace from "../../../Services/Weather/SetNewPlace";


const SearchResultItem: React.FC<SearchItemProps> = ({
  placeKey,
  city,
  country,
  clearSearchBox,
  closeMobileSearch
}) => {

  const { setCurrentPlace } = SetNewPlace()

  // Handle click
  const handleClick = ({ city, country, placeKey }: CurrentPlaceProps) => {
    setCurrentPlace({ city, country, placeKey });
  clearSearchBox()
  // Only toggle on mobile
  closeMobileSearch && closeMobileSearch()
};
  
  return (
    <StyledSearchItemWrapper
      href={`#${placeKey}`}
      onMouseDown={() => handleClick({ city, country, placeKey })}
    >
      <StyledSearchCityName>{city},</StyledSearchCityName>
      <StyledSearchCountryName>{country}</StyledSearchCountryName>
    </StyledSearchItemWrapper>
  );
};

export default SearchResultItem;
