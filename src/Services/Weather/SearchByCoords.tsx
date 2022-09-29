
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { weatherFetchApi } from "../Api/WeatherApi";
// Types
import { COORDS_SEARCH_END_POINT_URL } from "../../Utils/Constants";

// --- Place by coords ---
type ParsePlaceByCoordseProps = {
    Country: {
      LocalizedName: string;
    };
    LocalizedName: string;
    Key: number;
  };
  
  type GetPlaceByCoordsProps = {
    country: string;
    city: string;
    key: number;
  };

const SearchByCoords = (coords: string) => {

    //Parse data
    const parseData = (data: ParsePlaceByCoordseProps): GetPlaceByCoordsProps => {
        return {
            country: data.Country.LocalizedName,
            city: data.LocalizedName,
            key: data.Key,
        }
    }

      // ---- Query fetching weather by your location coords ----
  const getPlaceByCoords: UseQueryResult<GetPlaceByCoordsProps, Error> = useQuery<GetPlaceByCoordsProps, Error>(
    ["GetPlaceByCoords", coords],
    async () => {
      const res = await weatherFetchApi(COORDS_SEARCH_END_POINT_URL, {
          q: coords
        }
      )
        return parseData(res?.data);
    }
  )
    
    return { getPlaceByCoords };
}

export default SearchByCoords;