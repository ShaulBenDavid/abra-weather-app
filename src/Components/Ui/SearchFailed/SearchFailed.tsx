import CityImg from "../../../Assets/city.svg";
// Types
import { SearchFailedProps } from "./types";
// Styles
import { StyledNotExistResult, StyledCityDrew, StyledP } from "./style";

const SearchFailed: React.FC<SearchFailedProps> = ({ searchValue, useCase, className }) => {
  return (
    <StyledNotExistResult useCase={useCase} className={className}>
      <StyledCityDrew src={CityImg} alt="city" />
      <StyledP>
        {searchValue === '' ? "Please search any city in the search button."
          : `We couldn’t find any city named "${searchValue}", please try again.`}
      </StyledP>
    </StyledNotExistResult>
  );
};

export default SearchFailed;
