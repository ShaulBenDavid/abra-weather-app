import { FetchingWeatherProps } from "../../../Pages/Home/types";

export interface CurrentWeatherProps {
    data: FetchingWeatherProps;
    city: string;
}