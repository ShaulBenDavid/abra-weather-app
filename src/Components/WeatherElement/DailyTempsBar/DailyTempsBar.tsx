// Components
import DailyTemp from "../DailyTemp/DailyTemp";
// Styles
import { StyledWeatherBar } from "./style";

const DailyTempsBar = () => {
  return (
    <StyledWeatherBar>
      <DailyTemp />
      <DailyTemp />
      <DailyTemp />
      <DailyTemp />
    </StyledWeatherBar>
  );
};

export default DailyTempsBar;
