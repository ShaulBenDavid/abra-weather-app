import SunCloud from "../../../Assets/WeatherIcons/sun-cloud.svg";
// Types
import { CurrentWeatherProps } from "./types";
// Styles
import * as S from "./style";

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city, data }) => {
  // Current date
  const currentDate = new Date();
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satuerday",
  ];
  const month: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Current hour
  function formatAMPM(date: any) {
    let hours = date.getHours();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var strTime = hours + ":00" + ampm;
    return strTime;
  }

  return (
    <S.CurrentWeatherContainer>
      <S.PlaceTitle>{city}</S.PlaceTitle>
      <S.CurrentTempContainer>
        <S.TempIcon src={SunCloud} alt={SunCloud} />
        <S.TempNumber>
          <span>{data.maxWeather}</span>
          <span>- {data.minWeather}</span>
        </S.TempNumber>
      </S.CurrentTempContainer>
      <S.WeatherCondition>{data.weatherCondition}</S.WeatherCondition>
      <S.TimeZone>
        {days[currentDate.getDay()]}, {currentDate.getDate()}-
        {month[currentDate.getMonth()]}-{currentDate.getFullYear()},{" "}
        {formatAMPM(currentDate)}
      </S.TimeZone>
    </S.CurrentWeatherContainer>
  );
};

export default CurrentWeather;
