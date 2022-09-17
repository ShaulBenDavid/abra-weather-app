import getDates from "../../../Utils/getDates";
// Types
import { ChartItemProps } from "./types";
// Styles
import {
  StyledChartItemContainer,
  StyledChartItemTime,
  StyledChartItemDay,
  StyledChartItemDate,
  StyledDayIcon,
  StyledNightIcon,
} from "./style";

const ChartItem: React.FC<ChartItemProps> = ({ date }) => {
  // Current date
  const { getShortDay } = getDates();
  const currentDate = new Date(0);
  currentDate.setUTCSeconds(date);

  return (
    <StyledChartItemContainer>
      <StyledChartItemTime>
        <StyledChartItemDay>
          {getShortDay(currentDate.getDay())}
        </StyledChartItemDay>
        <StyledChartItemDate>
          {currentDate.getDate() + "." + currentDate.getMonth()}
        </StyledChartItemDate>
        <StyledDayIcon />
      </StyledChartItemTime>
      <StyledNightIcon />
    </StyledChartItemContainer>
  );
};

export default ChartItem;
