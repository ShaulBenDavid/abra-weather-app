import UseFavorites from "../../Services/Favorites/UseFavorites";
// Types
import { FAVORITES_EMPTY_DETAILS } from "../../Utils/Constants";
// Styles
import {
  StyledFavoritesWrapper,
  StyledFavLoader,
  StyledFavLoaderContainer,
  StyledEmptyFavPage,
  StyledFavoriteTitle,
} from "./style";
import Search from "../../Features/Search";

const Favorites = () => {
  const { data, isLoading } = UseFavorites();

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
          <Search favoriteData={data} />
        </>
      ) : (
        // ---- Empty favorites ----
        <StyledEmptyFavPage {...FAVORITES_EMPTY_DETAILS} />
      )}
    </StyledFavoritesWrapper>
  );
};

export default Favorites;
