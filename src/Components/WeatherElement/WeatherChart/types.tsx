import { FetchingWeatherProps } from "../../../Pages/Home/types";
// Types
import { CHART_ITEM_WIDTH, CHART_ITEM_WIDTH_MOBILE } from "../ChartItem/types";

export interface WeatherChartProps {
    data: FetchingWeatherProps[];
}

// Chart wi
export const CHART_DESKTOP_WIDTH = `calc(100% - 100px - ${CHART_ITEM_WIDTH})`;
export const CHART_MOBILE_WIDTH = `calc(100%  - ${CHART_ITEM_WIDTH_MOBILE})`;