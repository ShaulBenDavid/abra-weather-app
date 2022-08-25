import { useMemo, useState } from "react";

import { FAVORITES_EMPTY_DETAILS } from "../../Utils/Constants";
import FavStarsImg from "../../Assets/stars.svg";
// Components
import FavoritesList from "./Components/FavoritesList";
// Styles
import {
  StyledFavoritesWrapper,
  SearchAndTitleContainer,
  StyledFavLoader,
  StyledFavLoaderContainer,
  StyledEmptyFavPage,
  StyledFavSearch,
} from "./style";
import UseFavorites from "../../Services/UseFavorites";

const Favorites = () => {
  // States
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, isLoading } = UseFavorites();

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
      {/* ----- Show fav if you have ----  */}
      {data ? (
        <>
          {/* Search */}
          <SearchAndTitleContainer>
            <h1>Favorites</h1>
            <StyledFavSearch variant="favSearch" onChange={handleChange} />
          </SearchAndTitleContainer>
          {/* Fav list */}
          {filteredFav?.length ? (
            <FavoritesList favorites={filteredFav} />
          ) : (
            <StyledEmptyFavPage src={FavStarsImg}>
              We couldn’t find any city named "<span>{searchValue}</span>" in
              the Favorites list, please try again.
            </StyledEmptyFavPage>
          )}
        </>
      ) : (
        // ---- Empty page ----
        <StyledEmptyFavPage {...FAVORITES_EMPTY_DETAILS} />
      )}
    </StyledFavoritesWrapper>
  );
};

export default Favorites;
