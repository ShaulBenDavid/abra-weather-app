import CityImg from "../../../Assets/city.svg";
// Types
import { SearchFailedProps } from "./types";
// Styles
import { StyledNotExistResult, StyledCityDrew, StyledP } from "./style";

const SearchFailed: React.FC<SearchFailedProps> = ({ searchValue }) => {
  return (
    <StyledNotExistResult>
      <StyledCityDrew src={CityImg} alt="city" />
      <StyledP>
        We couldn’t find any city named "<span>{searchValue}</span>", please try again.
      </StyledP>
    </StyledNotExistResult>
  );
};

export default SearchFailed;
