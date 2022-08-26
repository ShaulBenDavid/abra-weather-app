import SunIcon from "../../../Assets/WeatherIcons/sun.svg";
import { TEMP_SYMBOL } from "../../../Utils/Constants";
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
        <StyledDayTemp>5{TEMP_SYMBOL}</StyledDayTemp>
        <StyledNightTemp>- 0</StyledNightTemp>
      </StyledTemp>
    </StyledDailyTempWrapper>
  );
};

export default DailyTemp;
