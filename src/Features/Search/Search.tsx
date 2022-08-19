import React, { useEffect, useState } from "react";

import useDebounce from "../../Hooks/useDebounde";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectSearchValue, setSearchValue } from "../../Redux/Search/Search";
// Components
import SearchResults from "../../Components/Ui/SearchResults";
import Drawer from "../../Layouts/Drawer";
// Styles
import { StyledSearch } from "./style";

const Search = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);

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
      <StyledSearch
        onChange={handleSearchChange}
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
      />
      {/* Search results */}

      {isFocus && searchValue && (
        <Drawer useCase="search" onClick={handleSearchFocus}>
          <SearchResults />
        </Drawer>
      )}
    </>
  );
};

export default Search;
