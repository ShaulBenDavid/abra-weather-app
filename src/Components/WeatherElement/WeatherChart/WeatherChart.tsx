import ReactApexChart from "react-apexcharts";
import useApexChart from "./Services/useApexChart";
// Styles
import { StyledChartTitle, StyledChartContainer } from "./style";

const WeatherChart = () => {
  // Chart service
  const { chartData } = useApexChart();
  const { options, series } = chartData;
  return (
    <>
      <StyledChartTitle>5-days forcast</StyledChartTitle>
      <StyledChartContainer>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={360}
          style={{width: '100%'}}
        />
      </StyledChartContainer>
    </>
  );
};

export default WeatherChart;
