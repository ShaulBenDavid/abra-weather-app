import SunCloudIcon from "../../../Assets/WeatherIcons/sun-cloud.svg";
// Styles
import {
  StyledHourlyItemWrapper,
  StyledWeatherTime,
  StyledTemp,
  StyledICondition,
  StyledSpeedIcon,
  StyledSpeedP,
  StyledSpeedContainer,
} from "./style";

const HourlyWheatherItem = () => {
  return (
    <StyledHourlyItemWrapper>
      <StyledWeatherTime>10:00</StyledWeatherTime>
      <StyledTemp>16</StyledTemp>
      <StyledICondition src={SunCloudIcon} alt={SunCloudIcon} />
      <StyledSpeedContainer>
        <StyledSpeedIcon />
        <StyledSpeedP>21.4 km/h</StyledSpeedP>
      </StyledSpeedContainer>
    </StyledHourlyItemWrapper>
  );
};

export default HourlyWheatherItem;
