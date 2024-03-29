import styled from "styled-components";
import getMediaQuery from "../../Utils/GetMediaQuery";
// components
import { IconFavDark } from "../../Components/Ui/IconsComponent";
import Button from "../../Components/Ui/Button";
import EmptyPage from "../../Components/Ui/EmptyPage";
import LoadingSpinner from "../../Components/Ui/LoadingSpinner";
// Wrapper
export const HomeWrapper = styled.div`
  overflow-y: auto;
  height: calc(100vh - 94px);
  max-height: -webkit-fill-available;
  max-height: -webkit-fill-available;
  min-height: -moz-available;
  max-height: -moz-available;
  padding: 0 370px;
  z-index: 1;
  /* Tablet */
  ${getMediaQuery.between("changePoint", "desktop")`
    padding: 0 50px;
  `}
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    height: 100vh;
    padding: 0 30px;
  `}
`;

// custom faild search
export const HomeFailedSearch = styled(EmptyPage)`
  width: 416px;
  margin-top: 196px;
  /* Less than 1920px */
  ${getMediaQuery.between("changePoint", "desktop")`
    margin-top: 80px;
  `}
`;

// Home loading spinner
export const HomeLoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HomeLoadingSpinner = styled(LoadingSpinner)`
  width: 80px;
  height: 80px;

  &::after {
    width: 70px;
    height: 70px;
  }
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
`;
// Fav icon
export const FavIconButton = styled(IconFavDark)`
  width: 22px;
  height: 22px;
`;
// Adding to fav button
export const FavAddingButton = styled(Button)`
  width: 213px;
  font-weight: bold;
`;
export const FavLightIconButton = styled.button`
  all: unset;
  order: -1;
  cursor: pointer;
`;

// ------ Temp bar section -------
export const DailyTempsBarSection = styled.section`
  margin-top: 88px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
      margin: 48px 0;
  `}
`;

// Chart toggle button for mobile
export const ChartToggleButton = styled(Button)`
  margin: 0 auto;
  margin-bottom: 48px;
  width: 264px;
`;

// ------ Hourly Weather section ------
export const HourlyWeatherSection = styled.section`
  margin-top: 140px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
  margin-top: 0;
  margin-bottom: 60px;
  `}
`;

// Map toggle button for mobile
export const MapToggleButton = styled(Button)`
  margin: 0 auto;
  margin-bottom: 128px;
  width: 114px;
  font-weight: bold;
  color: ${({ theme }) => theme.black};
`;

// ------ Weather chart section ------
export const WeatherChartSection = styled.section`
  margin-top: 100px;
  padding-bottom: 85px;
`;
