//Types
import { SearchItemProps } from "./types";
// Styles
import {
  StyledSearchItemWrapper,
  StyledSearchCityName,
  StyledSearchCountryName,
} from "./style";

const SearchResultItem: React.FC<SearchItemProps> = ({
  placeKey,
  city,
  country,
  idx,
  active,
  handleClick,
  setHovered,
}) => {
  // Handle choice
  const handleChoice = () => {
    handleClick(idx);
  };

  // --- Handle hovered ---
  const handleMouseEnter = () => setHovered(idx);

  const handleMouseLeave = () => setHovered(undefined);

  return (
    <StyledSearchItemWrapper
      href={`#${placeKey}`}
      onMouseDown={handleChoice}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      active={active}
    >
      <StyledSearchCityName>{city},</StyledSearchCityName>
      <StyledSearchCountryName>{country}</StyledSearchCountryName>
    </StyledSearchItemWrapper>
  );
};

export default SearchResultItem;
