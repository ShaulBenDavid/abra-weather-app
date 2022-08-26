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

const DailyTemp: React.FC<DailtyTempProps> = ({ dayData }) => {
  const { maxWeather, minWeather, weatherCondition, weatherDayIcon, date } = dayData;

  // Date
  const newDate = new Date(0);
  newDate.setUTCSeconds(date)
  const { getDay } = getDates();

    // Weather icon
  const weatherIcon: string = useWeatherIcon(weatherDayIcon);
  // Take only the first word
  const shortTcondition = weatherCondition.split(" ").slice(0, 1);

  return (
    <StyledDailyTempWrapper>
      <StyledDayAndCondition>{getDay(newDate.getDay())} - {shortTcondition}</StyledDayAndCondition>
      <StyledIconCondition src={weatherIcon} alt={weatherIcon} />
      <StyledTemp>
        <StyledDayTemp>{maxWeather}{TEMP_SYMBOL}</StyledDayTemp>
        <StyledNightTemp>- {minWeather}</StyledNightTemp>
      </StyledTemp>
    </StyledDailyTempWrapper>
  );
};

export default DailyTemp;
