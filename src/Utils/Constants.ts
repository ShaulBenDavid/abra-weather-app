import WeatherMapSvg from '../Assets/map-weather.svg';
import StarsSvg from '../Assets/stars.svg';
import LogoSvg from '../Assets/Icons/appLogo.svg';

// ------ Base api url -------
export const BASE_URL = "https://weather-abra.herokuapp.com/api";
export const WEATHER_BASE_URL = "http://dataservice.accuweather.com";

// ------ End point url ------
export const FAVORITES_END_POINT_URL = "/favorites/";
export const LOGIN_END_POINT_URL = "/auth/login/";
export const VERIFY_AUTH_END_POINT_URL = "/auth/verify-token/";

export const AUTOCOMPLETE_END_POINT_URL = "locations/v1/cities/autocomplete";
export const HOURLY_WEATHER_END_POINT_URL = "/forecasts/v1/hourly/12hour/";
export const DAILY_WEATHER_END_POINT_URL = "/forecasts/v1/daily/5day/";
export const GEO_LOCATION_END_POINT_URL = "/locations/v1/";
export const COORDS_SEARCH_END_POINT_URL = "/locations/v1/cities/geoposition/search";

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
// Empty home details - monile
export const HOME_EMPTY_DETAILS_MOBILE = {
    src: LogoSvg,
    title: "Set up location",
    p: "We probably could not find your current location. Please turn on the location by phone or select a city in the search button"
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

