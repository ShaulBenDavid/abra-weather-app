import { TEMP_SYMBOL } from "../../../../Utils/Constants";
import useCelcius from "../../../../Utils/useCelsius";


const useApexChart = (maxTemps: number[], minTemps: number[]) => {
  // Temp convert
  const { tempConverter } = useCelcius();

  // --- chart Data / Settings ---
  const chartData = {
    series: [
      {
        name: "High",
        data: maxTemps.map((temp) => tempConverter(temp)),
      },
      {
        name: "Low",
        data: minTemps.map((temp) => tempConverter(temp)),
      },
    ],
    options: {
      colors: ["#fff"],
      chart: {
        height: 350,
        width: "100%",
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -10,
        offsetX: 0,
        formatter: function (val: number) {
          return val + TEMP_SYMBOL;
        },
        style: {
          fontSize: "24px",
          fontWeight: 500,
          colors: ["#fff"],
        },
        background: {
          enabled: false,
        },
      },
      states: {
        hover: {
          type: "lighten",
          value: 0.15,
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      markers: {
        size: 4,
      },
      xaxis: {
        categories: ["day1", "day2", "day3", "day4", "day5"],
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        padding: {
          left: 0,
          right: 0
         },
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    },
  };

  return { chartData } as const;
};
export default useApexChart;
