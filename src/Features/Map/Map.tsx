import { memo } from "react";
import { GoogleMap, useJsApiLoader, Marker, OverlayView } from "@react-google-maps/api";

// Types
import { MapProps } from "./types";
import MapMarker from "./Components/MapMarker";
// Styles

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 40.730610,
  lng: -73.935242,
};


const Map: React.FC<MapProps> = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAX_C5c9R2FUJQJUyCZ0TLm35RX7jMXN2E",
  });


  return isLoaded ? (
    <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} visible={true}/>
      <OverlayView mapPaneName="markerLayer" position={center}>
        {/* Marker */}
        <MapMarker />
      </OverlayView>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
