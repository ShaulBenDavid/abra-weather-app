import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useAppSelector } from "../Redux/hooks";
import { selectUser } from "../Redux/User/User";
import { AbraGetApi } from "./Api/AbraApi";
// Types
import { FavoritesProps } from "../Pages/Favorites/types";


const UseFavorites = () => {
    const currentUser = useAppSelector(selectUser);
  // ---- Query getting data ----
  const { isLoading, data }: UseQueryResult<FavoritesProps[], Error> = useQuery<
    FavoritesProps[],
    Error
  >(
    ["Favorites"],
    async () => {
      const res = await AbraGetApi("/favorites/", currentUser?.access_token);
      return res.data.results;
    },
    {
      cacheTime: 20 * (60 * 1000),
      staleTime: 20 * (60 * 1000),
    }
  );
    
    return { isLoading, data };

}

export default UseFavorites;