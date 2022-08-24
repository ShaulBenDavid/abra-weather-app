import { useAppSelector } from "../../Redux/hooks";
import {
  selectSearchChoice,
  selectSearchValue,
} from "../../Redux/Search/Search";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { weatherFetchApi } from "../../Services/WeatherApi";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { HOME_EMPTY_DETAILS } from "../../Utils/Constants";
import CityImg from "../../Assets/city.svg";
// Conponents
import CurrentWeather from "../../Components/WeatherElement/CurrentWeather";
import Button from "../../Components/Ui/Button";
import DailyTempsBar from "../../Components/WeatherElement/DailyTempsBar";
import HourlyWeather from "../../Components/WeatherElement/HourlyWeather";
import { IconFavOutline } from "../../Components/Ui/IconsComponent";
// Types
import { FetchingWeatherProps } from "./types";
// Styles
import * as S from "./style";

const Home = () => {
  // Place of weather
  const searchValue = useAppSelector(selectSearchValue);
  // Get current place
  const currentChoice = useAppSelector(selectSearchChoice);

    // Parse data
  const parseData = (res: any) => {
      const optionArray = res?.data.DailyForecasts;
      return optionArray?.map((option: any) => {
        const newOption = {
          date: option?.EpochDate,
          minWeather: option?.Temperature.Minimum.Value,
          maxWeather: option?.Temperature.Maximum.Value,
          weatherCondition: option?.Day.PrecipitationType,
          weatherDayIcon: option?.Day.Icon,
          weatherUnit: option?.Temperature.Maximum.Unit,
        };
        return newOption;
      });
    };
  
  // ----- Query fetching weather -----
  const { data }: UseQueryResult<FetchingWeatherProps[], Error> = useQuery<FetchingWeatherProps[], Error>(
    [currentChoice?.city],
    async () => {
      const res = await weatherFetchApi(
        `/forecasts/v1/daily/5day/${currentChoice?.value}`
      );
      return parseData(res);
    },
    {
      enabled: !!currentChoice,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );
  console.log(data);

  // Media query
  const matches = useMediaQuery("(min-width: 1207px)");

  console.log(currentChoice);

  return (
    <S.HomeWrapper>
      {/* If home page empty */}
      {/* {searchValue ? (
        <S.HomeFailedSearch src={CityImg}>
          {" "}
          {`We couldn’t find any city named "${searchValue}", please try again.`}
        </S.HomeFailedSearch>
      ) : (
        <S.EmptyHomePage {...HOME_EMPTY_DETAILS} />
      )} */}

      {/* ----- Current weather section --------*/}
      <S.CurrentWeatherSection>
        {data && currentChoice && <CurrentWeather city={currentChoice.city} data={data[0]} />}
        {/* LayOut for desk or mobile */}
        {!matches ? (
          <S.FavLightIconButton>
            <IconFavOutline style={{ width: "30px", height: "30px" }} />
          </S.FavLightIconButton>
        ) : (
          <S.FavAddingButton variant="white">
            <S.FavIconButton />
            Add to favorites
          </S.FavAddingButton>
        )}
      </S.CurrentWeatherSection>
      {/* ----- 4 days weather bar section ------ */}
      <S.DailyTempsBarSection>
        <DailyTempsBar />
      </S.DailyTempsBarSection>
      {/* ------ Hourly weather ------ */}
      <S.HourlyWeatherSection>
        <HourlyWeather />
      </S.HourlyWeatherSection>
    </S.HomeWrapper>
  );
};

export default Home;
