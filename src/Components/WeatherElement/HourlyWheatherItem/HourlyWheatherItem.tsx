import SunCloudIcon from "../../../Assets/WeatherIcons/sun-cloud.svg";
import { TEMP_SYMBOL } from "../../../Utils/Constants";
import useWeatherIcon from "../../../Utils/useWeatherIcon";
// Types
import { HourlyWeatherItemProps } from "./types";
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

const HourlyWheatherItem: React.FC<HourlyWeatherItemProps> = ({ data }) => {
  const { weatherDayIcon, windSpeed, date, tempByHour } = data;
  // Weather icon
  const weatherIcon: string = useWeatherIcon(weatherDayIcon);

  // Hour
  const newDate: Date = new Date(0);
  newDate.setUTCSeconds(date);
  // Current hour
  function formatAMPM(num: number) {
    let hours = num;
    hours = hours % 12;
    hours = hours ? hours : 12;
    var strTime = hours + ":00";
    return strTime;
  }

  return (
    <StyledHourlyItemWrapper>
      <StyledWeatherTime>{formatAMPM(newDate.getHours())}</StyledWeatherTime>
      <StyledTemp>
        {tempByHour}
        {TEMP_SYMBOL}
      </StyledTemp>
      <StyledICondition src={weatherIcon} alt={SunCloudIcon} />
      <StyledSpeedContainer>
        <StyledSpeedIcon />
        <StyledSpeedP>{windSpeed} km/h</StyledSpeedP>
      </StyledSpeedContainer>
    </StyledHourlyItemWrapper>
  );
};

export default HourlyWheatherItem;
