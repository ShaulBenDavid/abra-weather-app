import ChangeFavorites from "../../../../Services/Favorites/ChangeFavorites";
// Components
import { IconFavFull } from "../../../../Components/Ui/IconsComponent";
import SetNewPlace from "../../../../Services/Weather/SetNewPlace";
// Types
import { FavoriteItemProps } from "./types";
// Styles
import {
  StyledFavContainer,
  StyledFavPlace,
  StyledAddFavButton,
  StyleFavCity,
  StyleFavCountry,
} from "./style";

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  placeKey,
  city,
  country,
  hr,
}) => {
  // Set new weather place
  const { setCurrentPlace } = SetNewPlace();
  // Favorites handler
  const { UseChangeFavorite } = ChangeFavorites();

  // Payload
  const payload = {
    city,
    country,
    placeKey,
  };

  // Handle get weather
  const handleGetWeather = () => {
    setCurrentPlace(payload);
  };

  // Remove from fav
  const handleRemoveFav = () => UseChangeFavorite(payload);

  return (
    <StyledFavContainer hr={hr}>
      <StyledFavPlace href="#/" onClick={handleGetWeather}>
        <StyleFavCity>{city}</StyleFavCity>
        <StyleFavCountry>{country}</StyleFavCountry>
      </StyledFavPlace>
      <StyledAddFavButton onClick={handleRemoveFav}>
        <IconFavFull />
      </StyledAddFavButton>
    </StyledFavContainer>
  );
};

export default FavoriteItem;
