// Components
import DailyTemp from "../DailyTemp/DailyTemp";
// Types
import { DailtyTempBarProps } from "./types";
// Styles
import { StyledWeatherBar } from "./style";

const DailyTempsBar: React.FC<DailtyTempBarProps> = ({ data }) => {
  return (
    <StyledWeatherBar>
      {data
        .filter((_, idx) => idx > 0)
        .map((day) => {
          return <DailyTemp key={day.date} dayData={day} />;
        })}
    </StyledWeatherBar>
  );
};

export default DailyTempsBar;
