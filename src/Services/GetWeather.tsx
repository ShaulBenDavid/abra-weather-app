import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useAppSelector } from "../Redux/hooks";
import { selectSearchChoice } from "../Redux/Search/Search";
import { weatherFetchApi } from "./Api/WeatherApi";
// Types
import { FetchingWeatherProps } from "../Pages/Home/types";
import { HourlyDataProps } from "../Components/WeatherElement/HourlyWeather/types";
// 5 day type
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
      IconPhrase: string;
        Icon: number;
    }

}
// 12 hour type
type ParseHoursDataProps = {
  EpochDateTime: number;
  Temperature: {
    Value: number;
  };
  WeatherIcon: number;
  Wind: {
    Speed: {
      Value: number;
    }
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
          weatherCondition: option?.Day.IconPhrase,
          weatherDayIcon: option?.Day.Icon,
          weatherUnit: option?.Temperature.Maximum.Unit,
        };
        return newOption;
      });
    };
  
  // ----- Query fetching 5 days weather -----
  const fiveDayWeatherMutation: UseQueryResult<FetchingWeatherProps[], Error> = useQuery<FetchingWeatherProps[], Error>(
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

  // -------------------------------------------------------------

  const parseHoursData = (data: ParseHoursDataProps[]) => {
    const optionArray = data;
    return optionArray?.map((option: ParseHoursDataProps) => {
        const newOption: HourlyDataProps = {
          date: option?.EpochDateTime,
          tempByHour: option?.Temperature.Value,
          weatherDayIcon: option?.WeatherIcon,
          windSpeed: option?.Wind.Speed.Value,
        };
        return newOption;
      });
  }


  // ----- Query fetching 12 hours weather ----------
  const weatherByHoursMutation: UseQueryResult<HourlyDataProps[], Error> = useQuery<HourlyDataProps[], Error>(["12Hours",currentChoice?.city],
    async () => {
      const res = await weatherFetchApi(
        `/forecasts/v1/hourly/12hour/${currentChoice?.placeKey}`
      );
      return parseHoursData(res?.data);
    },
    {
      enabled: !!currentChoice,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );
    
    return { dataByHour: weatherByHoursMutation.data ,data:fiveDayWeatherMutation.data, currentChoice };
}

export default GetWeather;