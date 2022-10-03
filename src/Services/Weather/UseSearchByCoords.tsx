import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { weatherFetchApi } from "../Api/WeatherApi";
// Types
import { COORDS_SEARCH_END_POINT_URL } from "../../Utils/Constants";
import { useState } from "react";
import SetNewPlace from "./SetNewPlace";

// --- Place by coords ---
type ParsePlaceByCoordseProps = {
  Country: {
    LocalizedName: string;
  };
  LocalizedName: string;
  Key: number;
};

type GetPlaceByCoordsProps = {
  city: string;
  country: string;
  placeKey: number;
};

const useSearchByCoords = () => {
  // States
  const [coords, setCoords] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // ---- Set new place service ----
  const { setCurrentPlace } = SetNewPlace();

  //Parse data
  const parseData = (data: ParsePlaceByCoordseProps): GetPlaceByCoordsProps => {
    return {
      country: data.Country.LocalizedName,
      city: data.LocalizedName,
      placeKey: Number(data.Key),
    };
  };

  // ---- Query fetching weather by your location coords ----
  const getPlaceByCoords: UseQueryResult<GetPlaceByCoordsProps, Error> =
    useQuery<GetPlaceByCoordsProps, Error>(
      ["GetPlaceByCoords", coords],
      async () => {
        const res = await weatherFetchApi(COORDS_SEARCH_END_POINT_URL, {
          q: coords,
        });
        return parseData(res?.data);
      },
      {
        enabled: !!coords,
        staleTime: Infinity,
        cacheTime: Infinity,
        onSuccess: (res) => {
          setCurrentPlace(res);
          setLoading(false);
        },
      }
    );

  // ---- Get geo location ----
  const handleSearchByCoords = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };
  const showPosition = (position: GeolocationPosition) => {
    const newPosition =
      position.coords.latitude + "," + position.coords.longitude;
    setCoords(newPosition);
  };

  return { getPlaceByCoords, handleSearchByCoords, loading };
};

export default useSearchByCoords;
