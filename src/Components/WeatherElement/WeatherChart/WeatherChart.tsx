import { useEffect, useState } from "react";

import ReactApexChart from "react-apexcharts";
import useApexChart from "./Services/useApexChart";
// Components
import ChartItem from "../ChartItem";
// Types
import { WeatherChartProps } from "./types";
// Styles
import { StyledChartTitle, StyledChartContainer, StyledApexChart } from "./style";
import { CHART_ITEM_WIDTH } from "../ChartItem/types";

const WeatherChart: React.FC<WeatherChartProps> = ({ data }) => {
  const [highTemps, setHighTemps] = useState<number[]>([]);
  const [lowTemps, setLowTemps] = useState<number[]>([]);
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
          height={350}
          style={{ width: `calc(100% - 100px - ${CHART_ITEM_WIDTH})` }}
        />
      </StyledChartContainer>
    </>
  );
};

export default WeatherChart;
