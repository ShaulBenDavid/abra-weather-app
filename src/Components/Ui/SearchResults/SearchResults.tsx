import { createRef, useEffect, useRef, useState } from "react";

import SetNewPlace from "../../../Services/Weather/SetNewPlace";
import useKeyPress from "../../../Hooks/useKeyPress";
// Components
import SearchResultItem from "../SearchResultItem";
// Types
import { SearchResultsProps } from "./type";
import { CurrentPlaceProps, LIST_ITEM_HEIGHT } from "../SearchResultItem/types";
// Styles
import { StyledSearchResultsContainer } from "./style";

const SearchResults: React.FC<SearchResultsProps> = ({
  searchOptions,
  clearSearchBox,
  closeMobileSearch,
}) => {
  const [cursor, setCursor] = useState<number>(0);
  const [hovered, setHovered] = useState<number | undefined>(undefined);

  // -----======= Navigate with keys ========------
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");

    // Scrolling
    const myRef: React.MutableRefObject<any> = useRef(null);
    const handleScroll = () => {
      myRef.current.scrollTo(0, LIST_ITEM_HEIGHT * cursor);
    };
  
  useEffect(() => {
    handleScroll();
  },[cursor])
  
  // Arrow press down
  useEffect(() => {
    if (searchOptions.length && downPress) {
      setCursor((prevState) =>
        prevState < searchOptions.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);

  // Arrow press up
  useEffect(() => {
    if (searchOptions.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);

  // On hoverd
  useEffect(() => {
    if (searchOptions.length && (hovered || hovered === 0)) {
      setCursor(hovered);
    }
  }, [hovered]);

  // On enter handle current choice
  useEffect(() => {
    if (searchOptions.length && enterPress) {
      handleClick(cursor);
    }
  }, [enterPress, cursor]);

  // ----==== Handle search choice ====----
  const { setCurrentPlace } = SetNewPlace();
  // Handle click
  const handleClick = (idx: number): void => {
    const option = searchOptions[idx];
    const payload: CurrentPlaceProps = {
      placeKey: Number(option.key),
      country: option.country,
      city: option.city,
    };

    setCurrentPlace(payload);
    clearSearchBox();
    // Only toggle on mobile
    closeMobileSearch && closeMobileSearch();
  };

  return (
    <StyledSearchResultsContainer ref={myRef}>
      {searchOptions.map((option, idx) => (
        <SearchResultItem
          key={option.key}
          city={option.city}
          country={option.country}
          placeKey={Number(option.key)}
          idx={idx}
          active={idx === cursor}
          handleClick={handleClick}
          setHovered={setHovered}
        />
      ))}
    </StyledSearchResultsContainer>
  );
};

export default SearchResults;
