import React, { useCallback, useEffect, useState } from "react";

import useMediaQuery from "../../Hooks/useMediaQuery";

import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

import useDebounce from "../../Hooks/useDebounde";
import {
  selectSearchValue,
  setIsMobileSearchOpen,
  setSearchValue,
} from "../../Redux/Search/Search";
import { UseAutocomplete } from "../../Services/UseSearch";
import { USE_MEDIA_QUERY } from "../../Utils/Constants";
import CityImg from "../../Assets/city.svg";
// Components
import SearchResults from "../../Components/Ui/SearchResults";
import Drawer from "../../Components/Ui/Drawer";
// Styles
import {
  StyledSearch,
  StyledNoResultContainer,
  StyledLoader,
  StyledLoaderContainer,
  StyledEmptySearch,
} from "./style";

const Search = () => {
  // Dispatch
  const dispatch = useAppDispatch();
  // Search selector
  const searchValue = useAppSelector(selectSearchValue);
  // States
  const [searchTerm, setSearchTerm] = useState<string>(searchValue);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  // Media query
  const matches = useMediaQuery(USE_MEDIA_QUERY);

  // ------ AutoComplete search service -------
  const { data, isLoading } = UseAutocomplete(searchTerm);

  // Control when to show loader
  useEffect(() => {
    setLoading(false);
  }, [searchTerm, data, isLoading]);

  // ---- Handle search value ----
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    !loading && setLoading(true);
    setSearchTerm(value);
  };
  // Debounce search
  const handleDebounce = useCallback(useDebounce(handleSearchChange, 300), []);

  // Clean search box
  const clearSearchBox = () => {
    setSearchTerm("");
    dispatch(setSearchValue(""));
  };

  // Close mobile search when choosing
  const handleMobileSearch = () => dispatch(setIsMobileSearchOpen());

  // Handle search foccus and blur
  // control the search drawer to open only when focusing and the search have value
  const handleSearchFocus = (): void => setIsFocus(true);
  const handleSearchBlur = (): void => {
    setIsFocus(false);
    // if search is not valid
    if (!data?.length) {
      dispatch(setSearchValue(searchTerm));
    } else if (data?.length) {
      dispatch(setSearchValue(""));
    }
  };

  return (
    <>
      {/* ----Search input---- */}
      <div>
        <StyledSearch
          type="text"
          variant="mainSearch"
          onChange={handleDebounce}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
      </div>
      {/* Search results */}

      {/* -------- Render mobile or desk search --------- */}
      {matches ? (
        // ------========= Desktop ===========----------
        // Show only on when focusing and search hold value
        isFocus &&
        searchTerm && (
          <Drawer useCase="search" onClick={handleSearchFocus}>
            {/* Loading when typing or fetching */}
            {(loading || isLoading) && searchTerm ? (
              <StyledLoaderContainer>
                <StyledLoader />
              </StyledLoaderContainer>
            ) : data?.length ? (
              // If you there is data show it
              <SearchResults
                searchOptions={data}
                clearSearchBox={clearSearchBox}
              />
            ) : (
              // no results
              <StyledNoResultContainer>
                <StyledEmptySearch src={CityImg}>
                  We couldn’t find any city named "<span>{searchTerm}</span>",
                  please try again.
                </StyledEmptySearch>
              </StyledNoResultContainer>
            )}
          </Drawer>
        )
      ) : // ----------======== Mobile =========----------
      // Loader
      (loading || isLoading) && searchTerm ? (
        <StyledLoaderContainer>
          <StyledLoader />
        </StyledLoaderContainer>
      ) : searchTerm && data?.length ? (
        // Search options
        <SearchResults
          searchOptions={data}
          clearSearchBox={clearSearchBox}
          closeMobileSearch={handleMobileSearch}
        />
      ) : (
        // Search failed or empty
        <StyledNoResultContainer>
          <StyledEmptySearch src={CityImg}>
            {searchTerm === ""
              ? "Please search any city in the search button."
              : `We couldn’t find any city named "${searchTerm}", please try again.`}
          </StyledEmptySearch>
        </StyledNoResultContainer>
      )}
    </>
  );
};

export default Search;
