import { TEMP_SYMBOL } from "../../../Utils/Constants";
import getDates from "../../../Utils/getDates";
import useWeatherIcon from "../../../Utils/useWeatherIcon";
// Types
import { DailtyTempProps } from "./types";
// Styles
import {
  StyledDailyTempWrapper,
  StyledDayAndCondition,
  StyledIconCondition,
  StyledTemp,
  StyledNightTemp,
  StyledDayTemp,
} from "./style";
import useCelcius from "../../../Utils/useCelsius";

const DailyTemp: React.FC<DailtyTempProps> = ({ dayData }) => {
  const { maxWeather, minWeather, weatherCondition, weatherDayIcon, date } =
    dayData;

  // Weather convert
  const { tempConverter } = useCelcius();

  // Date
  const newDate = new Date(0);
  newDate.setUTCSeconds(date);
  const { getShortDay } = getDates();

  // Weather icon
  const weatherIcon: string = useWeatherIcon(weatherDayIcon);
  // Take only the first word
  const shortTcondition = weatherCondition.split(" ").slice(0, 1);

  return (
    <StyledDailyTempWrapper>
      <StyledDayAndCondition>
        {getShortDay(newDate.getDay())} - {shortTcondition}
      </StyledDayAndCondition>
      <StyledIconCondition src={weatherIcon} alt={weatherIcon} />
      <StyledTemp>
        <StyledDayTemp>
          {tempConverter(maxWeather)}
          {TEMP_SYMBOL}
        </StyledDayTemp>
        <StyledNightTemp>- {tempConverter(minWeather)}</StyledNightTemp>
      </StyledTemp>
    </StyledDailyTempWrapper>
  );
};

export default DailyTemp;
