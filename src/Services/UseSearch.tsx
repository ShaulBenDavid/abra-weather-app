import {
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { weatherFetchApi } from "./Api/WeatherApi";
import { AUTOCOMPLETE_END_POINT_URL } from "../Utils/Constants";
// Types
import { SearchOptionsProps } from "../Features/Search/types";

type ParseSearchDateProps = {
  Country: {
    LocalizedName: string;
  };
  LocalizedName: string;
  Key: number;
};
// -------- UseAutocomplete ----------

export const UseAutocomplete = (searchTerm: string) => {
  // Parse data
  const parseData = (data: ParseSearchDateProps[]) => {
    const optionArray = data;
    return optionArray?.map((option: ParseSearchDateProps) => {
      const newOption = {
        country: option?.Country.LocalizedName,
        city: option?.LocalizedName,
        key: option?.Key,
      };
      return newOption;
    });
  };

  // Autocomplate query
  const { data, isLoading }: UseQueryResult<SearchOptionsProps[], Error> =
    useQuery<SearchOptionsProps[], Error>(
      ["City search", searchTerm],
      async () => {
        const res = await weatherFetchApi(AUTOCOMPLETE_END_POINT_URL, {
          q: searchTerm,
        });
        return parseData(res?.data);
      },
      {
        enabled: !!searchTerm,
        cacheTime: 15 * (60 * 1000),
        staleTime: Infinity,
      }
    );
  return { data, isLoading };
};
