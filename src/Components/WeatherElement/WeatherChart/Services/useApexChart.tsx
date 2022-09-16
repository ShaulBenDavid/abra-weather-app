import { TEMP_SYMBOL } from "../../../../Utils/Constants";


const useApexChart = () => {

    // chart Data
    const chartData: any = {
        series: [
          {
            name: "High",
            data: [10, 41, 35, 51, 49],
          },
          {
            name: "Low",
            data: [1, 14, 25, 5, 29],
          },
        ],
        options: {
          colors: ["#fff"],
          chart: {
            height: 350,
            width: '100%',
            type: "line",
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: true,
            offsetY: -10,
            formatter: function (val: number) {
              return val + TEMP_SYMBOL;
            },
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              colors: ["#fff"],
            },
            background: {
              enabled: false,
            },
          },
          states: {
            hover: {
              type: 'lighten',
              value: 0.15,
            }
          },
          legend: {
            show: false
          },
          tooltip: {
            enabled: false
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
            position: 'top',
            labels: {
              show: false
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
}
export default useApexChart;