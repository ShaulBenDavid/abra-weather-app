import React, { useEffect, useState } from "react";

import useMediaQuery from "../../Hooks/useMediaQuery";
import useDebounce from "../../Hooks/useDebounde";

import { useQueryClient, useQuery } from "@tanstack/react-query";
import { weatherFetchApi } from "../../Services/WeatherApi";
// Components
import SearchResults from "../../Components/Ui/SearchResults";
import Drawer from "../../Layouts/Drawer";
import SearchFailed from "../../Components/Ui/SearchFailed";
// Types
import { SearchOptionsProps } from "./types";
import { UseQueryResult } from "@tanstack/react-query";
// Styles
import {
  StyledSearch,
  StyledNoResultContainer,
  StyledLoader,
  StyledLoaderContainer,
} from "./style";

const Search = () => {
  // States
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const client = useQueryClient();

  // Media query
  const matches = useMediaQuery("(min-width: 1207px)");

  const searchResults = client.getQueryData(["City search", searchTerm], {
    exact: true,
  });

  // debounce
  const debouncedSearchTerm = useDebounce(searchTerm, 1500);

  // Parse data
  const parseData = (res: any) => {
    const optionArray = res?.data;
    return optionArray?.map((option: any) => {
      const newOption = {
        country: option?.Country.LocalizedName,
        city: option?.AdministrativeArea.LocalizedName,
        key: option?.Key,
      };
      return newOption;
    });
  };

  // Autocomplate query
  const { data, isLoading }: UseQueryResult<SearchOptionsProps[], Error> =
    useQuery<SearchOptionsProps[], Error>(
      ["City search", searchResults ? searchTerm : debouncedSearchTerm],
      async () => {
        const res = await weatherFetchApi(
          "locations/v1/cities/autocomplete",
          searchResults ? { q: searchTerm } : { q: debouncedSearchTerm }
        );
        return parseData(res);
      },
      {
        enabled: !!searchTerm,
        cacheTime: 15 * (60 * 1000),
        staleTime: Infinity,
      }
    );

  // Control when to show error
  useEffect(() => {
    setIsTyping(false);
  }, [data, debouncedSearchTerm]);

  // Handle search value
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    !isTyping && setIsTyping(true);
    setSearchTerm(e.target.value);
  };

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
        />
      </div>
      {/* Search results */}

      {/* using the same search for desk and mobile */}
      {matches ? (
        isFocus &&
        // Desk
        searchTerm && (
          <Drawer useCase="search" onClick={handleSearchFocus}>
            {data?.length ? (
              <SearchResults searchOptions={data} />
            ) : isTyping ? (
              // Loading when typing
              <StyledLoaderContainer>
                <StyledLoader />
              </StyledLoaderContainer>
            ) : (
              <StyledNoResultContainer>
                <SearchFailed searchValue={searchTerm} />
              </StyledNoResultContainer>
            )}
          </Drawer>
        )
      ) : // Mobile
      isFocus && searchTerm && data?.length ? (
        <SearchResults searchOptions={data} />
      ) : isTyping ? (
        // Loading when typing
        <StyledLoaderContainer>
          <StyledLoader />
        </StyledLoaderContainer>
      ) : (
        <StyledNoResultContainer>
          <SearchFailed searchValue={searchTerm} />
        </StyledNoResultContainer>
      )}
    </>
  );
};

export default Search;
