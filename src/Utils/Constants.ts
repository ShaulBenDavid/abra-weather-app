import WeatherMapSvg from '../Assets/map-weather.svg';
import StarsSvg from '../Assets/stars.svg';

export const BASE_URL = "https://weather-abra.herokuapp.com/api";
export const WEATHER_BASE_URL = "http://dataservice.accuweather.com";

// Empty home details
export const HOME_EMPTY_DETAILS = {
    src: WeatherMapSvg,
    title: "Set up location",
    p: "To identify your location please allow WeatherApp to know your location."
}

// Empty favorites details
export const FAVORITES_EMPTY_DETAILS = {
    src: StarsSvg,
    title: "My favorites",
    p: "Favorites list is empty."
}