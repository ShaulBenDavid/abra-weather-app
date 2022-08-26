// Weather by data props
export type HourlyDataProps = {
    date: number;
    tempByHour: number;
    weatherDayIcon: number;
    windSpeed: number;
}

export interface HourlyWeatherProps {
    dataByHour: HourlyDataProps[];
}