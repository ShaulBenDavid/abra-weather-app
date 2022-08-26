import { useAppSelector } from "../../Redux/hooks";
import { selectSearchValue } from "../../Redux/Search/Search";
import useMediaQuery from "../../Hooks/useMediaQuery";

import UseFavorites from "../../Services/UseFavorites";
import { HOME_EMPTY_DETAILS, USE_MEDIA_QUERY } from "../../Utils/Constants";
import CityImg from "../../Assets/city.svg";
// Conponents
import CurrentWeather from "../../Components/WeatherElement/CurrentWeather";
import Button from "../../Components/Ui/Button";
import DailyTempsBar from "../../Components/WeatherElement/DailyTempsBar";
import HourlyWeather from "../../Components/WeatherElement/HourlyWeather";
import { IconFavOutline } from "../../Components/Ui/IconsComponent";
// Types
// Styles
import * as S from "./style";
import GetWeather from "../../Services/GetWeather";

const Home = () => {
  // Place of weather
  const searchValue = useAppSelector(selectSearchValue);
  // Weather data
  const { data, currentChoice, dataByHour } = GetWeather();
  // Fav
  const { handleFav } = UseFavorites();

  // Media query
  const matches = useMediaQuery(USE_MEDIA_QUERY);

  // Add to fav or remove from fav
  const handleAddClick = () => currentChoice && handleFav(currentChoice);

  return (
    <S.HomeWrapper>
      {/* ----- Current weather section --------*/}
      {data && currentChoice && dataByHour ? (
        <>
          <S.CurrentWeatherSection>
            <CurrentWeather city={currentChoice.city} data={data[0]} />
            {/* /* LayOut for desk or mobile */}
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
        </>
      ) : (
        // {/* If home page empty */ }
        <>
          {searchValue ? (
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
