// Types
import { SearchBoxProps } from "./types";
// Styles
import {
  StyledInputSearch,
  StyledSearchContainer,
  StyledSearchIcon,
  StyledFavSearchIcon,
} from "./style";

enum SEARCH_TYPE {
  favSearch = "Search from favorite...",
  mainSearch = "Try “Tel Aviv - Jaffa”...",
}

const SearchBox: React.FC<SearchBoxProps> = ({
  className,
  variant,
  ...otherprops
}) => {
  return (
    <StyledSearchContainer className={className} variant={variant}>
      <StyledInputSearch
        type="text"
        {...otherprops}
        placeholder={`${SEARCH_TYPE[variant]}`}
      />
      {variant === "favSearch" ? <StyledFavSearchIcon /> : <StyledSearchIcon />}
    </StyledSearchContainer>
  );
};

export default SearchBox;
