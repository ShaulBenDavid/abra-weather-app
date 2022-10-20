import { useMemo } from "react";
// Types
import { FavoritesProps } from "../Pages/Favorites/types";

const useFilteredFavorites = (data: FavoritesProps[] | undefined, searchValue: string) => {
  // ------ Filtered fav list by search ------
  const filteredFav = useMemo(() => {
    return data?.filter((fav) => {
      return fav.city.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [data, searchValue]);

  return { filteredFav } as const;
};

export default useFilteredFavorites;
