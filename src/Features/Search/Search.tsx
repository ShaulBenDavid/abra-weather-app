import React, { useCallback, useEffect, useState } from "react";

import useMediaQuery from "../../Hooks/useMediaQuery";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import useDebounce from "../../Hooks/useDebounde";
import useFilteredFavorites from "../../Utils/useFilteredFavorites";
import {
  selectSearchValue,
  setIsMobileSearchOpen,
  setSearchValue,
} from "../../Redux/Search/Search";
import { UseAutocomplete } from "../../Services/UseSearch";
// Components
import CityImg from "../../Assets/city.svg";
import SearchResults from "../../Components/SearchElements/SearchResults";
import Drawer from "../../Components/Ui/Drawer";
import FavoritesList from "../../Pages/Favorites/Components/FavoritesList";
import FavStarsImg from "../../Assets/stars.svg";
// Types
import { USE_MEDIA_QUERY } from "../../Utils/Constants";
import { SearchProps } from "./types";
// Styles
import {
  StyledSearch,
  StyledLoader,
  StyledLoaderContainer,
  StyledEmptySearch,
} from "./style";

const Search: React.FC<SearchProps> = ({ favoriteData }) => {
  // Dispatch
  const dispatch = useAppDispatch();
  // Search selector
  const searchValue = useAppSelector(selectSearchValue);
  // States
  const [searchTerm, setSearchTerm] = useState<string>(
    favoriteData ? "" : searchValue
  );
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [typing, setTyping] = useState<boolean>(false);
  // Media query
  const matches = useMediaQuery(USE_MEDIA_QUERY);

  // ------ AutoComplete search service -------
  const { data, isLoading } = UseAutocomplete(favoriteData ? "" : searchTerm);
  // ------ Filtered fav list by search ------
  const { filteredFav } = useFilteredFavorites(favoriteData, favoriteData ? searchTerm : "");

  // Control when to show loader
  useEffect(() => {
    !favoriteData && setTyping(false);
  }, [searchTerm, data, isLoading]);

  // ---- Handle search value ----
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    !typing && !favoriteData && setTyping(true);

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
          variant={favoriteData ? "favSearch" : "mainSearch"}
          onChange={favoriteData ? handleSearchChange : handleDebounce}
          onFocus={favoriteData ? undefined : handleSearchFocus}
          onBlur={favoriteData ? undefined : handleSearchBlur}
        />
      </div>
      {/* Search results */}

      {/* -------- Render mobile or desk search or favorite --------- */}
      {matches && !favoriteData ? (
        // ------========= Desktop ===========----------
        // Show only on when focusing and search hold value
        isFocus &&
        searchTerm && (
          <Drawer useCase="search" onClick={handleSearchFocus}>
            {/* Loading when typing or fetching */}
            {(typing || isLoading) && searchTerm ? (
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
              <StyledEmptySearch src={CityImg}>
                We couldn’t find any city named "<span>{searchTerm}</span>",
                please try again.
              </StyledEmptySearch>
            )}
          </Drawer>
        )
      ) : // ----------======== Mobile / Favorites =========----------
      // Loader
      (typing || isLoading) && searchTerm && !favoriteData ? (
        <StyledLoaderContainer>
          <StyledLoader />
        </StyledLoaderContainer>
        // Search results for autocomplete / Favorites
      ) : (searchTerm && data?.length) || filteredFav?.length ? (
        data?.length ? (
          <SearchResults
            searchOptions={data}
            clearSearchBox={clearSearchBox}
            closeMobileSearch={handleMobileSearch}
          />
        ) : (
          filteredFav && <FavoritesList favorites={filteredFav} />
        )
      ) : (
        // Empty results for favorite search and auto search
        <StyledEmptySearch
          src={favoriteData ? FavStarsImg : CityImg}
          customStyle={favoriteData ? true : false}
        >
          {searchTerm === "" && !favoriteData
            ? "Please search any city in the search button."
            : `We couldn’t find any city named "${searchTerm}" ${
                favoriteData && "in the Favorites list"
              }, please try again.`}
        </StyledEmptySearch>
      )}
    </>
  );
};

export default Search;
