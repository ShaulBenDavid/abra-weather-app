import React, { useEffect, useState } from "react";

import useDebounce from "../../Hooks/useDebounde";
import { useAppDispatch } from "../../Redux/hooks";
import { setSearchValue } from "../../Redux/Search/Search";
// Components
import SearchResults from "../../Components/Ui/SearchResults";
import Drawer from "../../Layouts/Drawer";
// Styles
import { StyledSearch } from "./style";
import useMediaQuery from "../../Hooks/useMediaQuery";

const Search = () => {
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useAppDispatch();
  // Media query
  const matches = useMediaQuery("(min-width: 1207px)");

  // Handle search value
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  // debounce
  const debouncedSearchTerm = useDebounce(searchTerm, 1500);

  useEffect(() => {
    dispatch(setSearchValue(debouncedSearchTerm));
  }, [debouncedSearchTerm]);
  // Handle search foccus and blur
  // control the search drawer to open only when focusing and the search have value
  const handleSearchFocus = (): void => setIsFocus(true);
  const handleSearchBlur = (): void => setIsFocus(false);

  return (
    <>
      {/* Search input */}
      <div>
        <StyledSearch
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
      </div>
      {/* Search results */}

      {/* using the same search for desk and mobile */}
      {matches
        ? isFocus &&
          // Desk
          searchTerm && (
            <Drawer useCase="search" onClick={handleSearchFocus}>
              <SearchResults />
            </Drawer>
          )
        : // Mobile
          isFocus && searchTerm && <SearchResults />}
    </>
  );
};

export default Search;
