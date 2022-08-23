import { useEffect, useMemo, useState } from "react";

import { FAVORITES_EMPTY_DETAILS } from "../../Utils/Constants";
import FavStarsImg from "../../Assets/stars.svg";

import { useAppSelector } from "../../Redux/hooks";
import { selectUser } from "../../Redux/User/User";
import { GetFetchApi } from "../../Services/FetchApi";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
// Components
import EmptyPage from "../../Components/Ui/EmptyPage";
import SearchBox from "../../Components/Ui/SearchBox";
import FavoritesList from "./Components/FavoritesList";
// Types
import { FavoritesProps } from "./types";
// Styles
import {
  StyledFavoritesWrapper,
  SearchAndTitleContainer,
  StyledFavLoader,
  StyledFavLoaderContainer,
} from "./style";

const Favorites = () => {
  // States
  const [searchValue, setSearchValue] = useState<string>("");
  const currentUser = useAppSelector(selectUser);

  // Parse data
  const parseData = (data: FavoritesProps[]) => {
    return data.filter((item) => item.city !== "");
  };

  // Query getting data
  const { isLoading, data }: UseQueryResult<FavoritesProps[], Error> = useQuery<
    FavoritesProps[],
    Error
  >(
    ["Favorites"],
    async () => {
      const res = await GetFetchApi("/favorites/", currentUser?.access_token);
      return parseData(res?.data?.results);
    },
    {
      cacheTime: 20 * (60 * 1000),
      staleTime: 20 * (60 * 1000),
    }
  );

  // ------ Filtered fav lise by search ------
  const filteredFav = useMemo(() => {
    return data?.filter((fav) => {
      return fav.city.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [data, searchValue]);
  // handle search change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
  };

  console.log(filteredFav);
  // When loading data
  if (isLoading)
    return (
      <StyledFavLoaderContainer>
        <StyledFavLoader />
      </StyledFavLoaderContainer>
    );
  // ----- Favorites ----
  return (
    <StyledFavoritesWrapper>
      {/* Show fav if you hav */}
      {data ? (
        <>
          {/* Search */}
          <SearchAndTitleContainer>
            <h1>Favorites</h1>
            <SearchBox variant="favSearch" onChange={handleChange} />
          </SearchAndTitleContainer>
          {/* Fav list */}
          {filteredFav?.length ? (
            <FavoritesList favorites={filteredFav} />
          ) : (
            <EmptyPage src={FavStarsImg}>
              We couldn’t find any city named "<span>{searchValue}</span>" in
              the Favorites list, please try again.
            </EmptyPage>
          )}
        </>
      ) : (
        // Empty page
        <EmptyPage {...FAVORITES_EMPTY_DETAILS} />
      )}
    </StyledFavoritesWrapper>
  );
};

export default Favorites;
