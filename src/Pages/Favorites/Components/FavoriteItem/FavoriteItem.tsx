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

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  value,
  city,
  country,
  hr
}) => {
  return (
    <StyledFavContainer value={value} hr={hr}>
      <StyledFavPlace href="#/">
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
