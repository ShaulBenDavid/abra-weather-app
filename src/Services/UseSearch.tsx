import {
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import useDebounce from "../Hooks/useDebounde";
import { weatherFetchApi } from "./Api/WeatherApi";
// Types
import { SearchOptionsProps } from "../Features/Search/types";

type ParseSearchDateProps = {
  Country: {
    LocalizedName: string;
  };
  LocalizedName: string;
  Key: number;
}
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
  
  // Search cache results
  const client = useQueryClient();
  const searchResults = client.getQueryData(["City search", searchTerm], {
    exact: true,
  });
  // debounce
  const debouncedSearchTerm = useDebounce(searchTerm, 1500);

  // Autocomplate query
  const { data, isLoading }: UseQueryResult<SearchOptionsProps[], Error> =
    useQuery<SearchOptionsProps[], Error>(
      ["City search", searchResults ? searchTerm : debouncedSearchTerm],
      async () => {
        const res = await weatherFetchApi(
          "locations/v1/cities/autocomplete",
          searchResults ? { q: searchTerm } : { q: debouncedSearchTerm }
        );
        return parseData(res?.data);
      },
      {
        enabled: !!searchTerm,
        cacheTime: 15 * (60 * 1000),
        staleTime: Infinity,
      }
    );
  return { data, debouncedSearchTerm, isLoading };
};
