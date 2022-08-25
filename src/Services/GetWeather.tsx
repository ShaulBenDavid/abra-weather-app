import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useAppSelector } from "../Redux/hooks";
import { selectSearchChoice } from "../Redux/Search/Search";
import { weatherFetchApi } from "./Api/WeatherApi";
// Types
import { FetchingWeatherProps } from "../Pages/Home/types";
type ParseFiveDayWeatherProps = {
    EpochDate: number;
    Temperature: {
        Maximum: {
            Value: number;
            Unit: string;
        };
        Minimum: {
            Value: number;
        }
    };
    Day: {
        PrecipitationType: string;
        Icon: number;
    }

}

const GetWeather = () => {
  // Get current place
  const currentChoice = useAppSelector(selectSearchChoice);

    // Parse data
  const parseData = (res: ParseFiveDayWeatherProps[]) => {
      const optionArray = res;
      return optionArray?.map((option: ParseFiveDayWeatherProps) => {
        const newOption: FetchingWeatherProps = {
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
        `/forecasts/v1/daily/5day/${currentChoice?.placeKey}`
      );
      return parseData(res?.data.DailyForecasts);
    },
    {
      enabled: !!currentChoice,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );
    
    return { data, currentChoice };
}

export default GetWeather;