import { useAppSelector } from "../../Redux/hooks";
import {
  selectLoadingWeather,
  selectSearchValue,
} from "../../Redux/Search/Search";
import useMediaQuery from "../../Hooks/useMediaQuery";

import { HOME_EMPTY_DETAILS, USE_MEDIA_QUERY } from "../../Utils/Constants";
import GetWeather from "../../Services/Weather/GetWeather";
import ChangeFavorites from "../../Services/Favorites/ChangeFavorites";
// Conponents
import CityImg from "../../Assets/city.svg";
import CurrentWeather from "../../Components/WeatherElement/CurrentWeather";
import DailyTempsBar from "../../Components/WeatherElement/DailyTempsBar";
import HourlyWeather from "../../Components/WeatherElement/HourlyWeather";
import {
  IconFavOutline,
  IconMapDark,
} from "../../Components/Ui/IconsComponent";
import WeatherChart from "../../Components/WeatherElement/WeatherChart";
// Styles
import * as S from "./style";
import Drawer from "../../Components/Ui/Drawer";
import { useState } from "react";

const Home = () => {
  // States
  const [chartIsOpen, setChartIsOpen] = useState<boolean>(false);

  // Selector
  const searchValue = useAppSelector(selectSearchValue);
  const isWeatherDataLoading = useAppSelector(selectLoadingWeather);
  // Weather data
  const { data, currentChoice, dataByHour } = GetWeather();
  // Favorites handler
  const { UseChangeFavorite } = ChangeFavorites();

  // Media query
  const matches = useMediaQuery(USE_MEDIA_QUERY);

  // ---- Click handlers ----
  // Add to fav or remove from fav
  const handleAddClick = () => {
    // else add fav
    currentChoice && UseChangeFavorite(currentChoice);
  };
  // Add to fav or remove from fav
  const handleToggleChart = () => {
    setChartIsOpen(!chartIsOpen);
  };

  // Loading
  if (isWeatherDataLoading)
    return (
      <S.HomeLoadingWrapper>
        <S.HomeLoadingSpinner />
      </S.HomeLoadingWrapper>
    );
  return (
    <S.HomeWrapper>
      {/* ----- Current weather section --------*/}
      {data && currentChoice && dataByHour ? (
        <>
          <S.CurrentWeatherSection>
            <CurrentWeather city={currentChoice.city} data={data[0]} />
            {/* /* Button for desk or mobile */}
            {!matches ? (
              <S.FavLightIconButton onClick={handleAddClick}>
                <IconFavOutline style={{ width: "30px", height: "30px" }} />
              </S.FavLightIconButton>
            ) : (
              <S.FavAddingButton variant="white" onClick={handleAddClick}>
                <S.FavIconButton />
                Add to favorites
              </S.FavAddingButton>
            )}
          </S.CurrentWeatherSection>
          {/* 4 day temp */}
          <S.DailyTempsBarSection>
            <DailyTempsBar data={data} />
          </S.DailyTempsBarSection>
          {/* --- Chart toggle button for mobile --- */}
          {!matches && (
            <S.ChartToggleButton variant="inverted" onClick={handleToggleChart}>
              5 Days Forecast
            </S.ChartToggleButton>
          )}
          {/* ------ Hourly weather ------ */}
          <S.HourlyWeatherSection>
            <HourlyWeather dataByHour={dataByHour} />
          </S.HourlyWeatherSection>
          {/* --- Map toggle button for mobile --- */}
          {!matches && (
            <S.MapToggleButton variant="white" onClick={() => {}}>
              <IconMapDark />
              Map
            </S.MapToggleButton>
          )}
          {/* -----= Weather Chart for desk =----- */}
          {matches && (
            <S.WeatherChartSection>
              <WeatherChart data={data} />
            </S.WeatherChartSection>
          )}
          {/* --- Weather Chart for mobile --- */}
          {chartIsOpen && !matches && (
            <Drawer onClick={handleToggleChart}>
                <WeatherChart data={data} />
            </Drawer>
          )}
        </>
      ) : (
        // ----- If home page empty ------
        <>
          {searchValue && matches ? (
            // When the input hold wrong value
            <S.HomeFailedSearch src={CityImg}>
              {" "}
              {`We couldn’t find any city named "${searchValue}", please try again.`}
            </S.HomeFailedSearch>
          ) : (
            <S.EmptyHomePage {...HOME_EMPTY_DETAILS} />
          )}
        </>
      )}
    </S.HomeWrapper>
  );
};

export default Home;
