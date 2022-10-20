import { useState } from "react";

import useFilteredFavorites from "../../Utils/useFilteredFavorites";
import UseFavorites from "../../Services/Favorites/UseFavorites";
// Components
import FavStarsImg from "../../Assets/stars.svg";
import FavoritesList from "./Components/FavoritesList";
// Types
import { FAVORITES_EMPTY_DETAILS } from "../../Utils/Constants";
// Styles
import {
  StyledFavoritesWrapper,
  StyledFavSearchBox,
  StyledFavLoader,
  StyledFavLoaderContainer,
  StyledEmptyFavPage,
  StyledFavoriteTitle,
} from "./style";

const Favorites = () => {
  // States
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, isLoading } = UseFavorites();

  // ------ Filtered fav list by search ------
  const { filteredFav } =  useFilteredFavorites(data, searchValue);

  // handle search change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
  };

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
      {data?.length ? (
        <>
          {/* Search box */}
          <StyledFavoriteTitle>Favorites</StyledFavoriteTitle>
          <StyledFavSearchBox variant="favSearch" onChange={handleChange} />
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
