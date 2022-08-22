import SunIcon from "../../../Assets/WeatherIcons/sun.svg";
// Styles
import {
  StyledDailyTempWrapper,
  StyledDayAndCondition,
  StyledIconCondition,
  StyledTemp,
  StyledNightTemp,
  StyledDayTemp,
} from "./style";

const DailyTemp = () => {
  return (
    <StyledDailyTempWrapper>
      <StyledDayAndCondition>Tue - Clear</StyledDayAndCondition>
      <StyledIconCondition src={SunIcon} alt={SunIcon} />
      <StyledTemp>
        <StyledDayTemp>5</StyledDayTemp>
        <StyledNightTemp>- 0</StyledNightTemp>
      </StyledTemp>
    </StyledDailyTempWrapper>
  );
};

export default DailyTemp;
