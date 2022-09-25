import { memo, useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// Types
import { MapProps } from "./types";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -2.745,
  lng: -38.523,
};

const center2 = {
  lat: -3.74,
  lng: -8.523,
};

const Map: React.FC<MapProps> = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAX_C5c9R2FUJQJUyCZ0TLm35RX7jMXN2E",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map | null) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map?.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map | null) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
          onLoad={onLoad}
          onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} visible={false} />
          <Marker position={center2} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
