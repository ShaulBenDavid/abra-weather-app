import { memo } from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";

import GetGeoLocation from "../../Services/Weather/GetGeoLocation";
import { toggleMapIsOpen } from "../../Redux/ToggleSwitch/ToggleSwitch.redux";
import { useAppDispatch } from "../../Redux/hooks";
import useMediaQuery from "../../Hooks/useMediaQuery";
// Components
import MapMarker from "./Components/MapMarker";
import { IconLayout } from "../../Components/Ui/IconsComponent";
// Types
import { MapProps } from "./types";
import { USE_MEDIA_QUERY } from "../../Utils/Constants";
// Styles
import { ContainerStyle, StyledMapWrapper, StyledlayoutButton } from "./style";

const Map: React.FC<MapProps> = ({ data, placeKey }) => {
  const { weatherDayIcon, maxWeather, minWeather } = data;

  const dispatch = useAppDispatch();
  // Media query
  const matches = useMediaQuery(USE_MEDIA_QUERY);
  // Fetching map
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAX_C5c9R2FUJQJUyCZ0TLm35RX7jMXN2E",
  });

  // Get lat and lng
  const geoLocation = GetGeoLocation(placeKey);

  // Handle toggle Map
  const handleToggleMap = () => dispatch(toggleMapIsOpen());

  return isLoaded && geoLocation ? (
    <StyledMapWrapper>
      <GoogleMap
        mapContainerStyle={ContainerStyle}
        center={geoLocation.data}
        zoom={10}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <OverlayView mapPaneName="markerLayer" position={geoLocation.data}>
          {/* --- Marker --- */}
          <MapMarker
            iconNum={weatherDayIcon}
            maxTemp={maxWeather}
            minTemp={minWeather}
          />
        </OverlayView>
      </GoogleMap>
      {/* -- Toggle map button for mobile use only -- */}
      {!matches && (
        <StyledlayoutButton variant="white" onClick={handleToggleMap}>
          <IconLayout /> Layout
        </StyledlayoutButton>
      )}
    </StyledMapWrapper>
  ) : (
    <></>
  );
};

export default memo(Map);
