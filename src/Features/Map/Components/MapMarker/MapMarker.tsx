import useWeatherIcon from "../../../../Utils/useWeatherIcon";
// Componets
import Marker from "../../../../Components/Ui/Marker";
// Types
import { TEMP_SYMBOL } from "../../../../Utils/Constants";
// Styles
import { StyledMapMarker, StyledMarkerIcon, StyledIconWrapper } from "./style";

const MapMarker = () => {
  // Weather icon
    const weatherIcon: string = useWeatherIcon(20);
    
  return (
    <Marker variant="map">
      <StyledMapMarker>
        <StyledIconWrapper>
          <StyledMarkerIcon
            src={weatherIcon}
            alt="weather icon"
            style={{ width: "30px" }}
          />
        </StyledIconWrapper>
        <h2>
          20{TEMP_SYMBOL} - 30{TEMP_SYMBOL}
        </h2>
      </StyledMapMarker>
    </Marker>
  );
};

export default MapMarker;
