import { useAppSelector } from "../../Redux/hooks";
import { selectSearchValue } from "../../Redux/Search/Search";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { weatherFetchApi } from "../../Services/WeatherApi";
import { useQuery } from "@tanstack/react-query";

import { HOME_EMPTY_DETAILS } from "../../Utils/Constants";
import CityImg from "../../Assets/city.svg";
// Conponents
import EmptyPage from "../../Components/Ui/EmptyPage";
import CurrentWeather from "../../Components/WeatherElement/CurrentWeather";
import Button from "../../Components/Ui/Button";
import DailyTempsBar from "../../Components/WeatherElement/DailyTempsBar";
import HourlyWeather from "../../Components/WeatherElement/HourlyWeather";
import { IconFavOutline } from "../../Components/Ui/IconsComponent";

// Styles
import * as S from "./style";

const Home = () => {
  //   // Query
  //   const { status, error, data } = useQuery(['new york2'], async () => {
  //     const res = await weatherFetchApi(`/forecasts/v1/daily/5day/${349727}`);
  //     return res;
  //   },
  //     {
  //     cacheTime: Infinity,
  //   })
  //   console.log(data)
  //   // console.log(data.Temperature.Maximum.Value)
  // console.log(status)
  // Media query
  const matches = useMediaQuery("(min-width: 1207px)");

  const searchValue = useAppSelector(selectSearchValue);
  return (
    <S.HomeWrapper>
      {/* If home page empty */}
      {!searchValue ? (
        <S.HomeFailedSearch src={CityImg}>
          {" "}
          {`We couldn’t find any city named "${searchValue}", please try again.`}
        </S.HomeFailedSearch>
      ) : (
        <EmptyPage {...HOME_EMPTY_DETAILS} />
      )}

      {/* ----- Current weather section --------*/}
      {/* <S.CurrentWeatherSection>
        <CurrentWeather /> */}
      {/* LayOut for desk or mobile */}
      {/* {!matches ? (
          <S.FavLightIconButton>
            <IconFavOutline style={{ width: "30px", height: "30px" }} />
          </S.FavLightIconButton>
        ) : (
          <S.FavAddingButton variant="white">
            <S.FavIconButton />
            Add to favorites
          </S.FavAddingButton>
        )}
      </S.CurrentWeatherSection> */}
      {/* ----- 4 days weather bar section ------ */}
      {/* <S.DailyTempsBarSection>
        <DailyTempsBar />
      </S.DailyTempsBarSection> */}
      {/* ------ Hourly weather ------ */}
      {/* <S.HourlyWeatherSection>
        <HourlyWeather />
      </S.HourlyWeatherSection> */}
    </S.HomeWrapper>
  );
};

export default Home;
