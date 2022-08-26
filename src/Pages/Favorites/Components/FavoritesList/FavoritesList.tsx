// Components
import FavoriteItem from "../FavoriteItem";
// Types
import { FavoritesListProps } from "./types";
// Styles
import { StyledFavListContainer } from "./style";

const FavoritesList: React.FC<FavoritesListProps> = ({ favorites }) => {
  return (
    <StyledFavListContainer>
      {favorites.map(({ key, city, country }, idx, arr) => {
        // Adding bottom line
        let addingBottomLine: boolean = false;
        if (arr.length - 1 !== idx || arr.length === 1) {
          addingBottomLine = true;
        }

        return (
          <FavoriteItem
            key={key}
            country={country}
            city={city}
            placeKey={key}
            hr={addingBottomLine}
          />
        );
      })}
    </StyledFavListContainer>
  );
};

export default FavoritesList;
