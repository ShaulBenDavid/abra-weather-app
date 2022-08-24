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
  value,
  city,
  country,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  // Handle click
const handleClick = ({ city, country, value }: SearchItemActionProps) => {
  dispatch(setSearchChoice({ city, country, value }));
  navigate('/');
};
  
  return (
    <StyledSearchItemWrapper
      href={`#${value}`}
      onMouseDown={() => handleClick({ city, country, value })}
    >
      <StyledSearchCityName>{city},</StyledSearchCityName>
      <StyledSearchCountryName>{country}</StyledSearchCountryName>
    </StyledSearchItemWrapper>
  );
};

export default SearchResultItem;
