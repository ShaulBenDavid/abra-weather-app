import { useEffect, useState } from "react";

import useApexChart from "./Services/useApexChart";
import useMediaQuery from "../../../Hooks/useMediaQuery";
// Components
import ChartItem from "../ChartItem";
// Types
import { WeatherChartProps, CHART_DESKTOP_WIDTH, CHART_MOBILE_WIDTH } from "./types";
import { USE_MEDIA_QUERY } from "../../../Utils/Constants";
// Styles
import { StyledChartTitle, StyledChartContainer, StyledApexChart } from "./style";

const WeatherChart: React.FC<WeatherChartProps> = ({ data }) => {
  const [highTemps, setHighTemps] = useState<number[]>([]);
  const [lowTemps, setLowTemps] = useState<number[]>([]);
  // Use media query 
  const matches = useMediaQuery(USE_MEDIA_QUERY)

  // Chart service
  const { chartData } = useApexChart(highTemps, lowTemps);
  const { options, series } = chartData;

  // Making array of max and min temps
  useEffect(() => {
    let newHighTemp: number[] = [];
    let newLowTemp: number[] = [];
    data.forEach((item) => {
      newHighTemp.push(item.maxWeather);
      newLowTemp.push(item.minWeather);
    });
    setHighTemps(newHighTemp);
    setLowTemps(newLowTemp);
  }, [data]);


  return (
    <>
      <StyledChartTitle>5-days forcast</StyledChartTitle>
      <StyledChartContainer>
        {/* Chart items */}
        {data.map((item) => 
          <ChartItem key={item.date} date={item.date} />
        )}
        {/* The chart lines */}
        <StyledApexChart
          options={options}
          series={series}
          type="line"
          height={matches ? 350 : 190}
          style={{ width: matches ? CHART_DESKTOP_WIDTH : CHART_MOBILE_WIDTH}}
        />
      </StyledChartContainer>
    </>
  );
};

export default WeatherChart;
