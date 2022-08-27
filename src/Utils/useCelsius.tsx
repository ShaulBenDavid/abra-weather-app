import { useAppSelector } from "../Redux/hooks";
import { selectTempMode } from "../Redux/TempMode/TempMode.redux";


// Convert the temp celcius if the button toggled
const useCelcius = () => {
    const tempMode = useAppSelector(selectTempMode);
    
    const tempConverter = (fahrenheit: number) => {
        if (tempMode) return fahrenheit;
      return ((fahrenheit - 32) * 5 / 9).toFixed(0);
    }

    return { tempConverter };
}
  
export default useCelcius;