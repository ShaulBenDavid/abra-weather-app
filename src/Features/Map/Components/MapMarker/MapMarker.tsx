import useCelcius from "../../../../Utils/useCelsius";
import useWeatherIcon from "../../../../Utils/useWeatherIcon";
// Componets
import Marker from "../../../../Components/Ui/Marker";
// Types
import { TEMP_SYMBOL } from "../../../../Utils/Constants";
import { MapMarkerProps } from "./types";
// Styles
import { StyledMapMarker, StyledMarkerIcon, StyledIconWrapper, StyledTempNumber } from "./style";

const MapMarker: React.FC<MapMarkerProps> = ({ iconNum, maxTemp, minTemp }) => {
  // Weather icon
  const weatherIcon: string = useWeatherIcon(iconNum);

  // Weather convert
  const { tempConverter } = useCelcius();

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
        <StyledTempNumber>
          {`${tempConverter(minTemp)}${TEMP_SYMBOL} - ${tempConverter(
            maxTemp
          )}${TEMP_SYMBOL}`}
        </StyledTempNumber>
      </StyledMapMarker>
    </Marker>
  );
};

export default MapMarker;
