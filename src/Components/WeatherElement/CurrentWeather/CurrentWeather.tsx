// import SunCloud from '../../../Assets/WeatherIcons/sun-cloud.svg';
import SunCloud from "../../../Assets/WeatherIcons/sun-cloud.svg";
// Styles
import * as S from "./style";

const CurrentWeather = () => {
  return (
    <S.CurrentWeatherContainer>
      <S.PlaceTitle>tel aviv - jaffa</S.PlaceTitle>
      <S.CurrentTempContainer>
        <S.TempIcon src={SunCloud} alt={SunCloud} />
        <S.TempNumber>
            <span>29</span>
            <span>- 50</span>
        </S.TempNumber>
      </S.CurrentTempContainer>
      <S.WeatherCondition>Sun & Cloudy</S.WeatherCondition>
      <S.TimeZone>Monday, 12-Jun-2021, 10:00am</S.TimeZone>
    </S.CurrentWeatherContainer>
  );
};

export default CurrentWeather;
