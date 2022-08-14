// Types
import { SearchBoxProps } from "./types";
// Styles
import {
  StyledInputSearch,
  StyledSearchContainer,
  StyledSearchIcon,
} from "./style";

const SearchBox: React.FC<SearchBoxProps> = ({ className, ...otherprops }) => {
  return (
    <StyledSearchContainer className={className}>
      <StyledInputSearch type="text" {...otherprops} placeholder="Try “Tel Aviv - Jaffa”..." />
      <StyledSearchIcon />
    </StyledSearchContainer>
  );
};

export default SearchBox;
