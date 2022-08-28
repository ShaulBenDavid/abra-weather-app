// Icons
import SunIcon from '../Assets/WeatherIcons/sun.svg';
import SunCloudIcon from '../Assets/WeatherIcons/sun-cloud.svg';
import CloudyIcon from '../Assets/WeatherIcons/cloud.svg';
import RainIcon from '../Assets/WeatherIcons/rain.svg';
import StromIcon from '../Assets/WeatherIcons/storm.svg';
import SnowIcon from '../Assets/WeatherIcons/snow.svg';
import WindyIcon from '../Assets/WeatherIcons/wind.svg'

// Getting the current weather icon by the icon key
const useWeatherIcon = (num: number) => {

    // Sun
    if ((1 <= num && num <= 3) || num === 5 || num === 30) {
        return SunIcon;
        // Sun and cloud 
    } else if (6 === num || num === 20 || num === 21 || num === 4 || num === 43 || (35 <= num && num <= 38)) {
        return SunCloudIcon;
        // Cloudy
    } else if ((6 <= num && num >= 11) || num === 19 || num === 31) {
        return CloudyIcon;
        // Raining
    } else if ((12 <= num && num <= 14) || num === 18 || num === 39 || num === 40) {
        return RainIcon;
        // Strom
    } else if ((15 <= num && num <= 17) || num === 41 || num === 42) {
        return StromIcon;
        // Snowing
    } else if ((22 <= num && num <= 29) || num === 44) {
        return SnowIcon;
        // Windy
    } else if (num === 32) {
        return WindyIcon;
    }
        
    return SunIcon;
}


export default useWeatherIcon;
