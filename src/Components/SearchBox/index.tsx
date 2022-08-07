// Types
import { SearchBoxProps } from "./types";
// Styles
import {
  StyledInputSearch,
  StyledSearchContainer,
  StyledSearchIcon,
} from "./style";

const SearchBox = ({ placeholder }: SearchBoxProps) => {
  return (
    <StyledSearchContainer>
      <StyledInputSearch type="text" placeholder={placeholder} />
      <StyledSearchIcon />
    </StyledSearchContainer>
  );
};

export default SearchBox;
