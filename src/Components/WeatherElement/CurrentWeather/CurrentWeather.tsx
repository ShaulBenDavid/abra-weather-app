import SunCloud from "../../../Assets/WeatherIcons/sun-cloud.svg";
import useWeatherIcon from "../../../Utils/useWeatherIcon";
import { TEMP_SYMBOL } from "../../../Utils/Constants";
import getDates from "../../../Utils/getDates";
// Types
import { CurrentWeatherProps } from "./types";
// Styles
import * as S from "./style";

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city, data }) => {
  const { minWeather, maxWeather, weatherCondition, date } = data;
  // Current date
  const { getMonthShort, getDay } = getDates();
  const currentDate = new Date(0);
  currentDate.setUTCSeconds(date);
  // Current hour
  function formatAMPM(date: Date) {
    let hours = date.getHours();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    var strTime = hours + ":00" + ampm;
    return strTime;
  }

  // Weather icon
  const weatherIcon: string = useWeatherIcon(data.weatherDayIcon);

  return (
    <S.CurrentWeatherContainer>
      <S.PlaceTitle>{city}</S.PlaceTitle>
      <S.CurrentTempContainer>
        <S.TempIcon src={weatherIcon} alt={SunCloud} />
        <S.TempNumber>
          <span>
            {maxWeather}
            {TEMP_SYMBOL}
          </span>
          <span>
            - {minWeather}
            {TEMP_SYMBOL}
          </span>
        </S.TempNumber>
      </S.CurrentTempContainer>
      <S.WeatherCondition>{weatherCondition}</S.WeatherCondition>
      <S.TimeZone>
        {getDay(currentDate.getDay())}, {currentDate.getDate()}-
        {getMonthShort(currentDate.getMonth())}-{currentDate.getFullYear()},{" "}
        {formatAMPM(currentDate)}
      </S.TimeZone>
    </S.CurrentWeatherContainer>
  );
};

export default CurrentWeather;
