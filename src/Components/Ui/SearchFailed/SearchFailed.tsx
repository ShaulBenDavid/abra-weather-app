import CityImg from "../../../Assets/city.svg";
// Styles
import { StyledNotExistResult, StyledCityDrew, StyledP } from "./style";

const SearchFailed = () => {
  return (
    <StyledNotExistResult>
      <StyledCityDrew src={CityImg} alt="city" />
      <StyledP>
        We couldn’t find any city named "New York@", please try again.
      </StyledP>
    </StyledNotExistResult>
  );
};

export default SearchFailed;
