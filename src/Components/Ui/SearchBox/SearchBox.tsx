// Types
import { SearchBoxProps } from "./types";
// Styles
import {
  StyledInputSearch,
  StyledSearchContainer,
  StyledSearchIcon,
} from "./style";

const SearchBox: React.FC<SearchBoxProps> = ({ ...otherprops }) => {
  return (
    <StyledSearchContainer>
      <StyledInputSearch type="text" {...otherprops} />
      <StyledSearchIcon />
    </StyledSearchContainer>
  );
};

export default SearchBox;
