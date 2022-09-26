import { memo } from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";

import GetGeoLocation from "../../Services/Weather/GetGeoLocation";
// Types
import { MapProps } from "./types";
import MapMarker from "./Components/MapMarker";
// Styles
import { containerStyle } from "./style";

const Map: React.FC<MapProps> = ({ data, placeKey }) => {
  // Fetching map
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAX_C5c9R2FUJQJUyCZ0TLm35RX7jMXN2E",
  });

  const geoLocation: any = GetGeoLocation(placeKey);

  return isLoaded && geoLocation ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={geoLocation.data}
      zoom={10}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <OverlayView mapPaneName="markerLayer" position={geoLocation.data}>
        {/* Marker */}
        <MapMarker
          iconNum={data.weatherDayIcon}
          maxTemp={data.maxWeather}
          minTemp={data.minWeather}
        />
      </OverlayView>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
