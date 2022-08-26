// Components
import { IconFavFull } from "../../../../Components/Ui/IconsComponent";
import SetNewPlace from "../../../../Utils/SetNewPlace";
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
import UseFavorites from "../../../../Services/UseFavorites";

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  placeKey,
  city,
  country,
  hr,
}) => {
  // Set new weather place
  const { setCurrentPlace } = SetNewPlace();

  const { handleFav } = UseFavorites();

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
  const handleRemoveFav = () => handleFav(payload);


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
