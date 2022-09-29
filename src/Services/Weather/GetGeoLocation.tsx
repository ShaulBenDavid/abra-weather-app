import {
  COORDS_SEARCH_END_POINT_URL,
  GEO_LOCATION_END_POINT_URL,
} from "../../Utils/Constants";
import { weatherFetchApi } from "../Api/WeatherApi";
// Types
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export type GeoLocationFetchProps = {
  lat: number;
  lng: number;
};

// 5 day type
type ParseGeoLocationFetchProps = {
  GeoPosition: {
    Latitude: number;
    Longitude: number;
  };
};

// ------- Get geo location --------
const GetGeoLocation = (placeKey: number) => {
  // Parse data
  const parseCoordsData = (
    res: ParseGeoLocationFetchProps
  ): GeoLocationFetchProps => {
    return {
      lat: res.GeoPosition.Latitude,
      lng: res.GeoPosition.Longitude,
    };
  };

  // ----- Query fetching coords by the current choice -----
  const getCoords: UseQueryResult<GeoLocationFetchProps, Error> = useQuery<
    GeoLocationFetchProps,
    Error
  >(
    ["GeoLocation", placeKey],
    async () => {
      const res = await weatherFetchApi(
        `${GEO_LOCATION_END_POINT_URL}${placeKey}`
      );
      return parseCoordsData(res?.data);
    },
    {
      enabled: !!placeKey,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  return { coordsData: getCoords.data };
};

export default GetGeoLocation;
