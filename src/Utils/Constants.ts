import WeatherMapSvg from '../Assets/map-weather.svg';
import StarsSvg from '../Assets/stars.svg';

export const BASE_URL = "https://weather-abra.herokuapp.com/api";
export const WEATHER_BASE_URL = "http://dataservice.accuweather.com";

// -------- Screen Size ---------
export const DESKTOP_SIZE = "1920px";
export const TABLET_SIZE = "1280px";
export const CHANGE_POINT_SIZE = "1207px";
export const MOBILE_SIZE = "760px";
// Use media query
export const USE_MEDIA_QUERY = "(min-width: 1207px)";

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

export const LOGOUT_VALIDATION = {
    title: "Log out",
    p: "You about to log out from WeatherApp. Are you sure you want to logout?",
    primaryButton: "Yes, log out",
    secondaryButton: "I want to stay",
}

// Favorites
export const FAV_REMOVED_ALERT = ' has removed from favorites';
export const FAV_ADDED_ALERT = ' has added from favorites';
// Temp symbol
export const TEMP_SYMBOL = "\u{00B0}";

