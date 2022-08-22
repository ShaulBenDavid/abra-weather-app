import styled from "styled-components";
import getMediaQuery from "../../Utils/GetMediaQuery";
// components
import SearchFailed from "../../Components/Ui/SearchFailed";
import { IconFavDark } from "../../Components/Ui/IconsComponent";
import Button from "../../Components/Ui/Button";
// Wrapper
export const HomeWrapper = styled.div`
  overflow-y: auto;
  height: 100vh;
  padding: 0 370px;
  /* Tablet */
  ${getMediaQuery.between("changePoint", "desktop")`
    padding: 0 50px;
  `}
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    padding: 0 30px;
  `}
`;

// custom faild search
export const HomeFailedSearch = styled(SearchFailed)`
  width: 416px;
  margin: 0 auto;
  margin-top: 196px;
  /* Less than 1920px */
  ${getMediaQuery.lessThan("changePoint")`
    margin-top: 80px;
  `}
`;

// ----- Current weather section -----
export const CurrentWeatherSection = styled.section`
  margin-top: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
  flex-direction: column;
  margin-top: 30px;
  align-items: flex-start;
  row-gap: 24px;
  `}
`
// Fav icon
export const FavIconButton = styled(IconFavDark)`
  width: 22px;
  height: 22px;
`
// Adding to fav button
export const FavAddingButton = styled(Button)`
  width: 213px;
`
export const FavLightIconButton = styled.button`
  all: unset;
  order: -1;
  cursor: pointer;
`

// ------ Temp bar section -------
export const DailyTempsBarSection = styled.section`
  margin-top: 88px;
`