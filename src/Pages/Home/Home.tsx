import {  useAppSelector } from "../../Redux/hooks";
import { selectLoadingWeather, selectSearchValue } from "../../Redux/Search/Search";
import useMediaQuery from "../../Hooks/useMediaQuery";

import { HOME_EMPTY_DETAILS, USE_MEDIA_QUERY } from "../../Utils/Constants";
import GetWeather from "../../Services/Weather/GetWeather";
import ChangeFavorites from "../../Services/Favorites/ChangeFavorites";
// Conponents
import CityImg from "../../Assets/city.svg";
import CurrentWeather from "../../Components/WeatherElement/CurrentWeather";
import DailyTempsBar from "../../Components/WeatherElement/DailyTempsBar";
import HourlyWeather from "../../Components/WeatherElement/HourlyWeather";
import { IconFavOutline } from "../../Components/Ui/IconsComponent";
import WeatherChart from "../../Components/WeatherElement/WeatherChart";
// Styles
import * as S from "./style";

const Home = () => {
  // Selector
  const searchValue = useAppSelector(selectSearchValue);
  const isWeatherDataLoading = useAppSelector(selectLoadingWeather);
  // Weather data
  const { data, currentChoice, dataByHour } = GetWeather();
  // Favorites handler
  const { UseChangeFavorite } = ChangeFavorites();

  // Media query
  const matches = useMediaQuery(USE_MEDIA_QUERY);

  // Add to fav or remove from fav
  const handleAddClick = () => {
    // else add fav
    currentChoice && UseChangeFavorite(currentChoice);
  };

  // Loading
  if (isWeatherDataLoading) return <S.HomeLoadingWrapper><S.HomeLoadingSpinner/></S.HomeLoadingWrapper>;
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
          {/* ------ Hourly weather ------ */}
          <S.HourlyWeatherSection>
            <HourlyWeather dataByHour={dataByHour} />
          </S.HourlyWeatherSection>
          {/* ----- Weather Chart ----- */}
          <S.WeatherChartSection>
            <WeatherChart data={data} />
          </S.WeatherChartSection>
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
