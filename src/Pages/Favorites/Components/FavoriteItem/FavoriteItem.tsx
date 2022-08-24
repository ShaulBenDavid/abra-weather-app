// Components
import { IconFavFull } from "../../../../Components/Ui/IconsComponent";
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

// Handle click
const handleClick = ({ city, country, value }: FavoriteItemProps) => {
  const newWeatherPlace = {
    city,
    country,
    value
  }
  console.log(newWeatherPlace)
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  value,
  city,
  country,
  hr
}) => {
  return (
    <StyledFavContainer value={value} hr={hr}>
      <StyledFavPlace href="#/" onClick={() => handleClick({city, country, value})} >
        <StyleFavCity>{city}</StyleFavCity>
        <StyleFavCountry>{country}</StyleFavCountry>
      </StyledFavPlace>
      <StyledAddFavButton>
        <IconFavFull />
      </StyledAddFavButton>
    </StyledFavContainer>
  );
};

export default FavoriteItem;
