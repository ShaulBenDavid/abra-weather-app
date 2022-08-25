import React, { useEffect, useState } from "react";

import useMediaQuery from "../../Hooks/useMediaQuery";

import { useAppDispatch } from "../../Redux/hooks";

import CityImg from "../../Assets/city.svg";
// Components
import SearchResults from "../../Components/Ui/SearchResults";
import Drawer from "../../Layouts/Drawer";
// Types
import { SearchOptionsProps } from "./types";
import { UseQueryResult } from "@tanstack/react-query";
// Styles
import {
  StyledSearch,
  StyledNoResultContainer,
  StyledLoader,
  StyledLoaderContainer,
  StyledEmptySearch,
} from "./style";
import { setIsMobileSearchOpen } from "../../Redux/Search/Search";
import { UseAutocomplete } from "../../Services/UseSearch";

const Search = () => {
  // Dispatch
  const dispatch = useAppDispatch();
  // States
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Media query
  const matches = useMediaQuery("(min-width: 1207px)");

  // ------ AutoComplete search -------
  const { data, debouncedSearchTerm, isLoading } = UseAutocomplete(searchTerm);

  // Control when to show error
  useEffect(() => {
    setIsTyping(false);
  }, [debouncedSearchTerm, isLoading]);
  

  // Handle search value
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    !isTyping && setIsTyping(true);
    setSearchTerm(e.target.value);
  };

  // Clean search box
  const clearSearchBox = () => {
    setSearchTerm("");
  };
  // Close mobile search when choosing
  const handleMobileSearch = () => dispatch(setIsMobileSearchOpen());
  // Handle search foccus and blur
  // control the search drawer to open only when focusing and the search have value
  const handleSearchFocus = (): void => setIsFocus(true);
  const handleSearchBlur = (): void => setIsFocus(false);

  return (
    <>
      {/* ----Search input---- */}
      <div>
        <StyledSearch
          variant="mainSearch"
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          value={searchTerm}
        />
      </div>
      {/* Search results */}

      {/* -------- Render mobile or desk search --------- */}
      {matches ? (
        // ------ Desktop ----------
        // Show only on when focusing and search hold value
        isFocus &&
        searchTerm && (
          <Drawer useCase="search" onClick={handleSearchFocus}>
            {/* Loading when typing or fetching */}
            {isTyping || isLoading ? (
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
      ) : // ---------- Mobile ----------
      (isTyping || isLoading) && searchTerm ? (
        <StyledLoaderContainer>
          <StyledLoader />
        </StyledLoaderContainer>
      )  : searchTerm && data?.length ? (
        // Search options
        <SearchResults
          searchOptions={data}
          clearSearchBox={clearSearchBox}
          closeMobileSearch={handleMobileSearch}
        />
      ): // Loading when typing
      (
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
