import SunCloud from "../../../Assets/WeatherIcons/sun-cloud.svg";
// Types
import { CurrentWeatherProps } from "./types";
// Styles
import * as S from "./style";

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {

// Current date
  const currentDate = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuerday'];
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  console.log(currentDate.getDay());

  
  return (
    <S.CurrentWeatherContainer>
      <S.PlaceTitle>tel aviv - jaffa</S.PlaceTitle>
      <S.CurrentTempContainer>
        <S.TempIcon src={SunCloud} alt={SunCloud} />
        <S.TempNumber>
          <span>{data?.Temperature?.Maximum.Value}</span>
          <span>- {data?.Temperature?.Minimum.Value}</span>
        </S.TempNumber>
      </S.CurrentTempContainer>
      <S.WeatherCondition>Sun & Cloudy</S.WeatherCondition>
      <S.TimeZone>{days[currentDate.getDay()]}, {currentDate.getDate()}-{month[currentDate.getMonth()]}-{currentDate.getFullYear()}, 10:00am</S.TimeZone>
    </S.CurrentWeatherContainer>
  );
};

export default CurrentWeather;
