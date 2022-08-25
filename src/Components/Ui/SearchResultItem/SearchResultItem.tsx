//Types
import { SearchItemProps, SearchItemActionProps } from "./types";
// Styles
import {
  StyledSearchItemWrapper,
  StyledSearchCityName,
  StyledSearchCountryName,
} from "./style";
import { useAppDispatch } from "../../../Redux/hooks";
import { setSearchChoice } from "../../../Redux/Search/Search";
import { useNavigate } from "react-router-dom";


const SearchResultItem: React.FC<SearchItemProps> = ({
  placeKey,
  city,
  country,
  clearSearchBox,
  closeMobileSearch
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  // Handle click
const handleClick = ({ city, country, placeKey }: SearchItemActionProps) => {
  dispatch(setSearchChoice({ city, country, placeKey }));
  clearSearchBox()
  // Only toggle on mobile
  closeMobileSearch && closeMobileSearch()
  navigate('/');
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
