import WeatherMap from "../../Assets/map-weather.svg";
// Styles
import * as S from "./style";

const EmptyHome = () => {
  return (
    <S.EmptyHomeContainer>
      <S.WeatherMapImg src={WeatherMap} alt="Weather map" />
      <S.EmptyHomeTitle>Set up location</S.EmptyHomeTitle>
      <S.EmptyHomeP>
        To identify your location please allow WeatherApp to know your location.
      </S.EmptyHomeP>
    </S.EmptyHomeContainer>
  );
};

export default EmptyHome;
